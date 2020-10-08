//app.js
App({
  globalData: {
    userInfo: null,
    loginfo:{},
    url: 'https://sprogram.xxfgo.com',
  },
  // 错误提示
  showTip(tip) {
    wx.showToast({
      title: tip,
      icon: 'none'
    })
  },
   // 发起 HTTPS 网络请求
   request(obj) {
    const token = this.globalData.loginfo.token || "";
    wx.request({
      url: this.globalData.url + obj.url,
      data: Object.assign({
        platform: 2,
        customer_id: ''
      }, obj.data),
      method: obj.method ? obj.method : "POST",
      header: {
        'content-type': obj.method == "GET" ? 'application/json' : 'application/x-www-form-urlencoded',
        'Cookie': 'advanced-api=' + token
      },
      success(res){
       if (typeof obj.success=='function'){
          obj.success(res);
       }
      },
      fail(res) {
        if (typeof obj.fail == 'function') {
          obj.fail();
        }
        wx.hideLoading()
      },
      // fail: obj.fail ,
      complete: obj.complete,
    })
  },
   // 获取openid, sessionKey, unionId
   gettoken(ajaxdata, func) {
     console.log(ajaxdata);
    const that = this;
    this.request({
      url: "/v1/user/getopenid",
      data: Object.assign({
        platform: 2,
        customer_id: '1096'
      }, ajaxdata),
      success: res => {
        console.log(res)
        if (res.data.code != 200) {
          // that.showTip('获取OpenID失败' + res.data.msg);
          return
        }
        // that.showTip('openid'+res.data.data.openid);
      },
    })
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    wx.login({
      success: res => {
          this.globalData.code = res.code;
          this.gettoken({code: res.code});
      },
      fail: res => {
        // console.log("失败" + res.errMsg)
      },
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})