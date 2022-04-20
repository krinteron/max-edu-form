<template>
  <div class="container">
    <header class="form-title">
      <p>Форма подачи заявки в отдел сервиса и качества</p>
    </header>
    <main>
      <LayoutComponent>
        <router-view />
      </LayoutComponent>
    </main>
  </div>
</template>

<script>
import LayoutComponent from '@/components/LayoutComponent.vue';

export default {
  components: {
    LayoutComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: dimgray;
  font-size: 14px;
}

.container {
  display: inline-flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 20px;
  width: 920px;
}

.form-title {
  text-align: left;
  font-size: 20px;
  font-weight: 900;
}

.input {
  box-sizing: border-box;
  width: 240px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  appearance: none;
  outline-color: dimgray;
}

p {
  margin: 0;
  box-sizing: border-box;
}
</style>
