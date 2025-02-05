// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }
//   export default App;

  import React, { Component } from 'react'
  import CBCpropEx from './propsex/CBCpropEx'
import FBCpropEx from './propsex/FBCpropEx'
  export default class App extends Component {
    render() {
      return (
        <div>
          {/* <CBCpropEx
          username="Noshitha"
          age={20}
          hobbies={["Playing" , "reading books" , "listening songs"]}
          address={{city:"Khammam" , area:"Telangana"}}
          sendFun={function(){alert("hi iam Noshitha")}}
          /> */}
          <FBCpropEx
          username="Ram"
          isMarried={true}
          hobbies={["Chatting" , "Reading" , "Eating" , "Sleeping"]}
          />
                  </div>
      )
    }
  }
  

