<script setup lang="ts">
import {ref} from "vue";

const {static: isStatic} = defineProps<{static?: boolean}>();
const source = ref();
const hover = ref(false);
const fold = ref(false);
const copied = ref(false);

async function copyCode() {
    try {
        await navigator.clipboard.writeText(source.value.querySelector("code").textContent);
        copied.value = true;
    } catch (err) {
        console.log(err);
    }
    
    setTimeout(() => {copied.value = false}, 2000);
}
</script>

<style scoped>
.demo {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  margin-bottom: 1.2em;
  margin-top: 1.2em;
  transition: background-color 0.5s ease;
  display: grid;
  grid-template-columns: 100%;
  
  &[static] {
    background-color: var(--vp-c-border);
  }
  
  p {
    margin: 0;
  }
  
  .content {
    margin: 20px 20px 18px;
    contain: paint;
    
    [static] & {
      background-color: var(--vp-c-bg-alt);
      overflow: auto;
    }
    
    &:deep(.focus) {
      position: relative;
      
      &:before {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        border: 2px solid var(--vp-c-brand-1);
        box-shadow: var(--vp-c-brand-1) 0 -1px 20px -8px;
        position: absolute;
        inset: 0;
      }
      
      &.rounded:before {
        border-radius: 6px;
      }
    }
    
    &:deep(.blur) {
      user-select: none;
      pointer-events: none;
      opacity: 0.4;
    }
  }
  
  &.scale .content {
    zoom: 50%;
    
    @media (960px <= width <= 1024px) {
      zoom: 45%;
    }
    
    @media (max-width: 680px) {
      zoom: 45%;
    }
    
    @media (max-width: 600px) {
      zoom: 40%;
    }
    
    @media (max-width: 536px) {
      zoom: 35%;
    }
    
    @media (max-width: 480px) {
      zoom: 30%;
    }
    
    @media (max-width: 415px) {
      zoom: 25%;
    }
  }
  
  &.resizable .content {
    overflow-x: hidden;
    resize: horizontal;
    max-width: calc(100% - 40px);
    justify-self: center;
    width: 100%;
  }
  
  .code {
    position: relative;
    
    &:deep(div[class*='language-']) {
      border-radius: 0 0 8px 8px;
      margin: 0;
      
      .dark & {
        box-shadow: none;
      }
    }
    
    &:hover :deep(.lang) {
      opacity: 0;
    }
    
    .controls {
      z-index: 10;
      position: absolute;
      display: flex;
      top: 12px;
      right: 10px;
      
      button {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--vp-c-divider);
        border-radius: 6px;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
        background-position: 50%;
        background-size: 20px;
        background-repeat: no-repeat;
        background-color: var(--vp-c-bg);
        transition: background-color 0.5s ease;
        
        &:hover {
          box-shadow: inset 0 0 3px var(--vp-code-color);
          transition: box-shadow 0.2s ease;
        }
        
        &:active {
          box-shadow: inset 0 0 5px var(--vp-code-color);
          transition: box-shadow 0.2s ease;
        }
        
        & + button {
          margin-left: 6px;
        }
        
        &.copy {
          background-image: var(--vp-icon-copy);
        }
        
        &.copied {
          background-image: var(--vp-icon-copied);   
        }
        
        &.fold > div {
          width: 17px;
          height: 17px;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
    <div class="demo" :static="isStatic ? 'static' : null">
        <div class="content vp-raw">
            <slot />
        </div>
        <div v-if="!isStatic" class="code" ref="source" @mouseover="hover = true" @mouseleave="hover = false">
            <transition name="fade">
                <div class="controls" v-show="source && hover">
                    <button class="fold" :title="fold ? 'Collapse Code' : 'Expand Code'" @click="fold = !fold;" v-if="$slots.source">
                        <div v-if="fold">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z"></path>
                                <path fill="currentColor" d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z"></path>
                                <path fill="currentColor" d="M208 437a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z"></path>
                            </svg>
                        </div>
                        <div v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389z"></path>
                                <path fill="currentColor" d="M352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389z"></path>
                            </svg>
                        </div>
                    </button>
                    <button class="copy" title="Copy Code" :class={copied} @click="copyCode"></button>
                </div>
            </transition>
            <slot v-if="!fold" name="snippet" />
            <slot v-if="$slots.source && fold" name="source" />
        </div>
    </div>
</template>