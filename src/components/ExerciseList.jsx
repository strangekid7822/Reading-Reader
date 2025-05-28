import ExerciseCard from './ExerciseCard';

export default function ExerciseList({ onSelectExercise }) {
  // Mock exercise data
  const exercises = [
    {
      id: 1,
      title: "Growing Deep Roots",
      category: "人生哲理",
      difficulty: "中级",
      duration: "5-7分钟",
      questions: 4,
      completed: false,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      title: "The Future of Technology",
      category: "科技",
      difficulty: "高级",
      duration: "8-10分钟",
      questions: 6,
      completed: true,
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "Climate Change Impact",
      category: "环境",
      difficulty: "中级",
      duration: "6-8分钟",
      questions: 5,
      completed: false,
      color: "from-green-400 to-teal-400"
    },
    {
      id: 4,
      title: "Ancient Civilizations",
      category: "历史",
      difficulty: "初级",
      duration: "4-6分钟",
      questions: 4,
      completed: true,
      color: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      title: "Modern Art Movement",
      category: "艺术",
      difficulty: "高级",
      duration: "7-9分钟",
      questions: 5,
      completed: false,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 6,
      title: "Space Exploration",
      category: "科学",
      difficulty: "中级",
      duration: "6-8分钟",
      questions: 5,
      completed: false,
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          练习列表
        </h2>
        <p className="text-gray-600">
          选择一个练习开始你的英语阅读之旅
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onSelect={onSelectExercise}
          />
        ))}
      </div>
    </div>
  );
}