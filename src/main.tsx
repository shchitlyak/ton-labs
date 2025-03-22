import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppDegen from './AppDegen.tsx';
import { TonConnectUIProvider } from './library/tonconnect-ui/src';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://shchitlyak.github.io/ton-labs/tonconnect-manifest.json">
      <AppDegen/>
    </TonConnectUIProvider>
  </StrictMode>,
)
