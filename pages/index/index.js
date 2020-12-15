//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'copyright © （中国海洋大学）刘海龙，马良吉，吕晓龙，宋江，余泽芃',
    upload: '提交图片',
    userinfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login: function() {
    // 登录到服务端获取token
    wx.request({
      header: {
        'Accept': 'application/json'
      },
      method: "POST",
      url: "http://hyperlj.xyz/wdApi/login", // 后端路径
      data: {
        "name": app.globalData.userInfo.nickName,
        "head": app.globalData.userInfo.avatarUrl,
        "code": app.globalData.js_code,
      },
      success: function (res) {
        // 回调函数,保存token
        console.log(res)
        app.globalData.token = res.data.data.token
        console.log(app.globalData.token)
      }
    })
  }
})
