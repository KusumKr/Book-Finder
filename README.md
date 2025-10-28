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

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KusumKr/Book-Finder.git
cd docmind

```
2. Install dependencies:

# Using npm
```
npm install
```

# Using pnpm
```
pnpm install
```
3. Start the development server:
```
npm run dev
# or
pnpm dev

```

4. Open http://localhost:3000 in your browser

## 📁 Project Structure

```
book-finder/
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles and animations
├── components/
│   ├── SearchBar.jsx         # Search input component
│   ├── BookCard.jsx          # Individual book card
│   ├── BookGrid.jsx          # Grid layout for books
│   └── BookDetail.jsx        # Book detail modal
|   └── Home.jsx              # Home page component
├── public/
│   └── book-cover.jpg        # Placeholder image
└── package.json              # Project dependencies
```

## Glimpse
<img width="1336" height="594" alt="image" src="https://github.com/user-attachments/assets/bf93d46d-dda1-404d-95d8-16cbe88722c7" />
<img width="1337" height="598" alt="image" src="https://github.com/user-attachments/assets/332dcf6f-5a59-4a18-a221-a34ee6e1075c" />


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
