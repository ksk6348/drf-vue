<template>
  <section class="container">
    <idSpot></idSpot>
  </section>
</template>

<script>
  import idSpot from '@/components/IdSpot'
  import { FETCH_A_SPOT } from "@/store/actions.type"

  export default {
    data () {
      return {}
    },
    components: {
      idSpot
    },
    mounted () {
      this.$store.dispatch(FETCH_A_SPOT, this.$route.params)
        .then(() => {
          console.log('YOU API')
        })
        .catch((err) => {
          console.log('ERR: ', err)
        })
    }
  }
</script>

<style scoped>

</style>
