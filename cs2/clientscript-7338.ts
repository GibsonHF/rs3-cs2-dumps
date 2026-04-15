//
function script7338(int0: cs2enum, int1: int, int2: int, int3: int, int4: unknown_int): [int, int] {
    var int5 = enum_getvalue(0, 73, int0, int1);
    var int6 = comp(1373, 10);
    if ((int5 == -1 as struct)) {
        return [0, 0];
    };
    var int7 = (int3 / 100);
    var int8 = 0;
    switch (int4) {
        case 0: {
            if (((varbitplayer_26826 < 3) && (varbitplayer_26826 < (int7 - 1)))) {
                int8 = 1;
            };
            if (((varbitplayer_26825 > int7) && (int7 < 4))) {
                int8 = 3;
            };
            if ((varbitplayer_26825 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 1: {
            if ((varbitplayer_17412 < (int7 - 1))) {
                int8 = 1;
            };
            if ((varbitplayer_17398 == int7)) {
                int8 = 2;
            };
            if ((varbitplayer_17398 > int7)) {
                int8 = 3;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_17414 < (int7 - 1))) {
                int8 = 1;
            };
            if ((varbitplayer_17399 == int7)) {
                int8 = 2;
            };
            if ((varbitplayer_17399 > int7)) {
                int8 = 3;
            };
            break;
        }
        case 5: {
            if ((varbitplayer_26832 < (int7 - 1))) {
                int8 = 1;
            };
            if ((varbitplayer_26829 == int7)) {
                int8 = 2;
            };
            if ((varbitplayer_26829 > int7)) {
                int8 = 3;
            };
            break;
        }
        case 4: {
            if (((varbitplayer_26831 < 3) && (varbitplayer_26831 < (int7 - 1)))) {
                int8 = 1;
            };
            if ((varbitplayer_26828 == int7)) {
                int8 = 2;
            };
            if (((varbitplayer_26828 > int7) && (int7 < 3))) {
                int8 = 3;
            };
            break;
        }
        case 3: {
            if (((varbitplayer_26833 < 3) && (varbitplayer_26833 < (int7 - 1)))) {
                int8 = 1;
            };
            if ((varbitplayer_26830 == int7)) {
                int8 = 2;
            };
            if (((varbitplayer_26830 > int7) && (int7 < 3))) {
                int8 = 3;
            };
            break;
        }
        case 13: {
            if ((varbitplayer_17401 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 10: {
            if ((varbitplayer_21336 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 11: {
            if ((varbitplayer_21337 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 12: {
            if ((varbitplayer_21338 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 6: {
            if ((varbitplayer_17405 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 7: {
            if ((varbitplayer_17406 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 8: {
            if ((varbitplayer_17407 == int7)) {
                int8 = 2;
            };
            break;
        }
        case 9: {
            if ((varbitplayer_17408 == int7)) {
                int8 = 2;
            };
            break;
        }
    };
    if ((int8 == 1)) {
        return [int2, int3];
    };
    CC_CREATE(int6, 5, int2);
    var int2 = (int2 + 1);
    if ((int8 == 2)) {
        CC_SETGRAPHIC(13165 as graphic);
    } else if ((int8 == 3)) {
        CC_SETGRAPHIC(15597 as graphic);
    } else {
        CC_SETGRAPHIC(15594 as graphic);
    };
    if ((int8 == 0)) {
        CC_SETONMOUSEOVER(callback(script7284, 0, 1, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script7284, 0, 0, -2147483645, -2147483643));
    };
    CC_SETPOSITION(4, int3, 0, 0);
    CC_SETSIZE(438, 96, 0, 0);
    if ((int8 == 0)) {
        CC_SETOP(1, "Upgrade to");
    };
    var string0 = struct_getparam(int5, 3118);
    CC_SETOPBASE(strconcat("<col=ffcc00>", string0));
    return [int2, (int3 + 100)];
}