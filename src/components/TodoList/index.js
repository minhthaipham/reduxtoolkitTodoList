import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "../../redux/actions";
import { filterSearch } from "../../redux/selector";
import todoListSlice from "./todoSlice";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPrior, setTodoPrior] = useState("Medium");
  // console.log(searchText);

  const todoList = useSelector(filterSearch);

  const dispatch = useDispatch();
  const handlerBtn = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuid(),
        name: todoName,
        priority: todoPrior,
        completed: false,
      })
    );
    setTodoName("");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
          />
          <Select
            defaultValue="Medium"
            value={todoPrior}
            onChange={(value) => {
              setTodoPrior(value);
            }}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handlerBtn}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
