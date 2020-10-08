// pages/jiugongge/jiugongge.js
//获取应用实例
const app = getApp()

//计数器
let interval = null;

//值越大旋转时间越长  即旋转速度
var intime = 50;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    //9张奖品图片
    images: ['/images/jiugongge/award0.png', '/images/jiugongge/award1.png', '/images/jiugongge/award2.png', '/images/jiugongge/award3.png', '/images/jiugongge/award4.png', '/images/jiugongge/award5.png', '/images/jiugongge/award6.png', '/images/jiugongge/award7.png'],
    btnconfirm: '/images/jiugongge/btn_go_draw.png',
    clickLuck: 'clickLuck',
    luckPosition: 3,
  },
  getinput(e){
    var data = e.detail.value;
    this.setData({
      luckPosition: data
    })
  },

  //点击抽奖按钮
  clickLuck() {
    //判断中奖位置格式
    if (this.data.luckPosition == null || isNaN(this.data.luckPosition) || this.data.luckPosition > 7) {
      wx.showModal({
        title: '提示',
        content: '请填写正确数值',
        showCancel: false,
      })
      return;
    }

    //设置按钮不可点击
    this.setData({
      btnconfirm: '/images/jiugongge/btn_go_draw.png',
      clickLuck: '',
    })
    //清空计时器
    clearInterval(interval);
    var index = 0;
    //循环设置每一项的透明度
    interval = setInterval(()=>{
      if (index > 7) {
        index = 0;
        this.data.color[7] = 0.5
      } else if (index != 0) {
        this.data.color[index - 1] = 0.5
      }
      this.data.color[index] = 1
      this.setData({
        color: this.data.color,
      })
      index++;
    }, intime);

    //模拟网络请求时间  设为两秒
    var stoptime = 2000;
    setTimeout(()=> {
      this.stop(this.data.luckPosition);
    }, stoptime)

  },

  //也可以写成点击按钮停止抽奖
  // clickStop:function(){
  //   var stoptime = 2000;
  //   setTimeout(function () {
  //     e.stop(1);
  //   }, stoptime)
  // },

  stop(which) {
    //清空计数器
    clearInterval(interval);
    //初始化当前位置
    let current = -1;
    let color = this.data.color;
    for (let i = 0; i < color.length; i++) {
      if (color[i] == 1) {
        current = i;
      }
    }
    // 下标从1开始
    let index = current + 1;
    this.stopLuck(which, index, intime, 10);
  },

  /**
   * which:中奖位置
   * index:当前位置
   * time：时间标记
   * splittime：每次增加的时间 值越大减速越快
   */
  stopLuck(which, index, time, splittime) {
    //值越大出现中奖结果后减速时间越长
    let color = this.data.color;
    setTimeout( ()=> {
      //重置前一个位置
      if (index > 7) {
        index = 0;
        color[7] = 0.5
      } else if (index != 0) {
        color[index - 1] = 0.5
      }
      //当前位置为选中状态
      color[index] = 1
      this.setData({
        color: color,
      })
      //如果旋转时间过短或者当前位置不等于中奖位置则递归执行
      //直到旋转至中奖位置
      if (time < 400 || index != which) {
        //越来越慢
        splittime++;
        time += splittime;
        //当前位置+1
        index++;
        this.stopLuck(which, index, time, splittime);
      } else {
        //1秒后显示弹窗
        setTimeout( ()=> {
          if (which == 1 || which == 3 || which == 5 || which == 7) {
            //中奖
            wx.showModal({
              title: '提示',
              content: '恭喜中奖',
              showCancel: false,
              success:(res)=> {
                if (res.confirm) {
                  //设置按钮可以点击
                  this.setData({
                    btnconfirm: '/images/jiugongge/prize_btn.png',
                    clickLuck: 'clickLuck',
                  })
                  this.loadAnimation();
                }
              }
            })
          } else {
            //未中奖
            wx.showModal({
              title: '提示',
              content: '很遗憾未中奖',
              showCancel: false,
              success:(res)=>{
                if (res.confirm) {
                  //设置按钮可以点击
                  this.setData({
                    btnconfirm: '/images/jiugongge/btn_go_draw.png',
                    clickLuck: 'clickLuck',
                  })
                  this.loadAnimation();
                }
              }
            })
          }
        }, 1000);
      }
    }, time);
  },
  //进入页面时缓慢切换
  loadAnimation() {
    let index = 0;
    if (interval == null){
    interval = setInterval( ()=>{
      if (index > 7) {
        index = 0;
        this.data.color[7] = 0.5
      } else if (index != 0) {
        this.data.color[index - 1] = 0.5
      }
      this.data.color[index] = 1
      this.setData({
        color: this.data.color,
      })
      index++;
    }, 1000);
    }  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAnimation();
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