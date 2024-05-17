<script setup>
import {ref, computed} from "vue";
import Code from "./Code.vue";

const source = ref();
const hover = ref(false);
const fold = ref(false);
const copied = ref(false);
const code = computed(() => source.value?.innerHTML);

function copyCode() {
    try {
        navigator.clipboard.writeText(this.code);
        this.copied = true;
    } catch (err) {
        console.log(err);
    }
    
    setTimeout(() => {
        this.copied = false;
    }, 2000);
}
</script>

<style scoped>
.demo {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  margin-bottom: 1.2em;
  margin-top: 1.2em;
  transition: background-color 0.5s ease;
}

.demo p {
  margin: 0;
}

.demo button {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  font-size: 0.9em;
  font-weight: 600;
  transition: background-color 0.5s ease;
}

.demo button:hover {
  box-shadow: inset 0 0 3px var(--vp-code-color);
  transition: box-shadow 0.2s ease;
}

.demo button:active {
  box-shadow: inset 0 0 5px var(--vp-code-color);
  transition: box-shadow 0.2s ease;
}

.demo button + button {
  margin-left: 6px;
}

.demo-source {
  position: relative;
}

.demo-controls {
  z-index: 1000;
  position: absolute;
  display: flex;
  top: 12px;
  right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.demo-copy-button,
.demo-code-button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-copy-icon,
.demo-copied-icon {
  width: 20px;
  height: 20px;
}

.demo-code-icon,
.demo-code-slash-icon {
  width: 17px;
  height: 17px;
}

.demo-content {
  margin: 20px 20px 18px;
}
</style>

<template>
    <ClientOnly>
        <div class="demo">
            <div class="demo-content" ref="source">
                <slot />
            </div>
            <div v-if="$slots.source" ref="source" style="display:none;">
                <slot name="source" />
            </div>
            <div class="demo-source" @mouseover="hover = true" @mouseleave="hover = false">
                <transition name="fade">
                    <div class="demo-controls" v-show="hover || copied">
                        <button class="demo-copy-button" @click="copyCode">
                            <div class="demo-copied-icon" v-if="copied">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 0 20 20">
                                    <g fill="none">
                                        <path
                                                d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v4.707a5.48 5.48 0 0 0-1-.185V4.5a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.1c.183.358.404.693.657 1H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z"
                                                fill="currentColor">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="demo-copy-icon" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 0 20 20">
                                    <g fill="none">
                                        <path
                                                d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585zM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1z"
                                                fill="currentColor">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                        <button class="demo-code-button" @click="fold = !fold;" v-if="$slots.source">
                            <div class="demo-code-icon" v-if="fold">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 0 512 512">
                                    <path
                                            d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z"
                                            fill="currentColor"></path>
                                    <path
                                            d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z"
                                            fill="currentColor"></path>
                                    <path
                                            d="M208 437a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z"
                                            fill="currentColor"></path>
                                </svg>
                            </div>
                            <div class="demo-code-slash-icon" v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 0 512 512">
                                    <path
                                            d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z"
                                            fill="currentColor"></path>
                                    <path
                                            d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z"
                                            fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </transition>
                <Suspense>
                    <Code :source="code" />
                </Suspense>
            </div>
        </div>
    </ClientOnly>
</template>