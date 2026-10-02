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

<Button
    text="Tomar fotografía"
    (tap)="tomarFoto()">
</Button>

<Image
    [src]="foto"
    stretch="aspectFit">
</Image>

<Button
    text="Compartir fotografía"
    (tap)="compartirFoto()">
</Button>
compartirFoto() {

    if (!this.foto) {
        return;
    }

    this.shareService.compartirImagen(
        this.foto
    );

}
