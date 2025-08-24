import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "virtual:windi.css"
import App from './pages/App';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>  
      </QueryClientProvider>
  </StrictMode>,
)
