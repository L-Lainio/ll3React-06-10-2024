// import { motion } from 'framer-motion';
// import ExternalLink from '../Icons/ExternalLink';
// import GitHub from '../../component/Icons/GitHub';

// import './Projects.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    sectionStyles: {
        background: 'orange',
    },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Projects() {
    return (
        <section style={styles.sectionStyles} className="section">
            <h2>Lorem Ipsum Dolor Sit Amet</h2>
            <p>
          i am in Projects.jsx text blah blah meh meh
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                et quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id est
                laborum et dolorum fuga.
            </p>
        </section>
    );
}

export default Projects;
