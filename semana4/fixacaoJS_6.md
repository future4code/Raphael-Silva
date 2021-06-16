```
const novoArray = tarefas.filter((item,
index, array) => {
  return item.status === 'done' 
}) .map ((item) => {
  return item.titulo
})
```