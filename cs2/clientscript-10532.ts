//
function script10532(): void {
    var int0 = IF_GETSCROLLY(comp(517, 168));  // bank:tabs_dynamic
    var int1 = MAX(0, (((int0 / 48) - 1) * 48));
    IF_SETSCROLLPOS(0, MAX((int0 - 4), 0), comp(517, 168));  // bank:tabs_dynamic
    IF_SETSCROLLPOS(0, MAX((int0 - 4), 0), comp(517, 171));  // bank:tabs_spacers
    IF_SETONTIMER(callback(script13267, int1), comp(517, 158));  // bank:tabs
    return;
}