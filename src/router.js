import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import HCPlanManagement from "./components/HCPlanManagement/HCPlanManagement.vue";
import HCPlanItem from "./components/HCPlanManagement/HCPlanItem.vue";
import Bumag from "./components/bumag/Bumag.vue";
import depmag from "./components/depmag/Depmag.vue";
import Branchdep from "./components/branchdep/Branchdep.vue";
import ProductFamily from "./components/ProductFamily/ProductFamily.vue";
import PositionCost from "./components/PositionCost/PositionCost.vue";
import PositionList from "./components/PositionList/PositionList.vue";
import BonusType from "./components/BonusType/BonusType.vue";
import Fringe from "./components/Fringe/Fringe.vue";
import Fringeitem from "./components/Fringeitem/Fringeitem.vue";
import Employee from "./components/Employee/Employee.vue";
import Employeeitem from "./components/Employeeitem/Employeeitem.vue";
import Employeeitemtwo from "./components/Employeeitemtwo/Employeeitemtwo.vue";
import EmployeeitemList from "./components/EmployeeCompensationList/EmployeeCompensationList.vue";
import Bumagitem from "./components/Bumagitem/Bumagitem.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/depmag",
          component: depmag
        },
        {
          path: "/home/Bumag",
          component: Bumag
        },
        {
          path: "/home/Branchdep",
          component: Branchdep
        },
        {
          path: "/home/hCPlanManagement",
          component: HCPlanManagement
        },
        {
          path: "/home/hCPlanItem",
          component: HCPlanItem
        },
        {
          path: "/home/productfamily",
          component: ProductFamily
        },
        {
          path: "/home/positionCost",
          component: PositionCost
        },
        {
          path: "/home/positionList",
          component: PositionList
        },
        {
          path: "/home/bonusType",
          component: BonusType
        },
        {
          path: "/home/Fringe",
          component: Fringe
        },
        {
          path: "/home/Fringeitem",
          component: Fringeitem
        },
        {
          path: "/home/Employeeitem",
          component: Employeeitem
        },
        {
          path: "/home/Employeeitemtwo",
          component: Employeeitemtwo
        },
        {
          path: "/home/Employee",
          component: Employee
        },
        {
          path: "/home/Employeeitemlist",
          component: EmployeeitemList
        },
        {
          path: "/home/Bumagitem",
          component: Bumagitem
        }
      ]
    }
  ],
  mode: "history"
});
