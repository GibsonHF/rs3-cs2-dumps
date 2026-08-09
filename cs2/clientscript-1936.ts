//
function script1936(int0: number): void {
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(script1935, (int0 - 1)), comp(267, 59));
        return;
    };
    if ((IF_GETWIDTH(comp(267, 43)) > 1)) {
        IF_SETSIZE(1, 0, 0, 1, comp(267, 43));
    };
    IF_SETONTIMER(callback(), comp(267, 59));
    IF_SETHIDE(true, comp(267, 43));
    CC_DELETEALL(comp(267, 57));
    CC_DELETEALL(comp(267, 58));
    if ((varbitplayer_42072 == 1)) {
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, comp(267, 55));
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, comp(267, 56));
        IF_SETSCROLLSIZE((84 + (180 * 6)), 0, comp(267, 53));
        script1706(17498164, 17498165, IF_GETSCROLLX(comp(267, 53)));
    };
    return;
}