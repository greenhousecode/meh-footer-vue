<template>
  <footer class="ui centered grid">
    <div v-if="block" class="overlay">
      <p>{{ eolCopy }}</p>
    </div>
    <small>
      <p v-if="eolCopy">{{ eolCopy }}</p>
      Engineered with ♥ by Greenhouse's<br />
      <a href="http://meh.greenhousegroup.com/" title="Marketing Engineering Hub">
        Marketing Engineering Hub
        <img
          src="https://cdn.greenhousegroup.com/ghg-nl/meh/logo_meh.png"
          alt="Marketing Engineering Hub"
          class="logo"
        />
      </a>
    </small>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    wrikeProjectId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    eolCopy: null,
    block: false,
  }),

  async mounted() {
    try {
      const { data } = await axios.get(
        `https://ccp.greenhousegroup.com/1-hour/https://meh.greenhousegroup.com/api/eol/${this.wrikeProjectId}`,
      );

      this.block = data.block;
      this.eolCopy = data.copy;
    } catch (e) {} // eslint-disable-line no-empty
  },
};
</script>

<style scoped>
.block {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.67);
  z-index: 1;
}

.logo {
  width: 32px;
  display: block;
  margin: 10px auto;
}
</style>
