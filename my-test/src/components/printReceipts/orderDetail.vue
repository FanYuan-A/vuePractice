<template>
  <div class="orderForm">
    <!-- 时间 -->
      <div ref="orderDetail">
        <div class="currentTime">{{currentTime}}</div>
        <!-- 店铺信息 -->
        <div class="shopDesc">
          <div class="h2">{{appName}}</div>
          <div>{{shopName}}</div>
          <div class="h2">在线支付已支付</div>
          <div>订单号:{{orderNumber}}</div>
          <div>下单时间:{{printTime}}</div>
        </div>
        <!-- 商品详情 -->
        <div>
          <div class="bargainRecord_title">1号口袋</div>
          <div>
            <ul>
              <li v-for="(item,index) in goodsList" :key="index" class="shopItem row">
                <div class="goodsName">{{item.goodsName}}</div>
                <div class="goodsCount">×{{item.goodsCount}}</div>
                <div class="goodsPrice">{{item.goodsPrice}}</div>
              </li>
            </ul>
          </div>
          <div class="bargainRecord_title">其他</div>
          <div>
            <ul>
              <li v-for="(item,index) in others" :key="index">{{item.otherKey}}:{{item.otherValue}}</li>
            </ul>
          </div>
        </div>
        <!-- 价格 -->
        <div class="price">
          <div>原价:￥{{originalPrice}}</div>
          <div class="totalPrice">总计:￥{{totalPrice}}</div>
        </div>
        <!-- 地址 -->
        <div class="userAddress">
          <div>{{userAddress}}</div>
          <div>{{userPhone}}</div>
          <div>{{note}}</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "orderDetail",
  data() {
    return {
      dialogVisible:true,
      classStates: false,
      currentTime: "2019年10月29日17:56:39",
      appName: "#2美团外卖",
      shopName: "晋面源刀削面(非清真)",
      orderNumber: "239875287159871",
      printTime: "2019-10-28 17:56:39",
      goodsList: [
        {
          goodsName: "肉炒刀削面",
          goodsCount: "1",
          goodsPrice: "13"
        },
        {
          goodsName: "泡菜",
          goodsCount: "1",
          goodsPrice: "1"
        },
        {
          goodsName: "酸辣土豆丝",
          goodsCount: "1",
          goodsPrice: "12"
        }
      ],
      others: [
        {
          otherKey: "餐盒费",
          otherValue: "2"
        },
        {
          otherKey: "配送费",
          otherValue: "3"
        }
      ],
      originalPrice: 31,
      totalPrice: 55,
      userAddress: "北京市南华里",
      userPhone: "199829389",
      note: "北京市朝阳区周女士[门店新客]"
    };
  },
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orderForm {
  font-size: 16px;
}
.btns{
  padding:20px;
}
.currentTime {
  border-top: 1px solid #000;
  border-bottom: 1px dashed #000;
  padding: 5px 0;
}
.shopDesc {
  text-align: center;
}
.shopDesc .h2,
.totalPrice,
.userAddress {
  font-size: 30px;
  font-weight: bold;
}
.bargainRecord_title {
  font-weight: bold;
  text-align: center;
  position: relative;
  color: #000;
}
/*文字前*/
.bargainRecord_title:before {
  content: "";
  position: absolute;
  width: 35%; /*横线长度 */
  height: 1px;
  top: 50%;
  border-bottom: 1px dashed #000;
  left: 0;
}
/*文字后*/
.bargainRecord_title:after {
  content: "";
  position: absolute;
  width: 35%;
  height: 1px;
  border-bottom: 1px dashed #000;
  top: 50%;
  right: 0%;
}
.shopItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goodsName {
  width: 60%;
}
.goodsCount,
.goodsPrice {
  width: 20%;
}
.goodsPrice {
  text-align: right;
}
.price {
  text-align: right;
  border-bottom: 1px dashed #000;
  border-top: 1px dashed #000;
  padding: 10px 0;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
