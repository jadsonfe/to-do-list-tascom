export default function FormLogin() {



    return (
        <>
            <form action="/login" method="POST">
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
            <div>
                <p>Não tem uma conta? <a href="/register">Registrar</a></p>
            </div>
        </>
    )
}