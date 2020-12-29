// pages/mine/mine.js

const app = getApp()

Page({
  data: {
    message:[{
      image: "/icons/girl_in_pearl.jpg",
      style: "艺术赏析",
      evaluate: "这是梵高的真迹",
    },{
      image: "/icons/girl_in_pearl.jpg",
      style:"绘画评析",
      evaluate:"这是很接近梵高的真迹",
    }]
  },

  onShow: function (options) {
    wx.request({
      url: 'https://hyperlj.xyz/painting/history',
      header: {
        'Accepts': 'application/json',
        'Authorization': app.globalData.token
      },
      success: (res)=> {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
})