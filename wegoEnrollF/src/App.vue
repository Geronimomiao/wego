<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">

      <router-view ></router-view>

    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    }
  },
  created(){

  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f7fa;
  width: 100%;
}
</style>
