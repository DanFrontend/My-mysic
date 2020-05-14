<template>
  <div class="rock">
    <Sidebar />
    <div class="rock-content">
      <Player v-if="render" :songs="songsFilter"/>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Player from "./Player";
import { mapMutations } from 'vuex';

export default {
  name: "Rock",
  components: { Sidebar, Player },
  mounted() {
    this.setStart()
  },
  data() {
    return {
      render: true
    };
  },
  computed: {
    songsFilter() {
      return this.$store.state.songsFilter;
    }
  },
  methods: {
     ...mapMutations({
      setStart: 'setStart'
    }),
  },
  watch: {
    songsFilter() {
      this.render = false;
      setTimeout(()=> {
        this.render = true;
      }, 0)
    }
  }
};
</script>

<style lang="scss" scoped>
.rock {
  display: flex;

  &-content {
    padding: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}
</style>