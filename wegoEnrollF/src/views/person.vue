<template>
    <div class="main-body">
        <a-card v-if="JSON.stringify(this.$store.state.message) != '{}'" :bordered="false" title="我的简历" style="min-height: 500px">
            <div >
                <a-collapse defaultActiveKey="1" :bordered="false">
                    <a-collapse-panel header="基本信息" key="1">
                        <div class="info-box">
                            <div class="info-box-name">{{this.$store.state.message.name}}</div>
                            <div class="info-box-sex">{{this.$store.state.message.sex}} | {{this.$store.state.message.major}} {{this.$store.state.message.classNum}}</div>
                            <div class="info-box-sex">学号：{{this.$store.state.message.stuNum}}</div>
                            <div class="info-box-phone">
                                <!--<div class="info-box-phone-box"><a-icon type="qq" />：739646645</div>-->
                                <!--<div class="info-box-phone-box"><a-icon type="wechat" />：739646645</div>-->
                                <div class="info-box-phone-box"><a-icon type="phone" />：{{this.$store.state.message.phone}}</div>
                            </div>

                        </div>
                    </a-collapse-panel>
                    <a-collapse-panel header="所获奖项" key="2" :disabled='false'>
                        <div class="content-box">
                            {{this.$store.state.message.reward}}
                        </div>
                    </a-collapse-panel>
                    <a-collapse-panel header="兴趣爱好" key="3">
                        <div class="content-box">
                            {{this.$store.state.message.hobby}}
                        </div>
                    </a-collapse-panel>
                    <a-collapse-panel header="想说的话" key="4">
                        <div class="content-box">
                            {{this.$store.state.message.summary}}
                        </div>
                    </a-collapse-panel>
                </a-collapse>
            </div>

        </a-card>
        <div v-if="JSON.stringify(this.$store.state.message) == '{}'" class="default-box">
            <div class="default-box-text">您的简历还未填写</div>
            <a-button ghost @click="toWrite" >去填写</a-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "person",
        data(){
          return{

          }
        },
        created() {
            // console.log(this.$store.state);
        },
        methods:{
            toWrite(){
                this.$router.push({name:'resume'})
                this.$store.state.navIndex=0;
            }
        }
    }
</script>

<style scoped>
    .main-body {
        box-sizing: border-box;
        padding: 40px 200px;
        width: 100%;
    }
    .info-box{
        display: block;
        box-sizing: border-box;
        padding: 20px 30px;
    }
    .default-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgb(190, 200, 200);
        justify-content: center;
        align-items: center;
        min-height: 500px;
        font-weight: 300;
    }
    .default-box-text{
        color: white;
        font-size: 35px;
        line-height: 100px;

    }
    .info-box-name{
        font-size: 25px;
        line-height: 50px;
        color: #262626;
    }
    .info-box-phone{
        display: flex;
        line-height: 30px;
        color: #262626;
    }
    .info-box-sex{
        line-height: 30px;
    }
    .info-box-phone-box{
        margin-right: 20px;
    }
    .content-box{
        text-indent: 2em;
        box-sizing: border-box;
        padding: 0 30px;
    }
</style>
