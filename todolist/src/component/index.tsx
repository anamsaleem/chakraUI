'use client'
import React, { useState } from "react";
import { Button, ChakraProvider, Input } from "@chakra-ui/react";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/layout";

interface Todo {
  task: string;
  id: number;
}

const Index: React.FC = () => {
  const [todolist, setTodoList] = useState<Todo[]>([]);
  const [userinput, setUserInput] = useState<string>("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([
      ...todolist,
      {
        task: userinput,
        id: todolist.length + 1,
      },
    ]);
    setUserInput("");
  };

  const handleDelete = (id: number) => {
    setTodoList(todolist.filter((todo) => todo.id !== id));
  };

  return (
    <ChakraProvider>
    <Box textAlign='center' textColor='white' bg='#522261' borderTopColor='#a781b3' paddingLeft='20px' paddingTop='20px' paddingBottom='50px'>
    
      <Heading color='white' fontSize='80'>Todo List</Heading>
      <form onSubmit={handleSubmit}>
        <Input paddingTop='20px' paddingBottom='30px' fontSize='20'
          type="text"
          placeholder="Enter item"
          value={userinput}
          onChange={handleChanges}
        />
        <Button  fontSize='20' border='2px' borderColor='green.500' color='#48324f' type="submit">Add</Button>
      </form>
      <UnorderedList paddingTop='20px'>
        {todolist.length >= 1 ? (
          todolist.map((todo) => (
            <ListItem  fontSize='20' paddingTop='20px' key={todo.id}>
              {todo.task}{" "}
              <Button   fontSize='20' color='#48324f' type="button" onClick={() => handleDelete(todo.id)}>Delete</Button>
              </ListItem>
          ))
        ) : (
            <ListItem fontSize='20' >Enter item</ListItem>
        )}
       </UnorderedList>
    
    </Box>
    </ChakraProvider>

  );

};

export default Index;