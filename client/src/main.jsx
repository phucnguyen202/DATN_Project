import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './redux/store.js'
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
          Slider: {
            dotActiveBorderColor: '#3BB77E',
            dotBorderColor: '#3BB77E',
            handleActiveColor: '#3BB77E'
          },
          Tabs: {
            inkBarColor: '#3BB77E',
            itemActiveColor: '#253D4E',
            itemHoverColor: '#3BB77E',
            itemSelectedColor: '#3BB77E',
            titleFontSize: '18px'
          },
        }
      }}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </StrictMode>,
)
