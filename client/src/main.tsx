import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ClientSide from './pages/ClientSide';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ClientSide/>
        </BrowserRouter>  
      </QueryClientProvider>
  </StrictMode>,
)
