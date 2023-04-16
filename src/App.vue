<script>
import TheSidebar from "@/components/TheSidebar.vue";

export default {
  components: {
    TheSidebar,
  }
}
</script>

<template>
  <div class="layout">
    <TheSidebar />
    <main class="layout__content">
      <RouterView />
    </main>
  </div>
</template>

<style>
.layout {
  display: flex;
  min-height: 100vh;
}

.layout__content {
  padding: 10px 100px;
  flex-grow: 1;
}
</style>
