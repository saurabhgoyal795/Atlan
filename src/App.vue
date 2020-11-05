<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import OutboundLink from './components/OutboundLink'
import { Button } from '@progress/kendo-buttons-vue-wrapper';

export default {
  components: {
    OutboundLink,
   'k-button': Button

  }
}
</script>

<!-- When use semantic-ui-css, comment out lib.scss(VueSearchSelect.css) -->
<!--<style src="semantic-ui-css/semantic.css"></style>-->
<style src="./assets/app.scss" lang="scss"></style>
