import axios from 'axios';
import { store } from '../redux/store';
import { setCloudinaryFiles } from '../redux/slice/cloudinaryFilesSlice';

export const uploadToCloudinary = async (file) => {
  console.log('Uploading file to Cloudinary:', file);
  const data = new FormData();

  if (file.uri) {
    data.append('file', {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    });
  } 
  else if (file.fileCopyUri) {
    data.append('file', {
      uri: file.fileCopyUri,
      type: file.type,
      name: file.name,
    });
  }

  data.append('upload_preset', 'my_project_file');

  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/dttavijrh/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Upload Success:', res.data);
    const file={
      id:res.data.asset_id,
      url:res.data.secure_url,
    }
    store.dispatch(setCloudinaryFiles(file));
  } catch (error) {
  console.log('Upload Error:', error.response?.data || error);
  }
};


