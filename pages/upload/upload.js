// pages/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowAdd:true,
    isShowDelete: false,
    isShowSubmit: false,
    imgs: [],
    index: 0,
    showuIndex: 0,
    array: ['画作评析', '查询作者'],
    objectArray: [
      {
        id: 0,
        name: '画作评析'
      },
      {
        id: 1,
        name: '查询作者'
      }
    ],
  },
  bindPickerChange(e) {
    console.log(e.detail);
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    // console.log(this.data.approvalType[e.detail.value].typeID);
    var typeID = e.detail.value;//this.data.approvalType[e.detail.value].typeID;


    // console.log(this.data.approvalType[e.detail.value].typeName);
    this.setData({
      index: e.detail.value,
    });
    console.log("typeID is :" + typeID);
    if (typeID == 1) {
      this.setData({
        showuIndex: 1,
      });

    }
    else {
      this.setData({
        showuIndex: 0,
      });
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onClick: function (){
    console.log("mlj")
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

  },

  bindAdd: function() {
    wx.chooseImage({
      count: 1,
    })
  },

  // 上传图片
  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    if (imgs.length >= 1) {//////
      this.setData({
        lenMore: 1
      });
      setTimeout(function () {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        // console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 1) {////
            that.setData({
              imgs: imgs
            });
            return false;
          } else {
            imgs.push(tempFilePaths[i]);
            if (imgs.length >= 1){///////////////////////////////////////////////////////////////////////////////
              that.setData({
                isShowAdd: false,
                isShowDelete: true,
                isShowSubmit: true
              });
            }
          }
        }
        // console.log(imgs);
        that.setData({
          imgs: imgs
        });
      }
    });
  },
  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs,
      isShowAdd: true,
      isShowDelete: false,
      isShowSubmit: false
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgs;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },
  submitImg: function(e) {
    // 登录到服务端获取token
    wx.request({
      header: {
        'Accept': 'application/json'
      },
      method: "POST",
      url: "http://hyperlj.xyz/Api/images", // 后端路径
      data: {
        "image" : this.data.imgs
      },
      success: function (res) {
        // 回调函数,保存token
        console.log(res)
        app.globalData.token = res.data.token
      }
    })
  }
})