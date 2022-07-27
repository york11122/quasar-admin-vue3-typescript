export function deepClone(obj: any) {
    if (obj === null) {
        return
    }
    const newObj: any = obj.push ? [] : {}
    for (const attr in obj) {
        if (typeof obj[attr] === 'object') {
            newObj[attr] = deepClone(obj[attr])
        } else {
            newObj[attr] = obj[attr]
        }
    }
    return newObj
}
