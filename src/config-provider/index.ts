import { VantComponent } from '../base';

export interface VantConfigProviderProps {
    /**
     * 自定义主题变量
     */
    'theme-vars'?: Record<string, any>;
}

export type VantConfigProvider = VantComponent<VantConfigProviderProps>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const ConfigProvider: VantConfigProvider;

export default ConfigProvider;
