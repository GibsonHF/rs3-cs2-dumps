//
function script7339(int0: cs2enum, int1: int, int2: int, int3: int, int4: unknown_int): [int, int] {
    var int5 = enum_getvalue(0, 73, int0, int1);
    if ((int5 == -1 as struct)) {
        return [0, 0];
    };
    var int6 = (int3 / 100);
    var int7 = 0;
    switch (int4) {
        case 0: {
            if (((varbitplayer_26826 < 3) && (varbitplayer_26826 < (int6 - 1)))) {
                int7 = 1;
            };
            if ((varbitplayer_26826 == int6)) {
                int7 = 2;
            };
            break;
        }
        case 1: {
            if ((varbitplayer_17412 < (int6 - 1))) {
                int7 = 1;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_17414 < (int6 - 1))) {
                int7 = 1;
            };
            break;
        }
        case 5: {
            if ((varbitplayer_26832 < (int6 - 1))) {
                int7 = 1;
            };
            break;
        }
        case 4: {
            if (((varbitplayer_26831 < 3) && (varbitplayer_26831 < (int6 - 1)))) {
                int7 = 1;
            };
            if ((varbitplayer_26831 == int6)) {
                int7 = 2;
            };
            break;
        }
        case 3: {
            if (((varbitplayer_26833 < 3) && (varbitplayer_26833 < (int6 - 1)))) {
                int7 = 1;
            };
            if ((varbitplayer_26833 == int6)) {
                int7 = 2;
            };
            break;
        }
    };
    if ((int7 == 1)) {
        return [int2, int3];
    };
    var int8 = comp(1373, 10);
    CC_CREATE(int8, 4, int2);
    var int2 = (int2 + 1);
    CC_SETPOSITION(200, (int3 + 5), 0, 0);
    CC_SETTEXT(struct_getparam(int5, 3118));
    CC_SETSIZE(200, 20, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(69 as fontmetrics);
    CC_CREATE(int8, 4, int2);
    int2 = (int2 + 1);
    CC_SETPOSITION(10, (int3 + 25), 0, 0);
    CC_SETTEXT(struct_getparam(int5, 3125));
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(67 as fontmetrics);
    CC_SETSIZE(396, 90, 0, 0);
    var int9 = 150;
    var int10 = 205;
    var int11 = 65;
    var int12 = 62;
    var int13 = 76;
    CC_CREATE(int8, 5, int2);
    CC_SETPOSITION(int9, (int3 + int12), 0, 0);
    CC_SETSIZE(34, 34, 0, 0);
    var int14 = -1 as graphic;
    switch (struct_getparam(int5, 3132)) {
        case 0: {
            CC_DELETE();
            return [int2, int3];
        }
        case 2: {
            int14 = 15674 as graphic;
            break;
        }
        case 3: {
            int14 = 15677 as graphic;
            break;
        }
        case 4: {
            int14 = 15675 as graphic;
            break;
        }
        case 5: {
            int14 = 15678 as graphic;
            break;
        }
        case 7: {
            int14 = 15676 as graphic;
            break;
        }
        case 6: {
            int14 = 15679 as graphic;
            break;
        }
        case 8: {
            int14 = 21916 as graphic;
            break;
        }
        case 9: {
            int14 = 21917 as graphic;
            break;
        }
    };
    int2 = (int2 + 1);
    CC_SETGRAPHIC(int14);
    CC_CREATE(int8, 4, int2);
    int2 = (int2 + 1);
    CC_SETTEXT(inttostring(struct_getparam(int5, 3133), 10));
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETSIZE(50, 20, 0, 0);
    CC_SETPOSITION(int10, (int3 + int13), 0, 0);
    if ((struct_getparam(int5, 3135) == 0)) {
        return [int2, int3];
    };
    CC_CREATE(int8, 5, int2);
    int2 = (int2 + 1);
    switch (struct_getparam(int5, 3134)) {
        case 2: {
            int14 = 15674 as graphic;
            break;
        }
        case 3: {
            int14 = 15677 as graphic;
            break;
        }
        case 4: {
            int14 = 15675 as graphic;
            break;
        }
        case 5: {
            int14 = 15678 as graphic;
            break;
        }
        case 7: {
            int14 = 15676 as graphic;
            break;
        }
        case 6: {
            int14 = 15679 as graphic;
            break;
        }
        case 8: {
            int14 = 21916 as graphic;
            break;
        }
        case 9: {
            int14 = 21917 as graphic;
            break;
        }
    };
    CC_SETGRAPHIC(int14);
    CC_SETPOSITION((int9 + int11), (int3 + int12), 0, 0);
    CC_SETSIZE(34, 34, 0, 0);
    CC_CREATE(int8, 4, int2);
    int2 = (int2 + 1);
    CC_SETTEXT(inttostring(struct_getparam(int5, 3135), 10));
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETSIZE(50, 20, 0, 0);
    CC_SETPOSITION((int10 + int11), (int3 + int13), 0, 0);
    return [int2, (int3 + 100)];
}