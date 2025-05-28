import { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import ExerciseList from './components/ExerciseList';
import ExerciseView from './ExerciseView';

export default function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'exercises', 'exercise'
  const [username, setUsername] = useState('');
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);

  const handleLogin = (user) => {
    setUsername(user);
    setCurrentView('exercises');
  };

  const handleLogout = () => {
    setUsername('');
    setCurrentView('login');
  };

  const handleSelectExercise = (exerciseId) => {
    setSelectedExerciseId(exerciseId);
    setCurrentView('exercise');
  };

  const handleBackToExercises = () => {
    setCurrentView('exercises');
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <Header 
        username={currentView !== 'login' ? username : null} 
        onLogout={handleLogout} 
      />
      
      <main>
        {currentView === 'login' && (
          <LoginForm onLogin={handleLogin} />
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