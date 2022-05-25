<script setup>
import Comment from '../components/Comment.vue'
import Button from '../components/Button.vue'
import { useRoute } from 'vue-router'
import { computed, onBeforeMount, ref } from 'vue'
import { useFetcher } from '../composables/fetcher.js'
import { UsersApi } from '../utils/client.js'
import Loader from '../components/Loader.vue'
import CommentForm from '../components/CommentForm.vue'

const route = useRoute()
const open = ref(false)

const { data: post, loading: loading1, error: error1, sendRequest: getPost } = 
  useFetcher(UsersApi.getPost)

const { data: comments, loading: loading2, error: error2, sendRequest: getPostComments } = 
  useFetcher(UsersApi.getPostComments)

onBeforeMount(() => {
  const postId = route.params.id
  getPost(postId)
  getPostComments(postId)
})
const error = computed(() => error1.value || error2.value)
const loading = computed(() => loading1.value || loading2.value)

function openModal() {
  document.body.style.overflow = "hidden";
  open.value = true
}

function closeModal() {
  document.body.style.overflow = "auto";
  open.value = false
}
</script>

<template>
  <div v-if="error" class="error">
    <span>Error occurred, try again later</span> 
  </div>
  <div v-else-if="loading" class="loader">
    <Loader/>
  </div>
  <main v-else class="post-page">
    <div class="post-page__post">     
      <h1>{{post?.title}}</h1>
      <p>{{post?.body}}</p>
    </div>
    <div class="post-page__comments">   
      <h2>Comments</h2>
      <div class="comments">
        <Comment
          v-for="comment in comments"
          :name="comment.name"
          :email="comment.email"
          :body="comment.body"
        />
      </div> 
      <Button @click="openModal" color="black" size="m">
        Добавить комментарий
      </Button>
      <Teleport to="body">
        <div v-if="open" class="modal">
          <div class="modal__content"> 
            <button class="modal__close"
              @click="closeModal"
            >X</button>
            <CommentForm/>
          </div>
        </div>
      </Teleport>
    </div>
  </main>
</template>

<style>
.post-page {
  padding: 0 61px;
  max-width: 1200px;
  margin: 0 auto; 
  margin-top: 36px;
}
.post-page_noscroll {
  overflow: hidden;
}
.post-page__post {
  margin-bottom: 19px;
}
.comments {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  margin-bottom: 15px;
  gap: 10px;
}
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.modal__content {
  position: relative;
}
.modal__close {
  cursor: pointer;
  border:  none;
  font-size: 24px;
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
@media screen and (max-width: 830px) {
  .post-page {
    padding: 0 25px;
  }
}
</style>