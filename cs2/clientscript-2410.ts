//
function script2410(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: cursor, int6: cursor, int7: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string): void {
    if ((int7 == 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            CC_SETOP(1, string0);
        };
        if ((STRING_LENGTH(string1) > 0)) {
            CC_SETOP(2, string1);
        };
        if ((STRING_LENGTH(string2) > 0)) {
            CC_SETOP(3, string2);
        };
        if ((STRING_LENGTH(string3) > 0)) {
            CC_SETOP(7, string3);
        };
        if ((STRING_LENGTH(string4) > 0)) {
            CC_SETOP(8, string4);
        };
        return;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        CC_SETOP(1, string0);
        if ((int0 != -1)) {
            CC_SETOPCURSOR(1, int0);
        } else {
            CC_SETOPCURSOR(1, 36);
        };
    };
    if ((STRING_LENGTH(string1) > 0)) {
        CC_SETOP(2, string1);
        if ((int1 != -1)) {
            CC_SETOPCURSOR(2, int1);
        } else {
            CC_SETOPCURSOR(2, 36);
        };
    };
    if ((STRING_LENGTH(string2) > 0)) {
        CC_SETOP(3, string2);
        if ((int2 != -1)) {
            CC_SETOPCURSOR(3, int2);
        } else {
            CC_SETOPCURSOR(3, 36);
        };
    };
    CC_SETTARGETVERB(string5);
    CC_SETTARGETOPCURSOR(int5);
    CC_SETTARGETCURSORS(int5, int6);
    CC_SETOP(10, "Examine");
    if ((STRING_LENGTH(string3) > 0)) {
        CC_SETOP(7, string3);
        if ((int3 != -1)) {
            CC_SETOPCURSOR(7, int3);
        } else {
            CC_SETOPCURSOR(7, 36);
        };
    };
    if ((STRING_LENGTH(string4) > 0)) {
        CC_SETOP(8, string4);
        if ((int4 != -1)) {
            CC_SETOPCURSOR(8, int4);
        } else {
            CC_SETOPCURSOR(8, 36);
        };
    };
    return;
}