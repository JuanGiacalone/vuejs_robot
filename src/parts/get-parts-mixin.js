export default {
  created() {
    this.$store.dispatch("getParts");
  },
  computed: {
    parts() {
      return (
        this.$store.state.parts || {
          head: [],
          arms: [],
          torsos: [],
          bases: []
        }
      );
    }
  }
};
