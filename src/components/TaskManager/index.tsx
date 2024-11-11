import {} from "./styles";
import { Item } from "../Item/index.js";
import { Empty } from "../Empty/index.js";
import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { useRef } from "react";
import { View } from "react-native";

export interface Task {
  id: number;
  content: string;
  isChecked: boolean;
}

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]); // iniciando o estado de tarefas, com 1 tarefa
  const [newTaskText, setNewTaskText] = useState(""); // estado de texto de tarefas

  const isTaskTextEmpty = newTaskText.length == 0;
  const tasksCounter = tasks.length;
  const buttonRef = useRef(null);

  const checkedTaskCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCreateNewTask(event);
    }
  };

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault;

    if (!newTaskText) {
      return;
    }

    const newTask: Task = {
      id: new Date().getTime(),
      content: newTaskText,
      isChecked: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setNewTaskText(""); // voltando o valor do setNewTaskText para o padrão, string vazia
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((tasks) => {
      if (tasks.id === id) {
        return { ...tasks, isChecked: value };
      }

      return { ...tasks };
    });

    setTasks(updatedTasks);
  }
  return (
    <View>
      <View className={styles.janela}>
        <form className={styles.commentForm} onKeyDown={handleKeyDown}>
          <textarea
            name="task"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange} // permite realizar alteraçãoes e vai alterando o estado do texto
            required={true}
            value={newTaskText}
          >
            {" "}
          </textarea>
          <button
            className={styles.createButton}
            type="submit"
            disabled={isTaskTextEmpty}
            onClick={handleCreateNewTask}
            ref={buttonRef}
          >
            <span>Criar</span>
            <PlusCircle />
          </button>
        </form>
      </View>
      <View className={styles.taskManagerBody}>
        <header className={styles.taskManagerHeader}>
          <View className={styles.taskCounter}>
            <strong className={styles.text1}>Tarefas Criadas</strong>
            <span>{tasksCounter}</span>
          </View>
          <View className={styles.taskCounter}>
            <strong className={styles.text2}>Concluídas</strong>
            <span>
              {" "}
              {tasksCounter > 0
                ? checkedTaskCounter + " de " + tasksCounter
                : 0}
            </span>
          </View>
        </header>

        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Item
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
              />
            );
          })
        ) : (
          <Empty />
        )}
      </View>
    </View>
  );
}
