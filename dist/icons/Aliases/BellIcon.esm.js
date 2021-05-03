import { createElement } from 'react';
import { NotificationsIcon } from '../Social/NotificationsIcon.esm.js';

/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/
var BellIcon = function BellIcon(props) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('BellIcon has been deprecated, and will be removed in the next major release.  Please check the React Magma docs to find the new set of icons adjust the size/spacing as needed.');
  }

  return createElement(NotificationsIcon, Object.assign({}, props));
};

export { BellIcon };
//# sourceMappingURL=BellIcon.esm.js.map
