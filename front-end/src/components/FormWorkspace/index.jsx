export default function FormWorkspace() {

    return (
        <form action="/workspace" method="POST">
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <button type="submit">Criar</button>
        </form>
    )
}