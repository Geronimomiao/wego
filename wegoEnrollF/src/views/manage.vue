<template>
    <div class="main-body">
        <mahearder></mahearder>
        <div class="middle-body">
            <manav></manav>
            <div class="content-body">
                <div class="cus-nav">
                    <div v-for="(item,index) in this.$store.state.nav" :key="index" class="nav-bean"
                         :class="isClick(item)?'click':''"
                         @click="toView(item)">
                        <span>{{item.title}}</span>
                        <a-icon type="close" @click.stop="closeView(item,index)"/>
                    </div>
                </div>
                <div style="background-color: #f5f7fa;width: 100%;height:0;flex-grow: 1; box-sizing: border-box;overflow: auto">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <mafooter></mafooter>

    </div>
</template>

<script>
    import manav from '../components/manav';
    import mahearder from '../components/mahearder';
    import mafooter from '../components/mafooter';

    export default {
        name: "manage",
        data(){

        },
        components:{
            manav,
            mahearder,
            mafooter
        },
        created(){
           let token=localStorage.getItem('token');
           console.log(token);
           if(!token){
               this.$router.push({name:'login'});
           }
        },
        methods:{
            toView(obj){
                this.$router.push({name:obj.path});
                this.$store.state.key=obj.key;
            },
            closeView(obj,index){
                this.$store.state.nav.splice(index,1);
                this.$router.push({name:'manage'});
                this.$store.state.key=null;
            },
            isClick(obj){
                return this.$store.state.key==obj.key;
            }
        }
    }
</script>

<style scoped lang="stylus">
.main-body
    width 100%
    height 100vh;
    box-sizing border-box
    background-color white
    display flex;
    flex-direction column
    .middle-body
        display flex
        width 100%
        flex-grow 1
        .content-body
            display flex
            flex-direction column
            width 0
            height 100%
            flex-grow 1
            .cus-nav
                display flex
                width 100%
                height 40px
                background-color #EFEEF0
                border-bottom 1px solid #e2e2e2
                .nav-bean
                    display flex
                    width 120px
                    align-items center
                    box-sizing border-box
                    padding-left 20px
                    border-right  1px solid #e2e2e2
                    span
                        padding-right 20px

.click{
    background-color #1890ff !important
    color white !important
}
</style>