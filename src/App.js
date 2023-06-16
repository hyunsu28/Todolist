import "./App.css";
import React, { useState } from "react";

function App() {
  //리스트추가를 위한 배열
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "알고리즘 풀기",
      content: "알고리즘 10문제 풀기!",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부",
      content: "리액트 기초 다지기!",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //제목이 변경될 경우
  const onTitlechangeHandler = (event) => {
    setTitle(event.target.value);
  };
  //내용이 변경될  경우
  const onContenttlechangeHandler = (event) => {
    setContent(event.target.value);
  };

  //리스트 추가
  const onAddButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);

    setTitle(""); // title 상태 초기화
    setContent(""); // content 상태 초기화
  };

  // 삭제 버튼 (Delete)
  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //토글
  const clickToggleButtonHandler = (id) => {
    const change = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    });
    setTodos(change);
  };

  return (
    <div className="All">
      <h1 className="first">Todo-List</h1>
      <div className="second">
        제목 &nbsp;{" "}
        <input type="text" value={title} onChange={onTitlechangeHandler} />
        내용 &nbsp;{" "}
        <input
          type="text"
          value={content}
          onChange={onContenttlechangeHandler}
        />
        <button onClick={onAddButtonHandler}>추가하기</button>
      </div>
      <h2 className="mintitle">💪Working</h2>
      <div className="list-wrapper">
        {todos.map((item) => {
          if (item.isDone === false) {
            return (
              <div className="todo-container">
                <div>
                  <h2 className="todo-title">{item.title}</h2>
                  <div>{item.content}</div>
                </div>
                <div className="but-set">
                  <button onClick={() => clickRemoveButtonHandler(item.id)}>
                    Delete
                  </button>
                  <button onClick={() => clickToggleButtonHandler(item.id)}>
                    Finish
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <h2 className="mintitle">🥳Done</h2>
      <div className="list-wrapper">
        {todos.map((item) => {
          if (item.isDone !== false) {
            return (
              <div className="todo-container">
                <div>
                  <h2 className="todo-title">{item.title}</h2>
                  <div>{item.content}</div>
                </div>
                <div className="but-set">
                  <button onClick={() => clickRemoveButtonHandler(item.id)}>
                    Delete
                  </button>
                  <button onClick={() => clickToggleButtonHandler(item.id)}>
                    Cancal
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
