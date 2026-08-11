//
function script12965(): void {
    var int0 = IF_GETSCROLLY(comp(517, 168));  // bank:tabs_dynamic
    var int1 = (IF_GETSCROLLHEIGHT(comp(517, 168)) - IF_GETHEIGHT(comp(517, 168)));  // bank:tabs_dynamic
    var int2 = MIN(int1, (((int0 / 48) + 1) * 48));
    IF_SETSCROLLPOS(0, MIN((int0 + 4), int1), comp(517, 168));  // bank:tabs_dynamic
    IF_SETSCROLLPOS(0, MIN((int0 + 4), int1), comp(517, 171));  // bank:tabs_spacers
    IF_SETONTIMER(callback(script13267, int2), comp(517, 158));  // bank:tabs
    return;
}