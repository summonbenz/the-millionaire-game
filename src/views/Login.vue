<template>
    <div style="padding: 20px;">
        <h1>เข้าสู่ระบบ</h1>
        <el-input placeholder="โปรดตั้งชื่อทีม" v-model.trim="login.teamname"></el-input>
        <el-row style="text-align: center;">
            <el-button @click="onSubmit" type="primary">เข้าสู่ระบบ</el-button>
        </el-row>
    </div>
</template>
<script>
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'Login',
  data () {
    return {
      login: { teamname: '' },
      ref: firebase.database().ref('scoreboard/')
    }
  },
  created () {
    const key = localStorage.getItem('teamId')
    if(key != undefined) {
        router.push({
            name: 'Game',
            params: { teamname: localStorage.getItem('teamName') }
        })
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault()

        //firebase
        let teamKey = this.ref.push().getKey()
        
        localStorage.setItem('teamId', teamKey)
        localStorage.setItem('teamName', this.login.teamname)
        
        var updates = {};
        updates[teamKey] =  {
                                teamName: this.login.teamname,
                                cash: 0,
                                stock_electric: 0,
                                stock_health: 0,
                                stock_iron: 0,
                                stock_oil: 0,
                                stock_technology: 0,
                                stock_water: 0
                            }
        this.ref.update(updates)
        
        router.push({
            name: 'Game',
            params: { teamname: this.login.teamname }
        })
    }
  }
}
</script>