<template>
    <div class='tab'>
          <router-link 
           tag='div'
           to='/reg'
           active-class='sel'
          >注册</router-link>
          <router-link 
           tag='div'
           to='/login'
           active-class='sel'
          >登录</router-link>
          <router-link 
           tag='div'
           to='/book'
           active-class='sel'
          >book</router-link>
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="less" scoped>
@import '~common/style/index.less';
.tab{
    display: flex;
    font-size:@fontSize-l;
    text-align: center;
    justify-content: space-evenly;
    background:#000;
    color:#fff;
    div{
        .l_h(50);
    }
    .sel{
        color:@fontColorSel;
    }
}

</style>
