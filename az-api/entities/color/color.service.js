let currentColor = 0;

/**
 * Service Methods
 */

/**
 * A function for getting the current color in the API
 * ---
 * @return integer of the color
 */
const getColor = () => {
  return currentColor;
};

/**
 * A function to change the current value of the color
 * @param {int} color 
 * @return string representing the state of the query
 */
const setColor = (color) => {
  let hexColor = parseInt(color, 16);
  if(hexColor != undefined && hexColor >= 0 && hexColor <= 16777215) {
    currentColor = hexColor;
    return "OK"
  }
  return "KO"
};

// FIXME: EXPORT ALL YOUR FUNCTIONS BELOW
module.exports = {
  getColor,
  setColor
};
