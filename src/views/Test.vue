<template>
  <div class="test">
    <button v-has="'add'">新增</button>
    <button v-has="'editor'">编辑</button>
    <button v-has="'delete'">删除</button>
  </div>
</template>

<script>
import has from '../directives/has.js';

export default {
  name: 'test',
  directives: {
    has
  }
};
</script>
