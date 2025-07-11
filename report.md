#### HYP 2024-2025 Technology Report: Yoga Center Website Implementation

**Cover Page**
**Team Members:** [Your Name(s), Student ID(s), Email(s)]
**Date of Submission:** [Date]
**Link to Running Web:** `https://guojialegeographer.github.io/Hypermedia/`
**Link to GitHub Repository:** `https://github.com/GuojialeGeographer/Hypermedia`

**1. Abstract**
This technical report provides a detailed account of the implementation of the Yoga Center website, a project for the Hypermedia Applications course. It focuses on the engineering decisions and development processes behind the final web prototype. The core of this report covers the rationale for the selected technology stack—Nuxt 3, Vue 3, and Tailwind CSS—the project's software architecture, the design and implementation of mock server-side APIs, and the structure of key custom components. Additionally, the report documents the automated deployment pipeline and elaborates on the specific techniques employed to meet quality attributes, including Search Engine Optimization (SEO), accessibility, and responsive design.

**2. Technological Choices & Implementation Strategy**
**2.1. Core Stack**
**Nuxt 3 & Vue 3:** Nuxt 3 was selected as the primary framework for its comprehensive, opinionated structure that streamlines development for Vue 3 applications. Its file-based routing, auto-imports for components and composables, and integrated data fetching utilities (`useFetch`) significantly accelerated the development cycle. The choice of Vue 3 was driven by its reactive Composition API, which enabled more organized, reusable, and maintainable logic within our components, especially for handling state and user interactions.
**Tailwind CSS:** For styling, Tailwind CSS was chosen to facilitate the rapid implementation of a custom user interface that precisely matched our Figma designs. Its utility-first approach allowed for direct styling within the HTML structure, eliminating the need for separate CSS files and avoiding class name conflicts. This proved highly efficient for creating a consistent and responsive design system across the entire application.
**Nuxt Server Routes:** To fulfill the project requirement of a simulated backend, Nuxt 3's server routes were utilized. This feature enabled the creation of mock API endpoints (e.g., `/api/teachers`, `/api/activities`) that serve static JSON data from the `/server/api` directory. This approach effectively decoupled the frontend from the data layer, mirroring a real-world full-stack architecture and allowing for independent development and testing of UI components.
**Static Site Generation (SSG):** The project was configured with `ssr: false` to operate in SSG mode. This decision was primarily driven by performance and deployment considerations. By pre-rendering all pages into static HTML files at build time, we achieved fast load times, enhanced SEO through easily crawlable content, and simplified hosting on static platforms like GitHub Pages, which aligns perfectly with the course requirements.
**2.2. Development Workflow**
Our development process began by translating the high-fidelity wireframes from our Figma designs into functional code, heavily utilizing the Cursor MCP plugin to ensure a 1-to-1 visual match. We then adopted a component-driven approach, first creating reusable, atomic UI elements (such as `TeacherCard.vue`) and then composing them into full pages within the `/pages` directory. Data was served via the mock API endpoints, allowing for a decoupled frontend and backend development simulation. This modular strategy ensured that components were independently testable and could be reused across different parts of the application, promoting code consistency and maintainability. Version control was managed with Git, with all changes pushed to a central GitHub repository.

**3. Project Architecture & Implementation**
**3.1. Directory Structure**
The project adheres to the standard Nuxt 3 directory structure. The key directories of the final implementation are outlined below:
```
/
├── .github/              # Contains GitHub Actions CI/CD workflows
├── assets/               # Uncompiled assets like CSS
├── components/           # Reusable Vue components
├── pages/                # Application views and routes
├── public/               # Static assets (images, fonts)
├── server/               # Server-side logic
│   └── api/              # API endpoints for the mock backend
├── stores/               # Pinia store for cart state
├── types/                # TypeScript type definitions
├── nuxt.config.ts        # Nuxt configuration file
└── package.json          # Project dependencies and scripts
```
**`pages/`**: Defines the application's routing structure. Each `.vue` file in this directory automatically becomes a page route.
**`components/`**: Houses all reusable Vue components. Nuxt auto-imports these, making them available throughout the application.
**`server/api/`**: Contains the mock backend. Each file defines an API endpoint that can be queried by the frontend.

**3.2. API Endpoint Implementation**
A mock backend was created using Nuxt Server Routes to serve static JSON data. All existing endpoints are listed below, with `activities` and `teachers` being the primary focus of the course project.
| Endpoint              | HTTP Method | Description                                                                 |
| --------------------- | ----------- | --------------------------------------------------------------------------- |
| `/api/activities`     | `GET`       | Returns a list of all yoga activities, filterable by `slug`.                  |
| `/api/teachers`       | `GET`       | Returns a list of all teachers, filterable by `slug`.                       |
| `/api/products`       | `GET`       | Returns a list of all shop products, filterable by `id`.                      |
| `/api/classes`        | `GET`       | Returns a list of all classes, filterable by `slug`.                        |

