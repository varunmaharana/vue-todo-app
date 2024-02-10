import { createStore } from 'vuex'

const todoListModule = {
  state() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }
  },
  getters: {
    getTodoList(state) {
      return state.todoList
    }
  },
  mutations: {
    addTodo(state, payload) {
      if (payload.length > 0) {
        state.todoList.push(payload)
        // saving to localStorage
        localStorage.setItem('todoList', JSON.stringify(state.todoList))
      } else {
        alert('Cant save empty todo!')
      }
    },
    deleteTodo(state, payload) {
      const updatedList = state.todoList.filter(function (todo) {
        return todo !== payload
      })
      //   state.todoList.remove(payload)
      state.todoList = updatedList
      // saving to localStorage
      localStorage.setItem('todoList', JSON.stringify(updatedList))
    },
    editTodo(state, payload) {
      const [updatedTodo, index] = payload
      state.todoList[index] = updatedTodo
      // saving to localStorage
      console.log('edit')
      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    }
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload)
    },
    deleteTodo(context, payload) {
      context.commit('deleteTodo', payload)
    },
    editTodo(context, payload) {
      context.commit('editTodo', payload)
    }
  }
}

const store = createStore({
  modules: {
    todoListModule
  }
})

export default store
