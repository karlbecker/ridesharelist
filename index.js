'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/rideshare-services.json', (req, res) => res.send([
  {
    name: 'RideAustin',
    url: 'https://rideaustin.com',
    locations: [
      {
        lat: 30.267777,
        long: -97.741868,
        radiusInMiles: 27,
      }
    ],
    apps: [
      {
        platform: 'ios',
        url: 'https://itunes.apple.com/us/app/ride-austin-non-profit-tnc/id1116489847?ls=1&mt=8',
      },
      {
        platform: 'android',
        url: 'https://play.google.com/store/apps/details?id=com.rideaustin.android&hl=en',
      }
    ],
    contact: {
      email: 'support@RideAustin.com',
      phone: '555-555-1234',
    },
    socialMedia: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/Ride_Austin',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/werideaustin',
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/rideaustin/',
      },
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/channel/UCclauP5ev_zEDCIyveQ_9EQ',
      },
    ]
  },
]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));