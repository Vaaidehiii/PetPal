# PetPal - Pet Care & Health Management Platform

A comprehensive web application for managing your pet's health, vaccinations, appointments, and overall wellness.

## Features

- 🐾 **Pet Profiles**: Create and manage profiles for all your pets
- 💉 **Vaccination Tracking**: Keep track of all vaccinations and dates
- 💊 **Medication Management**: Record medications and dosages
- 📅 **Appointment Booking**: Schedule vet appointments easily
- 📋 **Health Records**: Maintain detailed health history
- 🔔 **Reminders**: Get notifications for care tasks and appointments
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Vaaidehiii/petpal.git
cd petpal
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Frontend**: React 18 + Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Fetching**: Axios
- **Date Management**: Date-fns

## Project Structure

```
petpal/
├── pages/
│   ├── index.js          # Home/Landing page
│   ├── dashboard.js      # Main dashboard
│   ├── pets.js           # Pet management
│   ├── appointments.js   # Appointment booking
│   └── health.js         # Health records
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── PetCard.js
│   ├── AppointmentForm.js
│   └── HealthMetrics.js
├── public/
│   └── images/           # Pet images and assets
├── styles/
│   └── globals.css
└── utils/
    └── helpers.js
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own purposes.
