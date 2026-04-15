//
function script9183(int0: int, int1: int, int2: int, int3: component): int {
    var int4 = script6798(int1);
    var int5 = -1 as struct;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as stat;
    var int9 = 0;
    var string0 = "";
    var int10 = -1 as quest;
    switch (int2) {
        case 0: {
            int6 = struct_getparam(int4, 1294);
            int7 = struct_getparam(int4, 1295);
            break;
        }
        case 1: {
            int6 = struct_getparam(int4, 1296);
            int7 = struct_getparam(int4, 1297);
            break;
        }
        case 2: {
            int6 = struct_getparam(int4, 1298);
            int7 = struct_getparam(int4, 1299);
            break;
        }
        case 3: {
            int6 = struct_getparam(int4, 1300);
            int7 = struct_getparam(int4, 1301);
            break;
        }
        case 4: {
            int6 = struct_getparam(int4, 1302);
            int7 = struct_getparam(int4, 1303);
            break;
        }
        case 5: {
            int6 = struct_getparam(int4, 1304);
            int7 = struct_getparam(int4, 1305);
            break;
        }
        case 6: {
            int6 = struct_getparam(int4, 1306);
            int7 = struct_getparam(int4, 1307);
            break;
        }
        case 7: {
            int6 = struct_getparam(int4, 1308);
            int7 = struct_getparam(int4, 1309);
            break;
        }
        case 8: {
            int6 = struct_getparam(int4, 1310);
            int7 = struct_getparam(int4, 1311);
            break;
        }
        case 9: {
            int6 = struct_getparam(int4, 1312);
            int7 = struct_getparam(int4, 1313);
            break;
        }
        case 10: {
            int6 = struct_getparam(int4, 2227);
            int7 = struct_getparam(int4, 2228);
            break;
        }
        case 11: {
            int6 = struct_getparam(int4, 2229);
            int7 = struct_getparam(int4, 2230);
            break;
        }
    };
    if ((int6 == 0)) {
        return int0;
    };
    if ((int6 < 60)) {
        int8 = enum_getvalue(0, 17, 681 as cs2enum, int6);
        if ((int8 != -1 as stat)) {
            string0 = `Level <col=ffffff>${inttostring(int7, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int6)}</col> required.`;
        };
    } else if ((int6 == 61)) {
        int10 = enum_getvalue(0, 3, 2252 as cs2enum, int7);
        string0 = `You must complete the quest <col=ffffff>'${script2103(int10)}'</col>.`;
    } else if ((int6 == 60)) {
        int5 = script5795(int7);
        if ((int5 == -1 as struct)) {
            return int0;
        };
        string0 = `You must complete the Task <col=ffffff>'${struct_getparam(int5, 1266)}'</col>.`;
    } else {
        string0 = REMOVETAGS(script3223(int1, (int2 + 1)));
    };
    var int11 = 0;
    if ((strcmp(string0, "") != 0)) {
        IF_SETHIDE(false, int3);
        IF_SETTEXT(string0, int3);
        IF_SETTEXTFONT(26 as fontmetrics, int3);
        IF_SETTEXTALIGN(0, 1, 13, int3);
        int11 = (IF_GETWIDTH(IF_GETLAYER(int3)) - 18);
        int9 = (16 * PARAHEIGHT(string0, int11, 26 as fontmetrics));
        IF_SETSIZE(int11, int9, 0, 0, int3);
        IF_SETPOSITION(9, int0, 0, 0, int3);
    } else {
        int9 = 0;
    };
    return (int0 + int9);
}