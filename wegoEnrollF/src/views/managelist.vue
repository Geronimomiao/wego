<template>
    <div style="box-sizing:border-box;padding: 20px">
        <a-table :columns="columns"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 @change="handleTableChange"
        >
            <span slot="tag" slot-scope="tag,record, index">
                <a-tag  color="blue" :key="tag" @click="lookResume(record,index)">查看简历</a-tag>
            </span>
        </a-table>
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
        name: "managelist",
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
            }
        },
        mounted() {
            this.fetch();
        },
        methods:{
            handleTableChange (pagination) {
                console.log(pagination);
                const pager = { ...this.pagination };
                console.log(pager);
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch();
            },
            fetch () {
                let that=this
                this.loading = true;
                let token=localStorage.getItem('token');
                axios.get('/select/selectAll',{
                    params:{
                        token:token
                    }
                })
                    .then((data) => {
                        console.log(data);
                        if(data.data.state){
                            const pagination = { ...that.pagination };
                            pagination.total = data.data.content.length;
                            pagination.pageSize=8;
                            that.loading = false;
                            that.data = data.data.content;
                            that.pagination = pagination;
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

<style scoped>

</style>