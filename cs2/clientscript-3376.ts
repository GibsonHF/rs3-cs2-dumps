//
function script3376(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: cs2enum, int7: unknown_int, int8: int, int9: int, int10: unknown_int, int11: unknown_int, int12: boolean, string0: string, string1: string): [int, int] {
    if ((((int6 == -1 as cs2enum) || (int0 == comp(-1, 65535))) || (int1 == comp(-1, 65535)))) {
        return [int3, int5];
    };
    if ((int8 == -1)) {
        var int8 = (ENUM_GETOUTPUTCOUNT(int6) - 1);
        if ((int6 == 13254 as cs2enum)) {
            int8 = (FULLSCREEN_MODECOUNT() - 1);
        };
    };
    if (((int9 == -1) || (int9 > int8))) {
        var int9 = 0;
    };
    var string2 = "";
    if ((STRING_LENGTH(string1) == 0)) {
        switch (int6) {
            case 13254: {
                string2 = script12292(script2693(int9));
                break;
            }
            case 10322:
            case 15425:
            case 15426: {
                string2 = script16005(int6, int9);
                break;
            }
            case 16692: {
                string2 = "Custom presets.";
                break;
            }
            default: {
                if ((enum_hasoutput(26, 15492 as cs2enum, int6) == 1)) {
                    if ((enum_getvalue(0, 73, int6, int9) == -1 as struct)) {
                        string2 = "Select a Path";
                    } else {
                        string2 = script12292(struct_getparam(enum_getvalue(0, 73, int6, int9), 8073));
                    };
                } else {
                    string2 = script12292(enum_getvalue(0, 36, int6, int9));
                };
                break;
            }
        };
    } else {
        string2 = string1;
    };
    var int13 = 0;
    if ((STRING_LENGTH(string2) == 0)) {
        string2 = "Select an element.";
    };
    var int14 = (IF_GETNEXTSUBID(int0) + 3);
    if ((int10 == 0)) {
        IF_CLEAROPS(int1);
        IF_CLEARSCRIPTHOOKS(int1);
        if ((int12 == false)) {
            IF_SETOP(1, "View options", int1);
            IF_SETONOP(callback(script10434, int1, -1, int0, int14, int6, int7, int8, int9, int10, int11), int1);
        };
        script13971(int0, comp(-1, 65535), 28619 as struct, string2, int12);
    } else if ((int10 == 1)) {
        CC_CREATE(int1, 4, int5);
        CC_SETSIZE(int4, 24, 0, 0);
        CC_SETPOSITION(int2, int3, 0, 0);
        CC_CLEAROPS();
        CC_CLEARSCRIPTHOOKS();
        if ((int12 == false)) {
            CC_SETOP(1, "View options");
            CC_SETONOP(callback(script10434, -2147483645, -2147483643, int0, int14, int6, int7, int8, int9, int10, int11));
        };
        script13980(int0, comp(-1, 65535), 28619 as struct, int2, int3, int4, -1, int12, string2);
    };
    return [((int3 + 24) + 4), (int5 + 1)];
}