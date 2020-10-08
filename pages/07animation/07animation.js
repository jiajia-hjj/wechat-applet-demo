// pages/07animation/07animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:{},
    
  },
  clickAnimation(){
     // 创建一个动画实例
     const animation  = wx.createAnimation({
       // 动画持续时间
         duration:500,
         // 定义动画效果，当前是匀速
         timingFunction:'linear'
     })
     // 先在y轴偏移，然后用step()完成一个动画
     animation.translateY(500).step();
     // 用setData改变当前动画
     this.setData({
       // 通过export()方法导出数据
       animationData: animation.export(),
     })
     // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
      setTimeout(()=>{
       animation.translateY(0).step()
       this.setData({
         animationData: animation.export()
       })
      },500)
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})