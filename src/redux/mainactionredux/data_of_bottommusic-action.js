export function Change_data_of_bottummusic(data) {
    return {
        type: "change_data_of_bottommusci",
        data: data,
    }
}
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
export function changcheckload() {
    return {
        type: "changecheckload",
    }
}