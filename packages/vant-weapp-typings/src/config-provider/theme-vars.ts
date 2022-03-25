/**
 * 调色板
 */
type ColorVars =
    | 'black'
    | 'white'
    | 'gray1'
    | 'gray2'
    | 'gray3'
    | 'gray4'
    | 'gray5'
    | 'gray6'
    | 'gray7'
    | 'gray8'
    | 'red'
    | 'blue'
    | 'orange'
    | 'orangeDark'
    | 'orangeLight'
    | 'green';

/**
 * 渐变色
 */
type GradientColorVars = 'gradientRed' | 'gradientOrange';

/**
 * 组件颜色
 */
type ComponentColorVars =
    | 'textColor'
    | 'activeColor'
    | 'activeOpacity'
    | 'disabledOpacity'
    | 'backgroundColor'
    | 'backgroundColorLight'
    | 'textLinkColor';

/**
 * 内边距
 */
type PaddingVars = 'paddingBase' | 'paddingXs' | 'paddingSm' | 'paddingMd' | 'paddingLg' | 'paddingXl';

/**
 * 字体
 */
type FontVars =
    | 'fontSizeXs'
    | 'fontSizeSm'
    | 'fontSizeMd'
    | 'fontSizeLg'
    | 'fontWeightBold'
    | 'lineHeightXs'
    | 'lineHeightSm'
    | 'lineHeightMd'
    | 'lineHeightLg'
    | 'baseFontFamily'
    | 'priceIntegerFontFamily';

/**
 * 动画
 */
type AnimationVars = 'animationDurationBase' | 'animationDurationFast';

/**
 * 边框
 */
type BorderVars =
    | 'borderColor'
    | 'borderWidthBase'
    | 'borderRadiusSm'
    | 'borderRadiusMd'
    | 'borderRadiusLg'
    | 'borderRadiusMax';

/**
 * 动作面板
 */
type ActionSheetVars =
    | 'actionSheetMaxHeight'
    | 'actionSheetHeaderHeight'
    | 'actionSheetHeaderFontSize'
    | 'actionSheetDescriptionColor'
    | 'actionSheetDescriptionFontSize'
    | 'actionSheetDescriptionLineHeight'
    | 'actionSheetItemBackground'
    | 'actionSheetItemFontSize'
    | 'actionSheetItemLineHeight'
    | 'actionSheetItemDisabledTextColor'
    | 'actionSheetSubnameColor'
    | 'actionSheetSubnameFontSize'
    | 'actionSheetSubnameLineHeight'
    | 'actionSheetCloseIconSize'
    | 'actionSheetCloseIconColor'
    | 'actionSheetCloseIconPadding'
    | 'actionSheetCancelTextColor'
    | 'actionSheetCancelPaddingTop'
    | 'actionSheetCancelPaddingColor';

/**
 * 按钮
 */
type ButtonVars =
    | 'buttonMiniHeight'
    | 'buttonMiniMinWidth'
    | 'buttonMiniFontSize'
    | 'buttonSmallHeight'
    | 'buttonSmallFontSize'
    | 'buttonSmallMinWidth'
    | 'buttonNormalFontSize'
    | 'buttonLargeHeight'
    | 'buttonDefaultColor'
    | 'buttonDefaultHeight'
    | 'buttonDefaultFontSize'
    | 'buttonDefaultBackgroundColor'
    | 'buttonDefaultBorderColor'
    | 'buttonPrimaryColor'
    | 'buttonPrimaryBackgroundColor'
    | 'buttonPrimaryBorderColor'
    | 'buttonInfoColor'
    | 'buttonInfoBackgroundColor'
    | 'buttonInfoBorderColor'
    | 'buttonDangerColor'
    | 'buttonDangerBackgroundColor'
    | 'buttonDangerBorderColor'
    | 'buttonWarningColor'
    | 'buttonWarningBackgroundColor'
    | 'buttonWarningBorderColor'
    | 'buttonLineHeight'
    | 'buttonBorderWidth'
    | 'buttonBorderRadius'
    | 'buttonRoundBorderRadius'
    | 'buttonPlainBackgroundColor'
    | 'buttonDisabledOpacity';

/**
 * 日历
 */
