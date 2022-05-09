type ColorPaletteThemeVars =
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

type GradientColorsThemeVars = 'gradientRed' | 'gradientOrange';

type ComponentColorsThemeVars =
    | 'textColor'
    | 'activeColor'
    | 'activeOpacity'
    | 'disabledOpacity'
    | 'backgroundColor'
    | 'backgroundColorLight'
    | 'textLinkColor';

type PaddingThemeVars = 'paddingBase' | 'paddingXs' | 'paddingSm' | 'paddingMd' | 'paddingLg' | 'paddingXl';

type FontThemeVars =
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

type AnimationThemeVars = 'animationDurationBase' | 'animationDurationFast';

type BorderThemeVars =
    | 'borderColor'
    | 'borderWidthBase'
    | 'borderRadiusSm'
    | 'borderRadiusMd'
    | 'borderRadiusLg'
    | 'borderRadiusMax';

type ActionSheetThemeVars =
    | 'actionSheetMaxHeight'
    | 'actionSheetHeaderHeight'
    | 'actionSheetHeaderFontSize'
    | 'actionSheetDescriptionColor'
    | 'actionSheetDescriptionFontSize'
    | 'actionSheetDescriptionLineHeight'
    | 'actionSheetItemBackground'
    | 'actionSheetItemFontSize'
    | 'actionSheetItemLineHeight'
    | 'actionSheetItemTextColor'
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

type ButtonThemeVars =
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

type CalendarThemeVars =
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

type CardThemeVars =
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

type CellThemeVars =
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

type CellGroupThemeVars =
    | 'cellGroupBackgroundColor'
    | 'cellGroupTitleColor'
    | 'cellGroupTitlePadding'
    | 'cellGroupTitleFontSize'
    | 'cellGroupTitleLineHeight'
    | 'cellGroupInsetPadding'
    | 'cellGroupInsetBorderRadius'
    | 'cellGroupInsetTitlePadding';

type CheckboxThemeVars =
    | 'checkboxSize'
    | 'checkboxBorderColor'
    | 'checkboxTransitionDuration'
    | 'checkboxLabelMargin'
    | 'checkboxLabelColor'
    | 'checkboxCheckedIconColor'
    | 'checkboxDisabledIconColor'
    | 'checkboxDisabledLabelColor'
    | 'checkboxDisabledBackgroundColor';

type CircleThemeVars = 'circleTextColor';

type CollapseThemeVars =
    | 'collapseItemTransitionDuration'
    | 'collapseItemContentPadding'
    | 'collapseItemContentFontSize'
    | 'collapseItemContentLineHeight'
    | 'collapseItemContentTextColor'
    | 'collapseItemContentBackgroundColor'
    | 'collapseItemTitleDisabledColor';

type CountDownThemeVars = 'countDownTextColor' | 'countDownFontSize' | 'countDownLineHeight';

type DialogThemeVars =
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

type FieldThemeVars =
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

type GoodsActionThemeVars =
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

type ImageThemeVars =
    | 'imagePlaceholderTextColor'
    | 'imagePlaceholderFontSize'
    | 'imagePlaceholderBackgroundColor'
    | 'imageLoadingIconSize'
    | 'imageLoadingIconColor'
    | 'imageErrorIconSize'
    | 'imageErrorIconColor';

type InfoThemeVars =
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

type LoadingThemeVars =
    | 'loadingTextColor'
    | 'loadingTextFontSize'
    | 'loadingTextLineHeight'
    | 'loadingSpinnerColor'
    | 'loadingSpinnerSize'
    | 'loadingSpinnerAnimationDuration';

type NavBarThemeVars =
    | 'navBarHeight'
    | 'navBarBackgroundColor'
    | 'navBarArrowSize'
    | 'navBarIconColor'
    | 'navBarTextColor'
    | 'navBarTitleFontSize'
    | 'navBarTitleTextColor';

type NoticeBarThemeVars =
    | 'noticeBarHeight'
    | 'noticeBarPadding'
    | 'noticeBarWrapablePadding'
    | 'noticeBarFontSize'
    | 'noticeBarTextColor'
    | 'noticeBarLineHeight'
    | 'noticeBarBackgroundColor'
    | 'noticeBarIconSize'
    | 'noticeBarIconMinWidth';

type NotifyThemeVars =
    | 'notifyPadding'
    | 'notifyFontSize'
    | 'notifyLineHeight'
    | 'notifyPrimaryBackgroundColor'
    | 'notifySuccessBackgroundColor'
    | 'notifyDangerBackgroundColor'
    | 'notifyWarningBackgroundColor';

type OverlayThemeVars = 'overlayBackgroundColor';

type PanelThemeVars = 'panelBackgroundColor' | 'panelHeaderValueColor' | 'panelFooterPadding';

type PickerThemeVars =
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

type PopupThemeVars =
    | 'popupBackgroundColor'
    | 'popupRoundBorderRadius'
    | 'popupCloseIconSize'
    | 'popupCloseIconColor'
    | 'popupCloseIconMargin'
    | 'popupCloseIconZIndex';

type ProgressThemeVars =
    | 'progressHeight'
    | 'progressBackgroundColor'
    | 'progressPivotPadding'
    | 'progressColor'
    | 'progressPivotFontSize'
    | 'progressPivotLineHeight'
    | 'progressPivotBackgroundColor'
    | 'progressPivotTextColor';

type RadioThemeVars =
    | 'radioSize'
    | 'radioBorderColor'
    | 'radioTransitionDuration'
    | 'radioLabelMargin'
    | 'radioLabelColor'
    | 'radioCheckedIconColor'
    | 'radioDisabledIconColor'
    | 'radioDisabledLabelColor'
    | 'radioDisabledBackgroundColor';

