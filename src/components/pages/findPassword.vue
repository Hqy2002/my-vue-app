<script setup>
import ResetPwdWidgt from "@/components/widgts/resetPwdWidgt";
export default {
  name: "findPwd",
  components: {ResetPwdWidgt}
}
</script>

<template>
  <div style="position:absolute;left:0;top:0;right:0;bottom: 0;background-color: #628cf6">
    <el-card style="position:absolute;top:20%;left:35%;right:35%;bottom :25%;" >
      <p style="width: 20%;margin-left: 40%" class="title">
        重置密码
        <span style="display: inline-block; padding-left: 100%"></span>
      </p>
      <reset-pwd-widgt :in_index="true"></reset-pwd-widgt>
    </el-card>
  </div>
</template>



<style scoped>

</style>


<style scoped>

</style>