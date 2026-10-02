import { Toast } from '@nativescript/core';

mostrarNotificacion(mensaje: string) {
    Toast.makeText(
        `Notificación: ${mensaje}`
    ).show();
}
