<template>
  <div class="foreign">
    <SidebarImport />
    <div class="foreign-content">
      <Player v-if="render" :songs="songsImportFilter" />
    </div>
  </div>
</template>

<script>
  import SidebarImport from "./SidebarImport";
  import Player from "./Player";
  import { mapMutations } from "vuex";

  export default {
    name: "Foreign",
    components: { SidebarImport, Player },
    mounted() {
      this.setImportStart()
    },
    data() {
      return {
        render: true
      };
    },
    computed: {
      songsImportFilter() {
        return this.$store.state.songsImportFilter;
      }
    },
    methods: {
      ...mapMutations({
        setImportStart: 'setImportStart'
      }),
    },
    watch: {
      songsImportFilter() {
        this.render = false;
        setTimeout(()=> {
          this.render = true;
        }, 0)
      }
    }
  };
</script>

<style lang="scss" scoped>
.foreign {
  display: flex;

  &-content {
    padding: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}
</style>