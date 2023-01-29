import { writable } from "svelte/store";

export const TodosStore = writable([
  {
    id: "1",
    text: "Hello world",
    priority: "Low",
  },
  {
    id: "2",
    text: "Hello great world",
    priority: "Medium",
  },
  {
    id: "4",
    text: "Hello small world",
    priority: "High",
  },
]);
