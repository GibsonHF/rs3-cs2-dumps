//
function script6039(int0: stat, int1: component, int2: component, int3: unknown_int): void {
    var int4 = enum_getvalue(17, 0, 1482 as cs2enum, int0);
    var string0 = enum_getvalue(17, 36, 680 as cs2enum, int0);
    var string1 = "";
    var int5 = script6035(int0, varclient_1798, varclient_1799, 0);
    var int6 = 3495 as cs2enum;
    if ((int5 == 1)) {
        int6 = 371 as cs2enum;
    };
    CC_DELETEALL(int1);
    var int7 = 21363 as struct;
    var int8 = 28303 as struct;
    var int9 = 29006;
    if ((((item_getparam(varclient_1799, 4629) == 1) || (item_getparam(varclient_1799, 4628) == 1)) && (script9121(int0) == 1))) {
        int7 = 29354 as struct;
        int8 = 29356 as struct;
        int9 = 29355;
    };
    if ((item_getparam(varclient_1799, 7953) == 1)) {
        if ((script473(int0, 5, 1) == 1)) {
            int7 = 29354 as struct;
            int8 = 29356 as struct;
            int9 = 29355;
        };
    } else if ((item_getparam(varclient_1799, 7954) == 1)) {
        if ((script473(int0, 5, 2) == 1)) {
            int7 = 29354 as struct;
            int8 = 29356 as struct;
            int9 = 29355;
        };
    } else if ((varclient_1799 == 43364 as obj)) {
        if ((varbitplayer_41402 == int4)) {
            int7 = 29354 as struct;
            int8 = 29356 as struct;
            int9 = 29355;
            string1 = "<br><col=EECC00>Highly sought after</col>";
        };
    } else if ((varclient_1799 == 54603 as obj)) {
        if ((script17262(int4) == 0)) {
            int7 = 29354 as struct;
            int8 = 29356 as struct;
            int9 = 29355;
        };
    } else if ((script11747(29980 as struct) == 1)) {
        switch (DATE_RUNEDAY()) {
            case 4000: {
                if (((item_getparam(varclient_1799, 2400) == 1) || (OC_CATEGORY(varclient_1799) == 3074 as category))) {
                    switch (int0) {
                        case 7:
                        case 22:
                        case 12:
                        case 11:
                        case 9:
                        case 15:
                        case 20:
                        case 13: {
                            int7 = 29354 as struct;
                            int8 = 29356 as struct;
                            int9 = 29355;
                            break;
                        }
                    };
                };
                break;
            }
            case 4001: {
                if (((item_getparam(varclient_1799, 2400) == 1) || (OC_CATEGORY(varclient_1799) == 3074 as category))) {
                    switch (int0) {
                        case 0:
                        case 3:
                        case 1:
                        case 6:
                        case 5:
                        case 4:
                        case 2:
                        case 23: {
                            int7 = 29354 as struct;
                            int8 = 29356 as struct;
                            int9 = 29355;
                            break;
                        }
                    };
                };
                break;
            }
            case 4002: {
                if (((item_getparam(varclient_1799, 2400) == 1) || (OC_CATEGORY(varclient_1799) == 3074 as category))) {
                    switch (int0) {
                        case 25:
                        case 19:
                        case 10:
                        case 21:
                        case 14:
                        case 8: {
                            int7 = 29354 as struct;
                            int8 = 29356 as struct;
                            int9 = 29355;
                            break;
                        }
                    };
                };
                break;
            }
            case 4003: {
                if (((item_getparam(varclient_1799, 2400) == 1) || (OC_CATEGORY(varclient_1799) == 3074 as category))) {
                    switch (int0) {
                        case 16:
                        case 24:
                        case 18:
                        case 17: {
                            int7 = 29354 as struct;
                            int8 = 29356 as struct;
                            int9 = 29355;
                            break;
                        }
                    };
                };
                break;
            }
            case 4004:
            case 5690: {
                break;
            }
        };
    };
    if ((int4 == varclient_1796)) {
        script7794(int2, int8);
        IF_SETONMOUSEOVER(callback(), int2);
        IF_SETONMOUSELEAVE(callback(), int2);
    } else {
        script7794(int2, int7);
        if ((int5 == 1)) {
            IF_SETONMOUSEOVER(callback(script7793, -2147483645, int9), int2);
            IF_SETONMOUSELEAVE(callback(script7793, -2147483645, int7), int2);
        } else {
            IF_SETONMOUSEOVER(callback(), int2);
            IF_SETONMOUSELEAVE(callback(), int2);
        };
    };
    var int10 = 0;
    CC_CREATE(int1, 5, int10);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, int6, int4));
    if ((int5 == 0)) {
        string0 = `${string0} - Unavailable`;
        CC_SETTRANS(150);
    } else if ((((varclient_1799 == 32307 as obj) || (varclient_1799 == 43364 as obj)) || (varclient_1799 == 55178 as obj))) {
        string0 = `${string0} - ${TOSTRING_LOCALISED((script11151(int0) / 10), 1)} Bonus XP${string1}`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    IF_SETOP(1, "Choose", int1);
    IF_SETOPBASE(enum_getvalue(17, 36, 680, int0), int1);
    IF_SETONOP(callback(script6040, int0, int4, int1, int3), int1);
    return;
}