**代码示例 (`server/api/activities.ts`):**
```typescript
import type { Activity } from '~/types';
const activities: Activity[] = [ /* ... array of activity objects ... */ ];

export default defineEventHandler((event) => {
  const slugParam = event.context.params?.slug;

  if (slugParam) {
    const activity = activities.find(a => a.slug === slugParam);
    if (activity) { return activity; }
    throw createError({ statusCode: 404, statusMessage: 'Activity Not Found' });
  }
  
  return activities;
});
```

**3.3. Database Design (ER Schema)**
The following Entity-Relationship (ER) diagram illustrates the logical data model for the application's mock backend.
```mermaid
erDiagram
    Teacher {
        int id PK
        string name
        string slug
        string bio
        string image
    }
    Activity {
        int id PK
        string name
        string slug
        string description
        string image_url
        int price
    }
    Product {
        int id PK
        string name
        string href
        string image
        float price
        string color
    }
    Class {
        int id PK
        string title
        string slug
        string description
        float price
        string image
    }
    Activity ||--o{ Teacher : "is taught by"
```
**说明:** In this implementation, relationships are handled in a normalized fashion. The `Activity` entity contains an array of teacher IDs (`teacher_ids: number[]`), establishing a many-to-many relationship where multiple teachers can be associated with an activity. This is a more scalable approach than denormalizing instructor data directly into each activity object.

**3.4. Custom Components in Detail**
A component-driven architecture was central to the implementation. Below are details for the key custom components and design patterns.
---
**Component: `team/TeacherCard.vue`**
**Description:** A reusable card to display a teacher's summary on the team page. It shows the teacher's photo, name, and a short biography. It links to the teacher's detailed profile page.
**Props:**
| Prop Name | Type      | Required | Description                               |
| --------- | --------- | -------- | ----------------------------------------- |
| `teacher` | `Teacher` | `true`   | An object containing all the teacher data. |
**Screenshot:**
*[Placeholder: Insert a screenshot of the Teacher Card on the website here.]*
---
**Design Pattern: Activity Listing in `pages/activities/index.vue`**
**Description:** Instead of a separate `ActivityCard` component, the activity listing page implements its card layout directly. This pattern was chosen to handle a more complex, alternating (left/right) layout for images and text content. Each "card" displays the activity's image, title, description, instructor, highlights, and a call-to-action button, with styling dynamically applied based on data from the `Activity` object.
**Data Source:** The layout iterates over an array of `Activity` objects defined in the page's script setup.
**Screenshot:**
*[Placeholder: Insert a screenshot of the alternating Activity list on the website here.]*

**4. Final Implementation Showcase**
**4.1. Commented Screenshots of Final Web Site**
The following section requires manual annotation of screenshots from the final running website.
**Instructions:**
1.  Navigate to each of the pages listed below in your running application.
2.  Take a high-resolution, full-page screenshot.
3.  Use colored boxes/outlines to highlight and label examples of the following link types:
**Landmark:** Main navigation regions (e.g., the entire header, footer, main content area).
**Structural Link:** Links that define the hierarchy of the site (e.g., breadcrumbs like `Home / Activities`).
**Transition Link:** The most common link type, used to navigate from one page to another (e.g., clicking a teacher card to go to their detail page).
**Group Link:** A container that groups multiple links related to a single concept (e.g., the entire teacher card, which links to the teacher detail page).
**Recommended Pages to Capture and Annotate:**
Home Page (`/`), Activities Page (`/activities`), Activity Detail Page (`/activities/[slug]`), Team Page (`/team`), Teacher Detail Page (`/team/[slug]`).
*[Placeholder: Insert your annotated screenshots for each page here.]*

**5. Quality Features Implementation**
**5.1. SEO Optimization**
SEO was a key consideration, implemented primarily through Nuxt 3's built-in meta-management capabilities. The `useHead` composable was used on every page to set unique and descriptive `<title>` and `<meta name="description">` tags. For dynamic pages, such as `/team/[slug]` and `/activities/[slug]`, metadata is generated dynamically using the fetched data, ensuring each page is distinctly indexed by search engines.
**5.2. Accessibility**
To ensure the website is usable by the widest possible audience, several accessibility (a11y) best practices were implemented. All `<img>` tags across the application include descriptive `alt` attributes, providing context for screen reader users. We paid close attention to color contrast ratios and ensured all interactive elements are keyboard-accessible with visible focus states.
**5.3. Responsiveness**
A mobile-first responsive design strategy was implemented using Tailwind CSS's intuitive breakpoint system (`sm:`, `md:`, `lg:`). Key responsive features include a main navigation bar that collapses into a hamburger menu on screens narrower than **1024px** (the `lg` breakpoint), and grid layouts that adjust their column count based on the available screen width.

**6. Deployment Process**
The project is deployed on **GitHub Pages** via an automated CI/CD pipeline managed by **GitHub Actions**. This process is defined in the `.github/workflows/deploy.yml` file. Every push to the `main` branch automatically triggers the workflow, which performs the following steps: it checks out the repository, sets up the Node.js environment, installs dependencies with `npm ci`, and executes `npm run generate` to build the static site. Finally, the `peaceiris/actions-gh-pages` action deploys the contents of the generated **`./.output/public`** directory to the `gh-pages` branch, ensuring the live website is always in sync with the latest version of the codebase.