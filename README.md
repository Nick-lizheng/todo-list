# TODO List Application

A full-stack TODO list application built with Angular frontend and .NET Web API backend.

## 🛠️ Technologies Used

- **Frontend**: Angular 18
- **Backend**: .NET 9.0 Web API
- **Data Storage**: In-memory (no database required)
- **Testing**: xUnit for backend, Angular testing utilities

## 🏗️ Architecture

The application follows clean architecture principles:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic layer
- **Repositories**: Data access layer (in-memory implementation)
- **Models**: Data transfer objects

## 📦 Project Structure

```
todo-list/
├── client/                 # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── models/
│   │   └── ...
├── server/                 # .NET Web API backend
│   ├── Controllers/
│   ├── Services/
│   ├── Repositories/
│   ├── Models/
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- .NET 9.0 SDK
- Git

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nick-lizheng/todo-list.git
   cd todo-list
   ```

2. **Start the Backend API**
   ```bash
   cd server
   dotnet restore
   dotnet run --urls "http://localhost:5180"
   ```
   The API will be available at `http://localhost:5180`

3. **Start the Frontend (in a new terminal)**
   ```bash
   cd client
   npm install
   npm start
   ```
   The application will be available at `http://localhost:4200`

## 🧪 Running Tests

### Backend Tests
```bash
cd server
dotnet test
```

### Frontend Tests
```bash
cd client
npm test
```

## 📋 Features

- ✅ View all TODO items
- ✅ Add new TODO items
- ✅ Delete TODO items
- ✅ Responsive design
- ✅ Clean, modern UI
- ✅ RESTful API endpoints
- ✅ Comprehensive testing

## 🔧 API Endpoints

- `GET /api/todos` - Get all TODO items
- `POST /api/todos` - Create a new TODO item
- `DELETE /api/todos/{id}` - Delete a TODO item

## 👨‍💻 Development

The application demonstrates:
- Component-based architecture (Angular)
- Dependency injection
- Service layer pattern
- Repository pattern
- Unit testing
- Clean code principles
- TypeScript best practices
- C# best practices

## 📝 Notes

- Data is stored in memory and will be reset when the server restarts
- The frontend uses Angular's HttpClient with proxy configuration for API calls
- CORS is configured to allow frontend-backend communication
