//
function script15783(): void {
    if ((varplayer_9774 == false)) {
        return;
    };
    if ((script15532(0) == 0)) {
        return;
    };
    script3123();
    var int0 = -1 as dbrow;
    var int1 = false;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    switch (script15536()) {
        case 6: {
            [int0, int1, int2, int3, int4] = script15780();
            break;
        }
        case 7: {
            [int0, int1, int2, int3, int4] = script15787();
            break;
        }
        default: {
            script12478(`Unhandled ~tut_is=${inttostring(varbitplayer_49045, 10)}.`);
            return;
        }
    };
    var int5 = -1 as cs2enum;
    var int6 = -1 as struct;
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((script6431() == true)) {
        if ((int0 != -1 as dbrow)) {
            int5 = dbrow_getfield(int0, 507920, 0);
        };
        IF_SETHIDE(true, comp(279, 6));
        IF_SETHIDE(true, comp(1477, 420));
        IF_SETHIDE(true, comp(279, 3));
        IF_SETHIDE(true, comp(274, 69));
        IF_SETHIDE(true, comp(279, 10));
        IF_SETHIDE(true, comp(279, 15));
        IF_SETHIDE(true, comp(279, 16));
        IF_SETHIDE(true, comp(279, 21));
        if ((varbitclient_44897 == 1)) {
            IF_SETHIDE(true, comp(1477, 385));
        } else {
            IF_SETHIDE(script6430(int1), comp(1477, 385));
        };
        [int8, int9, int10, int11] = script2956();
        if ((int2 == 1)) {
            IF_SETHIDE(true, comp(279, 1));
            IF_SETHIDE(false, comp(276, 4));
            IF_SETPOSITION(int8, 0, 0, 0, comp(276, 5));
        } else {
            IF_SETHIDE(true, comp(279, 1));
            IF_SETHIDE(true, comp(276, 4));
        };
        IF_SETHIDE(true, comp(1376, 9));
        IF_SETHIDE(true, comp(1923, 0));
        if ((int3 == 1)) {
            IF_SETHIDE(false, comp(1376, 1));
            IF_SETHIDE(false, comp(1376, 7));
            IF_SETHIDE(false, comp(1376, 20));
        } else {
            IF_SETHIDE(true, comp(1376, 1));
            IF_SETHIDE(true, comp(1376, 7));
            IF_SETHIDE(true, comp(1376, 20));
        };
        if ((int4 == 1)) {
            IF_SETHIDE(false, comp(1376, 10));
        } else {
            IF_SETHIDE(true, comp(1376, 10));
        };
    } else {
        if ((int0 != -1 as dbrow)) {
            int5 = dbrow_getfield(int0, 507936, 0);
        };
        if ((varclient_2872 != 15457 as cs2enum)) {
            script8836(15457 as cs2enum);
        };
        IF_SETHIDE(true, comp(1465, 10));
        IF_SETHIDE(true, comp(1465, 27));
        IF_SETHIDE(true, comp(1465, 25));
        IF_SETHIDE(true, comp(1319, 10));
        IF_SETHIDE(true, comp(1319, 9));
        if ((script9932(1003) == 1)) {
            int6 = script10405(1003);
        };
        if ((int6 != -1 as struct)) {
            int7 = struct_getparam(int6, 3503);
            if ((int7 != comp(-1, 65535))) {
                IF_SETHIDE(true, int7);
            };
        };
        if ((int4 == 1)) {
            IF_SETHIDE(false, comp(1465, 33));
        } else {
            IF_SETHIDE(true, comp(1465, 33));
        };
    };
    if (((int5 != -1 as cs2enum) && (varplayer_9773 != int0))) {
        varplayer_9773 = int0;
        script15373(int5);
    };
    return;
}