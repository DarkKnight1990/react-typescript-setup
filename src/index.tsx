import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './component/Hello';

ReactDOM.render(
    <Hello compiler="Python" framework="Django"/>,
    document.getElementById("root")
);
