<template>
    <div id="bank">
        <el-card class="box-card" v-for="val in data" :key="val">
            <div slot="header" class="clearfix">
                <span>{{val.teamName}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
            </div>
            <div class="text item">
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">หุ้นเหล็ก</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.stock_iron}}</div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">หุ้นการประปา</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.stock_water}}</div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">หุ้นสาธารณะสุข</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.stock_health}}</div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">หุ้นไฟฟ้า</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.stock_electric}}</div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">หุ้นน้ำมัน</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.stock_oil}}</div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">หุ้นวิจัยและเทคโนโลยี</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.stock_technology}}</div></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="12"><div class="grid-content">เงินสด</div></el-col>
                    <el-col :span="12"><div class="grid-content text-right">{{val.cash}}</div></el-col>
                </el-row>
                
                <div class="box-total" style="font-size:1.4em;">
                    <div class="grid-content text-right">รวมทั้งหมด</div>
                    <div class="grid-content total text-left" style="color: green;">{{ total(val.stock_iron,val.stock_water,val.stock_health,val.stock_electric,val.stock_oil,val.stock_technology,val.cash) | numFormat }}</div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
body{
    background-color: #fff;   
}
#app{
    width:100%;
}
#bank{
    display: flex;
    flex-wrap: wrap;
}
#bank .el-card{
    flex:0 0 30%;
    margin: 15px;
}
.text {
font-size: 14px;
}

.item {
margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}

.box-card {
width: 480px;
}
</style>
<script>
import firebase from '../Firebase'

export default {
  name: 'bank',
  components: {
  },
  data() {
    return {
        db: firebase.database(),
        data: null,
        bank: null
    };
  },
  created () {
    const self = this
      
    var getInfoRef = this.db.ref('scoreboard/')
    getInfoRef.on('value', function(snapshot) {
        self.data = snapshot.val()
    });

    var getBankRef = this.db.ref('game/info')
    getBankRef.on('value', function(snapshot) {
        self.bank = snapshot.val()
    });

  },
  methods: {
      total(iron,water,health,electric,oil,technology,cash) {
          return iron*this.bank.iron + water*this.bank.water + health*this.bank.health + electric*this.bank.electric + oil*this.bank.oil + technology*this.bank.technology + cash
      }
  }
}
</script>
