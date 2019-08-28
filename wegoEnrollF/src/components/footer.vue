<template>
    <div class="cus-footer">
        © 2019  WEGO   天津工业大学wego技术团队  TJPUWEGO<br>
        津ICP备17010278号-1
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .cus-footer{
        display: flex;
        height: 110px;
        background-color: white;
        padding: 0 200px;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #999;
        text-align: center;
    }

    @media screen and (max-width: 1300px) {
        .cus-footer {
            padding: 0;
        }
    }

</style>
