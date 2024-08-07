<template>

<div class="diagram custom-block">
    <div ref="wrap" :style="gridStyle" :class="{fullscreen, 'show-grid': props.grid && (fullscreen || zoom > 1)}" class="panzoom-wrap">
        <slot />
    </div>

    <div :class="{fullscreen}" class="custom-block--footer">
        <p class="custom-block--info">
            zoom: <i><code>alt+scroll</code></i>
        </p>
        <div class="custom-block--zoom">
            <input
            type="range"
            :value="zoom"
            :min="1"
            :max="props.maxZoom"
            :step="zoomStep"
            @input="zoomAbs($event.target.value)">
        </div>
        <button @click="zoomFit" aria-label="Zoom fit" class="VPBadge info">&#x26F6;</button>
        <a v-if="editUrl !== null" :href="editUrl" target="blank" rel="noopener" aria-label="Edit" style="text-decoration: none;" class="VPBadge info">&#x270E;</a>
        <button @click="enterFullscreen" aria-label="Fullscreen" class="VPBadge info">&#x1F5D6;</button>
    </div>
</div>

</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import panZoom from 'panzoom'

const props = defineProps({
    selector: {
        type: String,
        default: "img",
    },
    maxZoom: {
        type: Number,
        default: 5.0,
    },
    grid: {
        type: Boolean,
        default: true,
    },
})

const zoomStep = (props.maxZoom - 1) / 32
const wrap = ref(null)
const zoom = ref(1)
const editUrl = ref(null)
const fullscreen = ref(false)
let instance = null
const gridStyle = ref({
    '--x': 0,
    '--y': 0,
    '--scale': 1,
})

function zoomAbs(value) {
    instance?.zoomAbs(0, 0, value)
}

function zoomFit() {
    instance?.smoothZoomAbs(0, 0, 1)
}

function enterFullscreen() {
    if (fullscreen.value) {
        document.exitFullscreen()

        return
    }

    wrap.value.parentNode.requestFullscreen()
}

onMounted(() => {
    if (wrap.value.children?.length !== 1)
        return

    const target = wrap.value.querySelector(props.selector)

    if (target.tagName === 'IMG' && target.src.endsWith(".drawio.svg")) {
        editUrl.value = `https://app.diagrams.net/#U${target.src}`
    }

    instance = panZoom(target, {
        minZoom: 1,
        maxZoom: props.maxZoom,
        bounds: true,
        boundsPadding: 1.0,
        autocenter: true,
        beforeWheel: (event) => !event.altKey && !fullscreen.value,
    })

    setTimeout(() => zoomFit(), 32)

    instance.on('zoom', (event) => {
        const transform = event.getTransform()

        zoom.value = transform.scale
        gridStyle.value = {
            '--x': transform.x,
            '--y': transform.y,
            '--scale': transform.scale,
        }
    })

    instance.on('pan', (event) => {
        const transform = event.getTransform()

        gridStyle.value = {
            '--scale': transform.scale,
            '--x': transform.x,
            '--y': transform.y,
        }
    })

    document.addEventListener('fullscreenchange', () => {
        fullscreen.value = document.fullscreenElement === wrap.value.parentNode

        instance?.zoomAbs(0, 0, 1)
    })
})
</script>

<style scoped>
.diagram.custom-block {
    padding: 0;
    position: relative;

    &:hover .custom-block--footer {
        opacity: 1;
        visibility: visible;
    }

    &:fullscreen {
        background-color: var(--vp-c-bg);
    }

    .panzoom-wrap {
        --x: 0;
        --y: 0;
        --scale: 1;
        --size: calc(var(--scale) * 100px);
        --pattern: transparent 90deg, var(--vp-c-gutter) 0;
        max-height: calc(100vh - 42px);
        overflow: hidden;
        cursor: grab;
        transition: background-image 2s;

        &.fullscreen {
            height: calc(100vh - 42px);
        }

        &:active {
            cursor: grabbing;
        }

        &.show-grid {
            background-image:
                conic-gradient(from 90deg at 2px 2px, var(--pattern)),
                conic-gradient(from 90deg at 1px 1px, var(--pattern));
            background-size: var(--size) var(--size), calc(var(--size) / 5) calc(var(--size) / 5);
            background-position: calc(var(--x) * 1px - 2px) calc(var(--y) * 1px - 2px)
        }
    }

    .custom-block--footer {
        width: 100%;
        padding: .5rem 1rem;
        border-radius: 1rem;
        background-color: var(--vp-c-bg-soft);
        display: flex;
        gap: 8px;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        z-index: 1;
        transition: opacity 256ms;

        &.fullscreen {
            padding: 8px 16px 0 16px;
            position: static;
        }
    }

    .custom-block--info {
        flex: 1 1 auto;
    }

    .custom-block--zoom {
        &::before,
        &::after {
            font-size: 1.5em;
        }
        &::before {
            content: '-' / '';
            padding-right: .2em;
        }
        &::after {
            content: '+' / '';
            padding-left: .2em;
        }

        input[type="range"] {
            accent-color: var(--vp-c-text-3);
            height: 1em;
        }
    }
}

@media (max-width: 768px) {
    .custom-block--info {
        display: none;
    }

    .custom-block--info + * {
        margin-left: auto;
    }
}
</style>
