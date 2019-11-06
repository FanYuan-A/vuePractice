<template>
    <div class="saveSnapshot">
        <el-button type="warning"  @click="getHtmlCode">保存小票快照</el-button>
        <orderDetail ref="orderDetail" class="v"/>
    </div>
</template>
<script>
import orderDetail from "./orderDetail"
export default {
    name:'saveSnapshot',
    components: { orderDetail },
      methods: {
        getHtmlCode() {
            localStorage.removeItem("code");
            var prnhtml = this.$refs.orderDetail.$el.innerHTML
            var codeUrl = window.encodeURIComponent(prnhtml)
            localStorage.setItem("code", codeUrl);
            alert(codeUrl);
        }
    }
}
</script>

<style scoped>
.v{
    visibility: hidden;
    position: absolute;
}
</style>