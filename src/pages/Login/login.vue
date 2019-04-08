<template>
  <div class="j-bd">
    <div class="j-shopping">
      <div class="person-title">
        <a class="row" @click="$router.push('/home')">
          <i class="iconfont icon-home"></i>
        </a>
        <img src="./imgs/Logo.png" alt="">
        <div class="right">
          <a class="search" @click="$router.push('/search')">
            <i class="iconfont icon-search-1-copy"></i>
          </a>
          <a class="cart" @click="$router.push('/shopping')">
            <i class="iconfont icon-icon--"></i>
          </a>
        </div>
      </div>
      <div class="loginTypesWrap">
        <div class="m-loginTypes">
          <div class="logoWrap">
            <img src="./imgs/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btnWrap">
            <div class="w-button" @click="changeNum(1)">
              <i class="iconfont icon-shouji-copy"></i>
              <span>手机号码登录</span>
            </div>
            <div class="w-button1" @click="changeNum(2)">
              <i class="iconfont icon-youjian"></i>
              <span>邮箱帐号登录</span>
            </div>
            <div class="btn">
              <span>手机号快捷注册</span>
              <i class="iconfont icon-iconfontjiantou2"></i>
            </div>
          </div>
        </div>
        <div class="thirdWrap">
          <div>
          <span>
            <i class="iconfont icon-changyonglogo28"></i>
            <span>微信</span>
          </span>
          </div>
          <div>
          <span>
            <i class="iconfont icon-qq"></i>
            <span>QQ</span>
          </span>
          </div>
          <div>
          <span>
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      changeNum:Function
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .j-bd
    width 100%
    .j-shopping
      width 100%
    .person-title
      width 100%
      height 90px
      background-color #fafafa
      padding 0px 16px 0px 24px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      a
        i
          font-size 48px
      img
        width 172px
        height 54px


    .loginTypesWrap
      width 100%
      height 1246px
      background-color #F2F5F4
      position relative
      .m-loginTypes
        width 100%
        .logoWrap
          width 100%
          text-align center
          padding-bottom 160px
          padding-top 160px
          img
            width 268px
            height 90px


        .btnWrap
          width 100%
          padding 0px 40px
          margin-bottom 205px
          box-sizing border-box
          .w-button
            width 100%
            height 94px
            line-height 94px
            margin-bottom 32px
            background-color #b4282d
            border 1px solid #b4282d
            border-radius 5px
            color #ffffff
            box-sizing border-box
            padding 2px
            font-size 30px
            text-align center
            i
              width 20px
              height 20px
              margin-right 16px


          .w-button1
            width 100%
            margin-bottom 32px
            height 94px
            line-height 94px
            background-color #ffffff
            border 2px solid #b4282d
            border-radius 5px
            color #b4282d
            box-sizing border-box
            padding 2px
            font-size 30px
            text-align center
            i
              width 20px
              height 20px
              margin-right 16px



        .btn
          width 100%
          height 40px
          color #333333
          text-align center
          font-size 30px


      .thirdWrap
        width 100%
        height 40px
        position absolute
        left 0px
        bottom 0px
        text-align center
</style>
