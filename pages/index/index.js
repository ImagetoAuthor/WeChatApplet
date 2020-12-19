//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //点击头像上传信息到服务端并且跳转到首页
  onClickWithHeader: function() {
    // 上传信息到服务器
    wx.request({
      url: 'http://hyperlj.xyz/wdApi/login',
      method: "POST",
      header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data:{
        'code': app.globalData.code,
        'name': this.data.userInfo.nickName,
        'head': this.data.userInfo.avatarUrl
      },
      success (res) {
        // 保存token
        app.globalData.token = res.data.data.token
      }
    })
    // 跳转到首页
    wx.switchTab({
      url: '../home/home',
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
  }
})
