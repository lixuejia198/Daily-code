// pages/goods_list/goods_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id: 0,
      value: "综合",
      isActive: true
    },
    {
      id: 1,
      value: "销量",
      isActive: false
    },
    {
      id: 2,
      value: "价格",
      isActive: false
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 标题点击事件 从子组件传递过来
  handleTabsItemChange(e) {
    // console.log(e);
    // 1.获取被点击的标题索引
    let { index } = e.detail;
    // 2.修改原数组
    let { tabs } = this.data
    tabs.forEach((ele, i) => {
      i === index ? ele.isActive = true : ele.isActive = false
    })
    // 3.赋值到data中
    this.setData({
      tabs: tabs
    })
  }
})