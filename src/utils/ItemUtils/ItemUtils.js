import itemsInfo from './items.json';

import {itemsImages, statsImages} from '../ImagesUtils/ImagesUtils.js';

function initBaseItems() {
    return itemsInfo.baseItems.map((item, index) => {
        console.log(item)
        item = {...item, imgSrc: itemsImages[item.id]};
        item.stats && item.stats.forEach((_, index, stats) => {
            const stat = stats[index];
            stats[index] = {...stat, iconSrc: statsImages[stat.name]};
        })
        return item;
    });
}

const baseItems = initBaseItems();

export {baseItems};
