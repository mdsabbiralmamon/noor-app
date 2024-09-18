### Noor - The Islamic Companion App

Welcome to **Noor**, a fullstack Islamic app built with **Next.js**, **Framer Motion**, **Tailwind CSS**, and **Shadcn UI**. Noor offers a clean and minimal interface with daily prayer times, Quran recitation, Islamic articles, and a personalized dashboard. Designed for modern users, Noor provides smooth, subtle animations and a fully responsive design for a delightful user experience.

---

## Features

- **Quran Recitation**: Browse surahs and listen to recitations.
- **Prayer Times**: Location-based prayer times to keep you informed throughout the day.
- **Islamic Articles & Duas**: Read a curated collection of Islamic articles and supplications.
- **Personalized Dashboard**: Track your Quran reading progress and bookmark favorite articles.
- **Smooth Animations**: Elegant transitions between pages with Framer Motion.
- **Responsive Design**: Works seamlessly across devices of all sizes.
  
---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://shadcn.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: MongoDB
- **Authentication**: NextAuth.js

---

## Getting Started

### Prerequisites
To run this project, you need to have the following installed:

- Node.js (v14 or higher)
- MongoDB (for database integration)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mdsabbiralmamon/noor-app.git
   cd noor-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following environment variables:
   ```bash
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your-mongodb-uri
   NEXTAUTH_SECRET=your-secret-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   bun run dev # For node
   bun --bun run dev # For Bun
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Deployment

To deploy this project on Vercel:

1. Push your code to GitHub.
2. Head over to [Vercel](https://vercel.com/) and import your repository.
3. Set up the environment variables in the Vercel dashboard as mentioned in the `.env.local` file.
4. Click "Deploy"!

---

## Project Structure

```bash
├── src/                        # Source folder for all project code
│   ├── app/                    # Next.js App Directory (routing system)
│   │   ├── globals.css         # Global CSS File
│   │   ├── icon.png            # Default fav icon for the app
│   │   ├── layout.tsx          # Default layout component for the app
│   │   ├── page.tsx            # Home page (default route)
│   │   ├── quran/              # Quran-related pages and routes
│   │   │   ├── layout.tsx      # Quran-specific layout
│   │   │   └── page.tsx        # Quran main page (list of surahs)
│   │   ├── prayer-times/       # Prayer times-related pages and routes
│   │   │   └── page.tsx        # Prayer times main page
│   │   ├── dashboard/          # Dashboard pages for authenticated users
│   │   │   └── page.tsx        # Main dashboard page
│   │   ├── articles/           # Articles and duas pages
│   │   │   └── page.tsx        # Main articles page
│   │   └── api/                # API route handlers (authentication, data fetching)
│   │       ├── auth/           # Authentication API handlers (e.g., login, registration)
│   │       └── prayerTimes/    # API for fetching prayer times from a third-party service
│   │
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Layout components (header, footer, etc.)
│   │   ├── ui/                 # Reusable UI elements (buttons, inputs, etc.)
│   │   └── animations/         # Framer Motion animation wrappers
│   │
│   ├── features/               # Feature-specific components
│   │   ├── quran/              # Quran components (surah card, recitation, etc.)
│   │   ├── prayer-times/       # Components related to prayer times
│   │   └── dashboard/          # Components for user dashboard features
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useAuthData.tsx     # Hook for managing and accessing authentication data
│   │
│   ├── services/               # API service functions (e.g., fetching prayer times)
│   │   └── prayerTimes.tsx     # Logic for fetching and formatting prayer time data
│   │
│   ├── context/                # Global state management with React Context
│   │   └── AuthContext.tsx     # Authentication context and provider
│   │
│   └── lib/                    # Utility functions and helpers
│       ├── utils.ts            # Merging tailwind and shadcn
│       └── authUtils.tsx       # Utility functions for authentication
│ 
├── .env.local                  # Environment variables (API keys, secrets)
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Project metadata and dependencies
├── README.md                   # Project documentation
└── .gitignore                  # Files and directories to ignore in version control
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: [md.sabbiralmamon@gmail.com](mailto:md.sabbiralmamon@gmail.com)
- **GitHub**: [https://github.com/mdsabbiralmamon/](https://github.com/mdsabbiralmamon/)

---