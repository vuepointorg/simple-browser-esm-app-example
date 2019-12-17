import {mapState} from "../vendor/vuex.esm.browser.js";

const Counter = {
    name: 'Counter',
    computed: mapState(['counter']),
    template:
        `
    <div>
        The count is {{counter}}<br/>
        <!-- The count with a spazz 100 in front of it is... {{spazzCount}} -->
    </div>
`
};

export { Counter }


// computed: mapState({
//     count(state) {
//         return state.counter; // or // count: state => state.counter,
//     },
//     spazzCount(state) {
//         return this.spazzPrefix + state.counter;
//     }
// }),
