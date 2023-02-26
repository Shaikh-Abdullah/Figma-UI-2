import './App.css';
import Navigationbar from './components/Navigation/Navbar';
import Navbar from './components/Navigation/Navbar';
import Tabcomponent from './components/Tabs/Tab';
import hand from './assets/hand.png';
import Features from './components/Features/Features';
import Createaccounts from './components/Createaccount/Createaccounts';
import Services from './components/Services/Services';
let carddata = {


  header: 'Go Digital. Take Control',
  desc: 'Take complete control of your business’s banking needs. Experience the all-in-one feature-loaded digital account for your day-to-day banking needs. Apply for your free Digi Business account online in minutes from the comfort of your home or office 24 X 7.',
  data: [
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
    {
      logo: hand,
      heading: 'No Minimum Balance',
      text: 'No charges on non-maintenance of minimum balance. Spend your balance to the last rupee without any worry'
    },
  ]
}



let featuredata = {
  header: 'Applying for a business account has never been easier',
  button: 'Open Account',
  desc: 'Simple, intuitive and quick. Opening your Absa account digitally is a breeze. No more trips to a branch or print and sign paper forms. It’s all taken care of digitally.',
  data: [
    {
      logo: hand,
      heading: 'Easy & Intuitive',
      text: 'Designed with simplicity at its core. Allows you to breeze through the application in minutes.'
    },
    {
      logo: hand,
      heading: 'Easy & Intuitive',
      text: 'Designed with simplicity at its core. Allows you to breeze through the application in minutes.'
    },
    {
      logo: hand,
      heading: 'Easy & Intuitive',
      text: 'Designed with simplicity at its core. Allows you to breeze through the application in minutes.'
    },
    {
      logo: hand,
      heading: 'Easy & Intuitive',
      text: 'Designed with simplicity at its core. Allows you to breeze through the application in minutes.'
    },
    {
      logo: hand,
      heading: 'Easy & Intuitive',
      text: 'Designed with simplicity at its core. Allows you to breeze through the application in minutes.'
    },
    {
      logo: hand,
      heading: 'Easy & Intuitive',
      text: 'Designed with simplicity at its core. Allows you to breeze through the application in minutes.'
    },
  ]

}

let serviceData = {
  header: "Merchant services",
  info: "Get more customers and higher spending on average with our array of electronic payment solutions.Easy, convenient and secure, our solutions allow you to take debit and credit card payments in-store and online.",
  data: [
    {
      data__heading: "Point Of Sale Terminal (POS)",
      data__info: "Increase your market share and generate more sales by accepting cards through our contactless POS terminals"
    },
    {
      data__heading: "Point Of Sale Terminal (POS)",
      data__info: "Increase your market share and generate more sales by accepting cards through our contactless POS terminals"
    },
    {
      data__heading: "Point Of Sale Terminal (POS)",
      data__info: "Increase your market share and generate more sales by accepting cards through our contactless POS terminals"
    },
  ]
}

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Tabcomponent />
      <div>
        <Features features={carddata} borderedcard />
        <div style={{
          background: '#f6f6f6'
        }}>
          <Createaccounts />
        </div>
        <Features features={featuredata} />
        <Services service={serviceData} />
      </div>
    </div>
  );
}

export default App;
