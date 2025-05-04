import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div>
            <h1>Bem-vindo à Minha Nova Página! 🎉</h1>
            <p>Está página foi criada do zero!</p>
            <p>Que emoção! 🤩</p>

            <nav>
                <Link to="/">Voltar para a página App</Link>
            </nav>
        </div>
    );
}

