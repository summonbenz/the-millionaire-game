<template>
    <el-dialog
      class="dialog"
      title="ขายหุ้น"
      width="100%"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      <el-row :gutter="10">
        <el-col :offset="6" :span="4"><div class="grid-content text-center">หุ้นที่มี</div></el-col>
        <el-col :span="8"><div class="grid-content text-center">จำนวน</div></el-col>
        <el-col :span="6"><div class="grid-content text-center">คิดเป็นเงิน</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content">หุ้นเหล็ก
          <div class="small">(หุ้นละ {{bank.iron | numFormat}})</div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content text-center">{{info.stock_iron}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_iron" :min="0" :max="info.stock_iron" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{ num_iron*bank.iron }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content">หุ้นการประปา
          <div class="small">(หุ้นละ {{bank.water | numFormat}})</div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content text-center">{{info.stock_water}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_water" :min="0" :max="info.stock_water" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{ num_water*bank.water }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content">หุ้นสาธารณะสุข
          <div class="small">(หุ้นละ {{bank.health | numFormat}})</div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content text-center">{{info.stock_health}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_health" :min="0" :max="info.stock_health" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{ num_health*bank.health }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content">หุ้นไฟฟ้า
          <div class="small">(หุ้นละ {{bank.electric | numFormat}})</div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content text-center">{{info.stock_electric}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_electric" :min="0" :max="info.stock_electric" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{ num_electric*bank.electric }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content">หุ้นน้ำมัน
          <div class="small">(หุ้นละ {{bank.oil | numFormat}})</div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content text-center">{{info.stock_oil}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_oil" :min="0" :max="info.stock_oil" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{ num_oil*bank.oil }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6"><div class="grid-content">หุ้นวิจัยและเทคโนโลยี
          <div class="small">(หุ้นละ {{bank.technology | numFormat}})</div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content text-center">{{info.stock_technology}}</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_technology" :min="0" :max="info.stock_technology" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">{{ num_technology*bank.technology }}</div></el-col>
      </el-row>
      
      
      <el-row>
        <el-col :offset="10" :span="8"><div class="grid-content text-right">รวมทั้งหมด</div></el-col>
        <el-col :span="6"><div class="grid-content text-right" style="color:blue;font-weight:800;">{{ total() }}</div></el-col>
        
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ยกเลิก</el-button>
        <el-button @click="resetButton">ล้างข้อมูล</el-button>
        <el-button type="primary" :loading="loading" @click="submitBtn">ยืนยันการขาย</el-button>
      </span>
    </el-dialog>
</template>

<script>
const axios = require('axios');

export default {
  props: ['dialogVisible', 'info', 'bank'],
  data() {
    return {
      loading: false,
      num_iron: 0,
      num_water: 0,
      num_health: 0,
      num_electric: 0,
      num_oil: 0,
      num_technology: 0,
    };
  },
  methods: {
    closeButton() {
        this.$emit('clicked', false)
    },
    handleClose() {
        this.$emit('clicked', false)
    },
    total(){
        return this.num_iron*this.bank.iron + this.num_water*this.bank.water + this.num_health*this.bank.health + this.num_electric*this.bank.electric + this.num_oil*this.bank.oil + this.num_technology*this.bank.technology
    },
    resetButton() {
      this.num_iron = 0
      this.num_water = 0
      this.num_health = 0
      this.num_electric = 0
      this.num_oil = 0
      this.num_technology = 0
    },
    submitBtn() {
        this.loading = true
        const teamId = localStorage.getItem('teamId')
        const self = this
        axios.get('https://asia-east2-the-millionaire-41e7b.cloudfunctions.net/api/sold', {
          params: {
            teamId: teamId,
            iron: this.num_iron,
            oil: this.num_oil,
            technology: this.num_technology,
            water: this.num_water,
            health: this.num_health,
            electric: this.num_electric
          }
        })
        .then(function (response) {
          self.$emit('clicked', false)
          self.$message({
            message: 'ขายหุ้นสำเร็จ ได้รับเงิน '+response.data.total+' บาท',
            type: 'success'
          });
          self.inputCash = ''
          self.resetButton()
          self.loading = false
        })
        .catch(function (error) {
          console.log(error);
          self.$message.error('ขายหุ้นไม่สำเร็จ โปรดติดต่อทีมงาน')
          self.loading = false
        })
    }
  }
}
</script>