// pages/mine/mine.js
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
})