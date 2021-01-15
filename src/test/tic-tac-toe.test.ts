const ticTacToe = () => {
    return {
        currentPlayer: 'X'
    }
}

function play(ticTacToeInstance: { currentPlayer: string }) {
    return { currentPlayer: 'O' }
}

describe('tic-tac-toe', () => {
    it('initial player should be X', () => {
        expect(ticTacToe().currentPlayer).toBe('X')
    });

    it('second player should be O', () => {
        const ticTacToeInstance = ticTacToe();
        const updatedTicTacToe = play(ticTacToeInstance)
        expect(updatedTicTacToe.currentPlayer).toBe('O')
    });

    it('third player should be X', () => {
        const ticTacToeInstance = ticTacToe()
        const updatedTicTacToe = play(play(ticTacToeInstance))
        expect(updatedTicTacToe.currentPlayer).toBe('X')
    })
})
