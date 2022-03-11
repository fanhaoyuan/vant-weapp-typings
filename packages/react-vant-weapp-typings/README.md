# react-vant-weapp-typings

## 安装

```bash
>$ npm install react-vant-weapp-typings --save-dev
or

>$ yarn add react-vant-weapp-typings -D
```

## 使用

修改`tsconfig.json`

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@vant/weapp/*": ["./node_modules/react-vant-weapp-typings/dist/*"]
        }
    }
}
```

## 提示

-   配置完成后，类型系统会自动寻找到对应的目录下的类型声明文件。对应的`React`组件就拥有完整的类型提示。

-   实际上编译时仍然会寻找`node_modules/@vant/weapp`目录下的组件，如果有需要，可以在对应的构建工具上进行`alias`。
