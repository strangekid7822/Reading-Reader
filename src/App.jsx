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
          <div className="relative">
            <button
              onClick={handleBackToExercises}
              className="absolute top-4 left-4 z-50 group flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-gray-600 group-hover:text-gray-800 font-medium">返回练习列表</span>
            </button>
            <ExerciseView />
          </div>
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