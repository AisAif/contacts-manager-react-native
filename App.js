// In App.js in a new project
import Navigator from './Navigator';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}

export default App;