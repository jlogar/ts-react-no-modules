//importing react-hyperscript (need to export to global without real module use)

import { ComponentClass, StatelessComponent, ReactElement } from '../node_modules/@types/react/index';

import * as _h from 'react-hyperscript';

export as namespace h;
export = _h;
