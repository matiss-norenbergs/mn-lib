function setStyleProperty(propName, propValue) {
    document.querySelector(":root").style.setProperty(propName, propValue)
}

const getStyleProperty = (propName) => getComputedStyle(document.documentElement).getPropertyValue(propName)

export {
    setStyleProperty,
    getStyleProperty
}