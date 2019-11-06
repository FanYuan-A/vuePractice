<template>
    <div class="reprint">
       <el-button type="danger" @click="getHtml">补打小票</el-button>
       
       <el-dialog :visible.sync="dialogVisible" width="30%"  :before-close="handleClose" class="orderForm">
           <div v-html="htmlData">
                {{htmlData}}
            </div>
            <span slot="footer" class="dialog-footer" :visible.sync="dialogVisible">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">补打</el-button>
            </span>
       </el-dialog>
    </div>
</template>
<script>
export default {
    name:'reprint',
    data:function(){
        return {
            htmlData:"",
            dialogVisible:false
        }
    },
    methods:{
        getHtml:function(){
            var storage = localStorage.getItem("code");
            if(storage){
                // alert(window.decodeURIComponent(storage));
                this.htmlData = window.decodeURIComponent(storage);
                this.dialogVisible = true
            }else{
                alert("先保存再补打?");
            }
        },
        removeHtml:function(){
             localStorage.removeItem("code");
        },
         handleClose(done) {
            alert("确认关闭？");
            done();
        }
    },
    destroyed() { 
      this.removeHtml();
    },
}
</script>

<style scoped>
.orderForm {
  font-size: 16px;
  color:red;
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