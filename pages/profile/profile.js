// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tou:'http://127.0.0.1:3000/avatar.png'
  },
  uploadAvator: function () {
    wx.chooseImage({
      count: 1,
      sourceType: ["camera", "album"],
      success: (res) => {
        var tempFilePaths = res.tempFilePaths[0];
        this.setData({
          tou:tempFilePaths,
        })
        console.log(res.tempFilePaths[0]);
        wx.uploadFile({
          url: 'http://127.0.0.1:3000/upload',
          filePath: res.tempFilePaths[0],
          name: 'mypic',
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: (res) => {
            console.log(res);
          },
          fail: () => {
            console.log("失败");
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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