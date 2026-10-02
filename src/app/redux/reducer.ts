export interface AppState {
    favoritos: any[];
}
export function reducer(
    state: AppState,
    action: any
): AppState {

    switch (action.type) {

        case 'AGREGAR_FAVORITO':
            return {
                ...state,
                favoritos: [
                    ...state.favoritos,
                    action.payload
                ]
            };

        default:
            return state;
    }
}
