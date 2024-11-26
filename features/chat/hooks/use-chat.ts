import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ChatWithMessages } from "../services/get-chats";
import { useAuth } from "@/features/auth/hooks/use-auth";

export const useChat = (chat?: ChatWithMessages) => {
  const params = useParams();
  const { currentUser } = useAuth();

  const currentChatId = useMemo(() => params?.chatId || "", [params?.chatId]);
  console.log(chat);
  const recipientUser = useMemo(
    () => chat?.users?.find((user) => user.id !== currentUser?.id),
    [chat?.users, currentUser?.id]
  );

  const lastMessage = useMemo(
    () => (chat ? chat?.messages[chat?.messages.length - 1] : null),
    [chat]
  );

  const hasSeenMessage = useMemo(
    () =>
      lastMessage && recipientUser
        ? lastMessage?.seenIds?.includes(recipientUser?.id)
        : false,
    [lastMessage, recipientUser?.id]
  );

  return useMemo(
    () => ({ currentChatId, hasSeenMessage, lastMessage, recipientUser }),
    [currentChatId, hasSeenMessage, lastMessage, recipientUser]
  );
};

export default useChat;
