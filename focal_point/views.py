from django.http import FileResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from focal_point.focal_point import focal_point


@csrf_exempt
def upload_file(request):
    if request.method == 'GET':
        return HttpResponse('Hey')
    if request.method == 'POST':
        file = request.FILES['file']
        edited_file_path = focal_point(file)
        return FileResponse(open(edited_file_path, 'rb'))
