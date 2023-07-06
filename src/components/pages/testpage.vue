<script setup>

</script>

<template>
    <el-card  style="position:absolute;left:2px;top:1%;right: 1px;bottom:1%">
      <el-menu style="height: 100%;width:8%;position: absolute;left: 0;top:1%"
               default-active="2"
               class="el-menu-vertical-demo"
               background-color="white"
               text-color="black"
               active-text-color="#2a5ad7">
        <el-menu-item index="1" @click="toAdminPage">
          <i class="el-icon-menu" ></i>
          <span slot="title">用户列表</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">航班信息</span>
        </el-menu-item>
      </el-menu>

      <div style="position: absolute;right: 10%;left:10%;overflow-y: auto">
        <el-tabs v-model="activeName">
          <el-tab-pane name="1" label="按航司查询">
            <el-form :model="hsForm" :rules="hsRule" :label-position="'left'">
              <el-form-item  class="login-item" >
                <el-input v-model="hsForm.id" placeholder="请输入要查询的航司代号"></el-input>
              </el-form-item>
              <el-form-item style="margin-top: 20px;margin-bottom: 20px">
                <el-date-picker
                    v-model="hsForm.date"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane name="2" label="按机场查询">
            <el-form :model="apForm" :rules="apRule" :label-position="'left'">
              <el-form-item  class="login-item" >
                <el-input v-model="apForm.id" placeholder="请输入要查询的机场代号"></el-input>
              </el-form-item>
              <el-select v-model="aaa" placeholder="请选择">
                <el-option
                    label="起点"
                    :value="1">
                </el-option>
                <el-option
                    label="终点"
                    :value="0">
                </el-option>
              </el-select>
              <el-form-item style="margin-top: 10px;margin-bottom: 10px">
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
</template>


<style scoped>

</style>