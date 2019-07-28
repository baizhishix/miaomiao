<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show">
                    <img src="../../../public/images/movie_1.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span>&nbsp;人想看</p>
                    <p>主演：陈建斌，任素汐，潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_mall">购票</div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="../../../public/images/movie_2.jpg" alt="">
                </div>
                <div class="info_list">
                    <h2>毒液：致命守护者</h2>
                    <p>观众评&nbsp;<span class="grade">9.3</span></p>
                    <p>主演：汤姆·哈迪，米歇尔·威廉姆斯，里兹·阿迈德</p>
                    <p>今天56家电影院放映443场</p>
                </div>
                <div class="btn_mall">购票</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NowPlaying',
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
            }
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
    }
}
</style>