import "./App.css";
import { AuthProvider } from "./AuthContext";
import Counter from "./Counter";
import UserList from "./UserList";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Counter />
        <UserProfile />
        <UserList />
      </AuthProvider>
    </div>
  );
}

export default App;
