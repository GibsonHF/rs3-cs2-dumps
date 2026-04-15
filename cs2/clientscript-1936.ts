//
function script1936(int0: int): void {
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(script1935, (int0 - 1)), comp(267, 59));
        return;
    };
    if ((IF_GETWIDTH(comp(267, 43)) > 1)) {
        IF_SETSIZE(1, 0, 0, 1, comp(267, 43));
    };
    IF_SETONTIMER(callback(), comp(267, 59));
    IF_SETHIDE(1, 17498155);
    CC_DELETEALL(17498169);
    CC_DELETEALL(17498170);
    if ((varbitplayer_42072 == 1)) {
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, comp(267, 55));
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, comp(267, 56));
        IF_SETSCROLLSIZE((84 + (180 * 6)), 0, comp(267, 53));
        script1706(comp(267, 52), comp(267, 53), IF_GETSCROLLX(comp(267, 53)));
    };
    return;
}