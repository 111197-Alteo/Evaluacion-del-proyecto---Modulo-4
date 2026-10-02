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
