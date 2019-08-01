<template>
    <div class="movie_body" ref="movie_body">
        <loader v-if="isLoading"></loader>
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                <li class="pullDown">{{ pullDomnMsg }}</li>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show" @tap="handleToDetail()">
                        <img :src="item.img | setWH('128.180')" alt="">
                    </div>
                    <div class="info_list">
                        <h2>{{item.nm}}&nbsp;<img v-if="item.version == 'v3d imax'" src="@/assets/maxs.png" /></h2>
                        <p>观众评&nbsp;<span class="grade">{{item.sc}}</span></p>
                        <p>主演：{{item.star}}</p>
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div class="btn_mall">购票</div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
// import BScroll from 'better-scroll';
// import { setTimeout } from 'timers';

export default {
    name: 'NowPlaying',
    data() {
        return {
            movieList: [],
            pullDomnMsg: '',
            isLoading: true,
            prevCityId: -1,
        }
    },
    activated() {
        if(this.prevCityId === this.$store.state.city.id) { return; }
        this.isLoading = true;
        this.axios.get('/api/movieOnInfoList?cityId='+this.$store.state.city.id).then((res) => {
            if(res.data.msg == 'ok') {
                this.movieList = res.data.data.movieList;
                this.isLoading = false;
                this.prevCityId = this.$store.state.city.id;
                // this.$nextTick(() => {
                //     var scroll = new BScroll(this.$refs.movie_body, {
                //         tap: true,
                //         probeType: 1,
                //     });

                //     scroll.on('scroll', (pos) => {
                //         // console.log('scroll');
                //         if(pos.y > 30) {
                //             this.pullDomnMsg = '正在更新当中';
                //         }
                //     });
                    
                //     scroll.on('touchEnd', (pos) => {
                //         // console.log('touchEnd');
                //         if(pos.y > 30) {
                //             this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
                //                 if(res.data.msg == 'ok') {
                //                     this.pullDomnMsg = '更新成功';
                //                     setTimeout(() => {
                //                         this.movieList = res.data.data.movieList;
                //                         this.pullDomnMsg = '';
                //                     }, 1000);
                //                 }
                //             })
                //         }
                //     })
                // });
            }
        })
    },
    methods: {
        handleToDetail: function() {
            // console.log('handleToDetail');
        },
        handleToScroll: function(pos) {
            if(pos.y > 30) {
                this.pullDomnMsg = '正在更新';
            }
        },
        handleToTouchEnd: function(pos) {
            if(pos.y > 30) {
                this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
                    if(res.data.msg == 'ok') {
                        this.pullDomnMsg = '更新成功';
                        setTimeout(() => {
                            this.movieList = res.data.data.movieList;
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