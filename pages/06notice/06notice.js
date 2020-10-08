// pages/06notice/06notice.js

const Marquee = require('../../utils/marquee.js').marquee;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [ "恭喜用户 189****8888 抽中100元现金奖励！" ,"恭喜用户 189****8888 抽中50元现金奖励!"],

    animationText: '公告字幕滚动播放（文字跑马灯效果）,使用动画和定时器完成，代码片段是一种迷你、可分享的小程序或小游戏项目',
    animationData: {}, //公告动画
  },
  textAnimation(){
    let reg = /[\u4e00-\u9fa5]/g;
    let textLen = this.data.animationText.length,
        textStrLen = this.data.animationText.match(reg).length;
      
    //计算有多少个,加一是为了避免内容没有全部离开显示框
    let hasStrLen = textStrLen + Math.ceil((textLen - textStrLen)/2)+1;
     //此处以公告最长内容来设置动画持续时间（duration：决定整个动画播放的速度）
    let timeT = hasStrLen * 200
    //创建动画实例
    let animation = wx.createAnimation({
      duration: timeT,//时间
      timingFunction: 'linear'// 定义动画效果，当前是匀速
    });
    //偏移距离为公告内容的长度*字体大小（若字体大小使用rpx需要换算成px）
    animation.translate(-Number(hasStrLen * 13), 0).step();// 用step()完成一个动画
     // 用setData改变当前动画
    this.setData({
      animationData: animation.export()
    });
    // 循环播放动画关键步骤（使用两个定时器）
    // 第一个定时器：将字幕恢复到字幕开始点（为屏幕左边）,时间比初始值小，重新给animation赋值，刷新文字
     let t1 = setInterval( ()=> {
      animation = wx.createAnimation({
        //此处以公告最长内容来设置动画持续时间（duration：决定整个动画播放的速度）
        duration: timeT,
        timingFunction: 'linear'
      });
      animation.translate(0, 0).step({ duration: 0 });
      this.setData({
        animationData: animation.export()
      });
      console.log('11111111111111')
    }, timeT -1);
    // 第二个定时器：重新开始移动动画,重置文本的位置
    let t2 = setInterval( ()=>{
      animation.translate(-Number(hasStrLen * 13), 0).step();
      this.setData({
        animationData: animation.export()
      });
      console.log('2222222222222222')
    }, timeT);
    //不懂为什么(timeT + 10) / 10，按理解应该是间隔timeT移动动画一次
  },
  marquee(){
    const msgList=this.data.msgList;
    // 跑马灯插件
    new Marquee({
      text:msgList,
      marqueePace: 1,         // 滚动速度
      marqueeDistance: 0,     // 初始滚动距离
      size: 14,
      orientation: 'left',    // 滚动方向
      interval: 20            // 时间间隔
    }).on('ready', () => {
        console.log('初始化完成');
    }).on('run', (count) => {
        console.log('开始运行第' + (count + 1) + '条');
    }).on('change', (count) => {
        console.log('切换到第' + (count + 1) + '条');
    }).run();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.textAnimation();
    this.marquee();
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