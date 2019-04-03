<template>
  <div class="j-bd">
    <div class="j-shopping">
      <!--头部-->
      <div class="person-title">
        <a class="row" @click="$router.push('/home')">
          <i class="iconfont icon-home"></i>
        </a>
        <img src="./imgs/Logo.png" alt="">
        <div class="right">
          <a class="search">
            <i class="iconfont icon-search-1-copy"></i>
          </a>
          <a class="cart">
            <i class="iconfont icon-icon--"></i>
          </a>
        </div>
      </div>
      <!--下面-->
      <div class="loginTypesWrap">
        <div class="m-loginTypes">
          <!--网易严选图片-->
          <div class="logoWrap">
            <img src="./imgs/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <!--手机号登录-->
          <form class="user-box">
            <input type="text" placeholder="邮箱账号" class="user-phon">
            <div class="user-duanxin">
              <input type="text" placeholder="密码" class="user-duanxin1">
            </div>
            <div class="wenti">
              <div>
                <a>注册账号</a>
              </div>
              <div>
                <a>忘记密码</a>
              </div>
            </div>
            <div class="w-button">
              <span>登录</span>
            </div>
          </form>
          <!--其他登录方式-->
          <div class="w-other">
            <div class="qita" @click="changeNum(0)">
              <span>其他登录</span>
            </div>
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
        margin-left 20px
    .loginTypesWrap
      width 100%
      height 1246px
      background-color #ffffff
      position relative
      .m-loginTypes
        padding 0 36px
        width 100%
        box-sizing border-box
        .logoWrap
          width 100%
          text-align center
          padding-top 56px
          img
            width 192px
            height 64px


        .user-box
          width 100%
          height 572px
          margin-top 56px
          box-sizing border-box
          padding-top 114px
          .user-phon
            width 100%
            height 90px
            line-height 90px
            margin 28px 0px
            outline none
            border none
            border-bottom 2px solid #333333
            font-size 30px
          .user-duanxin
            position relative
            .user-duanxin1
              width 100%
              height 90px
              line-height 90px
              margin 28px 0px
              outline none
              border none
              border-bottom 2px solid #333333
              font-size 30px
          .wenti
            width 100%
            height 90px
            display flex
            justify-content space-between
            a
              margin 28px 0px
              font-size 30px
              color #bdbdbd
              &:last-child
                color #333333

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
        .w-other
          width 100%
          .qita
            width 100%
            margin-bottom 32px
            height 94px
            line-height 94px
            background-color #ffffff
            border 1px solid #b4282d
            border-radius 5px
            color #b4282d
            box-sizing border-box
            padding 2px
            font-size 30px
            text-align center
            margin-top 40px




</style>
