import { VantComponent } from '../base';

export interface VantConfigProviderProps {
    /**
     * 自定义主题变量
     */
    'theme-vars'?: Record<string, any>;
}

export type VantConfigProvider = VantComponent<VantConfigProviderProps>;

declare const ConfigProvider: VantConfigProvider;

export default ConfigProvider;
