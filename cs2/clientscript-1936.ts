//
function script1936(int0: number): void {
    if ((int0 >= 0)) {
        IF_SETONTIMER(callback(script1935, (int0 - 1)), 17498171);
        return;
    };
    if ((IF_GETWIDTH(17498155) > 1)) {
        IF_SETSIZE(1, 0, 0, 1, 17498155);
    };
    IF_SETONTIMER(callback(), 17498171);
    IF_SETHIDE(1, 17498155);
    CC_DELETEALL(17498169);
    CC_DELETEALL(17498170);
    if ((varbitplayer_42072 == 1)) {
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, 17498167);
        IF_SETSIZE((84 + (180 * 6)), 0, 0, 1, 17498168);
        IF_SETSCROLLSIZE((84 + (180 * 6)), 0, 17498165);
        script1706(17498164, 17498165, IF_GETSCROLLX(17498165));
    };
    return;
}