type CalendarVars =
    | 'calendarHeight'
    | 'calendarBackgroundColor'
    | 'calendarPopupHeight'
    | 'calendarHeaderBoxShadow'
    | 'calendarHeaderTitleHeight'
    | 'calendarHeaderTitleFontSize'
    | 'calendarHeaderSubtitleFontSize'
    | 'calendarWeekdaysHeight'
    | 'calendarWeekdaysFontSize'
    | 'calendarMonthTitleFontSize'
    | 'calendarMonthMarkColor'
    | 'calendarMonthMarkFontSize'
    | 'calendarDayHeight'
    | 'calendarDayFontSize'
    | 'calendarRangeEdgeColor'
    | 'calendarRangeEdgeBackgroundColor'
    | 'calendarRangeMiddleColor'
    | 'calendarRangeMiddleBackgroundOpacity'
    | 'calendarSelectedDaySize'
    | 'calendarSelectedDayColor'
    | 'calendarInfoFontSize'
    | 'calendarInfoLineHeight'
    | 'calendarSelectedDayBackgroundColor'
    | 'calendarDayDisabledColor'
    | 'calendarConfirmButtonHeight'
    | 'calendarConfirmButtonMargin'
    | 'calendarConfirmButtonLineHeight';

/**
 * 卡片
 */
type CardVars =
    | 'cardPadding'
    | 'cardFontSize'
    | 'cardTextColor'
    | 'cardBackgroundColor'
    | 'cardThumbSize'
    | 'cardTitleLineHeight'
    | 'cardDescColor'
    | 'cardDescLineHeight'
    | 'cardPriceColor'
    | 'cardOriginPriceColor'
    | 'cardOriginPriceFontSize'
    | 'cardPriceFontSize'
    | 'cardPriceIntegerFontSize'
    | 'cardPriceFontFamily';

/**
 * 单元格
 */
type CellVars =
    | 'cellFontSize'
    | 'cellLineHeight'
    | 'cellVerticalPadding'
    | 'cellHorizontalPadding'
    | 'cellTextColor'
    | 'cellBackgroundColor'
    | 'cellBorderColor'
    | 'cellActiveColor'
    | 'cellRequiredColor'
    | 'cellLabelColor'
    | 'cellLabelFontSize'
    | 'cellLabelLineHeight'
    | 'cellLabelMarginTop'
    | 'cellValueColor'
    | 'cellIconSize'
    | 'cellRightIconColor'
    | 'cellLargeVerticalPadding'
    | 'cellLargeTitleFontSize'
    | 'cellLargeValueFontSize'
    | 'cellLargeLabelFontSize';
/**
 * 单元格组
 */
type CellGroupVars =
    | 'cellGroupBackgroundColor'
    | 'cellGroupTitleColor'
    | 'cellGroupTitlePadding'
    | 'cellGroupTitleFontSize'
    | 'cellGroupTitleLineHeight'
    | 'cellGroupInsetPadding'
    | 'cellGroupInsetBorderRadius'
    | 'cellGroupInsetTitlePadding';
/**
 * 复选框
 */
type CheckboxVars =
    | 'checkboxSize'
    | 'checkboxBorderColor'
    | 'checkboxTransitionDuration'
    | 'checkboxLabelMargin'
    | 'checkboxLabelColor'
    | 'checkboxCheckedIconColor'
    | 'checkboxDisabledIconColor'
    | 'checkboxDisabledLabelColor'
    | 'checkboxDisabledBackgroundColor';

/**
 * 环形进度条
 */
type CircleVars = 'circleTextColor';

/**
 * 折叠面板
 */
type CollapseVars =
    | 'collapseItemTransitionDuration'
    | 'collapseItemContentPadding'
    | 'collapseItemContentFontSize'
    | 'collapseItemContentLineHeight'
    | 'collapseItemContentTextColor'
    | 'collapseItemContentBackgroundColor'
    | 'collapseItemTitleDisabledColor';

/**
 * 倒计时
 */
type CountDownVars = 'countDownTextColor' | 'countDownFontSize' | 'countDownLineHeight';

/**
 * 弹出框
 */
type DialogVars =
    | 'dialogWidth'
    | 'dialogSmallScreenWidth'
    | 'dialogFontSize'
    | 'dialogBorderRadius'
    | 'dialogBackgroundColor'
    | 'dialogHeaderFontWeight'
    | 'dialogHeaderLineHeight'
    | 'dialogHeaderPaddingTop'
    | 'dialogHeaderIsolatedPadding'
    | 'dialogMessagePadding'
    | 'dialogMessageFontSize'
    | 'dialogMessageLineHeight'
    | 'dialogMessageMaxHeight'
    | 'dialogHasTitleMessageTextColor'
    | 'dialogHasTitleMessagePaddingTop';

