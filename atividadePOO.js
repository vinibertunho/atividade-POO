class Personagem {
    #vida;
    constructor(nome, poderDeAtaque) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        this.#vida = 100;
    }

    receberDano(valor) {
        this.#vida -= valor;
        if (this.#vida < 0) this.#vida = 0;
        console.log(`${this.nome} recebeu ${valor} de dano!`);
    }

    exibirStatus() {
        console.log(`${this.nome} | HP: ${this.#vida}`);
    }
}

class Guerreiro extends Personagem {
    constructor(nome, ataque, forca) {
        super(nome, ataque);
        this.forca = forca;
    }

    atacar(inimigo) {
        let danoTotal = this.poderDeAtaque + this.forca;
        console.log(`🗡️ ${this.nome} deu um golpe de espada!`);
        inimigo.receberDano(danoTotal);
    }
}

class Mago extends Personagem {
    constructor(nome, ataque, magia) {
        super(nome, ataque);
        this.magia = magia;
    }

    atacar(inimigo) {
        let danoTotal = this.poderDeAtaque + this.magia * 2;
        console.log(`🔥 ${this.nome} lançou uma bola de fogo!`);
        inimigo.receberDano(danoTotal);
    }
}

const heroi = new Guerreiro('Batman', 10, 5);
const vilao = new Mago('Coringa', 5, 8);

heroi.exibirStatus();
vilao.exibirStatus();

heroi.atacar(vilao);
vilao.atacar(heroi);

heroi.exibirStatus();
vilao.exibirStatus();
