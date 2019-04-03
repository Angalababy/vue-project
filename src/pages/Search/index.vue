<template>
<div class="search">
  <!--上面-->
  <div class="search-topBar">
    <div  class="search-tijiao">
      <div class="search-inner">
        <i class="iconfont icon-search-1-copy"></i>
        <input ref="search" type="text" v-model="value" placeholder="应季毛毛虫鞋84元起">
      </div>
    </div>
    <span @click="$router.back()">取消</span>
  </div>
  <!--下面-->
  <div class="m-searchSuggestionsViews">
    <div class="m-searchSuggestions">
      <h3>热门搜索</h3>
      <nav class="list">
        <a v-for="(item,index) in searchHotList" :key="index">{{item.keyword}}</a>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
  import {getSearch} from '../../api'
  export default {
    data(){
      return{
        searchHotList:[],
        value:''
      }
    },
    //发送ajax请求
    async mounted(){
      //获取请求数据
    const response=  await getSearch()
      console.log(response);
      this.searchHotList=response.data.hotKeywordVOList
      this.$refs.search.onkeydown=async (e)=>{
        if(e.keyCode===13){
          window.location.href=`http://m.you.163.com/search?keyword=${this.value}`
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.search
  width 100%
  height 100%
  background-color #f4f4f4
  position fixed
  .search-topBar
    width 100%
    height 88px
    display flex
    justify-content space-between
    align-items center
    padding 0 30px
    box-sizing border-box
    background-color #fff
    .search-tijiao
      .search-inner
        width 564px
        height 56px
        padding 0px 20px
        background-color #f4f4f4
        display flex
        justify-content space-between
        align-items center
        input
          width 518px
          height 40px
          border 0
          background-color #f4f4f4
          outline none
        i
          margin-top 4px
    span
      font-size 30px
  .m-searchSuggestionsViews
    width 100%
    height 490px
    background-color #f4f4f4
    margin-top 2px
    .m-searchSuggestions
      margin-bottom 20px
      background-color #fff
      h3
        width 100%
        height 90px
        color #999
        display flex
        align-items center
        padding 0px 30px 30px 30px
        box-sizing border-box
      .list
        width 100%
        padding-left 30px
        box-sizing border-box
        overflow hidden
        a
          float left
          height 45px
          line-height 45px
          border 1px solid #999
          border-radius 4px
          padding 0px 15px
          margin-bottom 32px
          margin-right 32px
          color #333333
          &.active
            color red
            border-color red


</style>
