//
function script5269(int0: unknown_int, int1: unknown_int, int2: coordgrid, int3: int, int4: unknown_int, int5: coordgrid, int6: int, int7: unknown_int, int8: coordgrid, int9: int, int10: unknown_int, int11: coordgrid, int12: int, int13: unknown_int, int14: coordgrid, int15: int, int16: unknown_int, int17: coordgrid, int18: int, int19: unknown_int, int20: coordgrid, int21: int, int22: unknown_int, int23: coordgrid, int24: int, int25: unknown_int, int26: int, int27: int, string0: string, string1: unknown_string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string): void {
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    IF_SETTEXT(string0, comp(1137, 49));
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 74514470);
    IF_SETTEXT(inttostring(int25, 10), 74514486);
    IF_SETTEXT(inttostring((int26 + int27), 10), 74514477);
    CC_DELETEALL(74514468);
    CC_DELETEALL(74514518);
    CC_DELETEALL(74514529);
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1137, 23));
        IF_SETHIDE(false, comp(1137, 24));
        IF_SETHIDE(false, comp(1137, 25));
        IF_SETTEXT(inttostring(int26, 10), comp(1137, 70));
        IF_SETTEXT(inttostring(int27, 10), comp(1137, 76));
        if ((int1 != -1)) {
            int28 = script5271(comp(1137, 86), string2, int2, int3, int28);
        };
        if ((int4 != -1)) {
            int28 = script5271(comp(1137, 86), string3, int5, int6, int28);
        };
        if ((int7 != -1)) {
            int28 = script5271(comp(1137, 86), string4, int8, int9, int28);
        };
        if ((int10 != -1)) {
            int28 = script5271(comp(1137, 86), string5, int11, int12, int28);
        };
        if ((int13 != -1)) {
            int29 = script5271(comp(1137, 97), string6, int14, int15, int29);
        };
        if ((int16 != -1)) {
            int29 = script5271(comp(1137, 97), string7, int17, int18, int29);
        };
        if ((int19 != -1)) {
            int29 = script5271(comp(1137, 97), string8, int20, int21, int29);
        };
        if ((int22 != -1)) {
            int29 = script5271(comp(1137, 97), string9, int23, int24, int29);
        };
        while ((int30 < int28)) {
            int30 = script5272(comp(1137, 86), int30, int28);
        };
        int30 = 0;
        while ((int30 < int29)) {
            int30 = script5272(comp(1137, 97), int30, int29);
        };
    } else {
        IF_SETHIDE(false, comp(1137, 23));
        IF_SETHIDE(true, comp(1137, 24));
        IF_SETHIDE(true, comp(1137, 25));
        if ((int1 != -1)) {
            int28 = script5271(comp(1137, 36), string2, int2, int3, int28);
        };
        if ((int4 != -1)) {
            int28 = script5271(comp(1137, 36), string3, int5, int6, int28);
        };
        if ((int7 != -1)) {
            int28 = script5271(comp(1137, 36), string4, int8, int9, int28);
        };
        if ((int10 != -1)) {
            int28 = script5271(comp(1137, 36), string5, int11, int12, int28);
        };
        if ((int13 != -1)) {
            int28 = script5271(comp(1137, 36), string6, int14, int15, int28);
        };
        if ((int16 != -1)) {
            int28 = script5271(comp(1137, 36), string7, int17, int18, int28);
        };
        if ((int19 != -1)) {
            int28 = script5271(comp(1137, 36), string8, int20, int21, int28);
        };
        if ((int22 != -1)) {
            int28 = script5271(comp(1137, 36), string9, int23, int24, int28);
        };
        while ((int30 < int28)) {
            int30 = script5272(comp(1137, 36), int30, int28);
        };
    };
    return;
}