# 🏥 HOPE — AI-Powered Healthcare & Wellness Platform

HOPE is a modern healthcare application designed to help users track their health metrics, schedule medical appointments, and receive AI-powered health insights. The application features real-time updates, integration with Google Calendar, and a smart chatbot for health-related queries.

## 🌟 Features

### Health Tracking
- Track daily health metrics including:
  - Weight and BMI
  - Blood Pressure
  - Heart Rate
  - Sleep Hours
  - Step Count
  - Water Intake
  - Mood

### Smart Calendar Integration
- Sync with Google Calendar
- Automated scheduling for:
  - Medical appointments
  - Exercise routines
  - Medication reminders
- Calendar event categorization (medication, exercise, practice)

### AI-Powered Features
- Personalized health predictions
- Smart chatbot for health queries
- Automated medication scheduling
- Exercise and wellness recommendations

### Real-time Updates
- WebSocket integration for instant data synchronization
- Live updates across multiple devices
- Real-time health metric monitoring

### Video Content
- Curated health and wellness videos
- Exercise tutorials
- Filtered content (excluding shorts)
- Customizable search queries

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Google API credentials (for Calendar and YouTube integration)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rajeshaligeti/HOPE-Healthcare_Oriented_Proactive_Essence.git
cd HOPE-Healthcare_Oriented_Proactive_Essence
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Create environment variables:

Backend (.env):
```env
PORT=5000
GOOGLE_API_KEY=your_google_api_key
GCAL_SERVICE_ACCOUNT_JSON_BASE64=your_service_account_json
GCAL_CALENDAR_ID=your_calendar_id
MONGODB_URI=your_mongodb_uri
```

Frontend (.env):
```env
VITE_API_BASE=http://localhost:5000/api
```

5. Start the development servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## 🏗️ Project Structure

```
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── CalendarItem.js
│   │   │   └── HealthData.js
│   │   ├── routes/
│   │   │   ├── ai.js
│   │   │   ├── calendar.js
│   │   │   ├── google.js
│   │   │   └── healthData.js
│   │   ├── server.js
│   │   └── websocket.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AIPredictions.jsx
    │   │   ├── BMICalculator.jsx
    │   │   ├── Charts.jsx
    │   │   ├── Chatbot.jsx
    │   │   ├── HealthCalendar.jsx
    │   │   ├── MetricsForm.jsx
    │   │   ├── Suggestions.jsx
    │   │   ├── SummaryCards.jsx
    │   │   └── YoutubeSection.jsx
    │   ├── context/
    │   │   ├── HealthContext.jsx
    │   │   └── WebSocketContext.jsx
    │   └── lib/
    │       └── api.js
    └── package.json
```

## 💻 Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- Google APIs
- JSON Web Tokens

### Frontend
- React
- Vite
- TailwindCSS
- Socket.IO Client
- FullCalendar
- Chart.js
- Axios

## 🔐 Security

- CORS enabled
- Environment variables for sensitive data
- Token-based authentication
- Secure WebSocket connections
- API key protection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Calendar API
- YouTube Data API
- OpenAI for AI capabilities
- MongoDB for database services
- TailwindCSS for styling

## 👤 Author

**Rajesh Aligeti**
- GitHub: [@Rajeshaligeti](https://github.com/Rajeshaligeti)

---

Made with ❤️ for better healthcare tracking and management.
---

⭐ If you like this project, feel free to star the repo!
