import os
from rest_framework import viewsets
from django.core.serializers import serialize
from .models import *
from .serializers import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from django.conf import settings
import datetime
import jwt
from django.http import StreamingHttpResponse
import time

#Colors 
RESET = "\033[0m"
RED = "\033[31m"
GREEN = "\033[32m"
YELLOW = "\033[33m"
BLUE = "\033[34m"
MAGENTA = "\033[35m"
CYAN = "\033[36m"
WHITE = "\033[37m"

# Create your views here.
class donorViewSets(viewsets.ModelViewSet):
    queryset = Donor.objects.all()
    serializer_class = donorSerializer  
    
class seekerViewSets(viewsets.ModelViewSet):
    queryset = Seeker.objects.all()
    serializer_class = seekerSerializer

class contact_usViewSets(viewsets.ModelViewSet):
    queryset = contact_us.objects.all()
    serializer_class = contact_usSerializer  

class blog_ViewSets(viewsets.ModelViewSet):
    queryset =BlogPost.objects.all()
    serializer_class = BlogPostSerializer 
    
class BroadcastModel_ViewSets(viewsets.ModelViewSet):
    queryset = BroadcastModel.objects.all()
    serializer_class = BroadcastModelSerializer  

class NotificationModel_ViewSets(viewsets.ModelViewSet):
    queryset = Notifications.objects.all()
    serializer_class = NotificationModelSerializer   

class ChatBaseModel_Viewsets(viewsets.ModelViewSet):
    queryset = ChatBase.objects.all()
    serializer_class = ChatBaseModelSerializer

