// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[{
      style:"艺术赏析",
      evaluate:"这是梵高的真迹",
    },{
      style:"绘画评析",
      evaluate:"这是很接近梵高的真迹",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "", //仅为示例，并非真实的接口地址  url写api接口

      success: function (res) {
       this.message = res.data.data;
       /*
        wx.setStorage({    //setStorage 存储到Storage缓存中
          key: 'message',   //本地缓存中指定的key
          data: res.data
        });*/
      }
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