import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import Pages from '../src/Pages/Pages';
const App = () => {
  return (
    <div className="App">
       <Header/>
      <Pages/>
      <Footer />
    </div>
    );
};

export default App;
