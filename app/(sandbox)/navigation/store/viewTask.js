import React from "react";
import { View, Text, Button } from "react-native";
import { useTaskStore } from "./useTaskStore";
import { router } from "expo-router";

export default function ViewTask() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const removeTask = useTaskStore((state) => state.removeTask);
  const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
  const clearTasks = useTaskStore((state) => state.clearTasks);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Retour" onPress={router.back} />
      <Button title="Effacer toutes les Tasks" onPress={clearTasks} />
      <Button title="Ajouter une Task" onPress={() => addTask("Nouvelle tâche")} />

      {tasks.length === 0 ? (
        <Text style={{ marginTop: 10 }}>Aucune tâche pour le moment</Text>
      ) : (
        tasks.map((task) => (
          <View key={task.id} style={{ marginTop: 10 }}>
            <Text
              style={{
                textDecorationLine: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </Text>
            <Button
              title="Supprimer"
              color="red"
              onPress={() => removeTask(task.id)}
            />
          </View>
        ))
      )}
    </View>
  );
}
