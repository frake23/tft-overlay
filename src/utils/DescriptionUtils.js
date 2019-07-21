const items = {
    'belt': {
        fullName: 'Belt',
        stats: {
            'hp': '+200'
        },
        description: null
    }
}

function itemByName(name) {
    return items[name];
}

export {itemByName};