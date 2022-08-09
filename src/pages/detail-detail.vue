<template>
  <div class="main">
    <h5>detail page</h5>
    <hr>
    <h4>page id is {{ pageId }}</h4>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'detailPage',
  data() {
    return {
      routeParams: this.$route.params,
      pageId: this.$route.params.pageId
    }
  }
}
</script>

<style>
</style>