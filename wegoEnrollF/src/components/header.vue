<template>
    <div class="cus-header">
        <div class="nav-all">
            <div class="cus-nav">
                <div class="nav-box">
                    <div class="wego-logo"></div>
                </div>
                <div class="nav-box" :class="this.$store.state.navIndex==0?'click':''" @click="checkNav(0)">简历填写</div>
                <div class="nav-box" :class="this.$store.state.navIndex==1?'click':''" @click="checkNav(1)">查看简历</div>
            </div>
        </div>
        <a-dropdown>
            <div class="Login-box" @click="showLogin">{{username}}</div>
            <a-menu slot="overlay" v-if="username!='Login'">
                <a-menu-item>
                    <div @click="signOut">注销</div>
                </a-menu-item>
            </a-menu>
        </a-dropdown>

        <a-modal
                :visible="visible"
                @ok="handleOk"
                @cancel="handleCancel"
        >
            <login @getName="getName" @getStuNum="getStuNum"></login>
        </a-modal>
    </div>
</template>

<script>

  import login from './login.vue';

  export default {
    name: "header",
    data() {
      return {
        visible: false,
        name: '',
        stuNum: '',
        username: 'Login'
      }
    },
    created() {
      if (localStorage.getItem("name")) {
        this.username = localStorage.getItem("name");
      }
    },
    components: {
      login
    },
    methods: {
      checkNav(index) {
        this.$store.state.navIndex = index;
        if (index == 0) {
          this.$router.push({name: 'resume'})
        } else {
          this.$router.push('myresume')
        }
      },
      showLogin() {
        if (this.username != 'Login') {

        } else {
          this.visible = true
        }
      },
      handleCancel(e) {
        this.visible = false
      },
      handleOk(e) {
        this.username = this.name;
        let that = this;
        axios.get('/submit/userLogin', {
          params: {
            name: that.name,
            stuNum: that.stuNum
          }
        })
          .then(function (res) {
            if (res.data.state) {
              let content = {};
              content.name = res.data.content[0].name;
              content.sex = res.data.content[0].sex;
              content.major = res.data.content[0].major;
              content.classNum = res.data.content[0].class_num;
              content.stuNum = res.data.content[0].stu_num;
              content.phone = res.data.content[0].phone;
              content.reward = res.data.content[0].reward;
              content.hobby = res.data.content[0].hobby;
              content.summary = res.data.content[0].summary;
              that.$store.state.message = content;
              that.$store.state.isUpdate = true;
              localStorage.setItem("name", that.name);
              localStorage.setItem("stuNum", that.stuNum);
            } else {
              that.name = '';
              that.stuNum = '';
              that.username = 'Login';
              that.$message.error('还没有提交简历,请先提交简历!');
            }
          })
          .catch(function (err) {
            console.log(err)
          })
        this.visible = false;
      },
      getName(data) {
        this.name = data;
      },
      getStuNum(data) {
        this.stuNum = data;
      },
      signOut() {
        localStorage.removeItem("name");
        localStorage.removeItem("stuNum");
        this.username = 'Login';
        this.$store.state.message = {};
        this.$store.state.isUpdate = false;
      }
    }
  }
</script>

<style scoped>
    .cus-header {
        display: flex;
        height: 80px;
        width: 100%;
        padding: 0 200px;
        background-color: white;
        align-items: center;
    }

    .nav-all {
        display: flex;
        height: 100%;
        width: 80%;
        flex-grow: 1;
        align-items: center;
    }

    .wego-logo {
        display: block;
        background-image: url("../assets/wego_logo.png");
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
    }

    .cus-nav {
        display: flex;
        height: 100%;
        width: 28%;
    }

    .nav-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0;
        flex-grow: 1;
        font-size: 18px;
        cursor: pointer;
    }

    .click {
        color: #008cff;
    }

    .Login-box {
        display: flex;
        width: 100px;
        height: 40%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>
