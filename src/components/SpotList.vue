<template>
  <ul id="spotList">
    <li v-for="spot in spots">
      <div class="description">
        <p><span class="grey"> 名前 </span>{{ spot.name }}</p>
        <p><span class="grey"> カテゴリー </span>{{ spot.category }}</p>
        <p><span class="grey"> 都道府県 </span>{{ spot.address_prefecture}}</p>
        <div class="more">
          <router-link :to="{ name: 'spot', params: {spot_id: spot.id} }">See more...</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'spotList',
    computed: {
      ...mapGetters([
        'spots',
        'isLoading'
      ])
    }
  }
</script>

<style scoped lang="sass">
  #spotList
    min-width: 85%
    li
      list-style: none
      width: 500px
      display: flex
      justify-content: space-between
      border: solid 3px #e0e0e0
      margin: 15px 0
      box-shadow: 2px 3px #adadad
      .description
        flex: 2
        padding: 10px 15px
        background: #F5F5F5
        p
          text-transform: uppercase
          span
            font-size: 18px
            color: darkgrey
            padding: 0 10px 0 0
        .more
          height: 35px
          text-align: center
          padding-top: 8px
          font-size: 19px
          background: #5bab74
          border-radius: 5px
          &:hover
            background-color: #3e8353
          a
            text-decoration: none
            color: #F5F5F5
</style>
