<script>
import AddTodoForm from "../components/AddTodoForm.vue"
import { mapGetters, mapActions } from "vuex";
import TodoCard from "@/components/TodoCard.vue";


export default {
    data() {
        return {
            updatedTodo: ""
        };
    },

    methods: {
        ...mapActions(['deleteTodo', 'editTodo']),

    },
    computed: {
        ...mapGetters(['getTodoList']),
    },

    components: {
        AddTodoForm,
        TodoCard
    }

};
</script>

<template>

<h1>
    Vue Todo List App
</h1>

<AddTodoForm />

<div class="todos">
    <!-- <p class="todo" v-for="(todo, index) in getTodoList" :key="index" contenteditable="true" spellcheck="false">
        <div class="options">
            <button class="editBtn" @click="console.log(document.getElementByClassName('todo').innerText)">SAVE EDITS</button>
            <button class="deleteBtn" @click="deleteTodo(todo)">DONE</button>
        </div>
        {{ todo }}
    </p> -->

    <TodoCard v-for="(todo, index) in getTodoList" :key="index" :todo="todo" :index="index" />
</div>


</template>

<style scoped>

h1 {
    padding: 20px 0;
    text-align: center;
}

.todos {
    width: 60%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    gap: 10px;
    
}

@media screen and (max-width: 420px) {
    h1 {
        padding: 10px 0;
        text-align: center;
        font-size: 20px;
    }
    .todos {
        width: 95%;
    }
}

</style>