type RateThemeVars =
    | 'rateHorizontalPadding'
    | 'rateIconSize'
    | 'rateIconVoidColor'
    | 'rateIconFullColor'
    | 'rateIconDisabledColor'
    | 'rateIconGutter';

type SwitchThemeVars =
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

type ShareSheetThemeVars =
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

type SearchThemeVars =
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

type SidebarThemeVars = 'sidebarWidth';

type SidebarItemThemeVars =
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

type SliderThemeVars =
    | 'sliderActiveBackgroundColor'
    | 'sliderInactiveBackgroundColor'
    | 'sliderDisabledOpacity'
    | 'sliderBarHeight'
    | 'sliderButtonWidth'
    | 'sliderButtonHeight'
    | 'sliderButtonBorderRadius'
    | 'sliderButtonBackgroundColor'
    | 'sliderButtonBoxShadow';

type StepThemeVars =
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

type StepsThemeVars = 'stepsBackgroundColor';

type StepperThemeVars =
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

type SubmitBarThemeVars =
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

type TabbarThemeVars = 'tabbarHeight' | 'tabbarBackgroundColor';

type TabbarItemThemeVars =
    | 'tabbarItemFontSize'
    | 'tabbarItemTextColor'
    | 'tabbarItemActiveColor'
    | 'tabbarItemLineHeight'
    | 'tabbarItemIconSize'
    | 'tabbarItemMarginBottom';

type TabThemeVars = 'tabTextColor' | 'tabActiveTextColor' | 'tabDisabledTextColor' | 'tabFontSize';

type TabsThemeVars =
    | 'tabsDefaultColor'
    | 'tabsLineHeight'
    | 'tabsCardHeight'
    | 'tabsNavBackgroundColor'
    | 'tabsBottomBarHeight'
    | 'tabsBottomBarColor';

type TagThemeVars =
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

type ToastThemeVars =
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

type GridItemThemeVars =
    | 'gridItemContentPadding'
    | 'gridItemContentBackgroundColor'
    | 'gridItemContentActiveColor'
    | 'gridItemIconSize'
    | 'gridItemTextColor'
    | 'gridItemTextFontSize';

type DividerThemeVars =
    | 'dividerMargin'
    | 'dividerTextColor'
    | 'dividerFontSize'
    | 'dividerLineHeight'
    | 'dividerBorderColor'
    | 'dividerContentPadding'
    | 'dividerContentLeftWidth'
    | 'dividerContentRightWidth';

type EmptyThemeVars =
    | 'emptyPadding'
    | 'emptyImageSize'
    | 'emptyDescriptionMarginTop'
    | 'emptyDescriptionPadding'
    | 'emptyDescriptionColor'
    | 'emptyDescriptionFontSize'
    | 'emptyDescriptionLineHeight'
    | 'emptyBottomMarginTop';

type TreeSelectThemeVars =
    | 'treeSelectFontSize'
    | 'treeSelectNavBackgroundColor'
    | 'treeSelectContentBackgroundColor'
    | 'treeSelectNavItemPadding'
    | 'treeSelectItemHeight'
    | 'treeSelectItemActiveColor'
    | 'treeSelectItemDisabledColor';

type UploaderThemeVars =
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

type DropdownMenuThemeVars =
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

type IndexAnchorThemeVars =
    | 'indexAnchorPadding'
    | 'indexAnchorTextColor'
    | 'indexAnchorFontWeight'
    | 'indexAnchorFontSize'
    | 'indexAnchorLineHeight'
    | 'indexAnchorBackgroundColor'
    | 'indexAnchorActiveBackgroundColor'
    | 'indexAnchorActiveTextColor';

type IndexBarThemeVars = 'indexBarIndexFontSize' | 'indexBarIndexLineHeight';

type SkeletonThemeVars =
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
    | ColorPaletteThemeVars
    | GradientColorsThemeVars
    | ComponentColorsThemeVars
    | PaddingThemeVars
    | FontThemeVars
    | AnimationThemeVars
    | BorderThemeVars
    | ActionSheetThemeVars
    | ButtonThemeVars
    | CalendarThemeVars
    | CardThemeVars
    | CellThemeVars
    | CellGroupThemeVars
    | CheckboxThemeVars
    | CircleThemeVars
    | CollapseThemeVars
    | CountDownThemeVars
    | DialogThemeVars
    | FieldThemeVars
    | GoodsActionThemeVars
    | ImageThemeVars
    | InfoThemeVars
    | LoadingThemeVars
    | NavBarThemeVars
    | NoticeBarThemeVars
    | NotifyThemeVars
    | OverlayThemeVars
    | PanelThemeVars
    | PickerThemeVars
    | PopupThemeVars
    | ProgressThemeVars
    | RadioThemeVars
    | RateThemeVars
    | SwitchThemeVars
    | ShareSheetThemeVars
    | SearchThemeVars
    | SidebarThemeVars
    | SidebarItemThemeVars
    | SliderThemeVars
    | StepThemeVars
    | StepsThemeVars
    | StepperThemeVars
    | SubmitBarThemeVars
    | TabbarThemeVars
    | TabbarItemThemeVars
    | TabThemeVars
    | TabsThemeVars
    | TagThemeVars
    | ToastThemeVars
    | GridItemThemeVars
    | DividerThemeVars
    | EmptyThemeVars
    | TreeSelectThemeVars
    | UploaderThemeVars
    | DropdownMenuThemeVars
    | IndexAnchorThemeVars
    | IndexBarThemeVars
    | SkeletonThemeVars,
    string
>;