/**
 * 输入框
 */
type FieldVars =
    | 'fieldLabelColor'
    | 'fieldInputTextColor'
    | 'fieldInputErrorTextColor'
    | 'fieldInputDisabledTextColor'
    | 'fieldPlaceholderTextColor'
    | 'fieldIconSize'
    | 'fieldClearIconSize'
    | 'fieldClearIconColor'
    | 'fieldIconContainerColor'
    | 'fieldErrorMessageColor'
    | 'fieldErrorMessageTextFontSize'
    | 'fieldTextAreaMinHeight'
    | 'fieldWordLimitColor'
    | 'fieldWordLimitFontSize'
    | 'fieldWordLimitLineHeight'
    | 'fieldWordNumFullColor'
    | 'fieldDisabledTextColor';

/**
 * 商品导航
 */
type GoodsActionVars =
    | 'goodsActionBackgroundColor'
    | 'goodsActionHeight'
    | 'goodsActionIconWidth'
    | 'goodsActionIconHeight'
    | 'goodsActionIconColor'
    | 'goodsActionIconSize'
    | 'goodsActionIconFontSize'
    | 'goodsActionIconTextColor'
    | 'goodsActionButtonHeight'
    | 'goodsActionButtonLineHeight'
    | 'goodsActionButtonBorderRadius'
    | 'goodsActionButtonWarningColor'
    | 'goodsActionButtonDangerColor'
    | 'goodsActionButtonPlainColor';

/**
 * 图片
 */
type ImageVars =
    | 'imagePlaceholderTextColor'
    | 'imagePlaceholderFontSize'
    | 'imagePlaceholderBackgroundColor'
    | 'imageLoadingIconSize'
    | 'imageLoadingIconColor'
    | 'imageErrorIconSize'
    | 'imageErrorIconColor';

type InfoVars =
    | 'infoSize'
    | 'infoColor'
    | 'infoPadding'
    | 'infoFontSize'
    | 'infoFontWeight'
    | 'infoBorderWidth'
    | 'infoBackgroundColor'
    | 'infoDotColor'
    | 'infoDotSize'
    | 'infoFontFamily';

/**
 * 加载
 */
type LoadingVars =
    | 'loadingTextColor'
    | 'loadingTextFontSize'
    | 'loadingTextLineHeight'
    | 'loadingSpinnerColor'
    | 'loadingSpinnerSize'
    | 'loadingSpinnerAnimationDuration';

/**
 * 导航栏
 */
type NavBarVars =
    | 'navBarHeight'
    | 'navBarBackgroundColor'
    | 'navBarArrowSize'
    | 'navBarIconColor'
    | 'navBarTextColor'
    | 'navBarTitleFontSize'
    | 'navBarTitleTextColor';

/**
 * 通知栏
 */
type NoticeBarVars =
    | 'noticeBarHeight'
    | 'noticeBarPadding'
    | 'noticeBarWrapablePadding'
    | 'noticeBarFontSize'
    | 'noticeBarTextColor'
    | 'noticeBarLineHeight'
    | 'noticeBarBackgroundColor'
    | 'noticeBarIconSize'
    | 'noticeBarIconMinWidth';

/**
 * 消息通知
 */
type NotifyVars =
    | 'notifyPadding'
    | 'notifyFontSize'
    | 'notifyLineHeight'
    | 'notifyPrimaryBackgroundColor'
    | 'notifySuccessBackgroundColor'
    | 'notifyDangerBackgroundColor'
    | 'notifyWarningBackgroundColor';

/**
 * 遮罩层
 */
type OverlayVars = 'overlayBackgroundColor';

/**
 * 面板
 */
type PanelVars = 'panelBackgroundColor' | 'panelHeaderValueColor' | 'panelFooterPadding';

/**
 * 选择器
 */
type PickerVars =
    | 'pickerBackgroundColor'
    | 'pickerToolbarHeight'
    | 'pickerTitleFontSize'
    | 'pickerActionPadding'
    | 'pickerActionFontSize'
    | 'pickerConfirmActionColor'
    | 'pickerCancelActionColor'
    | 'pickerOptionFontSize'
    | 'pickerOptionTextColor'
    | 'pickerLoadingIconColor'
    | 'pickerLoadingMaskColor'
    | 'pickerOptionDisabledOpacity'
    | 'pickerOptionSelectedTextColor';

