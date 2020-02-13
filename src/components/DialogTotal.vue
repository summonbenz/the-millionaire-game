<template>
    <el-dialog
      class="dialog"
      title="คำนวณยอด"
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
        <el-col :span="3"><div class="grid-content text-center">1</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              12,000
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นการประปา
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">1</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              1,100
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นสาธารณะสุข
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">1</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              12,000
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นไฟฟ้า
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">1</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              12,000
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นน้ำมัน
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">1</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              12,000
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">หุ้นวิจัยและเทคโนโลยี
          </div></el-col>
        <el-col :span="3"><div class="grid-content text-center">1</div></el-col>
        <el-col :span="8">
          <div class="grid-content text-center">
              12,000
          </div>
           </el-col>
        <el-col :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7"><div class="grid-content">เงินสด
          </div></el-col>
        <el-col :offset="11" :span="6"><div class="grid-content text-right">90,000</div></el-col>
      </el-row>
      
      <div class="box-total">
          <div class="grid-content text-right">รวมทั้งหมด</div>
          <div class="grid-content total text-left">3,000</div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ปิด</el-button>
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