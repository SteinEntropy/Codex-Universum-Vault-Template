/**
 * Returns a comparator function to sort objects by a specified date property.
 *
 * @param {string} [date="Created"] - The date property to sort by. Default is "Created".
 * @param {string} [critWay="desc"] - The sorting order, either "asc" for ascending or "desc" for descending. Default is "desc".
 * @returns {function} A comparator function to be used in array sort method.
 */
const sortByDate = (date = "Created", critWay = "desc") => {
  return (a, b) => {
    const valueA = a.value(date);
    const valueB = b.value(date);

    // Compare values
    if (valueA > valueB) {
      return critWay === "asc" ? 1 : -1;
    } else if (valueA < valueB) {
      return critWay === "asc" ? -1 : 1;
    }
    return 0; // Equal values
  };
};

/**
 * Returns a comparator function to sort objects by a specified numeric property.
 *
 * @param {string} [numberField="Value"] - The numeric property to sort by. Default is "Value".
 * @param {string} [critWay="desc"] - The sorting order, either "asc" for ascending or "desc" for descending. Default is "desc".
 * @returns {function} A comparator function to be used in array sort method.
 */
const sortByNumber = (numberField = "Value", critWay = "desc") => {
  return (a, b) => {
    const valueA = a[numberField];
    const valueB = b[numberField];

    // Compare values
    if (valueA > valueB) {
      return critWay === "asc" ? 1 : -1;
    } else if (valueA < valueB) {
      return critWay === "asc" ? -1 : 1;
    }
    return 0; // Equal values
  };
};

/**
 * Returns a comparator function to sort objects by a specified string property.
 *
 * @param {string} [nameField="Name"] - The string property to sort by. Default is "Name".
 * @param {string} [critWay="asc"] - The sorting order, either "asc" for ascending or "desc" for descending. Default is "asc".
 * @returns {function} A comparator function to be used in array sort method.
 */
const sortByName = (nameField = "Name", critWay = "asc") => {
  return (a, b) => {
    const valueA = a[nameField].toLowerCase();
    const valueB = b[nameField].toLowerCase();

    // Compare values
    if (valueA > valueB) {
      return critWay === "asc" ? 1 : -1;
    } else if (valueA < valueB) {
      return critWay === "asc" ? -1 : 1;
    }
    return 0; // Equal values
  };
};

return { sortByDate, sortByNumber, sortByName };
