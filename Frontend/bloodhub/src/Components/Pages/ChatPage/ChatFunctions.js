import { parseISO } from "date-fns";
export async function  getChatBase(chat_ids) {

    if(chat_ids.length > 0){
        const chatBasePromises = chat_ids.map(async (id) => {
            const response = await gettingChatBase(id);
    
            if(response.error){
              return null
            }else{
              return {...response,...{id:id}};
            }
    
          });
    
        const chatBase = await Promise.all(chatBasePromises);
        console.log(chatBase)
        return chatBase
    }else{
        console.log("empty chatbase")
        return []
    }
    
}

async function gettingChatBase(id){
    console.log("fetching Chat`");
    try {
      const response = await fetch(`http://localhost:8000/api/ChatBase/${id}/`, {
        credentials: 'include'
      });

      if (!response.ok) {
        return { error: "Something unexpected happened.",id:id };
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);

      return { error: "Something unexpected happened." };
    }
}


export const getSortedChatBase = (chatbases) => {
  const lastMessage = (messages) => messages.length > 0 ? messages[messages.length - 1] : null;
  
  return chatbases.sort((a, b) => {
    const lastMessageA = lastMessage(a.messages);
    const lastMessageB = lastMessage(b.messages);
    
    // If there's no last message, consider its dateTime as the minimum date
    const dateA = lastMessageA ? new Date(parseISO(lastMessageA.dateTime)) : new Date(0);
    const dateB = lastMessageB ? new Date(parseISO(lastMessageB.dateTime)) : new Date(0);

    return dateB - dateA; // Sort in descending order
  });
};

