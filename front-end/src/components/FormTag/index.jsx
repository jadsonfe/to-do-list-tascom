export default function FormTag() {

    return (
        <form action="/tag" method="POST">
            <div>
                <label htmlFor="name">Tarefa:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <button type="submit">Criar</button>
        </form>
    )
}