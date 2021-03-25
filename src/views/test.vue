<template>
 <div class='content'>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <el-select v-model="value" @change="languge" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
</div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value: localStorage.getItem('language') || 'en', // 初始化时候获取上次存的值，并在处于选中状态。
      options: [
        {
          value: 'en',
          label: '英文'
        }, {
          value: 'zh',
          label: '中文'
        }
      ]
    }
  },
  methods: {
    languge () {
      this.$i18n.locale = this.value // 在main.js里设置的i180我们在这里调用，并赋值
      localStorage.setItem('language', this.value) // 每次切换语言，本地存一下，防止刷新丢失。
    }
  }
}
</script>
