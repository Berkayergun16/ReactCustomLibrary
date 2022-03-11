import { createElement } from 'react';
import 'semantic-ui-css/semantic.min.css';

var styles = {"test":"_styles-module__test__3ybTi"};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
