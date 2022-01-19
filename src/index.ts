import express from 'express';

import tourRouter from './tour/tour.router';
import scheduleRouter from './schedule/schedule.router';
import priceRouter from './price/price.router';

const app = express();

app.use(express.json() as express.RequestHandler);

app.use('/tour', tourRouter);
app.use('/schedule', scheduleRouter);
app.use('/price', priceRouter);

app.listen(3000, () => {
  console.log('app is running on http://localhost:3000');
});
