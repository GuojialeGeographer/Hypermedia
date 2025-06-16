# 瑜伽工作室网站 (Yoga Studio Website)

## 项目整理计划

### 1. 图片资源整理 ✅
- 统一图片路径命名规范，所有图片应放在 `/public/img/` 目录下
- 创建缺失的图片目录结构
- 确保所有API中引用的图片都存在

### 2. API数据整理 ✅
- 统一API返回的数据格式
- 确保所有API返回的图片路径正确
- 完善API数据，添加必要的字段

### 3. 页面完善 ✅
- 确保所有页面正确显示数据
- 完善导航和路由
- 检查响应式设计

### 4. 组件完善 ✅
- 检查所有组件是否正常工作
- 统一组件样式
- 确保组件复用性

### 5. 功能测试 ⏳
- 测试所有页面和功能
- 修复发现的问题

## 📖 开发指南与规范

这是项目的核心部分，请始终严格遵守，没有我的允许不可以修改当前文件。

### 1. 项目结构

我们将采用 Nuxt 3 的标准目录结构，并在此基础上进行扩展：

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置文件
├── assets/                 # 存放需要被构建工具处理的静态资源 (如 SCSS 文件)
├── components/
│   ├── common/             # 全局通用组件 (AppButton.vue, AppCard.vue)
│   ├── layout/             # 布局相关组件 (TheHeader.vue, TheFooter.vue)
│   └── specific/           # 特定页面的组件 (ActivityCard.vue, TeacherProfile.vue)
├── composables/            # 存放可复用的组合式函数 (如 useScreenSize.ts)
├── layouts/                # 布局文件 (default.vue, clean.vue)
├── pages/                  # 页面和路由
│   ├── activities/
│   │   ├── index.vue       # /activities 页面
│   │   └── [id].vue        # /activities/1 动态页面
│   │   └── highlights.vue  # highlights 页面
│   ├── teachers/
│   │   ├── index.vue
│   │   └── [id].vue
│   ├── about.vue
│   ├── contact.vue
│   └── highlights.vue
├── public/                 # 存放无需构建直接复制的静态资源 (如 favicon.ico, images)
├── server/
│   └── api/                # 后端 API 路由
│       ├── activities.ts   # 提供 /api/activities 数据
│       └── teachers.ts     # 提供 /api/teachers 数据
└── nuxt.config.ts          # Nuxt 配置文件
```

### 2. 组件策略：库与自定义

**目标**: 展示对框架的深入理解，而不是成为组件库的"API调用工程师"。

- **使用场景**:
  - **基础/通用组件**: 优先**自定义**。例如 `AppButton`, `AppCard`, `AppInput`。这些是展示你 CSS 和 Vue 技能的最佳场所。你可以参考 Figma 设计稿，使用 Tailwind CSS 来精确实现。
  - **复杂交互组件**: 可以使用 **Headless UI** 等无样式组件库。例如，`Dropdown`, `Dialog (Modal)`, `Tabs`。这样你只需关注样式，而无需处理复杂的状态和可访问性逻辑。
  - **布局**: 使用自定义的 `TheHeader.vue`, `TheFooter.vue` 等组件。

### 3. 命名规范

- **组件文件**: **PascalCase** (大驼峰命名法)。
  - `components/common/AppButton.vue`
  - `components/specific/ActivityCard.vue`
- **页面文件**: **kebab-case** (短横线命名法)。
  - `pages/activity-list.vue` (如果不是 `index.vue`)
- **动态路由**: **方括号**。
  - `pages/activities/[id].vue`
- **Composables (组合式函数)**: **camelCase** (小驼峰命名法)，并以 `use` 开头。
  - `composables/useScreenSize.ts`
- **API 路由**: **kebab-case**。
  - `server/api/activity-types.ts`

### 4. 布局与响应式设计 (Layout & Responsiveness)

**策略**: **移动端优先 (Mobile-First)**。

1.  **默认样式**: 首先为移动设备编写样式。
2.  **媒体查询**: 使用 Tailwind CSS 的响应式前缀 (`md:`, `lg:`) 来添加适应更大屏幕的样式。

**示例**: 实现教授提到的导航栏切换。

```vue
<!-- components/layout/TheHeader.vue -->
<template>
  <header>
    <!-- 移动端汉堡菜单按钮，仅在小屏幕显示 -->
    <div class="md:hidden">
      <button @click="toggleMenu">Burger Icon</button>
    </div>
    
    <!-- 桌面端完整导航，仅在中等及以上屏幕显示 -->
    <nav class="hidden md:flex">
      <!-- Nav Links -->
    </nav>
  </header>
