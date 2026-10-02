import { Camera } from '@nativescript/camera';

tomarFoto() {

    Camera.takePicture({
        width: 800,
        height: 800,
        keepAspectRatio: true,
        saveToGallery: true
    })
    .then(imageAsset => {

        this.foto = imageAsset;

    });

}
