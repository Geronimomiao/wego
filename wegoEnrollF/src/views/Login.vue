<template>
    <div class="main-login">
        <a-card :bordered="false" style="width: 300px;height: 250px;margin-top: -50px">
            <p>用户名:</p>
            <a-input placeholder="请输入用户名" style="margin-bottom:5px " v-model="username"/>
            <p>密码:</p>
            <a-input placeholder="请输入密码" type="password" style="margin-bottom:5px " v-model="password"/>
            <div style="display:flex; padding: 10px 0;justify-content: center;box-sizing: border-box">
                <a-button type="primary" @click="login">登录</a-button>
            </div>

        </a-card>
    </div>
</template>

<script>


    export default {
        name: "Login",
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            login(){
                let that=this;
                let info={
                    username: this.username,
                    password: this.password
                };
                axios.get("/manage/login",{
                    params:info
                })
                    .then(function (data) {
                        console.log(data);
                        if(data.data.state){
                            localStorage.setItem('token',data.data.token);
                            that.$router.push('/manage');
                            that.$router.go(0)
                        }else {
                            that.$message.error('Username and password error');
                        }

                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .main-login
        display flex;
        width 100%;
        height 100vh;
        justify-content center
        align-items center
        background-image: linear-gradient(to right , #7A88FF, #7AFFAF);

</style>