import Create from "../users/Create/Create";
import Edit from "../users/Edit/Edit";
import Delete from "../users/Delete/Delete";
import User from "../users/users";

import Home from "../Home/Home";
import Home2 from "../Home2/Home2";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<User />} />
            <Route path="add" element={<Create />} />
            <Route path=":userId" element={<Edit />} />
            <Route path="delete" element={<Delete />} />
            
            
            <Route path="users">
              <Route index element={<Home />} />
             
            </Route>

            <Route path="products">
              <Route index element={<Home2 />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
