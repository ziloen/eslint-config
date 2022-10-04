关闭 vscode eslint 插件 style lint 警告（仅format），在`settings.json`，加入以下设置
```json
{
  "eslint.rules.customizations": [
    { "rule": "array-bracket-spacing", "severity": "off" },
    { "rule": "@typescript-eslint/?comma-spacing", "severity": "off" },
    // ...
  ]
}
```