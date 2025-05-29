import React from 'react';
import { useJoinMeeting } from './hooks/useJoinMeeting';


const JoinMeeting: React.FC = () => {
  const { meetingCode, setMeetingCode, handleJoinMeeting } = useJoinMeeting();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form onSubmit={handleJoinMeeting} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="meetingId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Meeting ID
          </label>
          <input
            type="text"
            id="meetingId"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter meeting ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
        >
          Join Meeting
        </button>
      </form>
    </div>
  );
};

export default JoinMeeting; 