# Hypermedia 课程项目: Visionari Digitali - 瑜伽中心

本项目是为米兰理工大学 "HYP 2024-2025 Hypermedia Applications" 课程开发的瑜伽中心网站。它严格遵循课程官方发布的 `Design and Development Project` 指导文件，旨在构建一个满足所有评估标准的功能性、数据驱动、响应式的Web应用。

**该文档是项目的"单一事实来源 (Single Source of Truth)"，所有开发工作必须以此为准。**

## 目录

- [✅ **核心评估清单 (Grading Checklist)**](#-核心评估清单-grading-checklist)
- [🛠️ **最终技术栈 (Final Tech Stack)**](#️-最终技术栈-final-tech-stack)
- [🚀 **项目设置与启动 (Setup & Launch)**](#-项目设置与启动-setup--launch)
- [📖 **开发核心指南 (Development Guide)**](#-开发核心指南-development-guide)
  - [1. 目录结构规范](#1-目录结构规范)
  - [2. 数据流：从DB设计到API实现](#2-数据流从db设计到api实现)
  - [3. 组件化策略：自定义优先](#3-组件化策略自定义优先)
  - [4. SEO、可访问性与响应式设计](#4-seo可访问性与响应式设计)
- [🚢 **部署流程 (Deployment)**](#-部署流程-deployment)
- [📋 **最终交付物清单 (Final Deliverables)**](#-最终交付物清单-final-deliverables)

## ✅ 核心评估清单 (Grading Checklist)

以下是根据官方 `Project Implementation` 文件整理的**必须完成**的功能点，直接对应最终评分。

### 1. 内容与关系 (Content & Relations)

- [ ] **教师 (Teachers)**: **至少 5 位**。每位需包含图片和简短CV。
- [ ] **活动 (Activities)**: **至少 8 种**。每种需包含图片、描述和时间表等信息。
- [ ] **关系 (Relationships)**: **必须**实现教师与活动之间的多对多关系，并在页面清晰展示。

### 2. 页面与路由 (Pages & Routes)

- [x] homepage：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=2-191&m=dev
- [x] home/shop：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=2-75&m=dev
- [x] home/shop/apparel：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=142-45&m=dev
- [x] home/shop/apparel/top：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=142-51&m=dev
- [x] home/shop/apparel/bottoms：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=142-47&m=dev
- [x] home/shop/apparel/jacket：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=142-49&m=dev
- [x] home/shop/apparel/new arrivals：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=140-184&m=dev
- [x] home/activities：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=99-388&m=dev
- [x] home/team：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=125-235&m=dev
- [x] home/classes：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=15-6&m=dev
- [x] home/about us：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=126-842&m=dev
- [x] home/contact us https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=99-97&m=dev
- [x] home/faq：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=99-959&m=dev
- [x] home/refund policy：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=99-719&m=dev
- [x] home/terms of service：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=99-788&m=dev
- [x] home/Private policy：https://www.figma.com/design/Y6lf8MMJ9pTjaD2adhAo9X/yoga?node-id=99-883&m=dev

### 3. 技术实现 (Technical Implementation)

- [x] **框架**: **必须**使用 Vue3 和 Nuxt3。
- [x] **渲染模式**: 在 `nuxt.config.ts` 中**必须明确指定** (我们选择 `ssr: false` 进行SSG)。
- [x] **服务器/数据库**: **必须**实现一个服务器（我们用Nuxt Server Routes），页面**必须**从该服务器获取数据（我们用JSON文件模拟DB）。
- [x] **组件**: **必须创建自定义组件**，不能过度依赖第三方库。展示组件的**结构和可复用性**。
- [ ] **代码注释**: 代码应包含有意义的注释。

### 4. 网站特性 (Website Features) 

- [x] **SEO优化**: 必须实现SEO最佳实践（如独特的`title`/`meta`标签、语义化HTML等）。
- [x] **响应式设计 (Responsiveness)**: 界面必须能适应移动设备。
- [x] **可访问性 (Accessibility)**: 必须符合无障碍准则（如`alt`文本、高对比度等）。

---

## 🛠️ 最终技术栈 (Final Tech Stack)

| 分类         | 技术/库                | 官方说明 & 最终选择                                          |
| :----------- | :--------------------- | :----------------------------------------------------------- |
| **核心框架** | **Nuxt 3 & Vue 3**     | **强制要求**。使用 TypeScript。                              |
| **CSS方案**  | **Tailwind CSS**       | 官方允许，**项目首选**。它强制自定义组件，完美符合要求。     |
| **组件库**   | **原则上不用**         | **策略**：所有UI元素（按钮、卡片）全部自定义。只在需要**复杂**组件（如轮播图）时，才考虑引入一个轻量级库（如 `vue3-carousel`），并在报告中说明理由。 |
| **状态管理** | **Pinia**              | 官方提及。主要用于管理**非核心的扩展功能**（如购物车、用户登录）。 |
| **服务器**   | **Nuxt Server Routes** | **强制要求**。使用 `/server/api` 目录。                      |
| **数据库**   | **JSON文件作为DB**     | **强制要求**。在 `/server/api` 目录下创建 `.ts` 文件返回JSON，模拟从DB获取数据。 |
| **部署平台** | **GitHub Pages**       | 官方推荐，通过 GitHub Actions 自动部署。                     |

---

## 🚀 项目设置与启动 (Setup & Launch)

1. **克隆仓库**: https://github.com/GuojialeGeographer/Hypermedia

2. **安装依赖**: `npm install`

3. **添加Tailwind CSS**: `npx nuxi module add tailwindcss`

4. **启动开发服务器**: `npm run dev`

5. **配置 `nuxt.config.ts`**:

   ```typescript
   // nuxt.config.ts
   export default defineNuxtConfig({
     // 满足官方要求：明确指定渲染模式
     ssr: false, // 采用SSG (Static Site Generation)，利于SEO和GitHub Pages部署
   
     modules: [
       '@nuxtjs/tailwindcss',
       '@pinia/nuxt', // 如需使用Pinia
     ],
     app: {
       // 为GitHub Pages部署配置
       baseURL: 'https://github.com/GuojialeGeographer/Hypermedia', // ‼️ 请替换为你的GitHub仓库名
       buildAssetsDir: 'assets',
     },
   })
   ```

---

## 📖 开发核心指南 (Development Guide)

### 1. 目录结构规范

```
.
├── server/
│   └── api/
│       ├── teachers.ts     # 返回至少5位老师的JSON数据
│       └── activities.ts   # 返回至少8个活动的JSON数据
├── components/
│   ├── common/             # 自定义通用组件 (AppButton.vue, AppCard.vue)
│   ├── layout/             # 布局组件 (TheHeader.vue, TheFooter.vue)
│   └── ...                 # 其他特定组件
├── pages/
│   ├── activities/
│   │   ├── index.vue       # "All Activities" 页面
│   │   └── [id].vue        # 单个活动详情页
│   ├── teachers/
│   │   ├── index.vue       # "All Teachers" 页面
│   │   └── [id].vue        # 单个老师详情页
│   ├── about.vue
│   ├── contact.vue
│   └── highlights.vue      # 亮点页
└── types/
    └── index.ts            # 全局TypeScript类型定义 (Teacher, Activity)
```

### 2. 数据流：从DB设计到API实现

这是项目的**核心**，直接关系到"Content from DB"的评分项。

1. **定义类型** (在 `types/index.ts` 中):

   ```typescript
   export interface Teacher {
     id: number; name: string; photo_url: string; short_bio: string;
   }
   export interface Activity {
     id: number; name:string; image_url: string; description: string; teacher_ids: number[];
   }
   ```

2. **创建API**: 在 `server/api/` 目录下创建文件返回JSON数据。

   ```typescript
   // server/api/activities.ts
   import type { Activity } from '~/types';
   export default defineEventHandler((): Activity[] => [
     { id: 1, name: 'Vinyasa Flow', ..., teacher_ids: [11021383] },
     // ... 更多活动数据
   ]);
   ```

3. **前端获取**: 在页面组件中使用`useFetch`或`useAsyncData`获取数据。

### 3. 组件化策略：自定义优先

-   **必须自定义**: `AppButton.vue`, `TeacherCard.vue`, `ActivityCard.vue`。这些组件是展示你代码能力和满足"Components Structure and Reusability"评分项的关键。
-   **Props & Emits**: 组件设计应清晰。在技术报告中需要描述关键组件的 `props`