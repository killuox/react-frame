// lodash import
import type * as Stitches from '@stitches/react';
import * as _ from 'lodash';

export const mergeCss = (css: Stitches.CSS, newCss: Stitches.CSS) => {
    return _.merge(css, newCss);
}