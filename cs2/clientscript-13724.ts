//
function script13724(int0: number): void {
    var int1 = IF_GETHEIGHT(125239300);
    if ((int1 == varbitplayer_38525)) {
        IF_SETONTIMER(callback(), 125239300);
        return;
    };
    if ((int0 == 1)) {
        int1 = (int1 + 1);
    } else {
        int1 = (int1 - 1);
    };
    IF_SETSIZE(4, int1, 1, 0, 125239300);
    return;
}