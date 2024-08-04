from django.db.models.signals import m2m_changed
from django.dispatch import receiver
from django.db import transaction

from .models import *

""" @receiver(pre_save, sender=Slider)
def update_cap_title(sender, instance, **kwargs):
    if instance.title:
        instance.capTitle = instance.title.capitalize()
 """
 
@receiver(m2m_changed, sender=Seeker.broadcastList.through)
def update_bloodSeeked(sender, instance, action, **kwargs):
    if action in ["post_add", "post_remove", "post_clear"]:
        total_blood_seeked = sum(broadcast.requireUnit for broadcast in instance.broadcastList.all())
        instance.bloodSeeked = total_blood_seeked
        instance.save()
        
@receiver(m2m_changed, sender=Donor.bloodDonated.through)
def update_bloodDonated(sender, instance, action, **kwargs):
    if action in ["post_add", "post_remove", "post_clear"]:
        total_blood_Donated = 0
        
        if action == "post_clear":
            total_blood_Donated = 0
        else:
            for donated in instance.bloodDonated.all():
                total_blood_Donated += donated.requireUnit  
            
        instance.totalBloodDonated = total_blood_Donated
        instance.save()
        
@receiver(m2m_changed, sender=BroadcastModel.accepted_donors.through)
def add_bloodDonated(sender, instance, action, **kwargs):
    if action in ["post_add", "post_remove", "post_clear"]:
        # Ensure atomic transactions
        with transaction.atomic():
            if action == "post_add":
                # Add the broadcast to the broadcastList of each added donor
                for donor in instance.accepted_donors.all():
                    if instance not in donor.bloodDonated.all():
                        donor.bloodDonated.add(instance)
                print(f"added {instance.id} into donor's ({instance.accepted_donors.all().order_by('id').last()})")
            elif action == "post_remove":
                # Remove the broadcast from the broadcastList of each removed donor
                for donor in kwargs.get('pk_set', []):
                    donor_instance = Donor.objects.get(pk=donor)
                    if instance in donor_instance.bloodDonated.all():
                        donor_instance.bloodDonated.remove(instance)
            
            elif action == "post_clear":
                # Clear the broadcastList of all donors associated with this broadcast
                for donor in instance.accepted_donors.all():
                    donor.broadcastList.remove(instance)
            
            
        