// components/tip/tip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    tipObj:{
      width:300,
      height:100,
      paddingTop:22,
      fontSize:24,
      iconfontSize:30,
      icon:'',
      text:'',
      time:3000,
      borderRadius:20,
      iconBottom:10
    },
    isShowTip:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showTip(tipObj) {
      this.data.tipObj=Object.assign(this.data.tipObj, tipObj);
      this.setData({
         isShowTip:true,
         tipObj: this.data.tipObj
      })
     
      
      const timeId = setTimeout(() => {
        this.setData({
          isShowTip:false
       })
        clearTimeout(timeId);
      }, this.data.tipObj.time);
    },
  },
  attached() {
    
  },
})