// pages/meishi/meishi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list2: [],
    pageIndex: 0,
    pageSize: 4,
    hasMore: true    //是否有下一页数据
  },
  loadMore: function () {
    if (this.data.hasMore === false) return;
    wx.showLoading({
      title: "加载数据...",
    })
    //获取两个数字
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    //发送请求
    wx.request({
      url: "http://127.0.0.1:3000/getgongzuo",
      data: { pno: pno, pageSize: ps },
      success: (res) => {
        setTimeout(function () {
          wx.hideLoading();
        }, 1000)
        var rows = this.data.list2.concat(res.data.data);
        //console.log(res.data);
        //获取总页数
        var pc = res.data.pageCount;
        var flag = pno < pc;
        this.setData({
          list2: rows,
          pageIndex: pno,
          hasMore: flag
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    this.setData({
      pageIndex: 0,
      list2: [],
      hasMore: true

    })
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})