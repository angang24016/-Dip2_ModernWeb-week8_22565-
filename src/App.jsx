import React from "react"
import { Routes } from "react-router-dom"
import RootLayout from "./components/layouts/RootLayout"
import Counter from "./components/pages/Counter"

function App() {
  console.log("process.env.PORT: ", process.env.PORT)
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
      </RootLayout>
    </>
  )
}

export default App