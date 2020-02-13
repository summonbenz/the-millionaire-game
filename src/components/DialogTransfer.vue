<template>
    <el-dialog
      class="dialog"
      title="ชำระเงินให้ธนาคาร"
      width="100%"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      
      <div class="text-center" style="font-size:2em;">
      ใส่จำนวนที่ต้องการชำระให้ธนาคาร
      <el-input placeholder="0" v-model="input" type="number"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ปิด</el-button>
        <el-button type="primary" @click="dialogVisible = false">ชำระเงิน</el-button>
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
    //https://asia-east2-the-millionaire-41e7b.cloudfunctions.net/transferBank?teamId=-M-zvF-MNSjQcldmYf5J&cash=2000
  }
}
</script>