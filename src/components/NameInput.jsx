import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import TimerBar from './TimerBar';

export default function NameInput() {
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <TimerBar mode="welcome" />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] pt-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              欢迎使用英语阅读练习
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  请输入您的姓名
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  placeholder="输入姓名开始练习"
                  autoFocus
                />
              </div>
              
              <button
                type="submit"
                disabled={!name.trim()}
                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 ${
                  !name.trim() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                开始练习
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