/**
 * 弹出层
 */
type PopupVars =
    | 'popupBackgroundColor'
    | 'popupRoundBorderRadius'
    | 'popupCloseIconSize'
    | 'popupCloseIconColor'
    | 'popupCloseIconMargin'
    | 'popupCloseIconZIndex';

/**
 * 进度条
 */
type ProgressVars =
    | 'progressHeight'
    | 'progressBackgroundColor'
    | 'progressPivotPadding'
    | 'progressColor'
    | 'progressPivotFontSize'
    | 'progressPivotLineHeight'
    | 'progressPivotBackgroundColor'
    | 'progressPivotTextColor';

/**
 * 单选框
 */
type RadioVars =
    | 'radioSize'
    | 'radioBorderColor'
    | 'radioTransitionDuration'
    | 'radioLabelMargin'
    | 'radioLabelColor'
    | 'radioCheckedIconColor'
    | 'radioDisabledIconColor'
    | 'radioDisabledLabelColor'
    | 'radioDisabledBackgroundColor';

/**
 * 评分
 */
type RateVars =
    | 'rateHorizontalPadding'
    | 'rateIconSize'
    | 'rateIconVoidColor'
    | 'rateIconFullColor'
    | 'rateIconDisabledColor'
    | 'rateIconGutter';

/**
 * 开关
 */
type SwitchVars =
    | 'switchWidth'
    | 'switchHeight'
    | 'switchNodeSize'
    | 'switchNodeZIndex'
    | 'switchNodeBackgroundColor'
    | 'switchNodeBoxShadow'
    | 'switchBackgroundColor'
    | 'switchOnBackgroundColor'
    | 'switchTransitionDuration'
    | 'switchDisabledOpacity'
    | 'switchBorder';

/**
 * 分享面板
 */
type ShareSheetVars =
    | 'shareSheetHeaderPadding'
    | 'shareSheetTitleColor'
    | 'shareSheetTitleFontSize'
    | 'shareSheetTitleLineHeight'
    | 'shareSheetDescriptionColor'
    | 'shareSheetDescriptionFontSize'
    | 'shareSheetDescriptionLineHeight'
    | 'shareSheetIconSize'
    | 'shareSheetOptionNameColor'
    | 'shareSheetOptionNameFontSize'
    | 'shareSheetOptionDescriptionColor'
    | 'shareSheetOptionDescriptionFontSize'
    | 'shareSheetCancelButtonFontSize'
    | 'shareSheetCancelButtonHeight'
    | 'shareSheetCancelButtonBackground';

/**
 * 搜索
 */
type SearchVars =
    | 'searchBackgroundColor'
    | 'searchPadding'
    | 'searchInputHeight'
    | 'searchLabelPadding'
    | 'searchLabelColor'
    | 'searchLabelFontSize'
    | 'searchLeftIconColor'
    | 'searchActionPadding'
    | 'searchActionTextColor'
    | 'searchActionFontSize';

/**
 * 侧边导航
 */
type SideBarVars = 'sidebarWidth';

/**
 * 侧边导航项
 */
type SizeBarItemVars =
    | 'sidebarFontSize'
    | 'sidebarLineHeight'
    | 'sidebarTextColor'
    | 'sidebarDisabledTextColor'
    | 'sidebarPadding'
    | 'sidebarActiveColor'
    | 'sidebarBackgroundColor'
    | 'sidebarSelectedFontWeight'
    | 'sidebarSelectedTextColor'
    | 'sidebarSelectedBorderColor'
    | 'sidebarSelectedBackgroundColor';

/**
 * 滑块
 */
type SliderVars =
    | 'sliderActiveBackgroundColor'
    | 'sliderInactiveBackgroundColor'
    | 'sliderDisabledOpacity'
    | 'sliderBarHeight'
    | 'sliderButtonWidth'
    | 'sliderButtonHeight'
    | 'sliderButtonBorderRadius'
    | 'sliderButtonBackgroundColor'
    | 'sliderButtonBoxShadow';

/**
 * 步骤项
 */
type StepVars =
    | 'stepTextColor'
    | 'stepProcessTextColor'
    | 'stepFontSize'
    | 'stepLineColor'
    | 'stepFinishLineColor'
    | 'stepFinishTextColor'
    | 'stepIconSize'
    | 'stepCircleSize'
    | 'stepCircleColor'
    | 'stepHorizontalTitleFontSize';

/**
 * 步骤条
 */
