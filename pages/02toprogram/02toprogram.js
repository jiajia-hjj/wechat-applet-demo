// pages/toprogram/toprogram.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toAnotherProgram(){
     wx.navigateToMiniProgram({
       appId: 'wxba1601db37df42fb',//要打开的小程序 appId
       path: 'pages/index/index?id=123',//打开的页面路径，如果为空则打开首页
       extraData: {
         foo: 'bar'//需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据
       },
       envVersion: 'develop',//要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
       success(res) {
         console.log('打开主成功')
         // 打开成功
         //需要在app.json文件加上配置  navigateToMiniProgramAppIdList
       }
     })
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