<template>
  <div id="app">
    <header class="header">ทีม มะล๊องก๊องแก๊ง</header>
    <el-container>
      <el-main>
        <div id="cash-box">
          <div class="text">ยอดเงินคงเหลือ</div>
          <div class="cash">129,000</div>
        </div>
        <div id="stock">
          <el-row class="purple">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นเหล็ก</div></el-col>
            <el-col :span="12"><div class="grid-content num">0</div></el-col>
          </el-row>
          <el-row class="blue">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นการประปา</div></el-col>
            <el-col :span="12"><div class="grid-content num">0</div></el-col>
          </el-row>
          <el-row class="green">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นสาธารณสุข</div></el-col>
            <el-col :span="12"><div class="grid-content num">0</div></el-col>
          </el-row>
          <el-row class="orange">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นไฟฟ้า</div></el-col>
            <el-col :span="12"><div class="grid-content num">0</div></el-col>
          </el-row>
          <el-row class="red">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นน้ำมัน</div></el-col>
            <el-col :span="12"><div class="grid-content num">0</div></el-col>
          </el-row>
          <el-row class="black">
            <el-col :span="12"><div class="grid-content bg-purple">หุ้นวิจัยและเทคโนโลยี</div></el-col>
            <el-col :span="12"><div class="grid-content num">0</div></el-col>
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
    </footer>

    <!-- dialog -->
    <DialogBuy :dialogVisible="dialogBuy" @clicked="handleDialogBuy" />
    <DialogSold :dialogVisible="dialogSold" @clicked="handleDialogSold" />
    <DialogTransfer :dialogVisible="dialogTransfer" @clicked="handleDialogTransfer" />
    <DialogTotal :dialogVisible="dialogTotal" @clicked="handleDialogTotal" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DialogBuy from './components/DialogBuy.vue'
import DialogSold from './components/DialogSold.vue'
import DialogTransfer from './components/DialogTransfer.vue'
import DialogTotal from './components/DialogTotal.vue'

export default {
  name: 'app',
  components: {
    DialogBuy, DialogSold, DialogTransfer, DialogTotal
  },
  data() {
    return {
      dialogBuy: false,
      dialogSold: false,
      dialogTransfer: false,
      dialogTotal: false,
    };
  },
  methods: {
      handleDialogBuy(value) { this.dialogBuy = value },
      handleDialogSold(value) { this.dialogSold = value },
      handleDialogTransfer(value) { this.dialogTransfer = value },
      handleDialogTotal(value) { this.dialogTotal = value }
  }
}
</script>

<style>
@font-face {
    font-family: 'Maledpan';
    src: url('./assets/webfonts/maledpan-regular-webfont.eot');
    src: url('./assets/webfonts/maledpan-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/webfonts/maledpan-regular-webfont.woff2') format('woff2'),
         url('./assets/webfonts/maledpan-regular-webfont.woff') format('woff'),
         url('./assets/webfonts/maledpan-regular-webfont.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}
</style>
<style lang="scss">
  @import "./style.scss";
</style>
