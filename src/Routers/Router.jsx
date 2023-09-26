import { createBrowserRouter } from 'react-router-dom'
import Root from './Root';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import DonationDetails from '../Pages/Donation/DonationDetails';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('donateData.json')
        },
        {
            path: '/donation',
            loader: () => fetch('donateData.json'),
            element: <Donation></Donation>
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>,
            loader: () => fetch('donateData.json')
        },
        {
          path: '/donation-details',
          element: <DonationDetails></DonationDetails>
        }
      ]
    },
  ]);

export default Router;