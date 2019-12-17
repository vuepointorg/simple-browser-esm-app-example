const IncrementCounter = {
    name: 'IncrementCounter',
    props: {
      'text':String
    },
    methods: {
      buttonPressed() {
          this.$store.commit('incrementBy',1);
      }
    },
    template:
        `
    <div>
        <button @click="buttonPressed">{{text}}</button>
    </div>
`
};

export { IncrementCounter }
