const express = require('express');
const app = express();
const port = 2207;
app.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 1,
        name: 'Adi Bonge',
        age: 32,
        address: {
          address: 'Jalan Mangga No. 5 Komplek Bunga',
          city: 'Palembang',
        },
      },
      {
        id: 2,
        name: 'Dina Kon',
        age: 18,
        address: {
          address: 'Jalan Superman No. 12 AB Desa Penari',
          city: 'Aceh',
        },
      },
    ],
  });
});

app.listen(port, () => {
  console.log('Server has ben running at port 3000');
});

module.exports = app;