type StepsVars = 'stepsBackgroundColor';

/**
 * 步进器
 */
type StepperVars =
    | 'stepperActiveColor'
    | 'stepperBackgroundColor'
    | 'stepperButtonIconColor'
    | 'stepperButtonDisabledColor'
    | 'stepperButtonDisabledIconColor'
    | 'stepperButtonRoundThemeColor'
    | 'stepperInputWidth'
    | 'stepperInputHeight'
    | 'stepperInputFontSize'
    | 'stepperInputLineHeight'
    | 'stepperInputTextColor'
    | 'stepperInputDisabledTextColor'
    | 'stepperInputDisabledBackgroundColor'
    | 'stepperBorderRadius';

/**
 * 提交订单栏
 */
type SubmitBarVars =
    | 'submitBarHeight'
    | 'submitBarZIndex'
    | 'submitBarBackgroundColor'
    | 'submitBarButtonWidth'
    | 'submitBarPriceColor'
    | 'submitBarPriceFontSize'
    | 'submitBarCurrencyFontSize'
    | 'submitBarTextColor'
    | 'submitBarTextFontSize'
    | 'submitBarTipPadding'
    | 'submitBarTipFontSize'
    | 'submitBarTipLineHeight'
    | 'submitBarTipColor'
    | 'submitBarTipBackgroundColor'
    | 'submitBarTipIconSize'
    | 'submitBarButtonHeight'
    | 'submitBarPadding'
    | 'submitBarPriceIntegerFontSize'
    | 'submitBarPriceFontFamily';

/**
 * 标签栏
 */
type TabbarVars = 'tabbarHeight' | 'tabbarBackgroundColor';

/**
 * 标签栏项
 */
type TabbarItemVars =
    | 'tabbarItemFontSize'
    | 'tabbarItemTextColor'
    | 'tabbarItemActiveColor'
    | 'tabbarItemLineHeight'
    | 'tabbarItemIconSize'
    | 'tabbarItemMarginBottom';

/**
 * 标签页项
 */
type TabVars = 'tabTextColor' | 'tabActiveTextColor' | 'tabDisabledTextColor' | 'tabFontSize';
/**
 * 标签页
 */
type TabsVars =
    | 'tabsDefaultColor'
    | 'tabsLineHeight'
    | 'tabsCardHeight'
    | 'tabsNavBackgroundColor'
    | 'tabsBottomBarHeight'
    | 'tabsBottomBarColor';

/**
 * 标签
 */
type TagVars =
    | 'tagPadding'
    | 'tagTextColor'
    | 'tagFontSize'
    | 'tagBorderRadius'
    | 'tagLineHeight'
    | 'tagMediumPadding'
    | 'tagLargePadding'
    | 'tagLargeBorderRadius'
    | 'tagLargeFontSize'
    | 'tagRoundBorderRadius'
    | 'tagDangerColor'
    | 'tagPrimaryColor'
    | 'tagSuccessColor'
    | 'tagWarningColor'
    | 'tagDefaultColor'
    | 'tagPlainBackgroundColor';

/**
 * 轻提示
 */
type ToastVars =
    | 'toastMaxWidth'
    | 'toastFontSize'
    | 'toastTextColor'
    | 'toastLineHeight'
    | 'toastBorderRadius'
    | 'toastBackgroundColor'
    | 'toastIconSize'
    | 'toastTextMinWidth'
    | 'toastTextPadding'
    | 'toastDefaultPadding'
    | 'toastDefaultWidth'
    | 'toastDefaultMinHeight';

/**
 * 宫格项
 */
type GridItemVars =
    | 'gridItemContentPadding'
    | 'gridItemContentBackgroundColor'
    | 'gridItemContentActiveColor'
    | 'gridItemIconSize'
    | 'gridItemTextColor'
    | 'gridItemTextFontSize';

/**
 * 分割线
 */
type DividerVars =
    | 'dividerMargin'
    | 'dividerTextColor'
    | 'dividerFontSize'
    | 'dividerLineHeight'
    | 'dividerBorderColor'
    | 'dividerContentPadding'
    | 'dividerContentLeftWidth'
    | 'dividerContentRightWidth';

/**
 * 空状态
 */
type EmptyVars =
    | 'emptyPadding'
    | 'emptyImageSize'
    | 'emptyDescriptionMarginTop'
    | 'emptyDescriptionPadding'
    | 'emptyDescriptionColor'
    | 'emptyDescriptionFontSize'
    | 'emptyDescriptionLineHeight'
    | 'emptyBottomMarginTop';

