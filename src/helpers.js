// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

const choices=(items)=>{
    return items[Math.floor(Math.random() * items.length)];
}

const remove=(items, item)=>{
    const idx=items.findIndex(item)
    return (idx===-1 ? undefined  : items.splice(idx,1))
}

export {choices, remove}