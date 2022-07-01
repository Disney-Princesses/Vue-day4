<template>
  <div>
    <p>时间：{{date | setDate('-')}}</p>
    <p>时间：{{date | setDate('/')}}</p>
  </div>
</template>

<script>

export default {
  filters: {
    
  },
  data () {
    return {
      date:1636450540055
    }
  }
}
</script>

<style>

</style>