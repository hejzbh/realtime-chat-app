import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useChat = () => {
  const params = useParams();

  const chatId = useMemo(() => params?.chatId || "", [params?.chatId]);

  return useMemo(() => ({ chatId }), [chatId]);
};

export default useChat;
