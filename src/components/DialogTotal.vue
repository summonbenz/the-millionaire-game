<template>
    <el-dialog
      class="dialog"
      title="มูลค่าเงินทั้งหมด"
      width="100%"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      
      <el-row :gutter="10">
        <el-col :offset="7" :span="3"><div class="grid-content text-center">หุ้น</div></el-col>
        <el-col :span="8"><div class="grid-content text-center">หุ้นละ</div></el-col>
        <el-col :span="6"><div class="grid-content text-center">คิดเป็นเงิน</div></el-col>
      </el-row>
      
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นเหล็ก
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">{{info.stock_iron | numFormat}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              {{bank.iron | numFormat}}
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{info.stock_iron * bank.iron | numFormat}}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นการประปา
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">{{info.stock_water | numFormat}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              {{bank.water | numFormat}}
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{info.stock_water * bank.water | numFormat}}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นสาธารณะสุข
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">{{info.stock_health | numFormat}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              {{bank.health | numFormat}}
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{info.stock_health * bank.health | numFormat}}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นไฟฟ้า
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">{{info.stock_electric | numFormat}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              {{bank.electric | numFormat}}
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{info.stock_electric * bank.electric | numFormat}}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นน้ำมัน
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">{{info.stock_oil | numFormat}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              {{bank.oil | numFormat}}
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{info.stock_oil * bank.oil | numFormat}}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นวิจัยและเทคโนโลยี
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">{{info.stock_technology | numFormat}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              {{bank.technology | numFormat}}
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{info.stock_technology * bank.technology | numFormat}}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">เงินสด
          </div></el-col>
        <el-col :offset="11" :span="6"><div class="grid-content text-right">{{info.cash | numFormat}}</div></el-col>
      </el-row>
      
      <div class="box-total">
          <div class="grid-content text-right">รวมทั้งหมด</div>
          <div class="grid-content total text-left" style="color: green;">{{ total() | numFormat }}</div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ปิด</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
    props: ['dialogVisible', 'bank', 'info'],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    closeButton() {
        this.$emit('clicked', false)
    },
    handleClose() {
        this.$emit('clicked', false)
    },
    total() {
      return this.info.cash + this.info.stock_iron*this.bank.iron + this.info.stock_water*this.bank.water + this.info.stock_health*this.bank.health + this.info.stock_electric*this.bank.electric + this.info.stock_oil*this.bank.oil + this.info.stock_technology*this.bank.technology
    },
  }
}
</script>