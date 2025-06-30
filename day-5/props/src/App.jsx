import './App.css'
import Card from './components/card'

function App() {
  let BIT = {
    name: "Bachelors in IT",
    fees: 100000,
    year: 3,
    img: "https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  let BBA = {
    name: "Bachelors in Business",
    fees: 800000,
    year: 4,
    img: "https://images.unsplash.com/photo-1744276257840-0830967b1180?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  };
  return (
    <>
      <div className='flex gap -3px justify-center mt'>
        <Card name = "BIT" mydetail = {BIT} />
        <Card name = "BBA" mydetail = {BBA} />
      </div>
      
    </>
  )
}

export default App
