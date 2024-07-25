if(Notification.permission !== 'granted'){
    Notification.requestPermission(); 
}

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
        console.log(registration)
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }
};

const SendingNotification = ()=>{
  if(Notification.permission === 'granted'){
      new Notification("TItle of the Notification",{
        body: "Notificaiton body ",
        icon:Logo,
      })
    }    
}
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const subscribePushNotification= async ()=>{
  const subscribeUser = async ()=>{
    const registration = await navigator.serviceWorker.ready;
          
    await registration.pushManager.subscribe({
      userVisibleOnly:true,
      applicationServerKey:urlBase64ToUint8Array("BNtU_fLJHZwXuFaeilQnKRAL4kw2axbxkSTyX-ycWppy1dBE7RJErxLNQ7FiTUVgWIbveMF4QKTV5KqnSIliG1g")
    }).then(subscription =>{

      const data={
        userEmail:user.emailId,
        endpoint:subscription.endpoint,
        keys: {
          p256dh: subscription.toJSON().keys.p256dh,
          auth: subscription.toJSON().keys.auth
        }
      }
      console.log(data)

       fetch('http://127.0.0.1:8000/api/NotificationSubscribe', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));
    })

  }
  subscribeUser();
}

const broadCastNotification = async()=>{
  console.log("Broadcasting notification ")
  const data = {
    'title':"Broadcasting notification",
    'body':"This is the broadcast body",
    'url':"http://192.168.229.1:3000/",
    'icon':Logo
  }
  await fetch('http://127.0.0.1:8000/api/broadcastNotification',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(response=>response.json())
  .then(data => console.log(data))
}
