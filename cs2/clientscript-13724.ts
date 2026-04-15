//
function script13724(int0: unknown_int): void {
    var int1 = IF_GETHEIGHT(comp(1911, 4));
    if ((int1 == varbitplayer_38525)) {
        IF_SETONTIMER(callback(), comp(1911, 4));
        return;
    };
    if ((int0 == 1)) {
        int1 = (int1 + 1);
    } else {
        int1 = (int1 - 1);
    };
    IF_SETSIZE(4, int1, 1, 0, comp(1911, 4));
    return;
}