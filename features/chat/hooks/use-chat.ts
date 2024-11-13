import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useChat = () => {
  const params = useParams();

  const currentChatId = useMemo(() => params?.chatId || "", [params?.chatId]);

  return useMemo(() => ({ currentChatId }), [currentChatId]);
};

export default useChat;
