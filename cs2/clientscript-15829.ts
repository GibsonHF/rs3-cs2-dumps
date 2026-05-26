//
function script15829(int0: number): void {
    if ((int0 == 1)) {
        IF_SETOP(1, "View information", 43384882);
        IF_SETONOP(callback(script13497, 43384878), 43384882);
        IF_SETSIZE(30, 0, 1, 1, 43384890);
        IF_SETHIDE(0, 43384891);
    } else {
        IF_SETOP(1, "", 43384882);
        IF_SETONOP(callback(), 43384882);
        IF_SETSIZE(8, 0, 1, 1, 43384890);
        IF_SETHIDE(1, 43384891);
    };
    return;
}