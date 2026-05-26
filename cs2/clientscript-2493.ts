//
function script2493(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), 102760456);
    IF_SETTEXT(TOSTRING_LOCALISED(int1, 1), 102760457);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)}%`, 102760458);
    IF_SETPOSITION((SCALE(IF_GETWIDTH(102760454), 10000, int3) - 9), 45, 0, 0, 102760449);
    if ((int2 < 10)) {
        IF_SETCOLOUR(16711680, 102760458);
    } else if ((int2 < 20)) {
        IF_SETCOLOUR(14883840, 102760458);
    } else if ((int2 < 30)) {
        IF_SETCOLOUR(12990720, 102760458);
    } else if ((int2 < 40)) {
        IF_SETCOLOUR(11162880, 102760458);
    } else if ((int2 < 50)) {
        IF_SETCOLOUR(9335040, 102760458);
    } else if ((int2 < 60)) {
        IF_SETCOLOUR(7441920, 102760458);
    } else if ((int2 < 70)) {
        IF_SETCOLOUR(5614080, 102760458);
    } else if ((int2 < 80)) {
        IF_SETCOLOUR(3786240, 102760458);
    } else if ((int2 < 90)) {
        IF_SETCOLOUR(1893120, 102760458);
    } else {
        IF_SETCOLOUR(65280, 102760458);
    };
    return;
}