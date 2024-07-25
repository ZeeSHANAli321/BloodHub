
self.addEventListener('push',event =>{
  const data = event.data.json()

  console.log("data ",data)

  const options = {
    body:data.notification.body,
    data:{
      url:"url"
    }}
    
    event.waitUntil(
      self.registration.showNotification(data.notification.title, options)
    );
})