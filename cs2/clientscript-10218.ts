//
function script10218(): void {
    if ((unk11079() == 0)) {
        script38();
        return;
    };
    if ((unk11077() == 1016 as npc)) {
        script38();
        return;
    };
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script7(unk11077());
    if ((int0 == -1)) {
        return;
    };
    var int2 = 0;
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    [int3, int2] = unk11078(3);
    if ((varbitplayer_27168 == 1)) {
        if ((int3 > 0)) {
            int3 = MAX(1, (int3 / 10));
        };
        int2 = MAX(1, (int2 / 10));
    };
    switch (unk11077()) {
        case 30823: {
            int3 = varplayer_12531;
            break;
        }
    };
    if (((npc_getparam(unk11077(), 4473) == 1) || (strcmp(inttostring(int3, 10), IF_GETTEXT(comp(1490, 34))) != 0))) {
        if ((npc_getparam(unk11077(), 4473) == 1)) {
            IF_SETTEXT("", comp(1490, 34));
        } else {
            IF_SETTEXT(TOSTRING_LOCALISED(int3, 1), comp(1490, 34));
        };
        int4 = MAX(MIN(SCALE(int3, int2, 100), 100), 0);
        int5 = ((int4 * 16384) / 100);
        IF_SETSIZE(int5, IF_GETHEIGHT(comp(1490, 33)), 2, 0, comp(1490, 24));
    };
    script17671(npc_getparam(unk11077(), 8900), varclient_7158);
    if ((varclient_4168 != varnpc_87)) {
        varclient_4168 = varnpc_87;
        script90();
    };
    script5(int0, int1);
    return;
}