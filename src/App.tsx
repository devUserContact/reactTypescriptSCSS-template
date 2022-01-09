import React from 'react';
import {Route, Routes} from 'react-router';

import Home from './Pages/Home';
import About from './Pages/About';
import Media from './Pages/Media';
import Test from './Pages/Test';

function App() {
  return (
    <div>
			<Routes>			
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/media' element={<Media />} />
				<Route path='/test' element={<Test />} />
			</Routes>
    </div>
  );
}

export default App;
