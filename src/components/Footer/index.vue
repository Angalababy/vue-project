<template>
<div class="footer">
  <router-link class="item active" to="/home">
    <i class= "iconfont icon-shouye"></i>
    <span>首页</span>
  </router-link>
  <router-link class="item" to="/category">
    <i  class= "iconfont icon-fenlei"></i>
    <span>分类</span>
  </router-link>
  <router-link class="item" to="/general">
    <i  class= "iconfont icon-tupian"></i>
    <span>识物</span>
  </router-link>
  <router-link class="item" to="/shopping">
    <i  class= "iconfont icon-gouwuche"></i>
    <span>购物车</span>
  </router-link>
  <router-link class="item" to="/login">
    <i  class= "iconfont icon-gerenyonghutouxiang"></i>
    <span>个人</span>
  </router-link>
</div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .footer
    position fixed
    background #fff
    z-index 200
    left 0
    bottom 0
    width 100%
    height 100px
    box-sizing border-box
    display flex
    .item
      flex 1
      text-align center
      justify-content space-around
      display flex
      flex-direction column
      &.active
        color red
      span
        font-size 24px
      .iconfont
          font-size 40px


</style>
