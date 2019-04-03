<template>
<div class="app">
  <!--头部-->
  <div class="person-title">
    <a class="row">
      <i class="iconfont icon-home"></i>
    </a>
    <div class="m-head">
      <a class="head">发现</a>
      <a>甄选家</a>
    </div>
    <div class="right">
      <a class="search" @click="$router.push('/search')">
        <i class="iconfont icon-search-1-copy"></i>
      </a>
      <a class="cart">
        <i class="iconfont icon-icon--"></i>
      </a>
    </div>
  </div>
  <!--导航-->
  <div class="m-main-tab">
    <ul class="m-main-list">
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
      <li>
        <a>推荐</a>
      </li>
    </ul>
  </div>
  <!--内容-->
  <div class="content-wrap">
    <div class="m-main-content">
      <div class="item">
      <a class="itemList">
        <div class="u-name">
            <span class="ava">
              <img src="./images/d9d036fac85df6b30cf8c184e030323c.png" alt="">
            </span>
          <span class="name">选妹</span>
        </div>
        <div class="title">这些爆品火到断货，好不容易补到一批上架了！</div>
        <div class="u-pic">
          <img src="./images/fa8eac98570fb6baeeb5823ee097a366.jpg" alt="">
        </div>
        <div class="u-rcount">
          <i class="iconfont icon-yanjing"></i>
          <span>11.6k人看过</span>
        </div>
      </a>
    </div>
      <div class="item">
        <a class="itemList">
          <div class="u-name">
            <span class="ava">
              <img src="./images/d9d036fac85df6b30cf8c184e030323c.png" alt="">
            </span>
            <span class="name">选妹</span>
          </div>
          <div class="title">这些爆品火到断货，好不容易补到一批上架了！</div>
          <div class="u-pic">
            <img src="./images/fa8eac98570fb6baeeb5823ee097a366.jpg" alt="">
          </div>
          <div class="u-rcount">
            <i class="iconfont icon-yanjing"></i>
            <span>11.6k人看过</span>
          </div>
        </a>
      </div>
      <div class="item-1">
        <a class="itemList">
          <div class="left">
            <div class="u-name">
            <span class="ava">
              <img src="./images/c963b95252d629ad0634a92b4d92457e.jpg" alt="">
            </span>
            <span class="name">选妹</span>
            </div>
            <div class="title">跟着网易员工薅羊毛，又准又狠</div>
            <div class="desc">15款爆品限时特价，低至6.5折</div>
            <div class="u-rcount">
              <i class="iconfont icon-yanjing"></i>
              <span>11.6k人看过</span>
            </div>
          </div>
          <div class="right">
              <img src="./images/fa8eac98570fb6baeeb5823ee097a366.jpg" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.content-wrap',{
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
  width 100%
  height 100%
  background-color #f4f4f4
  position relative
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
    .m-head
      height 90px
      line-height 90px
      color #7F7F7F
      font-size 30px
      .head
        font-size 40px
        color #b4282d
        font-weight bold
        margin-right 10px
    .right
      .search
        margin-right 15px



  .m-main-tab
    width 100%
    height 72px
    padding-bottom 20px
    display flex
    .m-main-list
      width 100%
      display flex
      background-color #fafafa
      li
        height 72px
        line-height 72px
        white-space nowrap
        a
          font-size 33px
          color #7F7F7F
          padding 0px 8px
          margin 0px 20px


  .content-wrap
    position absolute
    left 0px
    right 0px
    top 180px
    bottom 100px
    margin auto
    .m-main-content
      width 100%
      .item
        width 100%
        background-color #fff
        margin 20px 0px
        padding 36px 30px
        box-sizing border-box
        .itemList
          width 100%
          .u-name
            width 100%
            height 56px
            line-height 56px
            margin-bottom 28px
            font-size 25px
            color #333333
            .ava
              img
                width 54px
                height 54px
                vertical-align  middle
                border 1px solid #d9d9d9
                border-radius 50%
            span
              font-size 30px
              display inline-block

          .title
            font-size 38px
            color #333333
            margin-top -4px
            margin-bottom 8px

          .u-pic
            width 100%
            height 376px
            margin-bottom 16px
            border-radius 5px
            img
              width 100%
              height 100%


          .u-rcount
            width 100%
            margin-top 16px
            color #999
            height 34px
            line-height 34px
            i
              width 28px
              height 20px
              margin-right 8px
              vertical-align middle
              display inline-block
            span
              display inline-block
              vertical-align middle

      .item-1
        width 100%
        background-color #fff
        padding 32px 30px
        margin 20px 0px
        box-sizing border-box
        .itemList
          display flex
          justify-content space-between
          .left
            height 272px
            width 400px
            .u-name
              width 100%
              height 56px
              line-height 56px
              margin-bottom 28px
              font-size 25px
              color #333333
              .ava
                img
                  width 54px
                  height 54px
                  vertical-align  middle
                  border 1px solid #d9d9d9
                  border-radius 50%
              span
                font-size 30px
                display inline-block
                vertical-align  middle
            .title
              font-size 38px
              color #333333
              margin-top -4px
              margin-bottom 8px
            .desc
              color #7f7f7f
              padding-top 8px
              width 100%
            .u-rcount
              width 100%
              margin-top 16px
              color #999
              height 34px
              line-height 34px
              i
                width 28px
                height 20px
                margin-right 8px
                vertical-align middle
                display inline-block
              span
                display inline-block
                vertical-align middle

          .right
            width 272px
            height 272px
            img
              width 272px
              height 272px
              border-radius 10px
</style>
