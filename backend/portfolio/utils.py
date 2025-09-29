from django.core.cache import cache
from rest_framework.exceptions import Throttled

class ContactRateThrottle:
    def __init__(self):
        self.rate = 5  # Number of allowed requests
        self.period = 3600  # Time period in seconds (1 hour)
        
    def allow_request(self, email):
        cache_key = f'contact_rate_{email}'
        requests = cache.get(cache_key, 0)
        
        if requests >= self.rate:
            return False
            
        if requests == 0:
            cache.set(cache_key, 1, self.period)
        else:
            cache.incr(cache_key)
            
        return True