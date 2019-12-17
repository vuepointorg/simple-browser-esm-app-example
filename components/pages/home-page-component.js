import { HomePageTemplate } from './home-page-template.js'
import {Counter} from '../counter.js'

const HomePageComponent = {
    name: 'HomePage',
    components: {
        Counter
    },
    template: HomePageTemplate,
};

export { HomePageComponent }
