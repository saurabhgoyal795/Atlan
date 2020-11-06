<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  }
}
</script>

<!-- When use semantic-ui-css, comment out lib.scss(VueSearchSelect.css) -->
<!--<style src="semantic-ui-css/semantic.css"></style>-->
<style src="./assets/app.scss" lang="scss"></style>
