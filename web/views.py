from django.views import generic


class HomeView(generic.TemplateView):
    template_name = 'home.html'

class ClientView(generic.TemplateView):
    template_name = 'client.html'


home = HomeView.as_view()
client = ClientView.as_view()