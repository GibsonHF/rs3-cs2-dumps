//
function script343(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component): void {
    if ((int10 == comp(-1, 65535))) {
        var int10 = script8101();
    };
    var int11 = -1 as maparea;
    if ((varclient_622 != -1 as coordgrid)) {
        int11 = WORLDMAP_GETMAP(varclient_622);
        if ((int11 == -1 as maparea)) {
            int11 = 28 as maparea;
        };
    };
    int11 = script2785(int11);
    IF_SETNOCLICKTHROUGH(0, struct_getparam(enum_getvalue(0, 73, 7716 as cs2enum, 1000), 3503));
    if ((WORLDMAP_COORDINMAP(varclient_622, int11) == 1)) {
        WORLDMAP_SETMAP_COORD_OVERRIDE(int11, varclient_622);
    } else {
        WORLDMAP_SETMAP(int11);
    };
    script10420(93192192, 96796709);
    script1372(WORLDMAP_GETCONFIGZOOM(int11), 1);
    script291(0, int7, int8, int9, int5, int6);
    if ((varbitclient_21368 == 1)) {
        script1374(0);
    } else {
        script1374(1);
    };
    if ((varbitclient_21369 == 1)) {
        script1376(0, int6, int10);
    } else {
        script1376(1, int6, int10);
    };
    script341(comp(1422, 48), varbitclient_21370);
    IF_SETONRESIZE(callback(script10088, -2147483645), comp(1422, 48));
    script341(93192252, varbitclient_23021);
    IF_SETONRESIZE(callback(script10089, -2147483645), 93192252);
    script9639();
    script285(int1);
    script1839(varbitplayer_14108, int2, int3, int4);
    IF_SETONVARCTRANSMIT(callback(script342, int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, 622, 1), int0);
    IF_SETONVARTRANSMIT(callback(script1404, int1, int2, int3, int4, int6, int0, varbitplayer_14110, 2805, 2807, 2), int0);
    varclient_3703 = -1;
    script8841(31, 1);
    varclient_2545 = "";
    IF_SETOP(1, "Search", int5);
    IF_SETONOP(callback(script1766), int5);
    var string0 = "Search";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
    var int12 = 0;
    var int13 = 0;
    var int14 = varclient_622;
    if ((((varbitplayer_3617 == 1) && (int11 == 28 as maparea)) && (MAP_MEMBERS() == 1))) {
        int14 = pos(0,45,54,52,38);
    };
    if ((int14 != -1 as coordgrid)) {
        [int12, int13] = WORLDMAP_GETDISPLAYCOORD(int14);
        if (((int12 < 0) || (int13 < 0))) {
            int14 = MOVECOORD(pos(0,0,0,0,0), COORDX(int14), script686((COORDY(int14) - 1), 4), COORDZ(int14));
            [int12, int13] = WORLDMAP_GETDISPLAYCOORD(int14);
            if (((int12 < 0) || (int13 < 0))) {
                int14 = MOVECOORD(pos(0,0,0,0,0), COORDX(int14), script686((COORDY(int14) - 1), 4), COORDZ(int14));
                [int12, int13] = WORLDMAP_GETDISPLAYCOORD(int14);
                if (((int12 < 0) || (int13 < 0))) {
                    return;
                };
            };
        };
        IF_SETONTIMER(callback(script2054, (CLIENTCLOCK() + 4), int0, int14), int0);
    };
    return;
}