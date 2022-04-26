import { VantConfigProvider, VantConfigProviderProps } from 'vant-weapp-typings';

type ConfigProvider = React.ComponentType<VantConfigProvider>;

export { VantConfigProvider, VantConfigProviderProps };

declare const ConfigProvider: ConfigProvider;

export default ConfigProvider;
