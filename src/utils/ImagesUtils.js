function importAllImages(r) {
    let images = {};
    r.keys().map((item) => { 
        return images[/[a-zA-Z]+/.exec(item)] = r(item);
    });
    return images;
}

const itemsImages = importAllImages(require.context("../images/items", false, /\.(png|jpe?g|svg)$/));

function imageByName(name) {
    return itemsImages[name];
}

export {imageByName};