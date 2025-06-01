import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ExerciseList from './components/ExerciseList';
import ExerciseView from './ExerciseView';

// Main App content wrapped with auth logic
function AppContent() {
  const [currentView, setCurrentView] = useState('auth'); // 'auth', 'exercises', 'exercise'
  const [authView, setAuthView] = useState('login'); // 'login' or 'register'
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  
  const { user, logout, loading } = useAuth();

  // Update view based on auth state
  useEffect(() => {
    if (user) {
      setCurrentView('exercises');
    } else {
      setCurrentView('auth');
    }
  }, [user]);

  const handleSelectExercise = (exerciseId) => {
    setSelectedExerciseId(exerciseId);
    setCurrentView('exercise');
  };

  const handleBackToExercises = () => {
    setCurrentView('exercises');
  };

  // Show loading screen while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <Header 
        username={user?.username} 
        onLogout={logout} 
      />
      
      <main>
        {currentView === 'auth' && (
          <>
            {authView === 'login' ? (
              <LoginForm onSwitchToRegister={() => setAuthView('register')} />
            ) : (
              <RegisterForm onSwitchToLogin={() => setAuthView('login')} />
            )}
          </>
        )}
        
        {currentView === 'exercises' && (
          <ExerciseList onSelectExercise={handleSelectExercise} />
        )}
        
        {currentView === 'exercise' && (
          <ExerciseView />
        )}
      </main>
    </div>
  );
}

// Root App component with AuthProvider
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}