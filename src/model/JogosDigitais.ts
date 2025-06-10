import { Jogos } from "./Jogos";

export class JogosDigitais extends Jogos {

    private _cartao_presente: number;

    constructor(id: number, titulo: string, preco: number,
        genero: string, plataforma: string, descricao: string,
        anodelancamento: number, pagamento: number, cartao_presente: number, tipo: number) {
        super(id, titulo, preco, genero, plataforma, descricao, anodelancamento, pagamento, tipo);
        this._cartao_presente = cartao_presente;
        }

    public get cartao_presente() {
        return this._cartao_presente;
    }

    public set cartao_presente(cartao_presente: number) {
        this._cartao_presente = cartao_presente;
    }

    public usarCartao(): boolean {
        if (this._cartao_presente <= 0) {
            throw new Error("Saldo do cartão presente inválido.");
        }
        if (this._cartao_presente < this.preco) {
            throw new Error("Saldo insuficiente no cartão presente.");
        }
        this._cartao_presente -= this.preco;
        console.log(`Compra realizada! Saldo restante: R$${this._cartao_presente}`);
        return true;
    }

    public visualizarJogoDigital(): void{
        super.visualizarJogo();
        console.log(`Cartão Presente: R$${this._cartao_presente}`);
    }
}