export default function FormTask() {
    return (
        <form action="/task" method="POST">
            <div>
                <label htmlFor="title">Tarefa:</label>
                <input type="text" id="title" name="title" required />
            </div>
            <button type="submit">Criar</button>
        </form>
    )
}