//index.js
//获取应用实例
import Poster from '../../components/miniprogram_dist/poster/poster';
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      'https://admin.xxfgo.com/uploads/images/20191115/1573783779874222.png',
      'https://admin.xxfgo.com/uploads/images/20191022/1571705515466999.png',
      'https://admin.xxfgo.com/uploads/images/20191025/1571972236736303.png',
      'https://admin.xxfgo.com/uploads/images/20191022/1571705758352484.png',
      'https://admin.xxfgo.com/uploads/images/20191025/1571971079367355.png',
      'https://admin.xxfgo.com/uploads/images/20191025/1571971472328766.png',
      'https://admin.xxfgo.com/uploads/images/20191022/1571705878662739.png',
      'https://admin.xxfgo.com/uploads/images/20191212/1576139899835282.png',
      'https://admin.xxfgo.com/uploads/images/20191022/1571705157419036.png'
    ],
    posterConfig:'',
    selectImages:[]
  },
  // 错误提示
  showTip(tip) {
    wx.showToast({
      title: tip,
      icon: 'none'
    })
  },
  // 保存图片
  saveImage(imgUrl) {
    wx.saveImageToPhotosAlbum({
      filePath: imgUrl,
      success: (res) => {
        this.showTip('保存图片成功');
      },
      fail: () => {
        this.showTip('保存图片失败');
      }
    })
  },
  downloadImgs() {
    // wx.createSelectorQuery().selectAll('.poster');
    console.log(wx.createSelectorQuery().selectAll('.poster'));
    wx.createSelectorQuery().selectAll('.poster').fields(function (rect) {
      console.log(rect)

    }).exec()

    // console.log(wx.createSelectorQuery().selectAll('.poster').e);
    for (let i = 0; i < this.data.images.length; i++) {
      wx.getImageInfo({
        src: this.data.images[i], //服务器返回的图片地址
        success: (res) => {
          //res.path是网络图片的本地地址
          let Path = res.path;
          this.saveImage(res.path)
        },
        fail: function (res) {
          console.log('暂存图片失败');
        }
      });

    }
  },
  downloadComposeImgs(){
    console.log(wx.createSelectorQuery().selectAll('.poster'));
    wx.createSelectorQuery().selectAll('.poster').fields(function (rect) {
      console.log(rect)
      this.posterSave(e)
    }).exec()
    // console.log(wx.createSelectorQuery().selectAll('.poster').e);
    // for (let i = 0; i < this.data.images.length; i++) {
    //   wx.getImageInfo({
    //     src: this.data.images[i], //服务器返回的图片地址
    //     success: (res) => {
    //       //res.path是网络图片的本地地址
    //       let Path = res.path;
    //       this.saveImage(res.path)
    //     },
    //     fail: function (res) {
    //       console.log('暂存图片失败');
    //     }
    //   });

    // }
  },

  downloadSelectImgs(){
    for (let i = 0; i < this.data.selectImages.length; i++) {
      this.saveImage(this.data.selectImages[i])
    }
  },
  // 保存小程序码
  posterSave(e) {
    // for (let i = 0; i < this.data.images.length; i++) {
    console.log(e)
    const index = e.currentTarget.dataset.index
    this.data.images[index] = e.detail
    console.log(this.data.images);
    this.data.selectImages.push(e.detail);
     this.setData({
       images: this.data.images,
       selectImages: this.data.selectImages
     })
     console.log(e.detail)
      // this.saveImage(e.detail)
    // }
   
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let posterConfigs=[];
    for (let i = 0; i < this.data.images.length; i++) {
      const posterConfig = {
        width: 750,
        height: 560,
        debug: false,
        pixelRatio: 1,
        images: [
          {
            width: 750,
            height: 560,
            x: 0,
            y: 0,
            url: this.data.images[i],
          },
          {
            width: 100,
            height: 100,
            x: 600,
            y: 400,
            url:'https://admin.xxfgo.com/uploads/apperweima/xxf_1718.jpg',
          }
        ]
      }
      posterConfigs.push(posterConfig);
    
    }
    this.setData({
      posterConfigs: posterConfigs
    });
    console.log(posterConfigs);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})