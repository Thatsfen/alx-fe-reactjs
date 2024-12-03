import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query components
import PostsComponent from './components/PostsComponent'; // Component to display posts (to be created)

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Integration</h1>
        <PostsComponent /> {/* Placeholder for our Posts component */}
      </div>
    </QueryClientProvider>
  );
};

export default App;
