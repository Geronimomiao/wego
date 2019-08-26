<template>
    <div class="main-hearder">
        <div class="main-title">Wego</div>
        <a-button class="change-bt" type="primary" @click="()=>{this.$store.state.collapsed=!this.$store.state.collapsed}" >
            <a-icon :type="this.$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
    </div>
</template>

<script>
    export default {
        name: "mahearder"
    }
</script>

<style scoped lang="stylus">
.main-hearder
    display flex
    align-items center
    height 50px
    width 100%
    background-color #001529
    color white
    box-sizing border-box
    .main-title
        width 185px
        display flex
        justify-content center
        font-size 18px

</style>