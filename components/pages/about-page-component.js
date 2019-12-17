import { AboutPageTemplate } from './about-page-template.js'
import { IncrementCounter} from "../increment-counter.js";

const AboutPageComponent = {
    name: 'AboutPage',
    components: {
        IncrementCounter
    },
    template: AboutPageTemplate,
};

export { AboutPageComponent };
