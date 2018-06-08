<template>
  <svg width="50px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 47 (45396) - http://www.bohemiancoding.com/sketch -->
    <title>icons / 24 / line / arrow-right</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Icon-/-24-/-line" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="icons-/-24-/-line-/-arrow-right" stroke="#fff" stroke-width="2">
            <g id="arrow-right" transform="translate(4.000000, 6.000000)">
                <path d="M0,6 L16,6" id="Shape"></path>
                <polyline id="Shape" points="10 0 16 6 10 12"></polyline>
            </g>
        </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 25
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>