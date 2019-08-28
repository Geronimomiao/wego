<template>
    <div class="main-body">
        <a-card :bordered="false" title="WEGO 面试简历填写">
            <div class="components-input-demo-presuffix ant-card-body ">
                <a-form
                        :form="form"
                        layout="vertical"
                        @submit="handleSubmit"
                >
                    <a-form-item label="姓名" class="input-item">
                        <a-input
                                :disabled="this.$store.state.isUpdate"
                                size="large"
                                placeholder="请输入姓名"
                                v-decorator="['name',{rules: [{ required: true, message: '你请填写你的姓名!' }],}]">
                        </a-input>
                    </a-form-item>
                    <a-form-item label="手机号" class="input-item" >
                        <a-input
                                size="large"
                                placeholder="请输入手机号"
                                v-decorator="['phone',{rules: [{ required: true, message: '请填写你的手机号!' },
                                { pattern: new RegExp('^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\\d{8}$'), message: '请填写正确的手机号!' }],}]">
                        </a-input>
                    </a-form-item>
                    <a-form-item label="学号" class="input-item" >
                        <a-input
                                :disabled="this.$store.state.isUpdate"
                                size="large"
                                placeholder="请输入学号"
                                v-decorator="[
            'stuNum',
            {
              rules: [{ required: true, message: '请填写你的学号!' },
              {  pattern: new RegExp('^\\d{10}$'), message: '请填写正确的学号' }
              ],
            }
          ]"
                        >

                        </a-input>
                    </a-form-item>
                    <a-form-item label="专业/班级" >
                        <div class="select">
                            <a-select
                                    class="major"
                                    size="large"
                                    v-decorator="[
          'major',
          {rules: [{ required: true, message: '请选择你的专业!' }]}
        ]"
                                    placeholder="请选择你的专业">
                                <a-select-option value="软件">
                                    软件
                                </a-select-option>
                                <a-select-option value="物联">
                                    物联
                                </a-select-option>
                                <a-select-option value="网络">
                                    网络
                                </a-select-option>
                                <a-select-option value="计科">
                                    计科
                                </a-select-option>
                                <a-select-option value="其他">
                                    其他
                                </a-select-option>
                            </a-select>
                            <a-input
                                    class="class-num"
                                    size="large"
                                    placeholder="请输入班级"
                                    v-decorator="[
            'classNum',
            {
              rules: [{ required: true, message: '请填写你的班级!' }],
            }
          ]"
                            >

                            </a-input>
                        </div>

                    </a-form-item>
                    <a-form-item label="性别" >
                        <a-radio-group v-decorator="['sex'
                        ,{rules: [{ required: true, message: '请选择你的性别!' }]}
                        ]">
                            <a-radio value="男">
                                男
                            </a-radio>
                            <a-radio value="女">
                                女
                            </a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="曾获奖项" class="testarea-item" >
                        <a-textarea
                                v-decorator="['reward'
                        ]"
                                placeholder="请在此写下曾经获得的奖项"
                                :autosize="{ minRows: 5, maxRows: 5 }" />
                    </a-form-item>
                    <a-form-item label="兴趣爱好" class="testarea-item" >
                        <a-textarea
                                v-decorator="['hobby'
                        ]"
                                placeholder="请在此写下你的兴趣爱好"
                                :autosize="{ minRows: 5, maxRows: 5 }" />
                    </a-form-item>
                    <a-form-item label="想对我们说的话" class="testarea-item" >
                        <a-textarea
                                v-decorator="['summary'
                        ]"
                                placeholder="请在此写下你想和我们说的话，你的每一句我们都会仔细查看"
                                :autosize="{ minRows: 5, maxRows: 5 }" />
                    </a-form-item>
                    <a-form-item class="pull-left">
                        <a-button
                                v-if="!this.$store.state.isUpdate"
                                type="primary"
                                html-type="submit"
                                class=""
                        >
                            提交
                        </a-button>

                        <a-button
                                v-if="this.$store.state.isUpdate"
                                type="primary"
                                @click="updateInfo"
                        >
                            提交修改
                        </a-button>
                    </a-form-item>

                </a-form>
            </div>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "resume",
        data(){
            return{
                form:'',
                message:'',
            }
        },
        created(){
            this.form = this.$form.createForm(this, {
                onFieldsChange: (_, changedFields) => {
                    this.$emit('change', changedFields);
                },
                mapPropsToFields: () => {
                    return {
                        name: this.$form.createFormField({
                            value: this.name,
                        }),
                        phone: this.$form.createFormField({
                            value: this.phone,
                        }),
                        stuNum: this.$form.createFormField({
                            value: this.stuNum,
                        }),
                        classNum: this.$form.createFormField({
                            value: this.classNum,
                        }),
                        major: this.$form.createFormField({
                            value: this.major,
                        }),
                        sex: this.$form.createFormField({
                            value: this.sex,
                        }),
                        reward: this.$form.createFormField({
                            value: this.reward,
                        }),
                        hobby: this.$form.createFormField({
                            value: this.hobby,
                        }),
                        summary: this.$form.createFormField({
                            value: this.summary,
                        }),
                    };
                },
                onValuesChange: (_, values) =>{
                    // console.log(values);
                    // Synchronize to vuex store in real time
                    // this.$store.commit('update', values)
                },
            });
        },
        watch: {
            name (val) {
                this.form.setFieldsValue({name: val});
            },
            phone(val) {
                this.form.setFieldsValue({phone: val});
            },
            stuNum (val) {
                this.form.setFieldsValue({stuNum: val});
            },
            major (val) {
                this.form.setFieldsValue({major: val});
            },
            classNum (val) {
                this.form.setFieldsValue({classNum: val});
            },
            sex (val) {
                this.form.setFieldsValue({sex: val});
            },
            reward (val) {
                this.form.setFieldsValue({reward: val});
            },
            hobby (val) {
                this.form.setFieldsValue({hobby: val});
            },
            summary (val) {
                this.form.setFieldsValue({summary: val});
            },

        },
        computed: {
            name () {
                return this.$store.state.message.name;

            },
            phone() {
                return this.$store.state.message.phone;

            },
            stuNum() {
                return this.$store.state.message.stuNum;

            },
            major() {
                return this.$store.state.message.major;

            },
            classNum() {
                return this.$store.state.message.classNum;

            },
            sex() {
                return this.$store.state.message.sex;

            },
            reward() {
                return this.$store.state.message.reward;

            },
            hobby() {
                return this.$store.state.message.hobby;

            },
            summary() {
                return this.$store.state.message.summary;

            },
        },
        methods:{
            emitEmpty () {
                this.name= ''
            },
            handleSubmit (e) {
                e.preventDefault();
                let that=this;
                this.form.validateFields((err, values) => {
                    if (!err) {
                        // console.log('Received values of form: ', values);
                        axios.get('/submit/submitInfo',{
                            params:values
                        })
                            .then(function (res) {
                                // console.log(res.data);
                                if(res.data.state){
                                    that.$store.commit('update', values);
                                    that.$router.push('myresume');
                                    localStorage.setItem("name",values.name);
                                    localStorage.setItem("stuNum",values.stuNum);
                                    that.$store.state.navIndex=1;
                                    that.$store.state.isUpdate=true;
                                    that.$router.go(0)

                                }else {
                                    that.$notification.open({
                                        message: '错误提醒',
                                        description: res.data.msg,
                                        icon: '<a-icon type="close-circle" style="color: red" />',
                                    });
                                }

                            })
                            .catch(function (err) {
                                console.log(err)
                            })
                    }
                });
            },
            updateInfo (e) {
                e.preventDefault();
                let that=this;
                this.form.validateFields((err, values) => {
                    if (!err) {
                        // console.log('Received values of form: ', values);
                        axios.get('/submit/updateInfo',{
                            params:values
                        })
                            .then(function (res) {
                                // console.log(res.data);
                                if(res.data.state){
                                    that.$store.commit('update', values);
                                    that.$router.push('myresume');
                                    that.$store.state.navIndex=1;
                                    that.$store.state.isUpdate=true;
                                }else {
                                    that.$notification.open({
                                        message: '错误提醒',
                                        description: '更新失败，如有问题，请联系官方',
                                        icon: '<a-icon type="close-circle" style="color: red" />',
                                });
                                }

                            })
                            .catch(function (err) {
                                console.log(err)
                            })
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .main-body {
        box-sizing: border-box;
        padding: 40px 200px;
        width: 100%;
    }
    .cus-card-body{
        width: 70%;
    }
    .components-input-demo-presuffix .anticon-close-circle {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s;
        font-size: 12px;
    }
    .components-input-demo-presuffix .anticon-close-circle:hover {
        color: #999;
    }
    .components-input-demo-presuffix .anticon-close-circle:active {
        color: #666;
    }

    .input-item {
        width: 50%;
    }

    .testarea-item {
        width: 60%;
    }

    .select {
        display: flex;
    }

    .select > .major {
        margin-right: 30px;
        width: 20%;
    }
    .select > .class-num {
        width: 20%;
    }

    .ant-form-item:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 1300px) {
        .main-body {
            padding: 0;
        }
    }

    @media screen and (max-width: 850px) {
        .ant-card-body {
            padding: 12px;
        }

        .input-item {
            width: 100%;
        }

        .testarea-item {
            width: 100%;
        }

        .select > .major {
            margin-right: 30px;
            width: 50%;
        }
        .select > .class-num {
            width: 50%;
        }
        .pull-left {
            -ms-text-align-last: right;
            text-align-last: right;
        }
    }

</style>
