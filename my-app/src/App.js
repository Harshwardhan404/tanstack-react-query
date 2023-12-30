
import './App.css';
import Home from './Home';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {

  const client = new QueryClient({defaultOptions: {
    queries :{
refetchOnWindowFocus : true,
    }
  }});


  return (
    <>
    
 <QueryClientProvider client={client}>
    <Home/>
 </QueryClientProvider>
      
    </>
  );
}

export default App;
