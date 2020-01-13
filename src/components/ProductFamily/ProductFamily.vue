<template>
  <div class="productfamily">
    <h1>Product Family Management</h1>
    <div class="productfamily-top">
      <div class="plan-name">
        <span>Entity Name</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
      </div>
      <div class="plan-status">
        <span>Order No. Prefix</span>
        <input type="text" placeholder="D " />
      </div>
    </div>
    <div class="productfamily-top">
      <div class="entity-name">
        <span>Order Type</span>
        <input type="text" placeholder="Domestic D&A - A " />
      </div>
      <div class="entity-name">
        <span>Order Type Des.</span>
        <input type="text" placeholder="火灾报警 " />
        <el-button type="primary">查询</el-button>
        <el-button type="primary">
          添加
        </el-button>
      </div>
    </div>
    <div class="productfamily-main">
      <el-table :data="tableData" border>
        <el-table-column prop="num" label="SN"></el-table-column>
        <el-table-column prop="name" label="Entity Name"></el-table-column>
        <el-table-column prop="address" label="Order Type"></el-table-column>
        <el-table-column
          prop="OrderTypeDes"
          label="Order Type Des"
        ></el-table-column>
        <el-table-column
          prop="OrderNoPrefix"
          label="Order No. Prefix"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template class="btn" slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="150"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "productfamily",
  data() {
    return {
      input: "",
      tableData: [
        {
          num: "1",
          name: "GST",
          address: "Domestic D&A - A ",
          OrderTypeDes: "火灾报警",
          OrderNoPrefix: "D"
        },
        {
          num: "2",
          name: "GST",
          address: "GST Domestic Verticals",
          OrderTypeDes: "电气火灾报警",
          OrderNoPrefix: "E"
        },
        {
          num: "3",
          name: "GST",
          address: "H - series",
          OrderTypeDes: "凯得H系列",
          OrderNoPrefix: "H"
        },
        {
          num: "4",
          name: "GST",
          address: "Cancelled",
          OrderTypeDes: "",
          OrderNoPrefix: ""
        }
      ],
      options: [
        {
          value: "选项1",
          label: "Draft"
        },
        {
          value: "选项2",
          label: "Active"
        },
        {
          value: "选项3",
          label: "Closed"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleClick(row) {
      window.console.log(row);
    }
  }
};
</script>

<style>
.productfamily {
  width: 66%;
  margin: 0 auto;
}
.productfamily h1 {
  text-align: center;
}
.productfamily-top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.productfamily-top .plan-name {
  display: flex;
}
.productfamily-top .plan-name > span {
  margin-right: 60px;
  line-height: 40px;
}
.productfamily-top .plan-status input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  padding: 0 24px;
  height: 40px;
  line-height: 40px;
}
.productfamily-top .entity-name > span {
  margin-right: 60px;
}
.productfamily-top .entity-name input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  padding: 0 24px;
  height: 40px;
  line-height: 40px;
}
.productfamily-top .plan-status > span {
  margin-right: 40px;
}
.entity-name {
  margin-top: 40px;
}
.entity-name > span {
  margin-right: 50px;
}
.productfamily-main {
  margin-top: 40px;
}
.productfamily-main .el-table th > .cell {
  text-align: center;
}
.el-table .cell {
  display: flex;
}
.entity-name button {
  height: 40px;
  margin-left: 20px;
}
</style>
