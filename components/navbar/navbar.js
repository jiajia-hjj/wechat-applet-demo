// components/navbar/navbar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 自定义返回事件处理
     * customBackReturn="{{true}}" bind:customBackReturn="customBackReturn"
     */
    customBackReturn: {
      type: Boolean,
      value: false
    },
    navbarObj:{
      type: Object,
      value: false
    }
  },
   /**
   * 启用插槽
   */
  options:{
    multipleSlots:true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    navH: app.globalData.navHeight,
    navbarInfo:{
      extColor:'#000000',
      navbarColor:'ffffff',
      frontColor: '#000000',
      backgroundColor: '#ffffff',
      isShowNavLeft:true
     }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    backClick() {
      if (this.data.customBackReturn) {
        this.triggerEvent("customBackReturn")
      } else {
        if (getCurrentPages().length == 1) {
          wx.switchTab({
            url: '/pages/index/index',
          })
        } else {
          wx.navigateBack({
            delta: 1
          })
        }
      }
    }
  },
  attached() {
   if(this.data.navbarObj){
     this.setData({
      navbarInfo:Object.assign({},this.data.navbarInfo,this.data.navbarObj)
     })
   }
  
    // console.log(this.data.navbarObj);
    //自定义导航胶南的颜色
    wx.setNavigationBarColor({
      frontColor:this.data.navbarInfo.frontColor, 
      backgroundColor:this.data.navbarInfo.backgroundColor
    })
    var self = this;
    wx.getSystemInfo({
      success(res) {
        var isIos = res.system.indexOf('iOS') > -1;
        self.setData({
          statusHeight: res.statusBarHeight,
          navHeight: isIos ? 44 : 48
        })
      }
    })
  
  }
})
