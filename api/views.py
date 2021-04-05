from .controllers.interest import InterestView
from .controllers.gallery import GalleryView

interest = InterestView.as_view()
gallery = GalleryView.as_view()