
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizeList:{
      prizeList0:[
        {type:'0'},
        {type:'1'},
        {type:'2'},
        {type:'3'},
        {type:'4'},
        {type:'5'}
      ],
      prizeList1:[
        {type:'4'},
        {type:'5'},
        {type:'0'},
        {type:'1'},
        {type:'2'},
        {type:'3'}
        
      ],
      prizeList2:[
        {type:'2'},
        {type:'3'},
        {type:'4'},
        {type:'5'},
        {type:'0'},
        {type:'1'}
      ],
     
     },
    animation0: 0,
    animation1:0,
    animation2:0,
    time0: 5,
    time1: 7,
    time2: 9,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

// 立即抽奖
  onStart(e) {
  const baseAngle=360*5   //以多少角度为基数 
  let prize=1000
  // 0=180；1=120；2=60；3=0；4=-60；5=-120
  //第一个数：0=180；1=-120；2=-60；3=0；   4=60；   5=120
  //第二个数：0=-60；1=0；   2=60； 3=120； 4=180；  5=-120
  //第三个数：0=60； 1=120； 2=180；3=-120；4=-60；  5=0
 
 if(prize==1000){//1--1000
    this.setData({
      animation0: -120  +  baseAngle,
      animation1: 0 +  baseAngle,
      animation2:120 + baseAngle,
      time0: 5,
      time1: 7,
      time2: 9,
   });
   setTimeout(()=>{
     this.setData({
        isShowdDrawFrame:true,
        drawSuccessImg:'draw_success1'
     })
   },9200);
 }else if(prize==2000){  //2--2000
    this.setData({
      animation0: -60 +  baseAngle,
      animation1:60 +  baseAngle,
      animation2:180 + baseAngle,
      time0: 5,
      time1: 7,
      time2: 9
   });
   setTimeout(()=>{
    this.setData({
       isShowdDrawFrame:true,
       drawSuccessImg:'draw_success2'
    })
  },9200);
  }else if(prize==3000){//3--3000
    this.setData({
      animation0: baseAngle,
      animation1:120 +  baseAngle,
      animation2:-120 + baseAngle,
      time0: 5,
      time1: 7,
      time2: 9
   })
   setTimeout(()=>{
    this.setData({
       isShowdDrawFrame:true,
       drawSuccessImg:'draw_success3'
    })
   },9200);
  }

//  setTimeout(()=>{
//   this.onReset();
//  },20000)
  
 },
  onReset(){
    this.setData({
      animation0:0,
      animation1:0,
      animation2:0,
      time0: 0,
      time1: 0,
      time2: 0
    })
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