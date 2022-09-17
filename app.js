const app = Vue.createApp({
  data(){
    return {
      inputText: '',
      newText: '',
      confirmedText: ''
    }
  },
  methods:{
    showAlert(){
      alert('BOOM!')
    },
    outPut(event){
      this.inputText = event.target.value
    },
    confirm(event){
      this.newText = event.target.value
      this.confirmedText = this.newText
    }
  }
})
app.mount('#assignment')