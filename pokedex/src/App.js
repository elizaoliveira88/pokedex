import React from "react"
import Router from './routes/Routes'
import GlobalState from "./global/GlobalState"

export default function App() {
  return (
    <createGlobalStyle>
      <GlobalState>
        <Router />
      </GlobalState>
    </createGlobalStyle>
  )
}
