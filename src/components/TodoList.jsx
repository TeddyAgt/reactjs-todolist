/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

export default function TodoList(props) {
    const { todos } = props;
    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        {...props}
                        index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                );
            })}
        </ul>
    );
}
