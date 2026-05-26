//
function script13849(): void {
    IF_SETHIDE(1, 37158923);
    IF_SETHIDE(1, 37158924);
    IF_SETHIDE(1, 37158925);
    var int0 = 0;
    var int1 = 0;
    if ((IF_FIND(93782017) == 1)) {
        int0 = cc_getparam(6837);
        int1 = MIN(cc_getparam(6838), 30);
    };
    var int2 = ((44 * MODULO(int0, 15)) - 7);
    switch ((int0 / 15)) {
        case 0: {
            script13850(0, 1, 1, int2, 0, 0);
            break;
        }
        case 1: {
            script13850(0, 0, 1, 653, int2, 0);
            break;
        }
        case 2: {
            script13850(0, 0, 0, 653, 653, int2);
            break;
        }
        case 3: {
            script13850(0, 0, 0, 653, 653, 653);
            break;
        }
    };
    if ((script6431() == 1)) {
        IF_SETHIDE(1, 37158915);
        IF_SETPOSITION(0, 0, 2, 0, 37158914);
        IF_SETTEXT(`Ribbon Bar - Displays up to ${inttostring(8, 10)} icons.`, 37158920);
    } else {
        IF_SETHIDE(0, 37158915);
        IF_SETPOSITION(0, 0, 1, 0, 37158914);
        script10416(37158916, 37158917, "Use custom ribbon", "", "", varbitclient_42113);
        IF_SETTEXT(`Ribbon Bar - Displays up to ${TOSTRING_LOCALISED(int1, 1)} icons at current size.`, 37158920);
    };
    return;
}