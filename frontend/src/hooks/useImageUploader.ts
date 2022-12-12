import { deleteObject, getDownloadURL, ref, uploadBytesResumable, UploadMetadata } from "firebase/storage";
import { storage } from "~/app/firebaseConfig";

export default function useImageUploader() {
  const uploader = (path: string, file: File, callback: (url: string) => void) => {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type as UploadMetadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            console.log("Nothing at all");
            break;
        }
      },
      (error) => {
        throw error;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          callback(downloadUrl);
        });
      },
    );
  };

  const deleteFile = (filePath: string, callback: () => void) => {
    const storageRef = ref(storage, filePath);
    deleteObject(storageRef)
      .then(() => {
        callback();
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    uploader,
    deleteFile,
  };
}
