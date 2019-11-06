<template>
  <div class="printIndex row">
    <print/>
    <saveSnapshot/>
    <reprint/>
  </div>
</template>
<script>
import saveSnapshot from "./printReceipts/saveSnapshot"
import print from "./printReceipts/print"
import reprint from "./printReceipts/reprint"
export default {
  components:{ print,saveSnapshot,reprint},
  methods: {
    // print:function(){
    //   this.$router.push('/print')
    // },
  },
}
</script>

<style>
.printIndex{
  justify-content: space-around;
  align-items: center
}
</style>