class MessageModel_Viewsets(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageModelSerializer
    
class Slider_viewsets(viewsets.ModelViewSet):
    queryset = Slider.objects.all()
    serializer_class = sliderSerialiszer
class BloodBank_viewsets(viewsets.ModelViewSet):
    queryset = BloodBank.objects.all()
    serializer_class = bloodBankserializer
class BloodDrive_viewsets(viewsets.ModelViewSet):
    queryset = BloodDrive.objects.all()
    serializer_class = bloodDriveSerializer
    
@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        userEmail = data.get('userEmail')
        password = data.get('password')
        isDonor = data.get('isDonor')
    
        if isDonor:
            user = Donor.objects.filter(emailId=userEmail,password=password).first()
            user_type = "donor"
        else:
            user = Seeker.objects.filter(emailId=userEmail,password=password).first()
            user_type = "seeker"

        if user is not None :
            user_data = json.loads(serialize('json', [user]))[0]['fields']
            user_data['id'] = user.id  
            return JsonResponse({
                "message": "Login successful",
                "type": user_type,
                'status': 'success',
                "user": user_data,
            }, status=200)
        else:
            return JsonResponse({
                "message": "Invalid credentials",
                'status': 'failed'
            }, status=400)

@csrf_exempt
def get_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        userEmail = data.get('userEmail')
        password = data.get('password')
        isDonor = data.get('isDonor')
        if isDonor:
            user = Donor.objects.filter(emailId=userEmail, password=password).first()
        else:
            user = Seeker.objects.filter(emailId=userEmail, password=password).first()

        if user is not None:
            user_data = json.loads(serialize('json', [user]))[0]['fields']
            user_data['id'] = user.id  
            return JsonResponse({
                "message": "Login successful",
                'status': 'success',
                "user": user_data,
            }, status=200)
        else:
            return JsonResponse({
                "message": "Invalid credentials",
                'status': 'failed'
            }, status=400)
    return JsonResponse({
        "message": "Invalid request method",
        'status': 'failed'
    }, status=405)

""" @csrf_exempt
def NotificationSubscribe(request):
    if request.method == "POST":
        data = json.loads(request.body)        
        if not NotificationSubscriptions.objects.filter(UserEmail=data['userEmail']).exists():
            subscription = NotificationSubscriptions(
            UserEmail=data['userEmail'],
            endpoint=data['endpoint'],
            p256dh=data['keys']['p256dh'],
            auth=data['keys']['auth']
            )
            subscription.save()
            return JsonResponse({'status':"Success"})
        else:
            return JsonResponse({'status':'exists'})
         """
""" @csrf_exempt
def broadCastNotification(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse(status=400, data={"status": "Invalid JSON"})

        if 'title' not in data or 'body' not in data or 'url' not in data:
            return JsonResponse(status=400, data={"status": "Invalid payload"})

        payload = {
            'title': data['title'],
            'body': data['body'],
            'url': data['url'],
            'icon': data['icon']
        }

        success_count = 0
        failure_count = 0
        success_ids = []
        failure_ids = []

        for user in NotificationSubscriptions.objects.all():
            try:
                webpush(
                    subscription_info={
                        'endpoint': user.endpoint,
                        'keys': {
                            'p256dh': user.p256dh,
                            'auth': user.auth
                        }
                    },
                    data=json.dumps(payload),
                    vapid_private_key=settings.WEBPUSH_SETTINGS['VAPID_PRIVATE_KEY'],
                    vapid_claims={
                        "sub": "mailto:{}".format(settings.WEBPUSH_SETTINGS['VAPID_ADMIN_EMAIL'])
                    }
                )
                success_count += 1
                success_ids.append(user.UserEmail)
            except WebPushException as ex:
                print("Web push failed: {}".format(repr(ex)))
                if ex.response:
                    print("Response status code: {}".format(ex.response.status_code))
                    print("Response body: {}".format(ex.response.text))
                failure_count += 1
                failure_ids.append(user.UserEmail)

        return JsonResponse({
            'status': 'Success',
            'success_count': success_count,
            'failure_count': failure_count,
            'success_ids':success_ids,
            'failure_ids':failure_ids
            })
    else:
        return JsonResponse(status=405, data={"status": "Method not allowed"}) """

@csrf_exempt     
def saveDeviceToken(request):
        if request.method == "POST":
            data = json.loads(request.body)
            device_token = data.get('device_token')
            user = data.get('user')
            if device_token and user:
                if not UserDevice.objects.all().filter(device_token=device_token):
                    UserDevice.objects.create(user=user, device_token=device_token)
                    return JsonResponse({'message': 'Device token saved successfully'})
                else:
                    return JsonResponse({'message':'already Exists'})
            else:
                return JsonResponse({'error': 'Invalid request'}, status=400)

""" 
def _get_access_token():
    # Define the path to your service account file
    service_account_file = os.path.join(settings.BASE_DIR, 'api', 'service-account.json')  # Update this path accordingly

    # Define the required scopes
    SCOPES = ['https://www.googleapis.com/auth/firebase.messaging']

    try:
        # Create credentials object
        credentials = service_account.Credentials.from_service_account_file(
            service_account_file, scopes=SCOPES
        )

        # Refresh the credentials to obtain a new access token
        request = requests.Request()
        credentials.refresh(request)

        # Return the access token
        return credentials.token

    except Exception as e:
        print(f"An error occurred while obtaining the access token: {e}")
        return None
access_token = _get_access_token()
print("Access Token:", access_token)

 """

def generate_jwt():
    try:
        SERVICE_ACCOUNT_FILE = os.path.join(settings.BASE_DIR, 'api', 'bloodhub-8eabb-firebase-adminsdk-3a06t-51904c9206.json')
        
        with open(SERVICE_ACCOUNT_FILE) as f:
            service_account_info = json.load(f)

        # Define the JWT headers
        headers = {
            "alg": "RS256",
            "typ": "JWT"
        }

        # Define the JWT payload
        now =datetime.datetime.now(datetime.timezone.utc)
        payload = {
            "iss": service_account_info['client_email'],
            "sub": service_account_info['client_email'],
            "aud": "https://oauth2.googleapis.com/token",
            "iat": now,
            "exp": now + datetime.timedelta(minutes=60),
            "scope": "https://www.googleapis.com/auth/firebase.messaging"
        }

        # Sign the JWT with the service account's private key
        signed_jwt = jwt.encode(payload, service_account_info['private_key'], headers=headers, algorithm="RS256")
        return signed_jwt
    except Exception as e:
        return "Error Creating JWT: " + str(e)

def GenerateTokenView():
        try:
            
            signed_jwt = generate_jwt()
            if signed_jwt.startswith("Error Creating JWT"):
                return signed_jwt
             # Request an OAuth 2.0 access token using the signed JWT
            token_url = "https://oauth2.googleapis.com/token"
            token_data = {
                "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
                "assertion": signed_jwt
            }
            
            token_response = requests.post(token_url, data=token_data)
            if token_response.status_code != 200:
                return "Error Exchanging JWT for Access Token: " + token_response.json().get("error_description", "Unknown error")

            token_json = token_response.json()
            return token_json['access_token']
        except Exception as e:
            return "Error Getting TOken : "+ str(e)

""" def saveNotification(title,desc,logo,url,created_at,type):
    pass """

@csrf_exempt         
def SendNotification(request):
    if request.method=="POST":
        data = json.loads(request.body)
        message = data.get('message')
        title = data.get('title')
        user = data.get('user')
        
        if message and title and user:
            try:
                user_device = UserDevice.objects.get(user=user)
                device_token = user_device.device_token

                # Construct the FCM request
                data = {
                    "message": {
                        "token": device_token,
                        "notification": {
                            "title": title,
                            "body": message
                        },
                    }
                }
                ACCESS_TOKEN = GenerateTokenView()
                print("Access Token: "+ACCESS_TOKEN)
                # Send the notification
                response = requests.post(
                    "https://fcm.googleapis.com/v1/projects/bloodhub-8eabb/messages:send",
                    headers={
                        "Host":"fcm.googleapis.com",
                        "Authorization": "Bearer "+ACCESS_TOKEN,
                        "Content-Type": "application/json",
                    },
                    json=data,
                )

                if response.status_code == 200:
                    return JsonResponse({
                                         'message':'Notification send successfully',
                                         'user':user,
                                         'device_token':device_token
                                         })
                else:
                    response_data = response.json()
                    print("Response status code:", response.status_code)
                    print("Response data:", response_data)
                    return JsonResponse({'error': 'Failed to send notification'}, status=500)
            except UserDevice.DoesNotExist:
                return JsonResponse({'error': 'User device not found'}, status=404)
        else:
            return JsonResponse({'error': 'Invalid request'}, status=400)  

@csrf_exempt  
def BroadCastNotification(request):
    if request.method=="POST":
        data = json.loads(request.body)
        bloodgroup = data.get('bloodGroup')
        requireUnit = data.get('requireUnit')
        address = data.get('address')
        msg = data.get('msg')
        userId = data.get('userId')
        
        if bloodgroup and requireUnit and address and msg and userId:
            user = Seeker.objects.all().get(emailId=userId)
            name = user.firstName
            
            #save Broadcast
            broadcastInstance = BroadcastModel.objects.create(bloodGroup=bloodgroup,requireUnit=requireUnit,address=address,msg=msg,userId=userId)
            
            #add to sender broadcastList
            user.broadcastList.add(broadcastInstance)
            
            title = f"Broadcast:{name} Needs {requireUnit}ml {bloodgroup} blood."
            message = f"{msg}"
        
        user_device = UserDevice.objects.all()
        ACCESS_TOKEN = GenerateTokenView()
        print(ACCESS_TOKEN)
        SUCCESS_COUNT = 0
        FAILURE_COUNT = 0
        NOTIFIED = 0    
        if message and title :
            try:
                
                notificationInstance = Notifications.objects.create(title=title,description=message,type='Broadcast',broadcastId=broadcastInstance.id)
                #adding notification in all donors
                
                for donor in Donor.objects.all():
                    donor.notifications.add(notificationInstance)
                    broadcastInstance.notified_donors.add(donor)
                    NOTIFIED += 1
                    
                loopCount = 0
                    
                #notifying about broadcast to all the donors which allowes notifications
                for device in user_device:
                    loopCount+=1
                    print(f"Loop : {loopCount}")
                    device_token = device.device_token
                
                    # Construct the FCM request
                    data = {
                        "message": {
                            "token": device_token,
                            "notification": {
                                "title": title,
                                "body": message
                            },
                        }
                    }
                    
                    # Send the notification
                    response = requests.post(
                        "https://fcm.googleapis.com/v1/projects/bloodhub-8eabb/messages:send",
                        headers={
                            "Host":"fcm.googleapis.com",
                            "Authorization": "Bearer "+ACCESS_TOKEN,
                            "Content-Type": "application/json",
                        },
                        json=data,
                    )

                    if response.status_code == 200:
                        SUCCESS_COUNT=SUCCESS_COUNT+1
                    else:
                        response_data = response.json()
                        FAILURE_COUNT+=1
                        print(f"**Failure {device.user}**: {response_data}")
                        #return JsonResponse({'error': 'Failed to send notification','RESPONSE':response_data,'SUCCESS_COUNT':SUCCESS_COUNT,'FAILURE_COUNT':FAILURE_COUNT}, status=500)
                print("done")
                return JsonResponse({
                                            'message':'Notification send successfully',
                                            'SUCCESS_COUNT':SUCCESS_COUNT,
                                            'FAILURE_COUNT':FAILURE_COUNT,
                                            'NOTIFIED':NOTIFIED,
                                            'Device Count':UserDevice.objects.count()
                                            })
            except Exception as e:
                print("there is the haramakhor ",str(e))
                return JsonResponse({'error': str(e)}, status=404)
        else:
            return JsonResponse({'error': 'Invalid request'}, status=400)  
    else:
        return JsonResponse({'error':"Invalid Method"},status = 404)
        
@csrf_exempt 
def removeNotification(request):
    if request.method == "POST":
        data = json.loads(request.body)
        notification_id = data.get('id')
        userId = data.get('userId')
        userType = data.get('userType')
        
        if not notification_id and userId and userType:
            return {"error":"invalid data","removed":False}
        if userType.upper() == "DONOR":
            user = Donor.objects.get(emailId = userId)
        elif userType.upper() == "SEEKER":
            user = Seeker.objects.get(emailId = userId)
        else:
            return JsonResponse({"error":"Invalid User Type","removed":False})
        
        notification = Notifications.objects.get(id=notification_id)
        user.notifications.remove(notification)
        return JsonResponse({"status":"successfully deleted ","removed":True})

@csrf_exempt 
def get_my_broadcast(request, id):
    if id is not None:
        try:
            user = Seeker.objects.get(id=id)
            broadcast_list = list(user.broadcastList.values()) 
            return JsonResponse({'status': 'success', 'broadcastList': broadcast_list})
        except Seeker.DoesNotExist:
            return JsonResponse({'error': 'Seeker not found'})
    return JsonResponse({'error': 'Invalid response'})

@csrf_exempt
def update_donors(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            broadcast_id = data.get('id')
            user_id = data.get('userId')
            accept = data.get('accept')

            if not (broadcast_id and user_id and accept is not None):
                return JsonResponse({'error': "Invalid Parameters"}, status=400)

            try:
                broadcast = BroadcastModel.objects.get(id=broadcast_id)
            except BroadcastModel.DoesNotExist:
                return JsonResponse({'error': "Broadcast not found"}, status=404)

            try:
                donor = Donor.objects.get(id=user_id)
            except Donor.DoesNotExist:
                return JsonResponse({'error': "Donor not found"}, status=404)

            if accept:
                broadcast.accepted_donors.add(donor)
                msg = "Successfully added to accepted"
            else:
                broadcast.denied_donors.add(donor)
                msg = "Successfully added to denied"

            return JsonResponse({'status': 'success', 'msg': msg})

        except json.JSONDecodeError:
            return JsonResponse({'error': "Invalid JSON"}, status=400)

    return JsonResponse({'error': "Invalid HTTP method"}, status=405)

@csrf_exempt
def assign_donors(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            donor_id = data.get('id')
            broadcast_id = data.get('b_id')

            if not (broadcast_id and donor_id):
                return JsonResponse({'error': "Invalid Parameters"}, status=400)

            try:
                broadcast = BroadcastModel.objects.get(id=broadcast_id)
            except BroadcastModel.DoesNotExist:
                return JsonResponse({'error': "Broadcast not found"}, status=404)

            try:
                donor = Donor.objects.get(emailId=donor_id)
            except Donor.DoesNotExist:
                return JsonResponse({'error': "Donor not found"}, status=404)

            broadcast.donor_assign = donor
            broadcast.save()
            print(broadcast.id ,"this is br id , assigned to " , donor.firstName ," status : " ,broadcast.donor_assign)
            return JsonResponse({'status': 'success'})

        except json.JSONDecodeError:
            return JsonResponse({'error': "Invalid JSON"}, status=400)

    return JsonResponse({'error': "Invalid HTTP method"}, status=405)

@csrf_exempt
def remove_assign_donors(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            broadcast_id = data.get('b_id')
            

            if not (broadcast_id ):
                return JsonResponse({'error': "Invalid Parameters"}, status=400)

            try:
                broadcast = BroadcastModel.objects.get(id=broadcast_id)
            except BroadcastModel.DoesNotExist:
                return JsonResponse({'error': "Broadcast not found"}, status=404)

            broadcast.donor_assign = None
            broadcast.save()
            return JsonResponse({'status': 'success'})

        except json.JSONDecodeError:
            return JsonResponse({'error': "Invalid JSON"}, status=400)

    return JsonResponse({'error': "Invalid HTTP method"}, status=405)

@csrf_exempt
def initilise_Chatbase(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            msg_text = data.get('msg_text')
            msg_from = data.get('msg_from')
            msg_to = data.get('msg_to')
            print(f"from {msg_from} to {msg_to} : msg:{msg_text} in {name}")
            if not (name and msg_text and msg_from and msg_to ):
                return JsonResponse({'error': "Invalid Parameters"}, status=400)

            if ChatBase.objects.filter(name=name):
                return JsonResponse({'error':"Chatbase already present"})
            chatBase = ChatBase.objects.create(name=name)
            messageInstance = Message.objects.create(text=msg_text,msg_from=msg_from,msg_to=msg_to)
            messageInstance.save()
            chatBase.save()
            chatBase.messages.add(messageInstance)
            
            serializedChatBase = ChatBaseModelSerializer(chatBase, context={'request': request})

            
            return JsonResponse({'status': 'success','chatBase':serializedChatBase.data})

        except json.JSONDecodeError:
            return JsonResponse({'error': "Invalid JSON"}, status=400)
        except Exception as e:
            print(f"Exception occurred: {str(e)}")
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': "Invalid HTTP method"}, status=405)

@csrf_exempt
def send_msg(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get('name')
            msg_text = data.get('msg_text')
            msg_from = data.get('msg_from')
            msg_to = data.get('msg_to')

            if not (name and msg_text and msg_from and msg_to):
                return JsonResponse({'error': "Invalid Parameters"}, status=400)

            try:
                chatbaseInstance = ChatBase.objects.get(name=name)
            except ChatBase.DoesNotExist:
                return JsonResponse({'error': "Chatbase not found"}, status=404)

            messageInstance = Message.objects.create(text=msg_text, msg_from=msg_from, msg_to=msg_to)
            chatbaseInstance.messages.add(messageInstance)

            serializedChatBase = ChatBaseModelSerializer(chatbaseInstance, context={'request': request})
            #serializedChatBase = json.loads(serializedChatBase)[0]

            return JsonResponse({'status': 'success', 'chatBase': serializedChatBase.data})

        except ChatBase.DoesNotExist:
            return JsonResponse({'error': "Chatbase not found"}, status=404)
        except json.JSONDecodeError:
            return JsonResponse({'error': "Invalid JSON"}, status=400)
        except Exception as e:
            print(f"Exception occurred: {str(e)}")
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': "Invalid HTTP method"}, status=405)
@csrf_exempt
def chatBase_eventStream(uId,request):
    last_update = None
    print(f"{MAGENTA}User ID : {uId}{RESET}")
    while True:
        if(uId.startswith("DO")):
            user = Donor.objects.filter(uId=uId).first()
            serialisedUser = donorSerializer(user, context={'request': request}).data

        else:
            user = Seeker.objects.filter(uId=uId).first()
            serialisedUser = seekerSerializer(user, context={'request': request}).data

            
        #print(f"{GREEN}User:{user.firstName}({user.type}),{RESET}")
                   
        if user and serialisedUser:
            U_chatBases = serialisedUser.get('ChatBases',[])
            if last_update!=U_chatBases:
                last_update = U_chatBases
                yield f"data: {json.dumps(U_chatBases)}\n\n"
        else:
            # Optionally handle cases where the instance is not found
            yield "data: {\"error\": \"Something unexpected happens\"}\n\n"
        time.sleep(3)
@csrf_exempt
def chatBase_stream(request,uId):
    response = StreamingHttpResponse(
        chatBase_eventStream(uId,request),
        content_type='text/event-stream'
    )
    response['Cache-Control'] = 'no-cache'
    response['X-Accel-Buffering'] = 'no'
    return response
        
