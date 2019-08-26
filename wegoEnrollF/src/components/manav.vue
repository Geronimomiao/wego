<template>
    <div style="background-color: #001529;">

        <a-menu
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['sub1']"
                :selectedKeys="[''+this.$store.state.key]"
                mode="inline"
                theme="dark"
                :inlineCollapsed="this.$store.state.collapsed"
        >
            <a-menu-item v-for="(item,index) in siggleList" :key="item.key" @click="toView(item)">
                <a-icon :type="item.icon" />
                <span>{{item.title}}</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "manav",
        data () {
            return {
                siggleList:[
                    {title:'报名名单',icon:'pie-chart',path:'managelist',key:'1'},
                    {title:'报名查询',icon:'desktop',path:'managesearch',key:'2'},
                    {title:'简历展示',icon:'inbox',path:'resumeShow',key:'3'},
                ]
            }
        },
        methods: {
            toView(obj){
                let nav=this.$store.state.nav;
                if(nav.length==0){
                    this.$store.state.nav.push(obj);
                }else {
                    for(let item in nav ){
                        if(nav[item].title==obj.title){
                            break;
                        }
                        if(item==(nav.length-1)){
                            this.$store.state.nav.push(obj);
                        }

                    }
                }
                this.$store.state.key=obj.key;
                this.$router.push({name:obj.path});

            }
        },
    }
</script>

<style scoped>

</style>