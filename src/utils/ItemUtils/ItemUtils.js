import itemsInfo from './items.json';

import {itemsImages, statsImages} from '../ImagesUtils/ImagesUtils.js';


const itemById = (items, id) => items.filter((item) => id === item.id)[0];

const initItems = (items) => {
    return items.map((item, index) => {
        item = {...item, imgSrc: itemsImages[item.id]};
        item.stats && item.stats.forEach((_, index, stats) => {
            const stat = stats[index];
            stats[index] = {...stat, iconSrc: statsImages[stat.name]};
        });
        return item;
    });
}

const initRecipes = () => {
    return baseItems.map((baseItem) => {
        return {
            baseItem: baseItem,
            to: combinedItems.filter((combinedItem) => {
                    return combinedItem.recipe.includes(baseItem.id)
                }).map((combinedItem) => {
                    return {
                        from: itemById(baseItems, combinedItem.recipe[1 - combinedItem.recipe.indexOf(baseItem.id)]),
                        to: combinedItem
                    }
                })
        }
    })
}

const baseItems = initItems(itemsInfo.baseItems);
const combinedItems = initItems(itemsInfo.combinedItems);
const recipes = initRecipes();

export {baseItems, recipes};
