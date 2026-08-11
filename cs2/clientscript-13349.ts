//
function script13349(int0: number): void {
    var int1 = IF_GETSCROLLY(comp(517, 168));  // bank:tabs_dynamic
    if ((int1 > int0)) {
        IF_SETSCROLLPOS(0, MAX((int1 - 4), int0), comp(517, 168));  // bank:tabs_dynamic
        IF_SETSCROLLPOS(0, MAX((int1 - 4), int0), comp(517, 171));  // bank:tabs_spacers
    } else if ((int1 < int0)) {
        IF_SETSCROLLPOS(0, MIN((int1 + 4), int0), comp(517, 168));  // bank:tabs_dynamic
        IF_SETSCROLLPOS(0, MIN((int1 + 4), int0), comp(517, 171));  // bank:tabs_spacers
    } else {
        IF_SETONTIMER(callback(), comp(517, 158));  // bank:tabs
        script10503();
    };
    return;
}