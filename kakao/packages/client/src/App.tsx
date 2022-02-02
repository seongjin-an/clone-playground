import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lobby from "./pages/Lobby";
import Friends from "./pages/Friends";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import SeeMore from "./pages/SeeMore";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Lobby/>}/> {/*lobboy*/}
                <Route path="/friends" element={<Friends/>}/> {/*friends*/}
                <Route path="/rooms" element={<RoomList/>}/> {/*roomList*/}
                <Route path="/rooms/:roomId" element={<RoomDetail/>}/> {/*room detail*/}
                <Route path="/more" element={<SeeMore/>}/> {/*see more*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
