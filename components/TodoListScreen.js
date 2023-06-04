import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const TodoListScreen = () => {
  const [task, setTask] = useState(''); //입력 작업 추적
  const [tasks, setTasks] = useState([]); //작업목록 관리

  const handleAddTask = () => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, { task, completed: false }]); //새 작업 추가 및 초기화
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed }; //complete 토글
        }
        return task;
      });
    });
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, i) => i !== index); //해당 인덱스 삭제
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.taskItem, item.completed ? styles.completedTask : null]}
            onPress={() => handleToggleTask(index)} //작업 토글
            onLongPress={() => handleRemoveTask(index)} //작업 삭제
          >
            <Text style={styles.taskText}>{item.task}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} //고유 키 생성 인덱스
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6E4',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#006400',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#006400',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#006400',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: '#CDEAC0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskText: {
    color: '#006400',
  },
  completedTask: {
    backgroundColor: '#D3D3D3',
    textDecorationLine: 'line-through',
  },
});

export default TodoListScreen;
