//
function script13849(): void {
    IF_SETHIDE(true, comp(567, 11));
    IF_SETHIDE(true, comp(567, 12));
    IF_SETHIDE(true, comp(567, 13));
    var int0 = 0;
    var int1 = 0;
    if ((IF_FIND(comp(1431, 1)) == 1)) {
        int0 = cc_getparam(6837);
        int1 = MIN(cc_getparam(6838), 30);
    };
    var int2 = ((44 * MODULO(int0, 15)) - 7);
    switch ((int0 / 15)) {
        case 0: {
            script13850(false, true, true, int2, 0, 0);
            break;
        }
        case 1: {
            script13850(false, false, true, 653, int2, 0);
            break;
        }
        case 2: {
            script13850(false, false, false, 653, 653, int2);
            break;
        }
        case 3: {
            script13850(false, false, false, 653, 653, 653);
            break;
        }
    };
    if ((script6431() == true)) {
        IF_SETHIDE(true, comp(567, 3));
        IF_SETPOSITION(0, 0, 2, 0, comp(567, 2));
        IF_SETTEXT(`Ribbon Bar - Displays up to ${inttostring(8, 10)} icons.`, comp(567, 8));
    } else {
        IF_SETHIDE(false, comp(567, 3));
        IF_SETPOSITION(0, 0, 1, 0, comp(567, 2));
        script10416(comp(567, 4), comp(567, 5), "Use custom ribbon", "", "", varbitclient_42113);
        IF_SETTEXT(`Ribbon Bar - Displays up to ${TOSTRING_LOCALISED(int1, 1)} icons at current size.`, comp(567, 8));
    };
    return;
}