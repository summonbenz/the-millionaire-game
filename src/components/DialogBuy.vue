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
          <div class="small">(หุ้นละ 30000)</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นการประปา
          <div class="small">(หุ้นละ 30000)</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นสาธารณสุข
          <div class="small">(หุ้นละ 30000)</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นไฟฟ้า
          <div class="small">(หุ้นละ 30000)</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นน้ำมัน
          <div class="small">(หุ้นละ 30000)</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content">หุ้นวิจัยและเทคโนโลยี
          <div class="small">(หุ้นละ 30000)</div>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
           <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" size="small"></el-input-number>
          </div>
           </el-col>
        <el-col :span="8"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row>
        <el-col :offset="8" :span="8"><div class="grid-content text-right">รวมทั้งหมด</div></el-col>
        <el-col :span="8"><div class="grid-content text-right">3,000</div></el-col>
        
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ยกเลิก</el-button>
        <el-button type="primary" @click="dialogVisible = false">ยืนยันการซื้อ</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  props: ['dialogVisible'],
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
      }
  }
}
</script>