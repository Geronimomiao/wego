<template>
    <div class="main-card">
        <a-card v-if="this.$store.state.interviewee" :title="this.$store.state.interviewee.name" :bordered="false" style="width: 80%;margin-bottom: 30px">
            <p>{{this.$store.state.interviewee.sex}}  |  {{this.$store.state.interviewee.major}}{{this.$store.state.interviewee.class_num}}</p>
            <p>学号：{{this.$store.state.interviewee.stu_num}}</p>
            <p><a-icon type="phone" />：{{this.$store.state.interviewee.phone}}</p>
            <div class="content-block">
                <p class="content-block-header">所获奖项:</p>
                <p class="content-block-content">
                    {{this.$store.state.interviewee.reward}}
                </p>
            </div>
            <div class="content-block">
                <p class="content-block-header">兴趣爱好:</p>
                <p class="content-block-content">
                    {{this.$store.state.interviewee.hobby}}
                </p>
            </div>
            <div class="content-block">
                <p class="content-block-header">想说的话:</p>
                <p class="content-block-content">
                    {{this.$store.state.interviewee.summary}}
                </p>
            </div>
        </a-card>
        <div v-else class="no-box">
            请先选择需查看的简历
            <a-button ghost @click="toView" style="margin-top: 15px">选择简历</a-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resumeShow",
        methods:{
            toView(){
                this.$store.state.key=1;
                let nav=this.$store.state.nav;
                if(nav.length==0){
                    this.$store.state.nav.push({title:'报名名单',icon:'pie-chart',path:'managelist',key:'1'});
                }else {
                    for(let item in nav ){
                        if(nav[item].title=='报名名单'){
                            break;
                        }
                        if(item==(nav.length-1)){
                            this.$store.state.nav.push({title:'报名名单',icon:'pie-chart',path:'managelist',key:'1'});
                        }

                    }
                }
                this.$router.push({name:'managelist'});
            }
        }
    }
</script>

<style scoped lang="stylus">
    .main-card
        display flex
        justify-content center
        width 100%
        padding 30px
        .content-block
            display block;
            box-sizing border-box;
            padding-top 5px
            .content-block-header
                font-size 18px;
                color black
            .content-block-content
                text-indent: 2em;
        .no-box
            display flex;
            flex-direction column
            width 80%;
            height 530px;
            justify-content center
            align-items center
            color white
            font-size 25px;
            background: rgb(190, 200, 200);

</style>
