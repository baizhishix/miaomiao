<template>
    <div class="movie_body">
        <loader v-if="isLoading"></loader>
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                <li class="pullDown">{{ pullDomnMsg }}</li>
                <li v-for="item in comingList" :key="item.id">
                    <div class="pic_show" @tap="handleToDetail(item.id)">
                        <img :src="item.img | setWH('128.180')" alt="">
                    </div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail(item.id)">{{item.nm}}&nbsp;<img v-if="item.version == 'v3d'" src="@/assets/maxs.png" /></h2>
                        <p><span class="person">{{item.wish}}</span>&nbsp;人想看</p>
                        <p>主演：{{item.star}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div class="btn_pre">预告</div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
export default {
    name: 'ComingSoon',
    data() {
        return {
            comingList: [],
            pullDomnMsg: '',
            isLoading: true,
            prevCityId: -1,
        }
    },
    activated() {
        if(this.prevCityId === this.$store.state.city.id) { return; }
        this.isLoading = true;
        this.axios.get('/api/movieComingList?cityId='+this.$store.state.city.id).then((res) => {
            if(res.data.msg == 'ok') {
                this.comingList = res.data.data.comingList;
                this.isLoading = false;
                this.prevCityId = this.$store.state.city.id;
            }
        })
    },
    methods: {
        handleToDetail(movieId) {
            this.$router.push('/movie/detail/2/'+movieId);
        },
        handleToScroll: function(pos) {
            if(pos.y > 30) {
                this.pullDomnMsg = '正在更新';
            }
        },
        handleToTouchEnd: function(pos) {
            if(pos.y > 30) {
                this.axios.get('/api/movieComingList?cityId=10').then((res) => {
                    if(res.data.msg == 'ok') {
                        this.pullDomnMsg = '更新成功';
                        setTimeout(() => {
                            this.comingList = res.data.data.comingList;
                            this.pullDomnMsg = '';
                        }, 1000);
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scope>
#content{
    .movie_body{
        flex: 1;
        overflow: auto;
        ul{
            margin: 0 12px;
            overflow: hidden;
            li{
                margin-top: 12px;
                display: flex;
                align-items: center;
                border-bottom: 1px #e6e6e6 solid;
                padding-bottom: 10px;
                .pic_show{
                    width: 64px;
                    height: 90px;
                    img{
                        width: 100%;
                    }
                }
                .info_list{
                    margin-left: 10px;
                    flex: 1;
                    position: relative;
                    h2{
                        font-size: 17px;
                        line-height: 24px;
                        width: 150px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    p{
                        font-size: 13px;
                        color: #666;
                        line-height: 22px;
                        width: 200px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .grade{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                    }
                    img{
                        width: 50px;
                        position: absolute;
                        right: 10px;
                        top: 5px;
                    }
                }
                .btn_mall, .btn_pre{
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    background: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;
                }
                .btn_pre{
                    background: #3c9fe6;
                }
            }
            .pullDown{
                margin: 0;
                padding: 0;
                border: none;
            }
        }
    }
}
</style>