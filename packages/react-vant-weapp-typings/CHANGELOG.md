## v1.25.1

-   🐛 修复 `ConfigProvider` 的 `theme-vars` 中的项为必需项的错误 [#9](https://github.com/fanhaoyuan/vant-weapp-typings/pull/9)

## v1.25.0

-   🚀 添加 `WechatOpenType` 类型 [#8](https://github.com/fanhaoyuan/vant-weapp-typings/pull/8)
-   🚀 添加 `ThemeVars` 类型 [#7](https://github.com/fanhaoyuan/vant-weapp-typings/pull/7)

## v1.24.2

-   🐛 修复 `Tabs` 组件'tab-active-class'为必需参数的错误 [#6](https://github.com/fanhaoyuan/vant-weapp-typings/pull/6)

## v1.24.1

-   🐛 修复 `DropdownItem` 组件的 `Event` 类型错误问题

## v1.24.0

-   🚀 `Field` 新增 `always-embed` 属性
-   🚀 `DropdownMenu` 新增 `custom-class` 属性
-   🚀 `Stepper` 新增 `always-embed` 属性
-   🚀 `GoodsActionIcon` 新增 `class-prefix` 属性

## v1.23.3

-   🐛 修复所有事件为`bind:*`

## v1.23.2

### bugs

-   🐛 `Toast`更新实例和方法的类型

## v1.23.1

### bugs

-   🐛 `Collapse`添加`bind`前缀以及修改返回类型

## v1.23.0

### features

-   🚀 添加`Calendar`组件的`readonly`属性
-   🚀 添加`Calendar`组件`Day`数据结构的`className`属性

## v1.22.0

### features

-   🚀 更新`Dialog`组件的`action`类型
-   🚀 更新`CountDown`组件`bind:change`回调函数
-   🚀 添加`Slider`组件的`vertical`属性

### bugs

-   🐛 `CountDown`添加`bind`前缀

### deprecated

-   ⛔️ 废弃所有组件的默认导出

## v1.21.2

### bugs

-   🐛 修复`Image`组件事件不为可选的问题
-   🐛 修复`Transition`组件事件不为可选的问题
-   🐛 修复`TreeSelect`组件中`children`不为可选的问题

## v1.21.1

### bugs

-   🐛 修复`Action`组件`show`缺失的问题

## v1.21.0

### features

-   🚀 添加组件通用属性`id`
-   🚀 添加`Toast`组件

### bugs

-   🐛 修复`Toast`组件`API`类型错误问题

## v1.20.3

### bugs

-   🐛 修复`Cell`的`link-type`可选性错误

## v1.20.2

### bugs

-   🐛 修复`Picker`的`columns`类型错误的问题
-   🐛 修复`Picker`的`events`声明缺少`bind`前缀的问题

## v1.20.1

### bugs

-   🐛 修复`Picker`没有导出的问题

## v1.20.0

### features

-   🚀 默认导出对应组件类型

## v1.19.0

### features

-   🚀 `ExternalClassName` 外部样式名称支持

### bugs

-   🐛 fix duplicate name

## v1.18.1

### refactor

-   🔧 `ActionSheet`继承`OpenType`
-   🔧 `Button`继承`OpenType`
-   🔧 `GoodsAction`继承`OpenType`

## v1.18.0

### features

-   🚀 `Toast` 轻提示组件支持
-   🚀 `Notify` 消息通知组件支持
-   🚀 `Dialog` 弹出框组件支持
-   🚀 `OpenType` 微信开放能力类型

## v1.17.0

### features

-   🚀 `Panel` 面板组件支持

## v1.16.0

### features

-   🚀 `Area` 省市区选择组件支持
-   🚀 `Card` 商品卡片组件支持
-   🚀 `SubmitBar` 提交订单栏组件支持
-   🚀 `GoodsAction` 商品导航组件支持

## v1.15.0

### features

-   🚀 `ShareSheet` 分享面板组件支持
-   🚀 `SwipeCell` 滑动单元格组件支持

## v1.14.0

### features

-   🚀 `Grid` 宫格组件支持
-   🚀 `NavBar` 导航栏组件支持
-   🚀 `Sidebar` 侧边导航组件支持
-   🚀 `Tab` 标签页组件支持
-   🚀 `Tabbar` 标签栏组件支持

## v1.13.0

### features

-   🚀 `Collapse` 折叠面板组件支持
-   🚀 `CountDown` 倒计时组件支持
-   🚀 `Skeleton` 骨架屏组件支持
-   🚀 `Steps` 步骤条组件支持

## v1.12.0

### features

-   🚀 `Circle` 环形进度条组件支持
-   🚀 `Divider` 分割线组件支持
-   🚀 `NoticeBar` 通知栏组件支持
-   🚀 `Progress` 进度条组件支持

## v1.11.0

### features

-   🚀 `Tag` 标签组件支持
-   🚀 `IndexBar` 索引栏组件支持
-   🚀 `TreeSelect` 分类选择组件支持

## v1.10.0

### features

-   🚀 `Loading` 加载组件支持
-   🚀 `Overlay` 遮罩层组件支持
-   🚀 `Empty` 空状态组件支持

## v1.9.0

### features

-   🚀 `DropdownMenu` 下拉菜单组件支持

## v1.8.0

### features

-   🚀 `ActionSheet` 动作面板组件支持

## v1.7.0

### features

-   🚀 `Stepper` 步进器组件支持
-   🚀 `Switch` 开关组件支持
-   🚀 `Uploader` 文件上传组件支持

## v1.6.0

### features

-   🚀 `Slider` 滑块组件支持

## v1.5.0

### features

-   🚀 `Search` 搜索组件支持

## v1.4.0

### features

-   🚀 `Rate` 评分组件支持

## v1.3.0

### features

-   🚀 `Radio` 单选框组件支持

## v1.2.0

### features

-   🚀 `Picker` 输入框组件支持

## v1.1.0

### features

-   🚀 `Field` 输入框组件支持

## v1.0.0

### features

-   🚀 组件的`Props`
-   🚀 组件的`Events`
-   🚀 `Button` 按钮组件支持
-   🚀 `Cell` 单元格组件支持
-   🚀 `ConfigProvider` 全局配置组件支持
-   🚀 `Icon` 图标组件支持
-   🚀 `Image` 图片组件支持
-   🚀 `Layout` 布局组件支持
-   🚀 `Popup` 弹出层组件支持
-   🚀 `Transition` 动画组件支持
-   🚀 `Calendar` 日历组件支持
-   🚀 `Checkbox` 复选框组件支持
-   🚀 `DatetimePicker` 时间选择组件支持
