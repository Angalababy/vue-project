<template>
<div class="home">
  <!--头部-->
  <div class="header">
    <!--头部-->
    <div class="title">
      <a class="logo"><img src="./images/Logo.png" alt=""></a>
      <div class="serach" @click="$router.push('/search')">
        <i class="iconfont icon-search-1-copy"></i>
        <span>搜索商品，共221100款好物</span>
      </div>
      <button class="login" @click="$router.push('/login')">登录</button>
    </div>
    <!--导航-->
    <div class="tabWarp" v-if="!isShowMask">
      <div class="m-tabs">
        <ul class="list" v-if="home.kingKongModule">
          <li :class="{active:index===0}" v-for="(item,index) in home.kingKongModule.kingKongList" :key="index">{{item.text}}</li>
        </ul>
      </div>
      <div class="icon" @click="isShowMask=true">
        <i class="iconfont icon-jiantouarrow483"></i>
      </div>
    </div>
    <div class="tabWarp-1" v-show="isShowMask">
      <div class="quanbu">
        <span>全部频道</span>
        <i class="iconfont icon-shangjiantou" @click="isShowMask=false"></i>
      </div>
      <ul class="list" v-if="home.kingKongModule">
        <li
          :class="{active:index===liIndex}"
          @click="liIndex=index"
          v-for="(item,index) in home.kingKongModule.kingKongList" :key="index">{{item.text}}</li>
      </ul>
    </div>
    <!--蒙板-->
    <div class="mask" v-if="isShowMask"></div>
    </div>


  <!--轮播图-->
  <div class="contentWrap">
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in home.focusList" :key="index">
            <img :src="item.picUrl" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

      <!--网易自营品牌-->
      <div class="ServicePolicy">
        <ul class="g-grow">
          <li v-for="(item,index) in home.policyDescList" :key="index">
            <i :style="{backgroundImage:`url(${item.icon})`}"></i>
            <span>{{item.desc}}</span>
          </li>
        </ul>
      </div>
      <!--中间图片-->
      <!--新人专享礼-->
      <div class="m-freshmanModule">
        <div class="moduleTitle">
          <span>新人专享礼</span>
        </div>
        <!--新人专享礼图片-->
        <div class="img-content">
          <!--左边-->
          <a class="left">
            <h3>新人专享礼包</h3>
            <div class="imgWrap">
              <img src="" alt="">
              <div class="animate"></div>
            </div>
          </a>
          <!--右边-->
          <div class="right">
            <ul class="module">
              <li class="module1" v-for="(item,index) in home.indexActivityModule" :key="index">
                <a>
                  <div class="module1-inner">
                    <p class="fuli">{{item.title}}</p>
                    <p :class="item.subTitle?'tejia':'yiyuan'">{{item.subTitle?item.subTitle:item.tag}}</p>
                  </div>
                  <img src="./images/0f0734af22ccb91fe3dd0ee1237622bb.png" alt="">
                  <div class="mony">
                    <span>¥524</span>
                    <span>¥699</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!--品牌制造商-->
      <div class="wrapper">
        <ul class="wrapper-list" v-if="home.kingKongModule">
          <li v-for="(item,index) in home.kingKongModule.kingKongList" :key="index">
            <a>
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="brand">
        <div class="brand-title">
          <h3 class="left">品牌制造商直供</h3>
          <a class="right">
            <span>更多</span>
            <i class="iconfont icon-iconfontjiantou3"></i>
          </a>
        </div>
        <ul class="brand-list" v-if="home.tagList">
          <li v-for="(item,index) in home.tagList" :key="index"
              :style="{backgroundImage:`url(${item.picUrl})`}">
            <a>
              <div class="cnt">
                <h4>{{item.name}}</h4>
                <div class="shangxin">
              <span>
                <span>{{item.floorPrice}}</span>
                <span>元起</span>
              </span>
                  <i>上新</i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!--类目热销榜-->
      <div class="m-categoryHotSellModule">
          <div class="left">
            <span>类目热销榜</span>
          </div>
          <div class="bottom">
            <ul class="content">
              <li class="hot" :class="{hot2:index===1}" v-for="(item,index) in firstHotList" :key="index">
                <a>
                  <div>
                    <span>热销榜</span>
                  </div>
                  <img src="./images/9a33f08a3b0f5c06fdf4c586d51b2f7c.png" alt="">
                </a>
              </li>
            </ul>
            <ul class="content2">
              <li v-for="(item,index) in lastHotList" :key="index">
              <a>
                <div>美食酒水榜</div>
                <img src="./images/59eb7e52ab114c894a8179bc2991122b.png" alt="">
              </a>
            </li>
            </ul>
          </div>
        </div>

      <!--人气推荐-->
      <div class="moduleTitle" v-if="home.popularItemList">
        <div class="brand-title">
          <h3 class="left">人气推荐</h3>
          <a class="right">
            <span>更多</span>
            <i class="iconfont icon-iconfontjiantou3"></i>
          </a>
        </div>
        <a class="spItem">
          <img :src="home.popularItemList[0].scenePicUrl" alt="">
          <div class="data-reactid">
            <div class="name">{{home.popularItemList[0].name}}</div>
            <div>{{home.popularItemList[0].simpleDesc}}</div>
            <div class="price">
              ¥{{home.popularItemList[0].counterPrice}}
            </div>
          </div>
        </a>
        <div class="m-indexItem">
          <ul class="list">
            <li v-for="(item,index) in home.popularItemList.slice(1)" :key="index">
              <a>
                <img :src="item.scenePicUrl" alt="">
                <div class="dynamicPrice">
                  <span>{{item.simpleDesc}}</span>
                  <span class="price">¥{{item.counterPrice}}</span>
                </div>
                <div class="dynamicPrice">
                  <p>限时购</p>
                  <p>满赠</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!--限时购-->
      <div class="m-flashSaleModule">
        <div class="moduleTitle">
          <div class="left">
            <h4>限时购</h4>
            <div class="time">
              <span class="item">00</span>
              <span>:</span>
              <span class="item">00</span>
              <span>:</span>
              <span class="item">01</span>
            </div>
          </div>
          <a class="right">
            <span>更多</span>
            <i> > </i>
          </a>
        </div>

          <ul class="m-indexFlashSaleItem" v-if="home.flashSaleModule">
            <li v-for="(item,index) in home.flashSaleModule.itemList" :key="index">
              <a>
                <img :src="item.picUrl" alt="">
                <div class="price">
                  <span class="price-item">¥{{item.activityPrice}}</span>
                  <span>¥{{item.originPrice}}</span>
                </div>
              </a>
            </li>
          </ul>

      </div>

      <!--新品首发-->
      <div class="m-indexFloor">
        <div class="brand-title">
          <h3 class="left">新品首发</h3>
          <a class="right">
            <span>更多</span>
            <i class="iconfont icon-iconfontjiantou3"></i>
          </a>
        </div>

        <ul class="m-indexFlashSaleItem" v-if="home.flashSaleModule">
          <li v-for="(item,index) in home.flashSaleModule.itemList" :key="index">
            <a>
              <img :src="item.picUrl" alt="">
              <div class="dynamicPrice">
                <span>粉丝节零食套餐现在特价</span>
                <span class="price-item">¥{{item.activityPrice}}</span>
              </div>
              <div class="dynamicPrice">
                <p class="price-item">特价</p>
              </div>
            </a>
          </li>
        </ul>

      </div>
      <!--四件套定义-->
      <div class="m-sceneLightShoppingGuideModule" v-if="home.sceneLightShoppingGuideModule">
        <div class="styleBanner">
          <a class="list" v-for="(item,index) in home.sceneLightShoppingGuideModule" :key="index">
            <div class="item">{{item.styleItem.title}}</div>
            <div>{{item.styleItem.desc}}</div>
            <div class="items">
              <img :src="item.styleItem.picUrlList[0]" alt="">
              <img :src="item.styleItem.picUrlList[1]" alt="">
            </div>
          </a>
        </div>
      </div>
      <!--超火断货王补单-->
      <div class="box" v-for="(item,index) in home.categoryModule" :key="index">
        <div class="box-1">
          <a class="bannder" :style="{backgroundImage:`url(${item.titlePicUrl})`}"></a>
          <div class="m-indexItem " :class="`swiper-${index}`">
            <ul class="list">
              <li v-for="(subCategory,index) in item.itemList" :key="index">
                <a>
                  <img :src="subCategory.listPicUrl" alt="">
                  <div class="dynamicPrice">
                    <span>{{subCategory.name}}</span>
                    <span class="price">¥{{subCategory.counterPrice}}</span>
                  </div>
                  <div class="dynamicPrice">
                    <p>爆品</p>

                  </div>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <!--下载App-->
      <div class="m-ftWrap">
        <div class="m-ft">
          <div class="bd">
            <a>下载APP</a>
            <a>电脑版</a>
          </div>
          <p class="copyright">
            <span>网易公司版权所有 © 1997-</span>
            <span>2019</span>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {getHome} from '../../api/index'
  import BScorll from 'better-scroll'
  import  Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        home:{},
        isShowMask:false,
        liIndex:0
      }
    },
    async mounted(){
      const result=await getHome()
      if(result.code===0){

        this.home=result.data
      }
    },
    computed:{
      firstHotList(){
        return this.home.categoryHotSellModule?this.home.categoryHotSellModule.categoryList.slice(0,2):[]
      },
      lastHotList(){
        return this.home.categoryHotSellModule?this.home.categoryHotSellModule.categoryList.slice(2):[]
      },

    },
    watch:{
      home(){
        this.$nextTick(()=>{
          new BScorll('.m-tabs',{
            scrollX:true,
            click:true
          })
          new BScorll('.contentWrap',{
            click:true
          })
          this.home.categoryModule.forEach((item,index)=>{
            new BScorll(`.swiper-${index}`,{
              click:true,
              scrollX:true,
            })
          })

          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
   width 100%
   height 100%
   position relative
   .contentWrap
     width 100%
     top 150px
     bottom 100px
     position absolute
     .content
        z-index 10
        width 100%
        box-sizing border-box
        .ServicePolicy
          width 100%
          height 36px
          padding 20px
          color #B4282D
          .g-grow
            display flex
            li
              flex 1
              i
                display inline-block
                width 32px
                height 32px
                background-size 100% 100%
                vertical-align middle
              span
                vertical-align middle
                font-size 25px

        .swiper-container
            width 100%
            height 400px
            img
              width 100%
              height 100%

        .wrapper
            width 100%
            height 370px
            .wrapper-list
              width 100%
              height 100%
              li
                float left
                width 20%
                height 50%
                a
                  width 100%
                  height 100%
                  display flex
                  flex-direction column
                  align-items center
                  justify-content space-around
                  img
                    width 110px
                    height 110px
        .m-categoryHotSellModule
          width 100%
          background-color #ffffff
          .left
            width 100%
            height 100px
            padding 0 30px
            box-sizing border-box
            background-color #ffffff
            overflow hidden
            line-height 100px
            span
              float left
              font-size 35px


          .bottom
            width 100%
            padding 0 30px 30px 30px
            box-sizing border-box
            .content
              width 100%
              overflow hidden
              .hot
                width 49.5%
                height 200px
                float left
                background-color #F9F3E4
                margin-right 6px

                &.hot2
                  background-color #EBEFF6
                  margin-right 0px
                a
                  width 100%
                  height 100%
                  display block
                  position relative
                  div
                    width 100%
                    color #333;
                    font-size 16px
                    padding-left 10px
                    padding-top 60px
                    box-sizing border-box
                    position absolute
                    top 0
                    right 0
                    z-index 5
                    &::after
                      content ''
                      display block
                      width 50px
                      height 4px
                      position absolute
                      left 5px
                      bottom -9px
                      background #333
                  img
                    width 200px
                    height 200px
                    float right

            .content2
              width 100%
              overflow hidden

              li
                background #F5F5F5
                width 165px
                height 180px
                float left
                margin 0px 7px 7px 0px
                a
                  width 100%
                  height 100%
                  div
                    text-align center
                    margin-top 5px
                    font-size 20px
                    color #333333
                  img
                    width 120px
                    height 120px






        .moduleTitle
          width 100%
          padding 0 30px 30px
          box-sizing border-box
          margin-bottom 20px
          background-color #ffffff
          .brand-title
            width 100%
            padding 0 30px
            box-sizing border-box
            overflow hidden
            height 100px
            overflow hidden
            .left
              float left
              font-size 40px
            .right
                float right
                span
                  font-size 30px



          .spItem
            display block
            background-color #FEF0DF
            color #333
            width 100%
            height 280px
            box-sizing border-box
            padding-bottom 20px
            position relative
            img
              width 280px
              height 280px
              margin-right 30px
              float left
            .data-reactid
              position absolute
              top 50%
              right 0px
              transform translateY(-50%)
              width 350px
              height 118px
              .name
                font-size 30px
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
              .price
                color red
                font-size 10px



          .m-indexItem
            width 100%
            .list
              width 100%
              display flex
              padding-bottom 13px
              justify-content space-between
              li
                a
                  display block
                  img
                    width 216px
                    height 216px
                    background-color #f5f5f5
                  .dynamicPrice
                    width 100%
                    height 72px
                    .price
                      color red
                  .dynamicPrice
                    width 100%
                    p
                      float left
                      border 1px solid #CE2424
                      color red
                      border-radius 15px
                      width 66px
                      height 32px
                      line-height 32px
                  .dynamicPrice-1
                      width 150px
                      color red
                      border-radius 15px
                      border 1px solid #CE2424
                      height 32px
                      line-height 32px




        .m-flashSaleModule
          width 100%
          background-color #fffff
          margin-bottom 20px
          .moduleTitle
            width 100%
            padding 0 30px
            height 100px
            box-sizing border-box
            line-height 100px
            display flex
            justify-content space-between
            .left
              position relative
              h4
                float left
                font-size 30px
              .time
                float left
                margin-left 5px
                span
                  font-size 30px
                .item
                  font-size 30px
                  background-color #000000
                  width 18px
                  height 18px
                  color #ffffff



            .right
              float right
              font-size 30px


          .m-indexFlashSaleItem
            width 100%
            padding 0 5px 0 15px
            box-sizing border-box
            overflow hidden
            background-color #ffffff
            li
              float left
              width 216px
              height 300px
              margin-right 10px
              padding-bottom 15px
              box-sizing border-box
              a
                width 100%
                display block
                text-align center
                img
                  width 216px
                  height 216px
                  background-color #F5F5F5
                .price
                  font-size 20px
                  .price-item
                    color #b4282d


        .m-indexFloor
          width 100%
          background-color #ffffff
          padding-bottom 26px
          box-sizing border-box
          margin-bottom 20px
          .brand-title
            width 100%
            padding 0 30px
            box-sizing border-box
            overflow hidden
            height 100px
            line-height 100px
            overflow hidden
            .left
              float left
              font-size 40px
            .right
              float right
              span
                font-size 30px

          .m-indexFlashSaleItem
            width 100%
            padding 0 5px 0 15px
            box-sizing border-box
            overflow hidden
            background-color #ffffff
            li
              float left
              width 216px
              height 300px
              margin-right 10px
              padding-bottom 15px
              box-sizing border-box
              a
                width 100%
                display block
                text-align center
                img
                  width 216px
                  height 216px
                  background-color #F5F5F5
                .dynamicPrice
                  font-size 20px
                  .price-item
                    color #b4282d


        .m-sceneLightShoppingGuideModule
          width 100%
          padding 10px 30px 30px 26px
          margin-bottom 20px
          background-color #ffffff
          overflow hidden
          box-sizing border-box
          .styleBanner
            width 100%
            overflow hidden
            .list
              float left
              width 50%
              display block
              height 264px
              padding 20px 0 0 20px
              box-sizing border-box
              border-radius 5px
              .item
                font-size 35px
              .items
                img
                  width 150px
                  height 150px



        .box
          width 100%
          .box-1
            width 100%
            background-color #ffffff
            .bannder
              height 370px
              width 100%
              display block
              background-image url("./images/e00ce7c76ca85291071c81d72e8b6bf4.jpg")
              background-size 100% 100%

            .m-indexItem
              margin-top 20px
              width 100%
              display flex
              padding 0 30px 30px
              box-sizing border-box
              .list
                display flex
                li
                  width 200px
                  height 320px
                  margin-right 20px
                  a
                    width 100%
                    height 100%
                    display block
                    img
                      width 200px
                      height 200px
                      background-color #f5f5f5
                    .dynamicPrice
                      width 100%
                      height 72px
                      .price
                        color red
                      p
                        float left
                        border 1px solid #CE2424
                        color red
                        border-radius 15px
                        width 66px
                        height 32px
                        line-height 32px
                    .dynamicPrice-1
                      width 150px
                      color red
                      border-radius 15px
                      border 1px solid #CE2424
                      height 32px
                      line-height 32px





        .m-ftWrap
          width 100%
          height 245px
          background-color #414141
          .m-ft
            width 100%
            padding 54px 20px 28px 20px
            box-sizing border-box
            text-align center
            .bd
              width 100%
              overflow hidden
              display flex
              justify-content center
              a
                width 170px
                height 60px
                line-height 60px
                display block
                color #ffffff
                font-size 32px
                border 1px solid #999
                margin-right 50px
                float left
            .copyright
              width 710px
              height 64px
              margin-top 36px
              font-size 20px
              color #999




        .m-freshmanModule
          margin 30px 0
          width 100%
          .moduleTitle
            width 100%
            height 90px
            padding 0 30px
            text-align center
            box-sizing border-box
            background-color #fff
            span
              width 100%
              font-size 35px
              line-height 90px
              position relative
              &::before
                content: ' '
                display block
                position absolute
                left -50px
                top 23px
                height 3px
                width 35px
                background-color #333

              &::after
                content: ' '
                display block
                position absolute
                left 210px
                top 23px
                height 3px
                width 35px
                background-color #333
          .img-content
            width 100%
            padding-left 30px
            box-sizing border-box
            overflow hidden
            .left
              width 50%
              display block
              background-color #F9E9CF
              float left
              h3
                font-size 35px
                padding 20px 0 0 20px
              .imgWrap
                width 100%
                padding 37px 42px
                box-sizing border-box
                img
                  width 258px
                  height 257px

            .right
              width 49%
              float right
              .module
                width 100%
                .module1
                  background-color #FBE2D3
                  width 100%
                  height 215px
                  margin-bottom 5px
                  a
                    width 100%
                    height 100%
                    display block
                    position relative
                    padding 20px 0 0 30px
                    box-sizing border-box
                    .module1-inner
                      width 100%
                      .fuli
                        font-size 30px
                      .yiyuan
                        height 32px
                        border-radius 10px
                        color white
                        font-size 24px
                        padding 0 10px
                        display inline-block
                        background-color #cbb693

                      .tejia
                        font-size 24px
                        color #7f7f7f
                    img
                      width 200px
                      height 200px
                      position absolute
                      top 0px
                      right 0px







        .brand
          width 100%
          background-color #ffffff
          padding-bottom 30px
          .brand-title
            width 100%
            padding 30px
            box-sizing border-box
            overflow hidden
            .left
              float left
              font-size 40px
            .right
              float right
              span
                font-size 30px



          .brand-list
            width 100%

            padding 0px 30px 30px 30px
            box-sizing border-box
            overflow hidden
            li
              float left
              width 49%
              height 260px
              background-image url("./images/brand/c097be14110f769d58245cdad73e15c3.png")
              background-size: 100% 100%
              background-color #f4f4f4
              border-radius 10px
              margin 0px 1px 1px 0px
              a
                width 100%
                height 100%
                position relative
                display block
                .cnt
                  width 100%
                  text-align center
                  position absolute
                  top 0px
                  left 0px
                  padding-top 15px
                  .shangxin
                    width 100%
                    .text
                      color #7F7F7F
                    i
                      background-color #CBB693
                      width 60px
                      height 40px
                      border-radius 10px
                      font-size 20px
                      color #ffffff
                      font-style normal





   .header
       background-color #ffffff
       position fixed
       box-sizing border-box
       top 0
       z-index 1000
       left 0
       width 100%
       .title
          background-color #fff
          width 100%
          height 88px
          display flex
          padding 16px 30px
          box-sizing border-box
          align-items center
          position relative
          z-index 10
          .logo
            margin-left 20px
            img
              width 140px
              height 40px
          .serach
            width 442px
            height 56px
            line-height 56px
            background-color #ededed;
            border-radius 10px
            text-align center
            margin-left 20px
            i
              width 28px
              height 28px
              margin-right 10px
            span
              color  #666
              font-size 27px
          .login
            width 74px
            height 40px
            line-height 40px
            color #b4282d
            border 1px solid #b4282d
            margin-left 20px
            background-color #fff
       .tabWarp
          width 100%
          height 60px
          display flex
          .icon
            width 100px
            height 100%
            padding-left 60px
            background-color #ffffff
            line-height 60px
            text-align center
          .m-tabs
            width 650px
            height 100%
            display flex
            overflow hidden
            .list
              display flex
              padding 0 30px
              li
                height 100%
                white-space nowrap
                padding 0 16px
                line-height 60px
                color #333333
                font-size 30px
                position relative
                &.active
                  &::after
                    content: ' '
                    display block
                    position absolute
                    left 0
                    bottom 0
                    background-color #b4282d
                    width 88px
                    height 4px


       .tabWarp-1
         position relative
         z-index 10
         .quanbu
           width 100%
           padding-left 30px
           height 60px
           line-height 60px
           font-size 30px
           overflow hidden
           box-sizing border-box
           display flex
           justify-content space-between
           background-color #ffffff
           i
             width 100px
             height 60px
             text-align center
         .list
           width 100%
           padding-top 24px
           box-sizing border-box
           background-color #ffffff
           overflow hidden
           li
             float left
             width 148px
             height 54px
             line-height 54px
             background #FAFAFA
             margin-bottom 40px
             margin-left 30px
             text-align center
             border 1px solid #ccc
             &.active
               border 1px solid #b4282d
               color #b4282d
       .mask
          background #000
          opacity .5
          position fixed
          left 0px
          top 0px
          right 0px
          bottom 0px
          z-index 1

</style>
`
