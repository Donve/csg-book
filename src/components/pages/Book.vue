<template>
  <div class="book">
    <div class="warp">
      <div class="top">
        <span>读书好！好读书！读好书！</span>
        <div class="topNav"><router-link to="/reg">注册</router-link> | <router-link active-Class="active" to="/login">登录</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import Reg from 'components/common/reg/Reg.vue'
import Login from 'components/common/login/Login.vue'

export default {
  name: 'Book',
  data () {
    return {}
  },
  compontens:{
    Reg,Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '~common/style/index.less';
.book{
  width:100%;
  height:100%;
  .warp{
    width:100%;
    height:32px;
    background:#f5f5f5;
    .top{
      width:1190px;
      height:32px;
      line-height:32px;
      margin:0 auto;
      color:#999999;
      .topNav{
        float:right;
        a{
          display:inline-block;
          color:#999999;
          
        }
        a:hover{
            color:orange;
          }
      }
    }
    
  }
}
</style>
