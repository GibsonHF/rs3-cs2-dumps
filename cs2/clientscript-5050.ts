//
function script5050(int0: int, int1: int, int2: unknown_int): void {
    var int0 = (int0 * int1);
    if ((int2 == 1)) {
        IF_SETSCROLLPOS(IF_GETSCROLLX(comp(1111, 12)), MAX((IF_GETSCROLLY(comp(1111, 12)) + int0), 0), comp(1111, 12));
    } else {
        IF_SETSCROLLPOS(MAX((IF_GETSCROLLX(comp(1111, 12)) + int0), 0), IF_GETSCROLLY(comp(1111, 12)), comp(1111, 12));
    };
    script5053(0, 0);
    return;
}