export const remove = (i) => ({
    type: "CART_REMOVE",
    i
})

export const changeCnt = (i, cnt) => ({
    type: "CART_CHANGE_CNT",
    i,
    cnt
})