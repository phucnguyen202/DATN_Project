import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemHoverColor: '#3BB77E',
            horizontalItemSelectedColor: '#3BB77E',
            itemSelectedColor: '#3BB77E',
          },
        }
      }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </ConfigProvider>
  </StrictMode>,
)
