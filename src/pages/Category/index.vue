<template>
<div class="p-cateList">
  <!--上面-->
  <div class="hdWraper">
    <div class="serach" @click="$router.push('/search')">
      <i class="iconfont icon-search-1-copy"></i>
      <span>搜索商品，共221100款好物</span>
    </div>
  </div>
  <!--下面-->
  <div class="m-cateContainer">
    <!--左边-->
    <div class="m-cateNavVertWrap">
      <div class="m-content">
        <ul class="list">
          <li @click="categoryIndex=index" class="item" v-for="(category,index) in categoryL1List" :key="index">
            <a>{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <!--右边-->
    <div class="m-subCateList" v-if="categoryL1List.length">
      <div class="m-subCateinner">
        <div class="banner" :style="{backgroundImage:`url(${categoryL1List[categoryIndex].bannerUrl})`}"></div>
        <div class="cateList">
          <ul class="list">
            <li class="cateItem" v-for="(subCategory,index) in categoryL1List[categoryIndex].subCateList" :key="index">
              <a>
                <div class="cateImg" :style="{backgroundImage:`url(${subCategory.bannerUrl})`}"></div>
                <div class="name">{{subCategory.name}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import BScorll from 'better-scroll'
  import {getCategory} from '../../api/index'
  export default {
    data(){
      return{
        categoryL1List:[],
        categoryIndex:0
      }
    },
    async mounted(){
      const result=  await getCategory()
      if(result.code===0){
        this.categoryL1List=result.data.categoryL1List
      }
      new BScorll('.m-content',{
        click:true
      })

    },
    watch:{
      categoryL1List(){
        this.$nextTick(()=>{
          new BScorll('.m-subCateList',{
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.p-cateList
  width 100%
  height 100%
  background-color #ffffff
  .hdWraper
    padding 0px 30px
    box-sizing border-box
    width 100%
    height 88px
    background-color #ffffff
    display flex
    align-items center
    z-index 10
    position relative
    .serach
      height 56px
      width 100%
      line-height 56px
      background-color #ededed;
      border-radius 10px
      text-align center
      i
        width 28px
        height 28px
        margin-right 10px
      span
        color  #666
        font-size 27px
  .m-cateContainer
    width 100%
    display flex
    .m-cateNavVertWrap
      width 162px
      height 1146px
      background-color #ffffff
      .m-content
        width 100%
        height 100%
        .list
          width 100%
          padding 40px 0px
          .item
            width 100%
            height 50px
            text-align center
            margin-top 40px
            &:first-child
              margin-top 0px
            a
              color #ab2b2b
              display block
              width 100%
              height 50px
              line-height 50px
              font-size 20px
              overflow hidden

    .m-subCateList
      width 588px
      height 1146px
      padding 30px 30px 21px 30px
      box-sizing border-box
      .m-subCateinner
        width 100%
        padding-top 30px
        .banner
          width 100%
          height 192px
          margin-bottom 32px
          background-size 100% 100%

        .cateList
          width 100%
          .list
            width 100%
            overflow hidden
            .cateItem
              width 144px
              height 216px
              float left
              margin-right 34px
              &:nth-child(3n)
                margin-right 10px
              a
                .cateImg
                  width 144px
                  height 144px
                  background-image url("./images/35d4b6b281f7ab4c5524e8d1c317dd1d.png")
                  background-size 100% 100%
                .name
                  width 144px
                  height 72px
                  text-align center
                  color #333333




</style>
