import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import { CreateRoom } from "./pages/create-room"
import { Room } from "./pages/room"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CreateRoom />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

