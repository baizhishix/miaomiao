<template>
    <header id="Header">
        <slot></slot>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return{
        }
    },
    props: {
        title: {
            type: String,
            default: '喵喵电影'
        }
    }
}
</script>

<style lang="scss" scope>
#Header{
    width: 100%;
    height: 50px;
    // color: #fff;
    // background: #e54847;
    border-bottom: 1px solid #ccc;
    position: relative;
    z-index: 10;
    h1{
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }
    i{
        position: absolute;
        left: 5px;
        top: 50%;
        margin-top: -13px;
        font-size: 26px;
    }
}
</style>
