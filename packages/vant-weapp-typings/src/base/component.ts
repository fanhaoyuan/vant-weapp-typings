export interface ComponentBase {
    /**
     * 标识符
     */
    id?: string;
}

export type VantComponent<Props = {}, Events = {}, EC = {}> = ComponentBase & Props & Events & EC;
