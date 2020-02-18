<template>
  <div id="app">
    <header class="header">ทีม {{teamname || info.teamName}}</header>
    <el-container>
      <el-main>
        <div id="cash-box">
          <div class="text">ยอดเงินคงเหลือ</div>
          <div class="cash">
              <ICountUp
                :delay="delay"
                :endVal="info.cash"
                :options="options"
                />
            </div>
        </div>
        <div id="stock">
          <el-row class="purple">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นเหล็ก</div></el-col>
            <el-col :span="12"><div class="grid-content num">{{ info.stock_iron | numFormat }}</div></el-col>
          </el-row>
          <el-row class="blue">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นการประปา</div></el-col>
            <el-col :span="12"><div class="grid-content num">{{ info.stock_water | numFormat }}</div></el-col>
          </el-row>
          <el-row class="green">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นสาธารณสุข</div></el-col>
            <el-col :span="12"><div class="grid-content num">{{ info.stock_health | numFormat }}</div></el-col>
          </el-row>
          <el-row class="orange">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นไฟฟ้า</div></el-col>
            <el-col :span="12"><div class="grid-content num">{{ info.stock_electric | numFormat }}</div></el-col>
          </el-row>
          <el-row class="red">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นน้ำมัน</div></el-col>
            <el-col :span="12"><div class="grid-content num">{{ info.stock_oil | numFormat }}</div></el-col>
          </el-row>
          <el-row class="black">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นวิจัยและเทคโนโลยี</div></el-col>
            <el-col :span="12"><div class="grid-content num">{{ info.stock_technology | numFormat }}</div></el-col>
          </el-row>
        </div>
        
      </el-main>
    </el-container>
    <footer>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-button @click="dialogBuy = true" size="big" type="success" icon="el-icon-circle-plus" style="width: 100%">ซื้อหุ้น</el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="dialogSold = true" size="big" type="danger" icon="el-icon-remove" style="width: 100%">ขายหุ้น</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-button @click="dialogTransfer = true" size="big" type="default" icon="el-icon-coin" style="width: 100%">ชำระเงินให้ธนาคาร</el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="dialogTotal = true" size="big" type="default" icon="el-icon-s-data" style="width: 100%">คำนวณยอด</el-button>
        </el-col>
      </el-row>
      <div class="text-center" style="margin-top:10px;font-size:0.8em;color:#bbb;">({{teamId}})</div>
      
    </footer>

    <!-- dialog -->
    <DialogBuy :dialogVisible="dialogBuy" :bank="bank" :cash="info.cash" @clicked="handleDialogBuy" />
    <DialogSold :dialogVisible="dialogSold" :info="info" :bank="bank" @clicked="handleDialogSold" />
    <DialogTransfer :dialogVisible="dialogTransfer" @clicked="handleDialogTransfer" />
    <DialogTotal :dialogVisible="dialogTotal" :bank="bank" :info="info" @clicked="handleDialogTotal" />
  </div>
</template>

<script>
import firebase from '../Firebase'
import ICountUp from 'vue-countup-v2';
// import router from '../router'
// import HelloWorld from './components/HelloWorld.vue'
import DialogBuy from '../components/DialogBuy.vue'
import DialogSold from '../components/DialogSold.vue'
import DialogTransfer from '../components/DialogTransfer.vue'
import DialogTotal from '../components/DialogTotal.vue'

export default {
  name: 'app',
  components: {
    DialogBuy, DialogSold, DialogTransfer, DialogTotal,ICountUp
  },
  data() {
    return {
        teamname: this.$route.params.teamname,
        teamId: null,
        dialogBuy: false,
        dialogSold: false,
        dialogTransfer: false,
        dialogTotal: false,
        db: firebase.database(),
        delay: 300,
        options: {},
        bank: {
          month: 0,
          electric: 0,
          health: 0,
          iron: 0,
          oil: 0,
          technology: 0,
          water: 0
        },
        info: {
            teamName: null,
            cash: 0,
            stock_electric: 0,
            stock_health: 0,
            stock_iron: 0,
            stock_oil: 0,
            stock_technology: 0,
            stock_water: 0
        }
    };
  },
  created () {

    this.teamId = localStorage.getItem('teamId')
    
    const self = this
      
    var getInfoRef = this.db.ref('scoreboard/'+this.teamId)
    getInfoRef.on('value', function(snapshot) {
        self.info = snapshot.val()
    });

    var getBankRef = this.db.ref('game/info')
    getBankRef.on('value', function(snapshot) {
        self.bank = snapshot.val()
    });
  },
  methods: {
      handleDialogBuy(value) { this.dialogBuy = value },
      handleDialogSold(value) { this.dialogSold = value },
      handleDialogTransfer(value) { this.dialogTransfer = value },
      handleDialogTotal(value) { this.dialogTotal = value },
  }
}
</script>
<style scoped>
body{
    background-color: #444;
}
#app{
   margin: 0 auto;
   padding: 0;
   max-width: 600px;
   background:#fff;
}
</style>