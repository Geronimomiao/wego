<template>
    <div>
        <cus-header></cus-header>

        <router-view ></router-view>

        <cus-footer></cus-footer>
    </div>

</template>

<script>
    import CusHeader from '../components/header'
    import CusFooter from '../components/footer'

    export default {
        name: "enroll",
        data() {
            return {

            }
        },
        created(){
            console.log('同学，祝贺你喜提彩蛋~\n' +
                '或许你们还在犹豫是否加入，我会坦诚的告诉你我们超酷;\n' +
                '在这里不仅能学到各种计算机技术，还能组队参加各种比赛收获奖励与朋友;\n' +
                '在这里做自己，欢迎来到Wego！');
            console.log('%c 私我 私我 1030057982，有惊喜哦！！！','background:black;color:#bada55');
            let name=localStorage.getItem('name');
            let stuNum=localStorage.getItem('stuNum');
            let that=this;
            if(this.$route.name=='myresume'){
                this.$store.state.navIndex=1;
            }else {
                this.$store.state.navIndex=0;
            }
            if(name&&stuNum){
                axios.get('/submit/userLogin',{
                    params:{
                        name:name,
                        stuNum:stuNum
                    }
                })
                    .then(function (res) {
                        if(res.data.state){
                            let content={};
                            content.name=res.data.content[0].name;
                            content.sex=res.data.content[0].sex;
                            content.major=res.data.content[0].major;
                            content.classNum=res.data.content[0].class_num;
                            content.stuNum=res.data.content[0].stu_num;
                            content.phone=res.data.content[0].phone;
                            content.reward=res.data.content[0].reward;
                            content.hobby=res.data.content[0].hobby;
                            content.summary=res.data.content[0].summary;
                            that.$store.state.message=content;
                            that.$store.state.isUpdate=true;
                        }
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        },
        components: {
            CusHeader,
            CusFooter,
        }
    }
</script>

<style scoped>

</style>
