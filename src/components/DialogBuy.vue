<template>
    <el-dialog
      class="dialog"
      title="ซื้อหุ้น"
      width="100%"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      
      <el-row :gutter="10">
        <el-col :offset="8" :span="8"><div class="grid-content text-center">จำนวน</div></el-col>
        <el-col :span="8"><div class="grid-content text-center">คิดเป็นเงิน</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นเหล็ก
          <div class="small">(หุ้นละ {{bank.iron}})</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_iron" @change="handleChange" :min="0" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ num_iron*bank.iron }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นการประปา
          <div class="small">(หุ้นละ {{bank.water}})</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_water" @change="handleChange" :min="0" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ num_water*bank.water }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นสาธารณสุข
          <div class="small">(หุ้นละ {{bank.health}})</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_health" @change="handleChange" :min="0" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ num_health*bank.health }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นไฟฟ้า
          <div class="small">(หุ้นละ {{bank.electric}})</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_electric" @change="handleChange" :min="0" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ num_electric*bank.electric }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นน้ำมัน
          <div class="small">(หุ้นละ {{bank.oil}})</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_oil" @change="handleChange" :min="0" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ num_oil*bank.oil }}</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นวิจัยและเทคโนโลยี
          <div class="small">(หุ้นละ {{bank.technology}})</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num_technology" @change="handleChange" :min="0" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ num_technology*bank.technology }}</div></el-col>
      </el-row>
      <el-row>
        <el-col :offset="8" :span="8"><div class="grid-content text-right">รวมทั้งหมด</div></el-col>
        <el-col :span="8"><div class="grid-content text-right">{{ total() }}</div></el-col>
        
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ยกเลิก</el-button>
        <el-button @click="resetButton">ล้างข้อมูล</el-button>
        <el-button type="primary" @click="dialogVisible = false">ยืนยันการซื้อ</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  props: ['dialogVisible', 'bank'],
  data() {
    return {
      num_iron: 0,
      num_water: 0,
      num_health: 0,
      num_electric: 0,
      num_oil: 0,
      num_technology: 0
    };
  },
  methods: {
      total() {
        return this.num_iron*this.bank.iron + this.num_water*this.bank.water + this.num_health*this.bank.health + this.num_electric*this.bank.electric + this.num_oil*this.bank.oil + this.num_technology*this.bank.technology
      },
      closeButton() {
        this.$emit('clicked', false)
      },
      handleClose() {
        this.$emit('clicked', false)
      },
      resetButton() {
        this.num_iron = 0
        this.num_water = 0
        this.num_health = 0
        this.num_electric = 0
        this.num_oil = 0
        this.num_technology = 0
      }
  }
}
</script>