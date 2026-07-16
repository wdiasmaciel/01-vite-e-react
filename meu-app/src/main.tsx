import { StrictMode } from 'react' // StrictMode: ferramenta de desenvolvimento para encontrar problemas e bugs no código antes de eles irem para produção.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
