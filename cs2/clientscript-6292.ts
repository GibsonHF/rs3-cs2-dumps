//
function script6292(int0: int): void {
    var int1 = 0;
    IF_SETSCROLLPOS(0, 0, comp(1296, 9));
    int1 = (int0 * 12);
    IF_SETSCROLLSIZE(0, int1, comp(1296, 9));
    if ((int1 > IF_GETHEIGHT(comp(1296, 9)))) {
        IF_SETHIDE(false, comp(1296, 10));
        script31(comp(1296, 10), comp(1296, 9), 8383 as graphic, 8380 as graphic, 8381 as graphic, 8382 as graphic, 8375 as graphic, 8374 as graphic);
    } else {
        IF_SETHIDE(true, comp(1296, 10));
    };
    return;
}