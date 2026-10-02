import { SocialShare } from '@nativescript/social-share';

compartirTexto() {
    SocialShare.shareText(
        '¡Mira este artículo!',
        'Compartir artículo'
    );
}
<Button
    text="Compartir texto"
    (tap)="compartirTexto()">
</Button>

compartirImagen(rutaImagen: string) {

    SocialShare.shareImage(
        rutaImagen,
        'Compartir fotografía'
    );

}
