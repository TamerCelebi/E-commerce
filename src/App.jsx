import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

// Lazy loading components
const MainLayoutLazy = React.lazy(() => import('./layout/MainLayout'));
const HomeLazy = React.lazy(() => import('./pages/Home'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23A6F0]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<LoadingSpinner />}>
            <MainLayoutLazy>
              <Suspense fallback={<LoadingSpinner />}>
                <HomeLazy />
              </Suspense>
            </MainLayoutLazy>
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
