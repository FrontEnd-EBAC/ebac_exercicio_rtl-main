import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '..'

describe('Teste de postagem de comentários', () => {
    test('O comentário foi postado', () => {
        render(
            <PostComment />
        )
        const comentario = screen.getByText('Comentar')
        expect(comentario).toBeInTheDocument()
    })

    test('Dois comentários foram postados', () => {
        render(<PostComment />);

        let caixa = screen.getByTestId("caixa-de-comentarios")
        fireEvent.change(caixa, {
            target: {
                value: "Primeiro comentário",
            },
        });

        const btn = screen.getByTestId("botao")
        fireEvent.click(btn);
        caixa = screen.getByTestId("caixa-de-comentarios")

        fireEvent.change(caixa, {
            target: {
                value: "Segundo comentário",
            },
        });

        fireEvent.click(btn);

        const lista = screen.getAllByTestId("lista-de-comentarios")
        expect(lista).toHaveLength(2);
    })

})