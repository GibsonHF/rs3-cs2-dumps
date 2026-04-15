//
function script3173(int0: unknown_int, int1: component, int2: component): void {
    if ((MINIMENUOPEN(int1, -1) == 1)) {
        IF_SETONTIMER(callback(script3172, int0, int1, int2), int0);
        return;
    };
    CC_DELETEALL(int1);
    var string0 = "<col=7fa9ff>";
    var string1 = "<col=ff5256>";
    var int3 = 0;
    var int4 = script1960();
    var int5 = int4;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int9 = -1 as chatphrase;
    var string7 = "";
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = script13749();
    var int14 = -1;
    stack(unk11059(int4));
    [int7, string2, int8, string3, string4, string5, string6, int9, string7, int10, int14] = stack();
    while (((int6 < 100) && (int7 != -1))) {
        string2 = script11298(string2);
        switch (int7) {
            case 43:
            case 26: {
                if ((int14 <= 0)) {
                    [int3, int11] = script3174(int1, int3, `${string2}${string7}`, 0, "", "", int7, int8, int13);
                };
                break;
            }
            case 41:
            case 44: {
                if ((int14 == 0)) {
                    [int3, int11] = script3174(int1, int3, `${string2}[${string0}${string6}</col>] ${string3}: ${string1}${string7}`, 1, string3, string4, int7, int8, int13);
                };
                break;
            }
            case 42: {
                [int3, int11] = script3174(int1, int3, `${string2}[${string0}${string6}</col>] ${string3}: ${string1}${string7}`, 1, string3, string4, int7, int8, int13);
                break;
            }
            case 115: {
                if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int8)) > 0)) {
                    int12 = 1;
                } else {
                    int12 = 0;
                };
                [int3, int11] = script3174(int1, int3, `${string2}<col=FF0000>${string7}</col>`, int12, "", "", int7, int8, int13);
                break;
            }
            case 146: {
                if ((STAFFMODLEVEL() >= 2)) {
                    [int3, int11] = script3174(int1, int3, `${string2}<col=FF0000>${string7}</col>`, 0, "", "", int7, int8, int13);
                };
                break;
            }
        };
        int6 = (int6 + 1);
        stack(unk11059(--int4));
        [int7, string2, int8, string3, string4, string5, string6, int9, string7, int10, int14] = stack();
    };
    varclient_2835 = int5;
    script17127(int1, int2, int11, ((varclient_1124 + IF_GETSCROLLHEIGHT(int1)) - varclient_1125));
    varclient_1124 = IF_GETSCROLLY(int1);
    varclient_1125 = IF_GETSCROLLHEIGHT(int1);
    return;
}