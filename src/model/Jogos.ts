export abstract class Jogos {

    private _id: number;
    private _titulo: string;
    private _preco: number;
    private _genero: string;
    private _plataforma: string;
    private _descricao: string;
    private _anodelancamento: number;
    private _saldo: number;

    constructor(id: number, titulo: string, preco: number, genero: string,
        plataforma: string, descricao: string, anodelancamento: number, saldo: number) {
            this._id = id;
            this._titulo = titulo;
            this._preco = preco;
            this._genero = genero;
            this._plataforma = plataforma;
            this._descricao = descricao;
            this._anodelancamento = anodelancamento;
            this._saldo = saldo;
    }

    public get id(){
        return this._id;
    }

    public set id(id: number){
        this._id = id;
    }

    public get titulo(){
        return this._titulo;
    }

    public set titulo(titulo: string){
        this._titulo = titulo;
    }

    public get preco(){
        return this._preco;
    }

    public set preco(preco: number){
        this._preco = preco;
    }

    public get genero(){
        return this._genero;
    }

    public set genero(genero: string){
        this._genero = genero;
    }

    public get plataforma(){
        return this._plataforma;
    }

    public set plataforma(plataforma: string){
        this._plataforma = plataforma;
    }

    public get descricao(){
        return this._descricao;
    }

    public set descricao(descricao: string){
        this._descricao = descricao;
    }

    public get anodelancamento(){
        return this._anodelancamento;
    }

    public set anodelancamento(anodelancamento: number){
        this._anodelancamento = anodelancamento;
    }

    public get saldo(){
        return this._saldo;
    }

    public set saldo(saldo: number){
        this._saldo = saldo;
    }

    public comprar(preco: number) : boolean{
        if (this._saldo < preco) {
            console.log("\nSaldo Insuficiente para comprar o jogo!");
            return false;
        }

        this._saldo = this._saldo - preco;
        return true;
    }
    public visualizarJogo() : void {
        console.log("\n\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("Dados do Jogo: ");
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        console.log("Titulo: " + this._titulo);
        console.log("Preço: " + this._preco);
        console.log("Gênero: " + this._genero);
        console.log("Plataforma: " + this._plataforma);
        console.log("Descrição: " + this._descricao);
        console.log("Ano de Lançamento: " + this._anodelancamento);
        console.log("Saldo: " + this._saldo.toFixed(2));
        console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    }
}