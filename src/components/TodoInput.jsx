export default function TodoInput(props) {
    const { handleAddTodos } = props;

    return (
        <header>
            <input
                type="text"
                placeholder="Enter todo..."
            />
            <button
                onClick={handleAddTodos}
                type="button">
                Add
            </button>
        </header>
    );
}
