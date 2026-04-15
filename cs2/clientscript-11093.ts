//
function script11093(int0: int): void {
    var int1 = script11284(varplayer_5148);
    var int2 = script11285(varplayer_5148);
    var int3 = 4;
    var int4 = MAX(script14(int0), (3 * 4));
    var int5 = comp(-1, 65535);
    if ((script6431() == true)) {
        int3 = 2;
        int4 = MAX(script14(int0), (2 * 4));
    };
    if (((script6431() == true) && (int4 <= (4 * 2)))) {
        IF_SETHIDE(true, comp(1594, 35));
    } else {
        [int1, int2] = script23(int4, int1, int2);
        int5 = enum_getvalue(0, 9, 1481 as cs2enum, MAX(1, int0));
        if (((int2 > int3) || (IF_GETHEIGHT(int5) < (int2 * (113 + 6))))) {
            IF_SETHIDE(false, comp(1594, 35));
            script582(comp(1594, 35), int5, script24(int1, script14(int0)));
        } else {
            script15544(comp(1594, 35), int5);
        };
    };
    script13972(comp(1594, 0), comp(-1, 65535), 28595 as struct, struct_getparam(varplayer_5148, 4845), script9670(1, int0));
    script13972(comp(1594, 1), comp(-1, 65535), 28595 as struct, struct_getparam(varplayer_5148, 4846), script9670(2, int0));
    script13972(comp(1594, 2), comp(-1, 65535), 28595 as struct, struct_getparam(varplayer_5148, 4847), script9670(3, int0));
    script13972(comp(1594, 3), comp(-1, 65535), 28595 as struct, struct_getparam(varplayer_5148, 4848), script9670(4, int0));
    script13972(comp(1594, 4), comp(-1, 65535), 28595 as struct, struct_getparam(varplayer_5148, 7401), script9670(5, int0));
    IF_SETHIDE(true, comp(1594, 24));
    IF_SETHIDE(true, comp(1594, 25));
    IF_SETHIDE(true, comp(1594, 26));
    IF_SETHIDE(true, comp(1594, 27));
    IF_SETHIDE(true, comp(1594, 28));
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1594, 24));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1594, 25));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1594, 26));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1594, 27));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1594, 28));
            break;
        }
    };
    return;
}