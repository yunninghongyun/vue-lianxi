<template>
  <div class="wrap">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div class="block">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
    <Button />
    <ell />
  </div>
</template>

<script>
import ell from "./components/Element.vue";
import Button from "./components/Button";

export default {
  name: "app",
  data() {
    return {
      // 创建了一个变量 bool     const bool = false
      bool: true,
      bool1: "red",
      name: "",
      styles: {
        color: "red"
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: ""
    };
  },
  components: {
    ell,
    Button
  }
};
</script>

<style>
.active {
  color: red;
}
.bg {
  color: blue;
  /* font-size: 100px; */
}
</style>
