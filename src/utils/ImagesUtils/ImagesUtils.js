function importAllImages(r) {
    let images = {};
    r.keys().map((item) => {
        return images[/[a-zA-Z]+/.exec(item)] = r(item);
    });
    return images;
}

const itemsImages = importAllImages(require.context("../../images/items", false, /\.(png|jpe?g|svg)$/));
const statsImages = importAllImages(require.context("../../images/stats", false, /\.(png|jpe?g|svg)$/));
const icons = importAllImages(require.context("../../images/icons", false, /\.(png|jpe?g|svg)$/));

export {itemsImages, statsImages, icons}