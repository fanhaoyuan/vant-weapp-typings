import { VantComponent } from '../base';
import { ThemeVars } from './theme-vars';

export interface VantConfigProviderProps {
    /**
     * 自定义主题变量
     */
    'theme-vars'?: Partial<ThemeVars>;
}

export type VantConfigProvider = VantComponent<VantConfigProviderProps>;
