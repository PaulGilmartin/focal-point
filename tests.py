from django.test import TestCase

from focal_point.focal_point import focal_point


class TestFocalPoint(TestCase):

    def test_focal_point(self):
        self.client.post()
        focal_point('/test_files/NHSDoc.docx')
