import React from "react";
import { TextField, Button } from "@mui/material";
import { GrAddCircle } from 'react-icons/gr';

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
};

const Input: React.FC<IProps> = ({ todo, setTodo, addMessage }) => {
  return (
    <div className="homeDiv">

      <TextField
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Add To Name"
        label="Name"
        variant="outlined"
      />
      <Button onClick={addMessage} variant="contained" color="primary">
        <GrAddCircle size={24} />
      </Button>
    </div>
  );
};

export default Input;
