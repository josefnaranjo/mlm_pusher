import { useEffect } from "react";
import Pusher from "pusher-js";

interface NewMessage {
  content: string;
  channelId: string;
  userId: string;
  userName: string;
  userImage: string;
  createdAt: string;
}

export default function usePusher(
  channelName: string,
  eventName: string,
  onNewMessage: (message: NewMessage) => void
) {
  useEffect(() => {
    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY!;
    const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER!;

    if (!pusherKey || !pusherCluster) {
      console.error("Pusher configuration is missing");
      return;
    }

    const pusher = new Pusher(pusherKey, {
      cluster: pusherCluster,
      forceTLS: true,
    });

    const channel = pusher.subscribe(channelName);

    channel.bind(eventName, (data: NewMessage) => {
      console.log("Received new message:", data); // Debug log
      onNewMessage(data);
    });

    return () => {
      channel.unbind(eventName); // Unbind specific event
      pusher.unsubscribe(channelName); // Unsubscribe from the channel
    };
  }, [channelName, eventName, onNewMessage]);
}
