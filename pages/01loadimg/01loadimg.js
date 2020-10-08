// pages/loadimg/loadimg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  uploadImg(){
    wx.chooseImage({
      count:9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        // 多张图片的时候
        for (var i = 0; i < tempFilePaths.length; i++) {
            wx.uploadFile({
                header: {
                  'content-type': 'multipart/form-data'
                },
                url:'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                filePath: tempFilePaths,
                name: 'file',
                success: function (res) {
                    var data = JSON.parse(res.data);
                    console.log("图片：" + data.data);
                    return typeof cb == "function" && cb(data, rootDocment)
                }
            });
        }
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths,
          name: 'file',
          formData: {//携带到后端的参数
            'user': 'test'
          },
          success (res){
            const data = res.data
            //do something
          }
        })
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