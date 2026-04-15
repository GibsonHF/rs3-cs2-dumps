//
function script8126(int0: component, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: int, int6: unknown_int, int7: unknown_int): void {
    var int1 = MAX(0, int1);
    var int2 = MAX(1, int2);
    var string0 = "";
    var string1 = "";
    if ((int5 > 0)) {
        string0 = script7653(int1, int5, int5, 0, 1);
        string1 = script7653(int2, int5, int5, 0, 1);
    } else {
        string0 = TOSTRING_LOCALISED(int1, 1);
        string1 = TOSTRING_LOCALISED(int2, 1);
    };
    var string2 = "";
    var int8 = script11695(int0);
    var int9 = 0;
    if ((CC_FIND(int0, 8) == 1)) {
        if (((int3 == 1) || (int8 == 1))) {
            if ((int8 == 0)) {
                CC_SETTEXT("");
            } else {
                CC_SETTEXT(string0);
                CC_SETCOLOUR(script805(SCALE(int1, int2, 100)));
            };
            if ((int4 == 1)) {
                string2 = `${string0}%`;
            } else {
                string2 = `${string0}/${string1}`;
            };
            if ((int8 == 0)) {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), int0);
                IF_SETONMOUSELEAVE(callback(script8805), int0);
            };
        } else {
            if ((int4 == 1)) {
                string2 = `${string0}%`;
            } else {
                string2 = `${string0}/${string1}`;
            };
            int9 = PARAWIDTH(string2, 1000, CC_GETFONTMETRICS());
            if (((int9 > CC_GETWIDTH()) && (int4 == 0))) {
                if ((int7 == 0)) {
                    string2 = string0;
                } else if ((int7 == 1)) {
                    string2 = `${script11478(int1)}/${script11478(int2)}`;
                };
            };
            CC_SETTEXT(string2);
            IF_SETONMOUSEREPEAT(callback(), int0);
            IF_SETONMOUSELEAVE(callback(), int0);
        };
    };
    if ((int8 == 1)) {
        int1 = (int2 - int1);
    };
    int1 = MIN(int1, int2);
    if ((CC_FIND(int0, 3) == 1)) {
        if (((int3 == 1) || (int8 == 1))) {
            if ((int8 == 0)) {
                int1 = MAX(1, SCALE(int1, int2, (IF_GETHEIGHT(int0) - 4)));
                if ((MODULO(int1, 2) != 0)) {
                    int1 = (int1 + 1);
                };
            } else {
                int1 = MAX(1, SCALE(int1, int2, IF_GETHEIGHT(int0)));
            };
        } else {
            int1 = MAX(1, SCALE(int1, int2, (IF_GETWIDTH(int0) - 4)));
        };
        if ((int6 == 1)) {
            CC_SETONTIMER(callback(script8127, -2147483645, -2147483643, int1, int3));
        } else {
            script8128(int0, int1, int3);
            CC_SETONTIMER(callback());
        };
    };
    return;
}