//
function script5269(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number, int18: number, int19: number, int20: number, int21: number, int22: number, int23: number, int24: number, int25: number, int26: number, int27: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string): void {
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    IF_SETTEXT(string0, 74514481);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 74514470);
    IF_SETTEXT(inttostring(int25, 10), 74514486);
    IF_SETTEXT(inttostring((int26 + int27), 10), 74514477);
    CC_DELETEALL(74514468);
    CC_DELETEALL(74514518);
    CC_DELETEALL(74514529);
    if ((int0 == 1)) {
        IF_SETHIDE(1, 74514455);
        IF_SETHIDE(0, 74514456);
        IF_SETHIDE(0, 74514457);
        IF_SETTEXT(inttostring(int26, 10), 74514502);
        IF_SETTEXT(inttostring(int27, 10), 74514508);
        if ((int1 != -1)) {
            int28 = script5271(74514518, string2, int2, int3, int28);
        };
        if ((int4 != -1)) {
            int28 = script5271(74514518, string3, int5, int6, int28);
        };
        if ((int7 != -1)) {
            int28 = script5271(74514518, string4, int8, int9, int28);
        };
        if ((int10 != -1)) {
            int28 = script5271(74514518, string5, int11, int12, int28);
        };
        if ((int13 != -1)) {
            int29 = script5271(74514529, string6, int14, int15, int29);
        };
        if ((int16 != -1)) {
            int29 = script5271(74514529, string7, int17, int18, int29);
        };
        if ((int19 != -1)) {
            int29 = script5271(74514529, string8, int20, int21, int29);
        };
        if ((int22 != -1)) {
            int29 = script5271(74514529, string9, int23, int24, int29);
        };
        while ((int30 < int28)) {
            int30 = script5272(74514518, int30, int28);
        };
        int30 = 0;
        while ((int30 < int29)) {
            int30 = script5272(74514529, int30, int29);
        };
    } else {
        IF_SETHIDE(0, 74514455);
        IF_SETHIDE(1, 74514456);
        IF_SETHIDE(1, 74514457);
        if ((int1 != -1)) {
            int28 = script5271(74514468, string2, int2, int3, int28);
        };
        if ((int4 != -1)) {
            int28 = script5271(74514468, string3, int5, int6, int28);
        };
        if ((int7 != -1)) {
            int28 = script5271(74514468, string4, int8, int9, int28);
        };
        if ((int10 != -1)) {
            int28 = script5271(74514468, string5, int11, int12, int28);
        };
        if ((int13 != -1)) {
            int28 = script5271(74514468, string6, int14, int15, int28);
        };
        if ((int16 != -1)) {
            int28 = script5271(74514468, string7, int17, int18, int28);
        };
        if ((int19 != -1)) {
            int28 = script5271(74514468, string8, int20, int21, int28);
        };
        if ((int22 != -1)) {
            int28 = script5271(74514468, string9, int23, int24, int28);
        };
        while ((int30 < int28)) {
            int30 = script5272(74514468, int30, int28);
        };
    };
    return;
}