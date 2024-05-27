using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Photos
{
    public class PhotoAccessor : IPhotoAccessor
    {
        public Task<PhotoUploadResult> AddPhoto(IFormFile file)
        {
            throw new NotImplementedException();
        }

        public Task<string> DeletePhotot(string PublicId)
        {
            throw new NotImplementedException();
        }
    }
}