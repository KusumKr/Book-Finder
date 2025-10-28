# 📚 Book Finder

A modern, elegant web application for discovering and exploring books using the Open Library API. Search for your next great read with a beautiful, animated interface designed for the modern generation.

## ✨ Features

- **🔍 Smart Book Search**: Search books by title using the Open Library API
- **📖 Detailed Book Information**: View comprehensive book details including:
  - Book cover images
  - Author information
  - Publication year and edition count
  - ISBN and language
  - Number of pages
  - Genres and subjects
  - Book descriptions
  - Direct links to Open Library

- **🎨 Modern Design**: 
  - Light, elegant color palette with gradient accents
  - Smooth CSS animations and transitions
  - Responsive design for all devices
  - Beautiful animated background with floating orbs
  - Glassmorphism effects

- **⚡ Interactive Features**:
  - Click any book card to view detailed information
  - Smooth modal transitions
  - Loading states and error handling
  - Empty state with attractive SVG illustration

- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **API**: Open Library Search API
- **Animations**: CSS animations (no external dependencies)
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

## 🚀 Installation & Setup

### 1. Extract the Project
\`\`\`bash
# Extract the downloaded zip file to your desired location
\`\`\`

### 2. Open in VS Code
\`\`\`bash
# Open VS Code and select File → Open Folder
# Navigate to the extracted project folder
\`\`\`

### 3. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### 5. Open in Browser
\`\`\`
http://localhost:3000
\`\`\`

The app will automatically reload when you make changes (hot reload enabled).

## 📁 Project Structure

\`\`\`
book-finder/
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles and animations
├── pages/
│   └── Home.jsx              # Home page component
├── components/
│   ├── SearchBar.jsx         # Search input component
│   ├── BookCard.jsx          # Individual book card
│   ├── BookGrid.jsx          # Grid layout for books
│   └── BookDetail.jsx        # Book detail modal
├── public/
│   └── book-cover.jpg        # Placeholder image
└── package.json              # Project dependencies
\`\`\`

## 🔌 API Integration

### Open Library Search API

The app uses the **Open Library Search API** to fetch book data.

**Endpoint**: `https://openlibrary.org/search.json?title={bookTitle}`

**Example Response Fields**:
- `title`: Book title
- `author_name`: Author(s) name
- `first_publish_year`: First publication year
- `isbn`: ISBN number
- `language`: Language code
- `number_of_pages_median`: Number of pages
- `subject`: Book subjects/genres
- `cover_i`: Cover image ID
- `publisher`: Publisher name
- `edition_count`: Total editions available

**Cover Image URL**: `https://covers.openlibrary.org/b/id/{cover_i}-L.jpg`

## 💻 Usage

### Searching for Books
1. Enter a book title in the search bar
2. Click the "Search" button or press Enter
3. Browse the results in the grid

### Viewing Book Details
1. Click on any book card
2. A modal will open showing:
   - Full book cover image
   - Complete book information
   - Genres and subjects
   - Publication details
   - Link to Open Library

### Closing the Modal
- Click the X button in the top-right corner
- Click outside the modal
- Press the Escape key

## 🎨 Design Features

### Color Palette
- **Primary**: Purple/Indigo gradients
- **Accents**: Pink, Blue
- **Background**: Light gradient with animated orbs
- **Text**: Dark gray on light backgrounds

### Animations
- **Page Load**: Fade-in and slide-up animations
- **Background**: Continuous floating orb animations
- **Hover Effects**: Smooth scale and color transitions
- **Modal**: Smooth fade and scale transitions

### Responsive Breakpoints
- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (4 columns)

## 🚀 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

The optimized production build will be created in the `dist/` folder.

## 📝 Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
\`\`\`

## 🐛 Troubleshooting

### Books not loading?
- Check your internet connection
- Verify the Open Library API is accessible
- Try searching with a different book title

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the development server
- Ensure Tailwind CSS is properly configured

### Module not found errors?
- Run `npm install` again
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`
- Restart VS Code

## 🔮 Future Enhancements

- [ ] Add book ratings and reviews
- [ ] Implement user favorites/wishlist
- [ ] Add advanced filters (genre, publication year, language)
- [ ] Dark mode toggle
- [ ] Book recommendations based on search history
- [ ] User authentication and personalized collections
- [ ] Share book details on social media
- [ ] Add reading progress tracking

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For issues, questions, or suggestions, please open an issue in the project repository.

## 🙏 Acknowledgments

- **Open Library API** for providing free book data
- **Tailwind CSS** for the utility-first CSS framework
- **React** for the UI library
- **Vite** for the fast build tool

---

**Happy Reading! 📚**

Made with ❤️ for book lovers everywhere.
