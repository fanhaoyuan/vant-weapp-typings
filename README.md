# vant-weapp-typings

`@vant/weapp`小程序`UI`框架的类型声明文件

## 版本

- `@vant/weapp` -- `v1.8.4`

## 为什么

因为使用跨平台框架开发小程序时，使用`@vant/weapp`需要一套完整的类型声明文件。

官方使用原生微信小程序进行开发，因此并没有导出相应的类型文件。

这个仓库进行类型的补充。

## 支持列表

### 基础组件

- [x] `Button` 按钮
- [x] `Cell` 单元格
- [x] `ConfigProvider` 全局配置
- [x] `Icon` 图标
- [x] `Image` 图片
- [x] `Layout` 布局
- [x] `Popup` 弹出层
- [ ] `Toast` 轻提示
- [x] `Transition` 动画

### 表单组件

- [x] `Calendar` 日历
- [x] `Checkbox` 复选框
- [x] `DatetimePicker` 时间选择
- [x] `Field` 输入框
- [x] `Picker` 选择器
- [x] `Radio` 单选框
- [x] `Rate` 评分
- [x] `Search` 搜索
- [x] `Slider` 滑块
- [x] `Stepper` 步进器
- [x] `Switch` 开关
- [x] `Uploader` 文件上传

### 反馈组件

- [x] `ActionSheet` 动作面板
- [ ] `Dialog` 弹出框
- [x] `DropdownMenu` 下拉菜单
- [x] `Loading` 加载
- [ ] `Notify` 消息通知
- [x] `Overlay` 遮罩层
- [ ] `ShareSheet` 分享面板
- [ ] `SwipeCell` 滑动单元格

### 展示组件
- [ ] `Circle` 环形进度条
- [ ] `Collapse` 折叠面板
- [ ] `CountDown` 倒计时
- [ ] `Divider` 分割线
- [x] `Empty` 空状态
- [ ] `NoticeBar` 通知栏
- [ ] `Progress` 进度条
- [ ] `Skeleton` 骨架屏
- [ ] `Steps` 步骤条
- [x] `Sticky` 粘性布局
- [ ] `Tag` 标签

### 导航组件
- [ ] `Grid` 宫格
- [x] `IndexBar` 索引栏
- [ ] `NavBar` 导航栏
- [ ] `Sidebar` 侧边导航
- [ ] `Tab` 标签页
- [ ] `Tabbar` 标签栏
- [ ] `TreeSelect` 分类选择

### 业务组件
- [ ] `Area` 省市区选择
- [ ] `Card` 商品卡片
- [ ] `SubmitBar` 提交订单栏
- [ ] `GoodsAction` 商品导航

### 废弃
- [ ] `Panel` 面板

## 支持功能

- [x] `Props` 组件传参类型
- [x] `Events` 组件事件类型
- [ ] `ExternalClassName` 外部样式名称