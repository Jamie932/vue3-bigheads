<template>
  <g>
    <path
      d="M329.09,794.17c56.12,35.58,168.48,75.53,168.48,75.53l-.16,14S397,879.36,316.32,844.9C316.32,814.38,329.09,794.17,329.09,794.17Z"
      :fill="color.base"
      :stroke="colors.outline"
      stroke-miterlimit="10"
      stroke-width="12px"
    />
    <path
      d="M648.66,870.5s17.7-1.85,30.9-9c-.11-4.25-.6-8.11-.6-8.11l-30.85,10.68Z"
      :fill="skin.shadow"
    />
    <path
      d="M671.55,794.43C619,831.8,503,869.7,503,869.7l.17,14s100.41-4.3,181.08-38.76C684.29,822.67,671.55,794.43,671.55,794.43Z"
      :fill="color.base"
      :stroke="colors.outline"
      stroke-miterlimit="10"
      stroke-width="12px"
    />
    <path
      d="M320.63,822.65c.28.24.83.61,1.27.92s1,.64,1.45.95c1,.6,2,1.21,3.08,1.77,2.08,1.16,4.23,2.25,6.43,3.28s4.42,2,6.65,3c1.12.5,2.23,1,3.34,1.58s2.22,1.1,3.31,1.76a40.85,40.85,0,0,1-7.42-1.08q-3.63-.9-7.17-2.15a65,65,0,0,1-7-2.89c-1.13-.56-2.26-1.16-3.36-1.84-.55-.34-1.09-.69-1.64-1.06a15.93,15.93,0,0,1-1.67-1.31Z"
      :fill="colors.outline"
    />
  </g>
</template>

<script>
import { colors } from '../../theme.js';

export default {
  name: 'DressFront',
  props: ['skin', 'color', 'graphic'],
  data() {
    return {
      colors,
    };
  }
};
</script>
