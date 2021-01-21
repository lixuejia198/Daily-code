// components/tabs/tabsComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //  点击事件
    handleItemTap(e) {
      // console.log(e); 
      // 获取点击的索引
      let index = e.currentTarget.dataset.index;
      // console.log(index);
      // 触发父组件中的事件
      this.triggerEvent("tabsItemChange", { index })
    }
  }
})