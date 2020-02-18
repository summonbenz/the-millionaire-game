<template>
    <el-dialog
      class="dialog"
      title="ชำระเงินให้ธนาคาร"
      width="100%"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      
      <div class="text-center" style="font-size:2em;">
      ใส่จำนวนที่ต้องการชำระให้ธนาคาร
      <el-input placeholder="0" v-model="inputCash" type="number" :min="0"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ปิด</el-button>
        <el-button type="primary" :loading="loading" @click="submitBtn">ชำระเงิน</el-button>
      </span>
    </el-dialog>
</template>

<script>
const axios = require('axios');

export default {
    props: ['dialogVisible'],
  data() {
    return {
      inputCash: '',
      loading: false,
    };
  },
  methods: {
    closeButton() {
        this.$emit('clicked', false)
    },
    handleClose() {
        this.$emit('clicked', false)
    },
    submitBtn() {
        this.loading = true
        const teamId = localStorage.getItem('teamId')
        const self = this
        axios.get('https://asia-east2-the-millionaire-41e7b.cloudfunctions.net/api/transferBank', {
        // axios.get('http://localhost:5001/the-millionaire-41e7b/asia-east2/api/transferBank', {
          params: {
            teamId: teamId,
            cash: this.inputCash
          }
        })
        .then(function () {
          self.$emit('clicked', false)
          self.$message({
            message: 'โอนเงิน '+self.inputCash+' สำเร็จ',
            type: 'success'
          });
          self.inputCash = ''
          self.loading = false
        })
        .catch(function (error) {
          console.log(error);
          self.$message.error('โอนเงินไม่สำเร็จ โปรดติดต่อทีมงาน')
          self.loading = false
        })
    }

  }
}
</script>