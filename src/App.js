
import './App.css';
import { Layout } from './Component/Layout';
import useStyle from './Component/Styles'

function App() {
   const classes =useStyle();
  return (
    <div className={classes.root}>
     <Layout></Layout>
    </div>
  );
}

export default App;
