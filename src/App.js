import './App.css';





// Class React Component




// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <h1>
//         Heyyyyy I'm Class Component !!!!!!
//         </h1>
//       </div>
//     )
//   }
// }


// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>  
//             Hello i'm trying my best
//         </h1>
//     </div>
//   )
// }

// export default App


// Functional React Component



// function App() {
//   return (
//     <div className="App">
//       <h1>Guess What  I'm Functional !!!!!!!</h1>
//     </div>
//   );
// }

// export default App;






// Importing External Components

// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import React from 'react'

// function App() {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <div className='main'>
//         <h1>
//           I'm the App
//         </h1>
//         <p>
//           Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph 
//         </p>
//       </div >
//       <Footer/>
//     </div>
//   )
// }

// export default App





// having multiple pages


// import React from 'react'
// import FirstPage from './Components/FirstPage';
// import SecondPage from './Components/SecondPage';
// import Fourth from './Components/Fourth';
// import {Routes , Route} from "react-router-dom"

// function App() {
//   console.log(FirstPage);
//   return (
//     <Routes>
//       <Route path='/' element={<FirstPage/>} />
//       <Route path='/second' element={<SecondPage/>} />
//       <Route path='/third' element={<Fourth/>} />
//     </Routes>
//   )
// }

// export default App




import React from 'react'
import Events from './Components/Events';


function App() {
  return (
    <div className='eventsApp'>
      <Events/>
    </div>
  )
}

export default App