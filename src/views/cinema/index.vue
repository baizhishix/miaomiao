<template>
    <div id="main">
        <Header title="喵喵影院"></Header>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">全城&nbsp;<i class="iconfont icon-lower-triangle"></i></div>
                <div class="brand_switch">品牌&nbsp;<i class="iconfont icon-lower-triangle"></i></div>
                <div class="feature_switch">特色&nbsp;<i class="iconfont icon-lower-triangle"></i></div>
            </div>
            <CiList></CiList>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/TabBar';
import CiList from '@/components/CiList';

export default {
    name: 'cinema',
    components: {
        Header,
        Footer,
        CiList,
    },
}
</script>

<style lang="scss" scope>
#main{
    #content{
        .cinema_menu{
            width: 100%;
            height: 45px;
            border-bottom:1px solid #e6e6e6;
            display: flex;
            justify-content:space-around;
            align-items:center;
            background:white;
        }
    }
}
</style>