//
function script15083(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, string0: string, string1: string, string2: string, string3: string): void {
    if ((int9 == 45727)) {
        IF_SETPOSITION(int1, int2, 0, 0, 56033289);
        IF_SETSIZE(int3, int4, 0, 0, 56033289);
        return;
    };
    var int14 = 11709 as graphic;
    var int15 = 11704 as graphic;
    var int16 = 14147 as graphic;
    var int17 = 247;
    var int18 = 281;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 10;
    var int26 = 1314;
    var int27 = 54;
    var int28 = 0;
    var int29 = 0;
    switch (int5) {
        case 2: {
            int25 = (int25 + 42);
            break;
        }
        case 4: {
            int14 = 11719 as graphic;
            break;
        }
        case 7: {
            int14 = 11707 as graphic;
            int15 = 11703 as graphic;
            int16 = 14146 as graphic;
            var int4 = 205;
            int17 = 251;
            int18 = 149;
            int19 = -2;
            int20 = 1;
            int25 = (int2 - 5);
            int26 = 15545;
            int27 = 20;
            break;
        }
        case 6: {
            int14 = 11711 as graphic;
            int15 = 11703 as graphic;
            int16 = 14146 as graphic;
            int4 = 205;
            int17 = 251;
            int18 = 149;
            int19 = -2;
            int20 = 1;
            int25 = (int2 - 5);
            int26 = 15545;
            int27 = 20;
            var int8 = 72;
            break;
        }
    };
    script15938(int0, int6, int21++, int1, int2, 0, 0, int3, int4, 0, 0);
    CC_SETOP(1, string0);
    CC_SETOPCURSOR(1, 46);
    switch (int5) {
        case 1: {
            CC_SETONOP(callback());
            break;
        }
        case 2: {
            CC_SETONOP(callback());
            CC_SETNOCLICKTHROUGH(1);
            break;
        }
        case 5:
        case 7: {
            CC_SETONCLICK(callback(script15823, int6, int11, struct_getparam(int9, 4851)));
            break;
        }
        case 4: {
            CC_SETONOP(callback());
            CC_SETOPCURSOR(1, -1);
            break;
        }
        case 6: {
            if ((struct_getparam(int9, 9312) == true)) {
                [int29, int28] = script20060(int9);
                var string3 = `${inttostring(int29, 10)}h ${inttostring(int28, 10)}m*`;
                CC_SETONCLICK(callback(script15823, int6, int11, struct_getparam(int9, 4851)));
            } else {
                string3 = "Unavailable";
                CC_SETONOP(callback());
                CC_SETOPCURSOR(1, -1);
            };
            break;
        }
    };
    if ((int9 == 45727)) {
        IF_SETHIDE(0, 56033290);
        IF_SETPOSITION(int1, int2, 0, 0, 56033290);
        IF_SETSIZE(int3, int4, 0, 0, 56033290);
        return;
    };
    script7918(int6, int21++, 0, 0, 0, 0, 0, 0, 1, 1, int16);
    script7918(int6, int21++, 0, 0, 0, 0, 0, 0, 1, 1, int7);
    script7918(int6, int21++, 0, 0, 0, 0, 0, 0, 1, 1, int14);
    script7918(int6, int21++, int19, int20, 1, 2, int17, int18, 0, 0, int15);
    if ((STRING_LENGTH(string2) > 0)) {
        int23 = script15891(string2, (int3 - 30), 55, 0);
        int24 = script15891(string1, (int3 - 20), 58, 0);
        script10485(int6, int21++, 15, 40, 0, 2, 30, int23, 1, 0, 4699, string2);
        script10485(int6, int21++, 10, (45 + int23), 0, 2, 20, int24, 1, 0, int26, string1);
    } else {
        script10485(int6, int21++, 10, 40, 0, 2, 20, int27, 1, 0, int26, string1);
    };
    if ((STRING_LENGTH(string3) > 0)) {
        int22 = ((78 + 32) + script15084(string3, int3, 58));
        script15938(int0, int6, int21++, (((int1 + 255) - int22) + 22), int25, 0, 0, int22, 64, 0, 0);
        script7918(int6, int21++, 0, 0, 2, 0, 32, 0, 0, 1, struct_getparam(int8, 4740));
        script7918(int6, int21++, 0, 0, 0, 0, 78, 0, 0, 1, struct_getparam(int8, 4738));
        script7918(int6, int21++, 78, 0, 0, 0, (78 + 32), 0, 1, 1, struct_getparam(int8, 4739));
        script10485(int6, int21++, 20, 3, 2, 0, 60, 43, 1, 0, 4700, string3);
    };
    var int30 = 0;
    var int31 = 0;
    var string4 = "";
    if ((int11 >= 0)) {
        [int30, string4] = script3917(int9, int10, int11, int12);
        if ((int30 == 1)) {
            int31 = (0 - (STRINGWIDTH(`   ${inttostring(int12, 10)}`, 58) / 2));
        };
        if ((int10 == 1)) {
            script20483(int0, int6, int21++, int6, 0, 0, 60, 1, 2, (255 - 80), 25, 0, 0, 17466, string4, -1, 1, 1);
        } else if ((int13 == 0)) {
            script7920(int0, int6, int21++, int6, 0, (int31 - 14), 6, 1, 2, 25, 25, 0, 0, 14158);
            script10507(int0, int6, int21++, int6, 0, ((255 / 2) + int31), 8, 0, 2, (255 / 2), 25, 0, 0, 17466, string4);
        } else if ((int11 > 0)) {
            script7920(int0, int6, int21++, int6, 0, (int31 - 16), 6, 1, 2, 30, 30, 0, 0, 22168);
            script10507(int0, int6, int21++, int6, 0, ((255 / 2) + int31), 10, 0, 2, (255 / 2), 25, 0, 0, 17466, string4);
        };
    } else {
        string4 = script20063(int9);
        if ((STRING_LENGTH(string4) > 0)) {
            script20483(int0, int6, int21++, int6, 0, 0, 10, 1, 2, (255 - 80), 25, 0, 0, 17466, string4, -1, 1, 1);
        };
    };
    return;
}