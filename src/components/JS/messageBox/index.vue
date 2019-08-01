<template>
    <div class="box_body">
        <div class="messageBox">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <div>
                <div @touchstart="handleCancel">{{ cancel }}</div>
                <div @touchstart="handleOk">{{ ok }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'messageBox',
    data() {
        return {}
    },
    methods: {}
};
</script>

<style lang="scss" scope>
.box_body{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background: rgba(204, 204, 204, .5);
    .messageBox{
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        box-shadow: 3px 3px 3px 3px #ccc;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -60px 0 0 -100px;
        h2{
            text-align: center;
            line-height: 40px;
            font-size: 18px;
        }
        p{
            text-align: center;
            line-height: 40px;
        }
        >div{
            display: flex;
            position: absolute;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #ccc;
            div{
                flex: 1;
                text-align: center;
                line-height: 30px;
                border-right: 1px solid #ccc;
                &:last-child{
                    border: none;
                }
            }
        }
    }
}
</style>