</template>
```

### 5. 数据获取：杜绝硬编码

**所有**动态内容（活动、老师、联系信息等）都必须通过 API 获取。

**实现方式**: 使用 Nuxt 3 内置的 `server/` 目录来模拟后端。

1.  **创建 API Endpoint**:
    在 `server/api/activities.ts` 中:
    ```typescript
    // server/api/activities.ts
    export default defineEventHandler((event) => {
      // 在真实项目中，这里会连接数据库
      // 在本项目中，可以返回一个静态的 JSON 数组
      return [
        { id: 1, name: '晨间流瑜伽', teacherId: 1, description: '...' },
        { id: 2, name: '阴瑜伽放松', teacherId: 2, description: '...' },
      ];
    });
    ```

2.  **在页面中获取数据**:
    在 `pages/activities/index.vue` 中:
    ```vue
    <script setup lang="ts">
    const { data: activities, pending, error } = await useFetch('/api/activities');
    </script>
    
    <template>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Error loading activities.</div>
      <ul v-else>
        <li v-for="activity in activities" :key="activity.id">
          {{ activity.name }}
        </li>
      </ul>
    </template>
    ```

### 6. 状态管理

当需要在多个页面或组件间共享状态时（例如，用户信息、购物车等），使用 **Pinia**。

1.  创建 store: `stores/mainStore.ts`
2.  在组件中使用: `const store = useMainStore();`

### 7. SEO 与可访问性 (Accessibility)

- **SEO**: 使用 Nuxt 的 `useHead` 组合式函数为每个页面设置独立的 `<title>` 和 `<meta description>`。
  ```vue
  <script setup>
  useHead({
    title: '关于我们 - 瑜伽中心',
    meta: [
      { name: 'description', content: '了解我们瑜伽中心的历史和理念。' }
    ]
  })
  </script>
  ```
- **可访问性**:
  - 确保所有图片都有 `alt` 属性。
  - 确保按钮和链接有清晰的文本。
  - 使用语义化的 HTML 标签 (`<nav>`, `<main>`, `<article>`, `<footer>`)。

## 🚀 部署指南 (GitHub Pages)

我们将使用 GitHub Actions 实现 CI/CD，每次推送到 `main` 分支时自动部署。

1.  **配置 `nuxt.config.ts`**:
    为了部署到 GitHub Pages 的子目录，需要进行如下配置。
    ```typescript
    // nuxt.config.ts
    export default defineNuxtConfig({
      // 必须设为 false 以生成静态文件
      ssr: false,
      app: {
        // 'your-repo-name' 替换为你的 GitHub 仓库名
        baseURL: '/your-repo-name/', 
        buildAssetsDir: 'assets',
      },
      // 其他配置...
    })
    ```

2.  **创建 GitHub Actions Workflow**:
    在项目根目录创建 `.github/workflows/deploy.yml` 文件，并粘贴以下内容：
    ```yaml
    # .github/workflows/deploy.yml
    name: Deploy to GitHub Pages

    on:
      push:
        branches:
          - main # 或者你的主分支名

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v3

          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: '18' # 建议使用 LTS 版本

          - name: Install Dependencies
            run: npm install

          - name: Build Static Site
            run: npm run generate

          - name: Deploy to GitHub Pages
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./.output/public
    ```

3.  **在 GitHub 仓库设置中**:
    - 前往 `Settings` > `Pages`。
    - 在 `Build and deployment` 下的 `Source` 选择 `GitHub Actions`。

现在，每当你推送到 `main` 分支，网站就会自动构建并部署。

## 📋 最终交付物清单

- [ ] **部署链接**: 最终的 GitHub Pages 链接 (例如: `https://your-username.github.io/your-repo-name/`)。
- [ ] **GitHub 仓库**: 确保已添加所有教授和助教为协作者。
- [ ] **技术报告**: 按照要求撰写的 `.pdf` 文档，可以放在仓库根目录。

---
