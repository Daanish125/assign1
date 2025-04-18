# Medical & Travel Expense Request System

![WCB Manitoba Logo](public/images/WCB_of_Manitoba_logo.svg.png)

A web application for workers to submit medical and travel expense reimbursement requests to the Workers Compensation Board of Manitoba.

## Features

- **Comprehensive expense tracking** for:
  - Prescription drugs
  - Over-the-counter medications
  - Medical supplies
  - Parking expenses
  - Mileage reimbursement
  - Bus/Taxi fares
- **Dynamic table generation** for each expense category
- **Print-optimized layout** with proper page breaks
- **Data toggling** between sample datasets
- **Responsive design** that works on desktop and mobile
- **Form validation** for required fields

## Technologies Used

- **Backend**: Node.js with Express
- **Templating**: Pug (Jade)
- **Frontend**: HTML5, CSS3, JavaScript
- **Build**: npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/medical-expense-request.git
   cd medical-expense-request

   npm install express pug

   public/images/WCB_of_Manitoba_logo.svg.png

   node server.js

   http://localhost:3000

  2.Project Structure:

  medical-expense-request/
├── public/
│   └── images/
│       └── WCB_of_Manitoba_logo.svg.png
├── views/
│   └── expense-request.pug
├── server.js
├── package.json
└── README.md
