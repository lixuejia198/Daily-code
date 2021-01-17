// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图列表
    swiperList: [],
    // 首页分类列表
    categoryList: [],
    // 首页楼层列表
    floorList: [],
    indicatorDots: true,
    // 设置自动播放
    autoplay: true,
    interval: 2000,
    duration: 500,
    // 实现无缝衔接
    circular: true,
  },

  // 获取轮播图数据
  getSwiperData() {
    let _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
      method: 'GET',
      success: function (res) {
        // console.log(res);
        if (res.data.meta.status == 200) {
          _this.setData({
            swiperList: res.data.message
          })
        }
      }
    })
  },

  // 获取首页分类选项数据
  getCategoryData() {
    let _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems',
      method: 'GET',
      success: function (res) {
        // console.log(res);
        if (res.data.meta.status == 200) {
          _this.setData({
            categoryList: res.data.message
          })
        }
      }
    })
  },

  // 获取首页楼层数据
  getFloorData() {
    let _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata',
      method: 'GET',
      success: function (res) {
        // console.log(res);
        if (res.data.meta.status == 200) {
          _this.setData({
            floorList: res.data.message
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData();
    this.getCategoryData();
    this.getFloorData();
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