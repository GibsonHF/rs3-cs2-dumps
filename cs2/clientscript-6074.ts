//
function script6074(int0: int): void {
    var int1 = varplayer_302;
    var int2 = 2147483647;
    var int3 = -1 as obj;
    var int4 = 0;
    if (((varplayer_299 != -1 as inv) && (varplayer_301 != -1))) {
        int3 = INV_GETOBJ(varplayer_299, varplayer_301);
        if ((varplayer_299 == 93 as inv)) {
            int2 = 500;
            int4 = script6077(varplayer_306, int3, varplayer_304);
        } else {
            int4 = script2720(int3);
        };
        if (((varplayer_304 == 600 as inv) && (int3 == 1391 as obj))) {
            int2 = script2002();
        } else if ((int3 != -1 as obj)) {
            int2 = MIN(int2, INV_TOTAL(varplayer_299, int3));
            if (((OC_STACKABLE(int3) == 0) && (varplayer_299 != 93 as inv))) {
                int2 = MIN(int2, INV_FREESPACE(93 as inv));
            };
        } else {
            int2 = 1;
        };
    };
    if ((int4 > 0)) {
        int2 = MIN(int2, (2147483647 / int4));
    };
    if ((int0 > 0)) {
        if ((int0 > int2)) {
            int1 = int2;
            IF_SETTEXT(script940(int1), comp(1265, 67));
            return;
        };
        if (((2147483647 - int1) < int0)) {
            int1 = int2;
            IF_SETTEXT(script940(int1), comp(1265, 67));
            return;
        };
        int1 = MIN((int1 + int0), int2);
    } else {
        int1 = MIN(int2, MAX(1, (int1 + int0)));
    };
    IF_SETTEXT(script940(int1), comp(1265, 67));
    return;
}