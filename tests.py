from unittest import TestCase

from core import focal_point


class TestFocalPoint(TestCase):

    def test_embolden(self):
        focal_point('/Users/paulgilmartin/PycharmProjects/focal-point/NHSDoc.docx')
