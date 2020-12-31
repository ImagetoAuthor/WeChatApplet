// pages/upload.js

const app = getApp()
var jsonData = require('../../data/json.js');

Page({
  data: {
    isSelected: false, // 是否选择了图片
    image: "/icons/girl_in_pearl.jpg",
    Artist1: 0,
    Similarty1: 0,
    Artist2: 0,
    Similarty2: 0,
    Artist3: 0,
    Similarty3: 0,
    isPredicted: false // 是否预测了结果
  },
  onLoad: function () {
    this.setData({
      artists: jsonData.dataList
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 当跳转到该页面时启动选择图片
    // this.onClickWithChooseImg()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  // 上传图片
  onClickWithChooseImg: function (e) {
    var that = this;

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        if (res.tempFilePaths.length > 0) {
          that.setData({
            image: res.tempFilePaths[0],
            isSelected: true
          })
        }
      }
    });
  },
  onClickWithSubmitImg: function (e) {
    var that = this
    if (this.data.isSelected) {
      // 登录到服务端获取token
      wx.showLoading({
        title: '加载中...',
      });
      wx.uploadFile({
        url: 'https://hyperlj.xyz/painting/analysis',
        filePath: this.data.image,
        name: 'image',
        header: {
          'Accept': 'application/json',
          'Authorization': app.globalData.token
        },
        success: (result) => {
          wx.hideLoading();
          if (result.statusCode == 200) {
            wx.showToast({
              title: '成功',
              image: '/icons/icon_success.png',
              duration: 1500,
            });
            this.setData({
              isPredicted: true
            });
            var json2map=JSON.parse(result.data)
            var i = 0
            for(var key in json2map) {
              if(i == 0){
                this.setData({
                  Artist1: jsonData.dataList[key].name,
                  Similarty1: json2map[key]
                })
              }
              else if(i == 1){
                this.setData({
                  Artist2: jsonData.dataList[key].name,
                  Similarty2: json2map[key]
                })
              }
              else if(i == 2){
                this.setData({
                  Artist3: jsonData.dataList[key].name,
                  Similarty3: json2map[key]
                })
              }
              i++
            }
            console.log(result.data)
          } else {
            wx.showToast({
              title: '图像过大',
              image: '/icons/icon_fail.png',
              duration: 1500
            })
          }
        },
        fail: (res) => {
          console.log(res)
          wx.hideLoading();
          wx.showToast({
            title: '上传失败',
            image: '/icons/icon_fail.png',
            duration: 1500,
          });
        },
        complete: (res) => {
          // 修改UI
        }
      });
    } else {
      wx.showToast({
        title: '请先选择图片',
        image: '/icons/icon_warning.png',
        duration: 1500,
      })
    }
  }
})