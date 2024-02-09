<script>
import { mapActions } from "vuex";

export default {
    props: ['todo', 'index'],
    methods: {
        ...mapActions(['deleteTodo', 'editTodo']),
        getUpdatedTodo() {
            return (document.getElementById(this.index).innerText).substring(15);
        }

    },
};
</script>

<template>
    <p class="todo" :id="index" contenteditable="true" spellcheck="false">
        <div class="options">
            <button class="editBtn" @click="editTodo([getUpdatedTodo(), index])" contenteditable="false">SAVE EDITS</button>
            <button class="deleteBtn" @click="deleteTodo(todo)" contenteditable="false">DONE</button>
        </div>
        {{ todo }}
    </p>
</template>

<style scoped>
.todo {
        position: relative;
        width: 100%;
        height: auto;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 10px;
        color: #000000;
        /* display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap; */
        transition: 0.5s;
        word-wrap: break-word;

        &:hover {
            box-shadow: 0 0 5px #0B60B0;
            padding-top: 45px;

            .options {
                visibility: visible;
                transition: 0.3s ease-in;
                transition-delay: 0.3s;
            }
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 5px #0B60B0;
        }

        .options {
            position: absolute;
            top: 10px;
            right: 10px;
            visibility: hidden;
            
            button {
                margin: 0 10px;
                background-color: #F0EDCF;
                color: #0B60B0;
                padding: 5px 10px;
                font-weight: 500;
                border: 2px solid #0B60B0;
                border-radius: 100px;
                cursor: pointer;

                &:active {
                    background-color: #0B60B0;
                    color: #F0EDCF;
                }

                &:hover {
                    box-shadow: 0 0 5px #0B60B0;
                }
            }
        }
    }


</style>