/**
 * 分类选择
 */
type TreeSelectVars =
    | 'treeSelectFontSize'
    | 'treeSelectNavBackgroundColor'
    | 'treeSelectContentBackgroundColor'
    | 'treeSelectNavItemPadding'
    | 'treeSelectItemHeight'
    | 'treeSelectItemActiveColor'
    | 'treeSelectItemDisabledColor';

/**
 * 文件上传
 */
type UploaderVars =
    | 'uploaderSize'
    | 'uploaderIconSize'
    | 'uploaderIconColor'
    | 'uploaderTextColor'
    | 'uploaderTextFontSize'
    | 'uploaderUploadBackgroundColor'
    | 'uploaderUploadActiveColor'
    | 'uploaderDeleteColor'
    | 'uploaderDeleteIconSize'
    | 'uploaderDeleteBackgroundColor'
    | 'uploaderFileBackgroundColor'
    | 'uploaderFileIconSize'
    | 'uploaderFileIconColor'
    | 'uploaderFileNamePadding'
    | 'uploaderFileNameMarginTop'
    | 'uploaderFileNameFontSize'
    | 'uploaderFileNameTextColor'
    | 'uploaderMaskBackgroundColor'
    | 'uploaderMaskIconSize'
    | 'uploaderMaskMessageFontSize'
    | 'uploaderMaskMessageLineHeight'
    | 'uploaderLoadingIconSize'
    | 'uploaderLoadingIconColor'
    | 'uploaderDisabledOpacity';

/**
 * 下拉菜单
 */
type DropdownMenuVars =
    | 'dropdownMenuHeight'
    | 'dropdownMenuBackgroundColor'
    | 'dropdownMenuTitleFontSize'
    | 'dropdownMenuTitleTextColor'
    | 'dropdownMenuTitleActiveTextColor'
    | 'dropdownMenuTitleDisabledTextColor'
    | 'dropdownMenuTitlePadding'
    | 'dropdownMenuTitleLineHeight'
    | 'dropdownMenuOptionActiveColor'
    | 'dropdownMenuBoxShadow';

/**
 * 索引项
 */
type IndexAnchorVars =
    | 'indexAnchorPadding'
    | 'indexAnchorTextColor'
    | 'indexAnchorFontWeight'
    | 'indexAnchorFontSize'
    | 'indexAnchorLineHeight'
    | 'indexAnchorBackgroundColor'
    | 'indexAnchorActiveBackgroundColor'
    | 'indexAnchorActiveTextColor';

/**
 * 索引栏
 */
type IndexBarVars = 'indexBarIndexFontSize' | 'indexBarIndexLineHeight';

/**
 * 骨架屏
 */
type SkeletonVars =
    | 'skeletonPadding'
    | 'skeletonRowHeight'
    | 'skeletonRowBackgroundColor'
    | 'skeletonRowMarginTop'
    | 'skeletonAvatarBackgroundColor'
    | 'skeletonAnimationDuration';

/**
 * 主题变量
 *
 * @see https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less
 */
export type ThemeVars = Record<
    | ColorVars
    | GradientColorVars
    | ComponentColorVars
    | PaddingVars
    | FontVars
    | AnimationVars
    | BorderVars
    | ActionSheetVars
    | ButtonVars
    | CalendarVars
    | CardVars
    | CellVars
    | CellGroupVars
    | CheckboxVars
    | CircleVars
    | CollapseVars
    | CountDownVars
    | DialogVars
    | FieldVars
    | GoodsActionVars
    | ImageVars
    | InfoVars
    | LoadingVars
    | NavBarVars
    | NoticeBarVars
    | NotifyVars
    | OverlayVars
    | PanelVars
    | PickerVars
    | PopupVars
    | ProgressVars
    | RadioVars
    | RateVars
    | SwitchVars
    | ShareSheetVars
    | SearchVars
    | SideBarVars
    | SizeBarItemVars
    | SliderVars
    | StepVars
    | StepsVars
    | StepperVars
    | SubmitBarVars
    | TabbarVars
    | TabbarItemVars
    | TabVars
    | TabsVars
    | TagVars
    | ToastVars
    | GridItemVars
    | DividerVars
    | EmptyVars
    | TreeSelectVars
    | UploaderVars
    | DropdownMenuVars
    | IndexAnchorVars
    | IndexBarVars
    | SkeletonVars,
    string
>;
