const express = require('express');
const pug = require('pug');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(path.join(__dirname, 'public')));




// Dataset 1
const dataSet1 = {
  claimantName: "Madeleine Willson",
  workerAppId: "712041",
  submissionDate: "March 28, 2024 20:43",
  prescriptionDrugs: [
    {
      name: "Ibuprofen 200mg",
      prescriptionDate: "2024-03-15",
      purchaseDate: "2024-03-16",
      providerName: "Dr. Smith",
      amount: 12.50
    },
    {
      name: "Amoxicillin 500mg",
      prescriptionDate: "2024-03-20",
      purchaseDate: "2024-03-21",
      providerName: "Dr. Johnson",
      amount: 25.75
    }
  ],
  otcDrugs: [
    {
      name: "Tylenol Extra Strength",
      purchaseDate: "2024-03-10",
      amount: 8.99,
      sellerName: "Shoppers Drug Mart",
      reason: "Pain relief"
    }
  ],
  medicalSupplies: [
    {
      name: "Wrist Brace",
      purchaseDate: "2024-03-05",
      prescribed: true,
      providerName: "Dr. Smith",
      amount: 35.99,
      sellerName: "Medical Supplies Inc."
    }
  ],
  parkingExpenses: [
    {
      providerAddress: "123 Health St, Winnipeg, MB",
      date: "2024-03-12",
      amount: 7.50,
      meterUsed: true,
      meterNumber: "M12345"
    }
  ],
  mileageExpenses: [
    {
      date: "2024-03-12",
      providerAddress: "123 Health St, Winnipeg, MB",
      workplaceAddress: "456 Work Ave, Winnipeg, MB",
      km: 12.5
    }
  ],
  busTaxiExpenses: [
    {
      date: "2024-03-18",
      startingAddress: "789 Home St, Winnipeg, MB",
      providerAddress: "123 Health St, Winnipeg, MB",
      transportType: "Bus",
      amount: 2.75
    }
  ]
};

// Dataset 2 (different data)
const dataSet2 = {
  claimantName: "John Doe",
  workerAppId: "712042",
  submissionDate: "April 10, 2024 14:30",
  prescriptionDrugs: [
    {
      name: "Lisinopril 10mg",
      prescriptionDate: "2024-04-01",
      purchaseDate: "2024-04-02",
      providerName: "Dr. Brown",
      amount: 18.25
    }
  ],
  otcDrugs: [
    {
      name: "Advil",
      purchaseDate: "2024-04-05",
      amount: 10.49,
      sellerName: "Rexall",
      reason: "Headache relief"
    },
    {
      name: "Pepto-Bismol",
      purchaseDate: "2024-04-06",
      amount: 7.99,
      sellerName: "Walmart",
      reason: "Upset stomach"
    }
  ],
  medicalSupplies: [
    {
      name: "Knee Brace",
      purchaseDate: "2024-04-03",
      prescribed: false,
      providerName: "",
      amount: 29.99,
      sellerName: "Pharmasave"
    }
  ],
  parkingExpenses: [
    {
      providerAddress: "456 Medical Blvd, Winnipeg, MB",
      date: "2024-04-08",
      amount: 5.00,
      meterUsed: false,
      meterNumber: "N/A"
    }
  ],
  mileageExpenses: [
    {
      date: "2024-04-08",
      providerAddress: "456 Medical Blvd, Winnipeg, MB",
      workplaceAddress: "789 Office Rd, Winnipeg, MB",
      km: 8.3
    },
    {
      date: "2024-04-09",
      providerAddress: "123 Health St, Winnipeg, MB",
      workplaceAddress: "789 Office Rd, Winnipeg, MB",
      km: 10.2
    }
  ],
  busTaxiExpenses: [
    {
      date: "2024-04-07",
      startingAddress: "321 Residence Ave, Winnipeg, MB",
      providerAddress: "456 Medical Blvd, Winnipeg, MB",
      transportType: "Taxi",
      amount: 15.50
    }
  ]
};

app.get('/', (req, res) => {
  const dataSet = req.query.dataset === '2' ? dataSet2 : dataSet1;
  res.render('main', dataSet);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});