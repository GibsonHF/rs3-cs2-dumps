//
function script10465(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, string0: string, string1: string): void {
    IF_SETSIZE(20, 39, 1, 0, int0);
    IF_SETPOSITION(10, (10 + (int4 * 40)), 0, 0, int0);
    IF_SETHIDE(0, int0);
    IF_SETSIZE(0, 0, 1, 1, int1);
    IF_SETPOSITION(0, 0, 0, 0, int1);
    IF_SETHIDE(0, int1);
    CC_DELETEALL(int1);
    var int10 = 0;
    CC_CREATE(int1, 3, int10);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETFILL(1);
    if ((MODULO(int4, 2) == 1)) {
        script10010(28680);
    } else {
        script10010(28679);
    };
    int10 = (int10 + 1);
    var int11 = 46;
    var string2 = "";
    if ((int5 != -1)) {
        CC_CREATE(int1, 5, int10);
        CC_SETPOSITION(5, 0, 0, 1);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT(int5, -1);
        CC_SETHIDE(0);
        string2 = item_getparam(int5, 4085);
        if ((STRING_LENGTH(string2) != 0)) {
            CC_SETONMOUSEREPEAT(callback(script8799, string2, int1, int10));
        };
        int10 = (int10 + 1);
    };
    if ((int6 == 0)) {
        IF_SETHIDE(0, int3);
    } else {
        IF_SETHIDE(1, int3);
    };
    CC_CREATE(int1, 4, int10);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(27);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 13);
    CC_SETSIZE(((IF_GETWIDTH(int2) + int11) + 20), 0, 1, 1);
    CC_SETPOSITION((int11 + 5), 0, 0, 1);
    int10 = (int10 + 1);
    if (((int9 == 1) && (MODULO(int4, 2) == 1))) {
        switch (int4) {
            case 1: {
                IF_SETHIDE(1, 49217550);
                IF_SETHIDE(1, 75235342);
                break;
            }
            case 3: {
                IF_SETHIDE(1, 49217548);
                IF_SETHIDE(1, 75235340);
                break;
            }
            case 5: {
                IF_SETHIDE(1, 75235338);
                break;
            }
            case 7: {
                IF_SETHIDE(1, 75235336);
                break;
            }
        };
        CC_SETSIZE(5, 3, 1, 1);
        CC_SETPOSITION(5, 0, 0, 1);
        CC_SETTEXTALIGN(0, 1, 13);
    } else {
        IF_SETTEXT(string1, int2);
    };
    return;
}