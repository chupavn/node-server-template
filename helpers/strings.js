'use strict';
// eslint-disable-next-line arrow-body-style
const camelize = str => {
    return str
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            if (+match !== 0) {
                if (index === 0) {
                    return match.toLowerCase();
                }

                return match.toUpperCase();
            } else if (match === '0') {
                return match;
            }

            return '';
        });
};

const generateFileName = originalName => `${Date.now().toString(36)}_${originalName}`;

module.exports = {
    camelize,
    generateFileName,
};
