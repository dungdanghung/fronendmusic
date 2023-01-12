export function actionplay(data) {
    return {
        type: "playofpause",
        data: data,
    }
}
export function changeranges(data) {
    return {
        type: "setindexshow",
        data: data,
    }
}