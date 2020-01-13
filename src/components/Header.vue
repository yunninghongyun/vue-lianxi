<template>
  <header>
    <div class="header-top"></div>
    <div class="header-nav"></div>
    <el-col :span="4">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#000"
        text-color="#fff"
        active-text-color="red"
      >
        <el-submenu index="2">
          <template slot="title">BU Management</template>
          <el-menu-item class="el-submenu__title" index="2-1">
            <router-link to="/home/Bumag" class="nav-name" active-class="active"
              >BusinessUnit</router-link
            >
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">Employee Management</template>
          <el-menu-item index="3-1">
            <router-link to="/home/Employee">Employee Info</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/home/Employeeitem"
              >Employee Master Data</router-link
            >
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/home/Employeeitemtwo"
              >Employee Master Data two</router-link
            >
          </el-menu-item>
          <el-menu-item index="3-4">
            <router-link to="/home/Employeeitemlist"
              >Employee Compensation List</router-link
            >
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">HC Plan Management</template>
          <el-menu-item index="5-1">
            <router-link to="/home/hCPlanManagement"
              >HC Plan Management</router-link
            >
          </el-menu-item>
          <el-menu-item index="5-1">
            <router-link to="/home/hCPlanItem">HC Plan Item</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">Product Family</template>
          <el-menu-item index="6-1">
            <router-link to="/home/productfamily">Product Family</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">Payroll Data</template>
          <el-menu-item index="7-1">ADP Data</el-menu-item>
          <el-menu-item index="7-2">考勤数据</el-menu-item>
          <el-menu-item index="7-3">实发奖金明细</el-menu-item>
          <el-menu-item index="7-4">TRUE Up Data</el-menu-item>
          <el-menu-item index="7-5">SIP 计提数据</el-menu-item>
          <el-menu-item index="7-6">Agency 工资模块</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">Report Export</template>
          <el-menu-item index="8-1">Finance Summary</el-menu-item>
          <el-menu-item index="8-2">HFM HC Movement</el-menu-item>
          <el-menu-item index="8-3">HFM COST</el-menu-item>
          <el-menu-item index="8-4">HR Fcst HC Cost</el-menu-item>
          <el-menu-item index="8-5">Fin Fcst Cost</el-menu-item>
          <el-menu-item index="8-6">Other</el-menu-item>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">User</template>
          <el-menu-item index="9-1">User</el-menu-item>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">Parameter</template>
          <el-menu-item class="el-submenu__title" index="10-1"
            >City</el-menu-item
          >
          <el-menu-item class="el-submenu__title" index="10-2">
            <router-link
              to="/home/Depmag"
              class="nav-name"
              active-class="active"
              >Department</router-link
            >
          </el-menu-item>
          <el-menu-item class="el-submenu__title" index="10-3">
            <router-link
              to="/home/Branchdep"
              class="nav-name"
              active-class="active"
              >Department branch</router-link
            >
          </el-menu-item>
          <el-menu-item index="10-4">
            <router-link to="/home/Fringe">Fringe Template</router-link>
          </el-menu-item>
          <el-menu-item index="10-5">
            <router-link to="/home/Fringeitem">Fringe Item</router-link>
          </el-menu-item>
          <el-menu-item index="10-6">
            <router-link to="/home/bonusType">Bonus Type</router-link>
          </el-menu-item>
          <el-menu-item index="10-7">
            <router-link to="/home/positionList">Position List</router-link>
          </el-menu-item>
          <el-menu-item index="10-8">
            <router-link to="/home/positionCost">Position Cost</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </header>
</template>

<script>
export default {
  name: "headerone",
  methods: {
    handleOpen(key, keyPath) {
      window.console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      window.console.log(key, keyPath);
    },
    HCPlan() {
      window.console.log("qqqq");
      this.$router.push("/home/hCPlanManagement");
    }
  }
};
</script>

<style>
.header-top {
  width: 100%;
  height: 78px;
  margin: 0;
  padding: 0;
  background-image: url("../assets/top.jpg");
  display: block;
}
.header-nav {
  padding: 10px 40px;
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
}
.el-col > ul {
  height: 800px;
}
.el-submenu__title {
  border-bottom: 1px solid #ccc;
}
.el-menu-vertical-demo .el-submenu__title i {
  color: #fff;
}
.el-submenu .el-menu {
  background-color: red;
}
.el-submenu .el-menu .el-menu-item {
  background-color: #0f69bb !important;
}
.el-menu__title > a {
  text-decoration: none;
  color: #fff;
}
.el-menu-item {
  border-bottom: 1px solid #ccc;
}
.el-menu-item > a {
  text-decoration: none;
  color: #fff;
}
.el-submenu .el-menu-item {
  min-width: 20%;
}
</style>
