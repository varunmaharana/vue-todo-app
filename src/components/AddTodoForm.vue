<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            todo: "",
        };
    },
    methods: {
        ...mapActions(['addTodo']),
        clearTodo() {
            this.todo = "";
        }
    },
};
</script>

<template>
    <form id="addTodoForm" @submit.prevent="addTodo(todo), clearTodo()">
        <input type="text" name="add-todo" placeholder="Add a new todo" v-model="todo">
        <button class="addTodoBtn" type="submit">+</button>
    </form>
</template>

<style scoped>

#addTodoForm {
    margin: 20px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

input {
    /* width: 50%; */
    padding: 10px 20px;
    font-size: 16px;
    outline: none;
    border: 2px solid #0B60B0;
    border-radius: 100px;
    color: #000000;

    &:focus {
        box-shadow: 0 0 5px #0B60B0;
    }
}

.addTodoBtn {
    padding: 5px 10px;
    aspect-ratio: 1/1;
    font-size: 20px;
    background-color: #40A2D8;
    color: #F0EDCF;
    border: 2px solid #0B60B0;
    border-radius: 100px;
    cursor: pointer;

    &:active {
        background-color: #0B60B0;
        color: #F0EDCF;

    }

}

@media screen and (max-width: 420px) {
    #addTodoForm {
        margin: 20px 0;
    }

    input {
        width: 95%;
    }
}

</style>