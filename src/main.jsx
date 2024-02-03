import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { BrowserRouter } from 'react-router-dom'

import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/spotlight/styles.css';
import { AuthProvider } from './auth/store.jsx'
import { ModalsProvider } from '@mantine/modals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MantineProvider>
      <ModalsProvider>
        <AuthProvider>
          <Notifications />
          <App />
        </AuthProvider>
      </ModalsProvider>
    </MantineProvider>
  </BrowserRouter>
)
