import { useEffect, useState } from "react";

export const useOnline = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const checkOnline = window.addEventListener("online", () => {
      setOnline(true);
    });
    const checkOffline = window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  return online;
};


