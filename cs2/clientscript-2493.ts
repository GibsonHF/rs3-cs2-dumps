//
function script2493(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(1568, 8));  // xmas2014_cracker_pull:side_1
    IF_SETTEXT(TOSTRING_LOCALISED(int1, 1), comp(1568, 9));  // xmas2014_cracker_pull:side_2
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)}%`, comp(1568, 10));  // xmas2014_cracker_pull:balance
    IF_SETPOSITION((SCALE(IF_GETWIDTH(comp(1568, 6) /*xmas2014_cracker_pull:progress_bar*/), 10000, int3) - 9), 45, 0, 0, comp(1568, 1) /*xmas2014_cracker_pull:sparkler*/);
    if ((int2 < 10)) {
        IF_SETCOLOUR(16711680, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 20)) {
        IF_SETCOLOUR(14883840, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 30)) {
        IF_SETCOLOUR(12990720, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 40)) {
        IF_SETCOLOUR(11162880, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 50)) {
        IF_SETCOLOUR(9335040, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 60)) {
        IF_SETCOLOUR(7441920, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 70)) {
        IF_SETCOLOUR(5614080, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 80)) {
        IF_SETCOLOUR(3786240, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else if ((int2 < 90)) {
        IF_SETCOLOUR(1893120, comp(1568, 10));  // xmas2014_cracker_pull:balance
    } else {
        IF_SETCOLOUR(65280, comp(1568, 10));  // xmas2014_cracker_pull:balance
    };
    return;
}