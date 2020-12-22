// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    artists:[
      {
        name: '大脸猫',
        url: '../../icons/icon_logo.jpg',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpgasdgasegwasefaswegewdeasdgwettp://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpgasdgasegwasefasweg'
      },
      {
        name: '大脸猫爱吃鱼',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpgasdfasdgasdgasdgasdgasd'
      },
      {
        name: '大脸猫爱吃鱼',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg',
        introduce: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!this.data.artists) {
      wx.request({
        url: 'https://hyperlj.xyz/wdApi/history',
        method: "GET",
        header:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success (res) {
          this.data.artists = res.data
        }
      })

    }
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