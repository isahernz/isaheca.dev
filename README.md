# isaheca.dev ✨

My personal portfolio and blog website showcasing my projects, experience, and learning journey as a developer.

## 🌟 About

Welcome to my digital space! This is where I share my work, experiences, and thoughts about web development. The site features:

- **Portfolio**: Showcase of my projects and technical skills
- **Blog**: Posts about my learning journey and development insights
- **Experience**: My professional background and expertise
- **Bio**: A bit about me and what I do

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Content**: MDX for blog posts with enhanced markdown capabilities
- **Icons**: Lucide icons for consistent UI elements
- **Deployment**: Vercel

## 🚀 Project Structure

```text
isaheca.dev/
├── public/
│   ├── assets/images/          # Blog post images
│   ├── fonts/                  # Custom fonts
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/           # Homepage sections (Bio, Experience, etc.)
│   │   ├── ui/                 # Reusable UI components
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── ProjectCard.astro
│   ├── data/                   # Site data and configuration
│   │   ├── info-site.ts        # Site metadata
│   │   ├── my-experience.ts    # Professional experience
│   │   ├── projects.ts         # Featured projects
│   │   └── links.ts            # Social links
│   ├── layouts/
│   │   ├── MainLayout.astro    # Main site layout
│   │   └── BlogLayout.astro    # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   └── posts/              # Blog posts (.md/.mdx)
│   ├── lib/                    # Utility functions
│   ├── styles/                 # Global styles
│   └── types/                  # TypeScript type definitions
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `bun install`  | Install dependencies                         |
| `bun dev`      | Start local dev server at `localhost:4321`   |
| `bun build`    | Build your production site to `./dist/`      |
| `bun preview`  | Preview your build locally, before deploying |
| `bun format`   | Format code with Prettier                    |
| `bun lint`     | Lint code with ESLint                        |
| `bun lint:fix` | Fix linting issues automatically             |

## 📝 Adding Content

### New Blog Post

1. Create a new `.md` or `.mdx` file in `src/pages/posts/`
2. Add frontmatter with title, date, and other metadata
3. Write your content using markdown

### New Project

1. Add project data to `src/data/projects.ts`
2. Include title, description, tech stack, and links
3. Project will automatically appear on the homepage

### Update Experience

1. Modify `src/data/my-experience.ts`
2. Add new roles, companies, and achievements

## 🎨 Customization

- **Colors & Styling**: Modify `src/styles/global.css` and Tailwind config
- **Site Info**: Update `src/data/info-site.ts` for metadata
- **Social Links**: Configure `src/data/links.ts`
- **Components**: Customize UI components in `src/components/ui/`

## 🌐 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Performance**: Static site generation with Astro
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Type Safety**: Full TypeScript support
- **Modern Development**: ESLint, Prettier, and Husky for code quality
- **Blog Support**: MDX for enhanced markdown content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
