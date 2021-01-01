// pages/mine/mine.js

const app = getApp()
var jsonData = require('../../data/json.js');
Page({
  data: {
    message:[],
    confing:{}
  },

  onShow: function (options) {
    wx.request({
      url: 'https://hyperlj.xyz/painting/history',
      header: {
        'Accepts': 'application/json',
        'Authorization': app.globalData.token
      },
      success: (res)=> {
        
        
        var message = [];
        for(var k in res.data){
          var object = res.data[k];   
          var temp = {}
          temp.url = 'http://hyperlj.xyz/api/img/'+object.url
          console.log(temp.url)
          var json2map=JSON.parse(object.score)
            var i = 0
            for(var key in json2map) {
              if(i == 0){
                  temp.Artist1 = jsonData.dataList[key].name,
                  temp.Similarty1 = json2map[key]
              }
              else if(i == 1){
                  temp.Artist2 = jsonData.dataList[key].name,
                  temp.Similarty2 = json2map[key]
              }
              else if(i == 2){
                  temp.Artist3 = jsonData.dataList[key].name,
                  temp.Similarty3 = json2map[key]
              }
              i++
            }
          message.push(temp);
        }
        this.setData({
          message:message
        })
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      artists: jsonData.dataList
    })
  },
})