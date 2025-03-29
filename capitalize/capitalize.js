function capitalize(value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

module.exports = capitalize