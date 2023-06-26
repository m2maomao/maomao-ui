<template>
  <div>
    <Hello :name="name" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'World'
    }
  }
}
</script>
