<template>
    <el-dialog
      class="dialog"
      title="ชำระเงินให้ธนาคาร"
      width="100%"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      
      <div class="text-center" style="font-size:2em;">
      ใส่จำนวนที่ต้องการชำระให้ธนาคาร
      <el-input placeholder="0" v-model="inputCash" type="number"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeButton">ปิด</el-button>
        <el-button type="primary" @click="submitBtn">ชำระเงิน</el-button>
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
        
        const teamId = localStorage.getItem('teamId')
        const self = this
        axios.get('https://asia-east2-the-millionaire-41e7b.cloudfunctions.net/transferBank', {
        // axios.get('http://localhost:5001/the-millionaire-41e7b/asia-east2/transferBank', {
          params: {
            teamId: teamId,
            cash: this.inputCash
          }
        })
        .then(function (response) {
          console.log(response)
          self.$emit('clicked', false)
          self.$message({
            message: 'โอนเงิน '+self.inputCash+' สำเร็จ',
            type: 'success'
          });
          self.inputCash = ''
        })
        .catch(function (error) {
          alert(error)
          console.log(error);
        })
        

    }

    //https://asia-east2-the-millionaire-41e7b.cloudfunctions.net/transferBank?teamId=-M-zvF-MNSjQcldmYf5J&cash=2000
  }
}
</script>