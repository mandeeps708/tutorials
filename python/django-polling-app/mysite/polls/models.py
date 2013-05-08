from django.db import models

import datetime
from django.utils import timezone

class Poll(models.Model):
    # ...
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Choice(models.Model):
    # ...
    def __unicode__(self):
        return self.choice_text

