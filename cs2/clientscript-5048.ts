//
function script5048(): void {
    var int0 = (varclient_1396 * ((112 + 2) + 2));
    var int1 = 0;
    while ((int1 < 200)) {
        if ((CC_FIND(comp(1111, 15), int1) == 1)) {
            CC_SETSIZE(((varclient_1396 * cc_getparam(1476)) - 1), ((varclient_1396 * cc_getparam(1477)) - 1), 0, 0);
            CC_SETPOSITION(((cc_getparam(1474) + 2) * varclient_1396), (int0 - ((((cc_getparam(1475) + 2) * varclient_1396) + 1) + CC_GETHEIGHT())), 0, 0);
        };
        int1 = (int1 + 1);
    };
    IF_SETPOSITION(SCALE(MAX((varclient_1396 - 3), 0), MAX((21 - 3), 1), (IF_GETWIDTH(IF_GETLAYER(comp(1111, 48))) - IF_GETWIDTH(comp(1111, 48)))), 0, 0, 1, comp(1111, 48));
    return;
}