<script setup>
import { ref, onMounted, computed } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import LikeAnimation from "../assets/animations/like.json";
const lottie = ref(null);
const isShow = ref(false);
const showLottie = computed(() => {
  return isShow.value;
});

const play = () => {
  isShow.value = true;
  lottie.value.playSegments([[0, 22]], true);
};
const pause = () => {
  lottie.value.pause();
};
const stop = () => {
  lottie.value.stop();
};

const onLoopComplete = () => {
  console.log("completed");
  lottie.value.stop();
};

onMounted(() => {
  console.log(lottie.value);
});
</script>
<template>
  <div class="card" @dblclick="play">
    Double Tap Me
    <div class="lottieAnimation" v-show="showLottie">
      <Vue3Lottie
        :animationData="LikeAnimation"
        :height="200"
        :width="200"
        :auto-play="false"
        ref="lottie"
        @on-loop-complete="onLoopComplete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  background-color: #f3f3f3;
  padding: 1rem;
  border-radius: 0.6rem;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &::selection {
    user-select: none;
  }
  .lottieAnimation {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
