<template>
    <div class="login-box">
        <div class="input-box">
            <div>姓名:</div>
            <a-input
                    style="width: 70%;margin-left:10px "
                    v-model="name"
                    placeholder="Please input your name"
            />
        </div>
        <div class="input-box">
            <div>学号:</div>
            <a-input
                    style="width: 70%;margin-left:10px"
                    v-model="stuNum"
                    placeholder="Please input your stuNum"
            />
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                name:'',
                stuNum:''
            }
        },
        watch:{
            name(newVal,oldVal){
                this.$emit('getName',newVal);
            },
            stuNum(newVal,oldVal){
                this.$emit('getStuNum',newVal);
            }

        },
        methods: {},
    }
</script>

<style scoped>
.login-box{
    display: flex;
    flex-direction: column;
}
.input-box{
    display: flex;
    padding: 10px;
    align-items: center;
}
</style>