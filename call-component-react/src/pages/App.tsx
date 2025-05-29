import { ThemeToggle } from '../shared/components/ThemeToggle';
import JoinMeeting from '../shared/components/JoinMeeting/JoinMeeting';

function App() {
  const handleCreateMeeting = () => {
    // TODO: Implement create meeting functionality
    console.log('Create meeting clicked');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
      <ThemeToggle className="fixed top-4 right-4" />
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">WebRTC P2P Video Call System</h1>
        
        <div className="space-y-6">
          {/* Create Meeting Button */}
          <button
            onClick={handleCreateMeeting}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
          >
            Create New Meeting
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">or</span>
            </div>
          </div>

          <div className="space-y-4">
            <JoinMeeting />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
