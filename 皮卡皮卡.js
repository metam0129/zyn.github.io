const Bolts = Vue.component('bolts', {
  name: 'bolts',
  template: `
  <div class="c-bolts absolute top-neg4 left-0 right-0 center">
    <span :class="classes.bolt" :style="styles.bolt" class="h2">⚡</span>
    <span :class="classes.bolt" :style="styles.bolt" class="h1 bold">⚡</span>
    <span :class="classes.bolt" :style="styles.bolt" class="h2">⚡</span>
  </div>`,
  computed: {
    styles() {
      return {
        bolt: {
          opacity: 0 } };


    },
    classes() {
      return {
        bolt: `c-bolt inline-block purple` };

    } },

  mounted() {
    anime({
      targets: '.c-bolts .c-bolt',
      opacity: [0, 1],
      rotate: [25, 0],
      translateY: [-10, 3],
      duration: 140,
      delay: (el, i) => {
        return 140 * i;
      },
      loop: true,
      direction: 'alternate',
      easing: 'linear' });

  } });


const Btn = Vue.component('btn', {
  name: 'btn',
  template: `
    <div>
      <bolts v-if="active"></bolts>
      <button :class="[classes.default, classes.active]" @mousedown="onMouseDown" @mouseup="onMouseUp" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
        <div ref="eyes" :class="classes.eyes">
          <span :class="[classes.eye, classes.eyeLeft]">
            <span :class="[classes.eyeInner, classes.eyeInnerLeft]"></span>
          </span>
          <span :class="[classes.eye, classes.eyeRight]">
            <span :class="[classes.eyeInner, classes.eyeInnerRight]"></span>
          </span>
        </div>
        <span :class="[classes.rouge, classes.rougeLeft]"></span>
        <span :class="[classes.rouge, classes.rougeRight]"></span>
        <div ref="btnText" class="px3"><slot></slot></div>
      </button>
    </div>
  `,
  data() {
    return {
      active: false };

  },
  computed: {
    classes() {
      return {
        default: `border bg-yellow border-width-3 border-purple rounded3 p2 outline-none purple bold overflow-hidden cursor-pointer transition-all transition-100ms`,
        active: `y1-active`,
        rouge: `circle p1 bg-red width1 height1 inline-block absolute bottom-neg1`,
        rougeLeft: `left-neg1`,
        rougeRight: `right-neg1`,
        eyes: `anim-blink`,
        eye: `circle p1 bg-purple width1 height2 inline-block absolute top-0 overflow-hidden`,
        eyeLeft: `left-neg1`,
        eyeRight: `right-neg1`,
        eyeInner: `circle bg-white width05 height05 top-0 absolute inline-block`,
        eyeInnerLeft: `left-0`,
        eyeInnerRight: `left-0` };

    } },

  methods: {
    playBlinkAnimation() {
      anime({
        targets: '.anim-blink',
        opacity: [1, 0],
        duration: 100,
        delay: () => {
          return 1800 * (Math.random() * (4 - 1) + 1);
        },
        loop: true,
        easing: 'easeInOutQuad' });

    },
    onMouseDown() {
      // Ironic, isn't it?
      this.active = true;
    },
    onMouseUp() {
      this.active = false;
    },
    onMouseOver() {
      this.active = true;
    },
    onMouseLeave() {
      this.active = false;
    } },

  mounted() {
    this.playBlinkAnimation();
  },
  components: {
    Bolts } });



new Vue({
  el: '#app',
  components: {
    Btn } });