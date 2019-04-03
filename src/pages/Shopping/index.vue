<template>
<div class="cart">
  <!--上面-->
  <div class="title">
    <div class="m-cartHd">
      <span>购物车</span>
      <p class="juan">领卷</p>
    </div>
  </div>
  <!--下面-->
  <div class="m-defaultPage">
    <div class="reactid">
      <ul class="list">
        <li class="item">
          <i class="iconfont icon-dian"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-dian"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="iconfont icon-dian"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
        <img data-v-19372199 src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
      <div class="cartLogin">
        <span class="add">去添加点什么吧</span>
        <span class="text">登录</span>
        </div>
    </div>
  </div>

 </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cart
  width 100%
  height 100%
  .title
    width 100%
    background-color #ffffff
    padding 0px 30px
    box-sizing border-box
    .m-cartHd
      width 100%
      height 88px
      line-height 88px
      span
        float left
        font-size 40px
      .juan
        float right
        color red
        font-size 30px

  .m-defaultPage
    width 100%
    .reactid
      width 100%
      height 100%
      .list
        width 100%
        height 70px
        background-color #f4f4f4
        display flex
        justify-content space-between
        align-items center
        padding 0 30px
        box-sizing border-box
      img
        position absolute
        top 0px
        left 0px
        bottom 0px
        right 0px
        margin auto
        width 248px
        height 248px
      .cartLogin
        width 100%
        height 169px
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 780px
        left 0px
        .add
          width 100%
          height 27px
          color #999;
          margin-bottom 50px
          line-height 27px
          text-align center
          font-size 25px
        .text
          margin 0px 135px
          color #fff
          width 480px
          height 92px
          font-size 30px
          line-height 92px
          background-color #b4282d
          text-align center






</style>
