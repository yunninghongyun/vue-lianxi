    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <template>
      <div class="nav-box">
            <div class="nav">
                <div class="nav-top">Employee Compensation Data item</div>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                   <el-form-item class="two-ite" label="Salary Type "  >
                    <el-select v-model="formInline.ite4" placeholder="Salary Type ">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                     
                  <el-form-item class="two-ite" label="Monthly Salaries (salary)"  style="float:right;">
                    <el-select v-model="formInline.ite3" placeholder="Monthly Salaries (salary)">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  
                  <el-form-item class="two-ite" label="Monthly Wages (hourly)"  >
                    <el-select v-model="formInline.ite2" placeholder="Monthly Wages (hourly)">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                     
                  <el-form-item class="two-ite" label="Daily Base Salary"  style="float:right;">
                    <el-select v-model="formInline.ite1" placeholder="Daily Base Salary">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="two-ite" label="wage standard"  >
                    <el-select v-model="formInline.ite" placeholder="wage standard">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="two-ite" label="Retroactive Wage/Salary Payments" style="float:right;" >
                    <el-select v-model="formInline.region3" placeholder="Retroactive Wage/Salary Payments">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                   <el-form-item label="Health & Welfare Benefits"  >
                    <el-select v-model="formInline.region4" placeholder="Health & Welfare Benefits">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Employer Taxes" style="float:right;">
                    <el-select v-model="formInline.region5" placeholder="Employer Taxes">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Retirement Costs">
                      <el-select v-model="formInline.region6" placeholder="Retirement Costs">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Workers Compensation" style="float:right;">
                      <el-select v-model="formInline.region7" placeholder="Workers Compensation">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Employee Scholar Program"  >
                      <el-select v-model="formInline.region8" placeholder="Employee Scholar Program">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                   <el-form-item label="Leased Vehicle" style="float:right;" >
                      <el-select v-model="formInline.region9" placeholder="Leased Vehicle">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                   <el-form-item label="Paid Time Off"  >
                      <el-select v-model="formInline.region10" placeholder="Paid Time Off">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Paid Time Off - Other" style="float:right;">
                      <el-select v-model="formInline.region11" placeholder="Paid Time Off - Other">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Temporary Supplements Allowances">
                      <el-select v-model="formInline.region12" placeholder="Temporary Supplements Allowances">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Commissions" style="float:right;">
                      <el-select v-model="formInline.region13" placeholder="Commissions">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="MIP bonustype">
                      <el-select v-model="formInline.region14" placeholder="MIP">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="GIP" style="float:right;">
                      <el-select v-model="formInline.region15" placeholder="GIP">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Executive IC" >
                      <el-select v-model="formInline.region16" placeholder="Executive IC">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>

                  <el-form-item label="Other Variable Pay " style="float:right;">
                      <el-select v-model="formInline.region17" placeholder="Other Variable Pay">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Special Awards">
                      <el-select v-model="formInline.region18" placeholder="Special Awards">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Monthly Employment Cost (RMB)" style="float:right;">
                      <el-select v-model="formInline.region19" placeholder="Monthly Employment Cost (RMB)">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="Monthly Employment Cost (KUSD)">
                      <el-select v-model="formInline.region20" placeholder="Monthly Employment Cost (KUSD)">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  
                </el-form>
             </div> 
              <div class="btn embtn">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">添加</el-button>
              </div>
       </div>
    </template>

<script>
 export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
      formInline: {
          user: '',
          region: ''
        },
        tableData: [
        {
          date: '1',
          name: 'FSP Asia',
          address: 'Management BU',
          addressb: 'Management BU',
          code:"1",
          country:"北京"
        }, {
          date: '2',
          name: 'FrwsP Asia',
          address: 'Management BU',
          addressb: 'depacent BU',
          code:"2",
          country:"北京"
        }, {
          date: '3',
          name: 'FSP Asia',
          address: 'Management BU',
          addressb: 'pcareat BU',
          code:"3",
          country:"北京"
        }, {
          date: '4',
          name: 'FSP Asia',
          addressb: 'Management BU',
          address: 'ectra BU',
          code:"4",
          country:"北京"
        }]
      }
    }
  }
</script>
<style>
  @import "./Employeeitemtwo.css";   
</style>
