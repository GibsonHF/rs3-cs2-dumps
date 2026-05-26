//
function script5050(int0: number, int1: number, int2: number): void {
    var int0 = (int0 * int1);
    if ((int2 == 1)) {
        IF_SETSCROLLPOS(IF_GETSCROLLX(72810508), MAX((IF_GETSCROLLY(72810508) + int0), 0), 72810508);
    } else {
        IF_SETSCROLLPOS(MAX((IF_GETSCROLLX(72810508) + int0), 0), IF_GETSCROLLY(72810508), 72810508);
    };
    script5053(0, 0);
    return;
}