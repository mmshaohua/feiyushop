<template>
    <div>
        <div id="shopTop">
            <span class="shopTopTitle">购物车</span>
            <div class="shopTopRight">编辑</div>
        </div>
        <div id="shopContent"></div>
        <div id="shopFooter"></div>
    </div>
</template>

<script src="./public/js/flexble.js"></script>
<script>
export default {
    
}
</script>

<style lang="sass" scoped>
    *{
            margin: 0;
            padding: 0
        }
    #shopTop{
        height: .88rem;
        font-size: .32rem;
        line-height: .88rem;
        color: #fc761c;
        background: #fff;
        text-align: center;
        overflow: hidden;
        border-bottom: 1px solid #f2f5f7;
        position: relative;
    } 
    .shopTopRight{
        display: block;
        position: absolute;
        right: 0.3rem;
        top: 50%;
        font-weight: 100;
        margin-top: -0.39rem;
        height: .88rem;
        font-size: 0.28rem;
        color: #666666;
    }
    
</style>
