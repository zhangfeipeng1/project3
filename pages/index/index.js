Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    navlist:[],
    focus: false,
    inputValue: ''
  },

  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImages(); 
    this.getNavImages();
  },
  /*请求轮播图*/
  getImages:function(){
    var url = "http://127.0.0.1:3000/getImages"
    wx.request({
      url:url,
      success:(res)=>{
        var data = res.data;
        this.setData({
          list:data
        })
      }
    })
  },
  /*请求九宫格图片*/
  getNavImages:function(){
    var url2 = "http://127.0.0.1:3000/getNavImages"
    wx.request({
      url:url2,
      success:(res)=>{
        this.setData({
          navlist:res.data
        });
      },
      fail:(res)=>{}
    })
  },
  handleTap:function(e){
    //1.获取自定义属性值
    var id = e.target.dataset.id;
    //2.判断跳转美食组件
    var page = "/pages/meishi/meishi";
    if (id == 1) {
      page = "/pages/meishi/meishi";
    }else if(id == 2){
      page = "/pages/jiehun/jiehun";
    }else if(id == 3){
      page = "/pages/kalaOK/kalaOK";
    }else if(id == 4){
      page = "/pages/gongzuo/gongzuo";
    }else if(id == 5){
      page = "/pages/fudaoban/fudaoban";
    }else if(id == 6){
      page = "/pages/qiche/qiche";
    }else if(id == 7){
      page = "/pages/zufang/zufang";
    }else if(id == 8){
      page = "/pages/zhuangxiu/zhuangxiu";
    }else{
      page = "/pages/gengduo/gengduo";
    }
    wx.navigateTo({
      url: page
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