<template>
<div class="app">
  <!--头部-->
  <div class="person-title">
    <a class="row">
      <i class="iconfont icon-home"></i>
    </a>
    <div class="m-head">
      <a class="head">发现</a>
      <a href="http://m.you.163.com/expert/index">甄选家</a>
    </div>
    <div class="right">
      <a class="search" @click="$router.push('/search')">
        <i class="iconfont icon-search-1-copy"></i>
      </a>
      <a class="cart" @click="$router.push('/shopping')">
        <i class="iconfont icon-icon--"></i>
      </a>
    </div>
  </div>
  <!--导航-->
  <div class="m-main-tab">
    <ul class="m-main-list">
      <li v-for="(item,index) in generalTabs" :key="index">
        <a>{{item.tabName}}</a>
      </li>
    </ul>
  </div>
  <!--内容-->
  <div class="content-wrap">
    <div class="m-main-content">
      <div  v-for="(item,index) in recManual" :key="index">
        <div class="item" v-for="(topics,index) in item.topics" :key="index" v-if="topics.style===1">
          <a class="itemList">
            <div class="u-name">
            <span class="ava">
              <img :src="topics.avatar" alt="">
            </span>
              <span class="name">{{topics.nickname}}</span>
            </div>
            <div class="title">{{topics.title}}</div>
            <div class="u-pic">
              <img :src="topics.picUrl" alt="">
            </div>
            <div class="u-rcount">
              <i class="iconfont icon-yanjing"></i>
              <span>{{topics.readCount}}k人看过</span>
            </div>
          </a>
        </div>
        <div class="item-1" v-for="(topics,index) in item.topics" :key="index" v-if="topics.style===2">
          <a class="itemList">
            <div class="left">
              <div class="u-name">
            <span class="ava">
              <img :src="topics.avatar" alt="">
            </span>
                <span class="name">{{topics.nickname}}</span>
              </div>
              <div class="title">{topics.title}}</div>
              <div class="desc">{{topics.subTitle}}</div>
              <div class="u-rcount">
                <i class="iconfont icon-yanjing"></i>
                <span>{{topics.readCount}}k人看过</span>
              </div>
            </div>
            <div class="right">
              <img :src="topics.picUrl" alt="">
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.content-wrap',{
        click:true
      })
      new BScroll('.m-main-tab',{
        click:true,
        scrollX:true
      })
      this.$store.dispatch('getRecManual')

      this.$store.dispatch('getGeneralTabs')
    },
    computed:{
      ...mapState({
        generalTabs:state=>state.general.generalTabs,
        recManual:state=>state.general.recManual

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
    position relative
    z-index 100
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
    position relative
    z-index 100
    .m-main-list
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
