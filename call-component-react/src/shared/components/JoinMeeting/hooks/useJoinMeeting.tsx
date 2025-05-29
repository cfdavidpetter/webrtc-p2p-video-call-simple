import { useState } from "react";

export const useJoinMeeting = () => {
  const [meetingCode, setMeetingCode] = useState('');

  const handleJoinMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement join meeting functionality
    console.log('Join meeting with code:', meetingCode);
  };

  return {
    meetingCode,
    setMeetingCode,
    handleJoinMeeting
  };
};