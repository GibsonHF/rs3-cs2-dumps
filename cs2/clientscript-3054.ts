//
function script3054(int0: unknown_int, int1: component, int2: component): void {
    if ((MINIMENUOPEN(int1, -1) == 1)) {
        IF_SETONTIMER(callback(script3053, int0, int1, int2), int0);
        return;
    };
    CC_DELETEALL(int1);
    var string0 = "<col=ff5256>";
    var int3 = 0;
    var int4 = script1960();
    var int5 = int4;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int9 = -1 as chatphrase;
    var string6 = "";
    var int10 = -1;
    var int11 = -1;
    stack(unk11059(int4));
    [int7, string1, int8, string2, string3, string4, string5, int9, string6, int10, int11] = stack();
    var int12 = 1;
    var int13 = 0;
    var int14 = 0;
    var int15 = script13749();
    while (((int6 < 100) && (int7 != -1))) {
        string1 = script11298(string1);
        switch (int7) {
            case 0:
            case 4:
            case 27:
            case 28:
            case 29:
            case 26:
            case 30:
            case 31: {
                [int3, int14] = script3055(int1, int3, `${string1}${string6}`, 0, "", "", int7, int8, int15);
                break;
            }
            case 3: {
                [int3, int14] = script3055(int1, int3, `${string1}From ${string2}: ${string0}${string6}`, 1, string2, string3, int7, int8, int15);
                if ((int12 == 1)) {
                    stack(REMOVETAGS(string3));
                    stack(0);
                    [varclient_2505, int12] = stack();
                };
                break;
            }
            case 5: {
                if ((varbitplayer_24940 == 0)) {
                    [int3, int14] = script3055(int1, int3, `${string1}${string0}${string6}`, 0, string2, string3, int7, int8, int15);
                };
                break;
            }
            case 6: {
                [int3, int14] = script3055(int1, int3, `${string1}To ${string2}: ${string0}${string6}`, 1, string2, string3, int7, int8, int15);
                if ((int12 == 1)) {
                    stack(REMOVETAGS(string3));
                    stack(0);
                    [varclient_2505, int12] = stack();
                };
                break;
            }
            case 7: {
                [int3, int14] = script3055(int1, int3, `${string1}From ${string2}: ${string0}${string6}`, 1, string2, string3, int7, int8, int15);
                if ((int12 == 1)) {
                    stack(REMOVETAGS(string3));
                    stack(0);
                    [varclient_2505, int12] = stack();
                };
                break;
            }
            case 18: {
                [int3, int14] = script3055(int1, int3, `${string1}From ${string2}: ${string0}${string6}`, 1, string2, string3, int7, int8, int15);
                if ((int12 == 1)) {
                    stack(REMOVETAGS(string3));
                    stack(0);
                    [varclient_2505, int12] = stack();
                };
                break;
            }
            case 19: {
                [int3, int14] = script3055(int1, int3, `${string1}To ${string2}: ${string0}${string6}`, 1, string2, string3, int7, int8, int15);
                if ((int12 == 1)) {
                    stack(REMOVETAGS(string3));
                    stack(0);
                    [varclient_2505, int12] = stack();
                };
                break;
            }
            case 115: {
                if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int8)) > 0)) {
                    int13 = 1;
                } else {
                    int13 = 0;
                };
                [int3, int14] = script3055(int1, int3, `${string1}<col=FF0000>${string6}</col>`, int13, "", "", int7, int8, int15);
                break;
            }
            case 146: {
                if ((STAFFMODLEVEL() >= 2)) {
                    [int3, int14] = script3055(int1, int3, `${string1}<col=FF0000>${string6}</col>`, 0, "", "", int7, int8, int15);
                };
                break;
            }
        };
        int6 = (int6 + 1);
        stack(unk11059(--int4));
        [int7, string1, int8, string2, string3, string4, string5, int9, string6, int10, int11] = stack();
    };
    varclient_2835 = int5;
    script17127(int1, int2, int14, ((varclient_1122 + IF_GETSCROLLHEIGHT(int1)) - varclient_1123));
    varclient_1122 = IF_GETSCROLLY(int1);
    varclient_1123 = IF_GETSCROLLHEIGHT(int1);
    return;
}