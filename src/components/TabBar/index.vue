<template>
    <footer id="Footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return{

        }
    }
}
</script>

<style lang="scss" scope>
#Footer{
    width: 100%;
    height: 50px;
    background: white;
    border-top: 2px #ebe8e3 solid;
    position: fixed;
    left: 0;
    bottom: 0;
    ul{
        display: flex;
        text-align: center;
        height: 50px;
        align-items: center;
        li{
            flex: 1;
            height: 40px;
            i{
                font-size: 20px;
            }
            p{
                font-size: 12px;
                line-height: 18px;
            }
        }
        .active{
            color: #f03d37;
        }
        .router-link-active{
            color: #f03d37;
        }
    }
}
</style>