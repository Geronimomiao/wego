<template>
    <div class="search-box">
        <a-input-search
                placeholder="输入姓名或学号"
                style="width: 300px;margin: 30px 0"
                @search="onSearch"
        />
        <a-card style="width: 80%">
            <a-table :columns="columns"
                     :dataSource="data"
                     :loading="loading">
            <span slot="tag" slot-scope="tag,record, index">
                <a-tag  color="blue" :key="tag" @click="lookResume(record,index)">查看简历</a-tag>
            </span>
            </a-table>
        </a-card>

    </div>
</template>

<script>
    const columns = [{
        title: 'ID',
        dataIndex: 'id',
    },{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'StuNum',
        dataIndex: 'stu_num',
    }, {
        title: 'Sex',
        dataIndex: 'sex',
    },{
        title: 'Phone',
        dataIndex: 'phone',
    },{
        title: 'Operation',
        dataIndex: 'tag',
        scopedSlots: { customRender: 'tag' },
    }];
    export default {
        name: "managesearch",
        data(){
            return{
                data: [],
                loading: false,
                columns,
            }
        },
        methods:{
            onSearch(val){
                let that=this;
                let token=localStorage.getItem('token');
                axios.get('/select/selectByNameOrStuNum',{
                    params:{
                        val:val,
                        token:token
                    }
                })
                    .then((data) => {
                        console.log(data);
                        if(data.data.state){
                            that.loading = false;
                            that.data = data.data.content;
                        }else{
                            that.$router.push({name:'login'});
                        }

                    })
                    .catch()
            },
            lookResume(...res){
                console.log(res);
                this.$store.state.key=3;
                this.$store.state.interviewee=res[0];
                let nav=this.$store.state.nav;
                if(nav.length==0){
                    this.$store.state.nav.push({title:'简历展示',icon:'inbox',path:'resumeShow',key:'3'});
                }else {
                    for(let item in nav ){
                        if(nav[item].title=='简历展示'){
                            break;
                        }
                        if(item==(nav.length-1)){
                            this.$store.state.nav.push({title:'简历展示',icon:'inbox',path:'resumeShow',key:'3'});
                        }

                    }
                }
                this.$router.push({name:'resumeShow'});

            }
        }
    }
</script>

<style scoped lang="stylus">
    .search-box
        display flex
        flex-direction column
        align-items center
</style>