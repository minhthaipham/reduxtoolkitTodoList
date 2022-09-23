import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodoList } from "../../redux/actions";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry }) {
  const [checked, setChecked] = useState(false);
  // console.log(completed)
  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  const dispatch = useDispatch();
  const handlerDeleteTodo = (id) => {
    dispatch(removeTodoList(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox
        checked={checked}
        onChange={toggleCheckbox}
        onClick={handlerDeleteTodo}
      >
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
