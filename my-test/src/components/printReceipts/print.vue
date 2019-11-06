<template>
  <div class="orderForm">
    <!-- 时间 -->
    <el-button type="info"  @click="print">打印</el-button>
    <el-dialog :visible.sync="dialogVisible" width="30%"  :before-close="handleClose" >
      <orderDetail ref="orderDetail"/>
      <span slot="footer" class="dialog-footer" :visible.sync="dialogVisible">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doPrint">确 定 打 印</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import orderDetail from "./orderDetail"

export default {
  data() {
    return {
      dialogVisible:false,
    };
  },
  name: "print",
  components: { orderDetail },
  methods: {
    handleClose(done) {
      alert("确认关闭？");
      done();
    },
    doPrint(){
        var bdhtml=window.document.body.innerHTML
        var prnhtml = this.$refs.orderDetail.$el.innerHTML
        window.document.body.innerHTML=prnhtml //把需要打印的指定内容赋给body.innerHTML
        window.print()//调用浏览器的打印功能打印指定区域
        window.document.body.innerHTML=bdhtml// 最后还原页面
        window.location.reload()
    },
    print(){
       this.dialogVisible = true;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
