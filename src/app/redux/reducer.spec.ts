describe('Favoritos Reducer', () => {

    it('debe agregar un favorito', () => {

        const estadoInicial = {
            favoritos: []
        };

        const articulo = {
            id: 1,
            titulo: 'Artículo de prueba'
        };

        const nuevoEstado = reducer(
            estadoInicial,
            {
                type: 'AGREGAR_FAVORITO',
                payload: articulo
            }
        );

        expect(
            nuevoEstado.favoritos.length
        ).toBe(1);

        expect(
            nuevoEstado.favoritos[0]
        ).toEqual(articulo);

    });

});
