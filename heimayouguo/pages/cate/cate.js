// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 分类左侧栏数据
    cateLeftList: [],
    // 分类右侧栏数据
    cateRightList: [],
    // 选择到的索引
    currentIndex: 0,
    // 滚动条位置
    scrollTop: 0
  },

  // 获取分类数据
  getCategoryList(index) {
    let _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories',
      method: 'GET',
      success: function (res) {
        console.log(res);
        // console.log(index);
        let {
          message,
          meta
        } = res.data;
        // console.log(message[0].children);
        if (meta.status == 200) {
          _this.setData({
            cateLeftList: message,
            cateRightList: message[index].children
          })
        }
      }
    })
  },

  // 点击左侧菜单 更新右侧数据
  handelCateClick(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      currentIndex: index,
      scrollTop: 0
    })
    this.getCategoryList(index)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 先传入一个默认的index 不然会报错
    this.getCategoryList(this.data.currentIndex) 
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