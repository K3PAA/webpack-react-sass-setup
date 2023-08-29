import React from 'react'
import Home from './Home'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Home tab='home' />)
