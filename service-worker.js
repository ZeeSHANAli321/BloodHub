self.addEventListener('push',event =>{
  const data = event.data.json()
  const options = {
    body:data.body,
    icon:data.icon,
    data:{
      url:data.url
    }}
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  event.waitUntil(
    (async () => {
      try {
        const data = event.notification.data ? event.notification.data : {};

        if (data.url) {
          const clientList = await clients.matchAll({
            type: 'window',
            includeUncontrolled: true
          });

          // Check if a window with the URL is already open
          for (const client of clientList) {
            if (client.url === data.url && 'focus' in client) {
              return client.focus();
            }
          }

         
          if (clients.openWindow) {
            return clients.openWindow(data.url);
          }
        } else {
          console.error("No URL found in notification data.");
        }
      } catch (error) {
        console.error("Error handling notification click: ", error);
      }
    })()
  );
});