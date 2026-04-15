//
function script10890(int0: int, int1: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string, string13: string, string14: string, string15: string, string16: string, string17: string, string18: string, string19: string, string20: string): void {
    var int2 = (78 + (26 * int0));
    var int3 = MAX(209, PARAWIDTH(string0, 512, IF_GETFONTMETRICS(comp(720, 3))));
    IF_SETTEXT(string0, comp(720, 3));
    if ((IF_FIND(comp(720, 3)) == 1)) {
        cc_setparam(6752, int1);
    };
    IF_SETHIDE(true, comp(720, 4));
    IF_SETHIDE(true, comp(720, 5));
    IF_SETHIDE(true, comp(720, 6));
    IF_SETHIDE(true, comp(720, 7));
    IF_SETHIDE(true, comp(720, 8));
    IF_SETHIDE(true, comp(720, 9));
    IF_SETHIDE(true, comp(720, 10));
    IF_SETHIDE(true, comp(720, 11));
    IF_SETHIDE(true, comp(720, 12));
    IF_SETHIDE(true, comp(720, 13));
    if (((int0 >= 1) && (IF_FIND(comp(720, 14)) == 1))) {
        CC_SETTEXT(`1. ${string1}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 4));
    };
    if (((int0 >= 2) && (IF_FIND(comp(720, 21)) == 1))) {
        CC_SETTEXT(`2. ${string3}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 5));
    };
    if (((int0 >= 3) && (IF_FIND(comp(720, 24)) == 1))) {
        CC_SETTEXT(`3. ${string5}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 6));
    };
    if (((int0 >= 4) && (IF_FIND(comp(720, 27)) == 1))) {
        CC_SETTEXT(`4. ${string7}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 7));
    };
    if (((int0 >= 5) && (IF_FIND(comp(720, 30)) == 1))) {
        CC_SETTEXT(`5. ${string9}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 8));
    };
    if (((int0 >= 6) && (IF_FIND(comp(720, 33)) == 1))) {
        CC_SETTEXT(`6. ${string11}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 9));
    };
    if (((int0 >= 7) && (IF_FIND(comp(720, 36)) == 1))) {
        CC_SETTEXT(`7. ${string13}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 10));
    };
    if (((int0 >= 8) && (IF_FIND(comp(720, 39)) == 1))) {
        CC_SETTEXT(`8. ${string15}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 11));
    };
    if (((int0 >= 9) && (IF_FIND(comp(720, 42)) == 1))) {
        CC_SETTEXT(`9. ${string17}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 12));
    };
    if (((int0 >= 10) && (IF_FIND(comp(720, 45)) == 1))) {
        CC_SETTEXT(`0. ${string19}`);
        int3 = MAX(int3, STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()));
        IF_SETHIDE(false, comp(720, 13));
    };
    script10891(TESTBIT(int1, 1), comp(720, 0), comp(720, 1), comp(720, 14));
    script10891(TESTBIT(int1, 2), comp(720, 19), comp(720, 20), comp(720, 21));
    script10891(TESTBIT(int1, 3), comp(720, 22), comp(720, 23), comp(720, 24));
    script10891(TESTBIT(int1, 4), comp(720, 25), comp(720, 26), comp(720, 27));
    script10891(TESTBIT(int1, 5), comp(720, 28), comp(720, 29), comp(720, 30));
    script10891(TESTBIT(int1, 6), comp(720, 31), comp(720, 32), comp(720, 33));
    script10891(TESTBIT(int1, 7), comp(720, 34), comp(720, 35), comp(720, 36));
    script10891(TESTBIT(int1, 8), comp(720, 37), comp(720, 38), comp(720, 39));
    script10891(TESTBIT(int1, 9), comp(720, 40), comp(720, 41), comp(720, 42));
    script10891(TESTBIT(int1, 10), comp(720, 43), comp(720, 44), comp(720, 45));
    if ((STRING_LENGTH(string2) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -1), 47185924);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 4));
    };
    if ((STRING_LENGTH(string4) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string4, -2147483645, -1), 47185925);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 5));
    };
    if ((STRING_LENGTH(string6) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string6, -2147483645, -1), 47185926);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 6));
    };
    if ((STRING_LENGTH(string8) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string8, -2147483645, -1), 47185927);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 7));
    };
    if ((STRING_LENGTH(string10) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string10, -2147483645, -1), 47185928);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 8));
    };
    if ((STRING_LENGTH(string12) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string12, -2147483645, -1), 47185929);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 9));
    };
    if ((STRING_LENGTH(string14) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string14, -2147483645, -1), 47185930);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 10));
    };
    if ((STRING_LENGTH(string16) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string16, -2147483645, -1), 47185931);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 11));
    };
    if ((STRING_LENGTH(string18) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string18, -2147483645, -1), 47185932);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 12));
    };
    if ((STRING_LENGTH(string20) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string20, -2147483645, -1), 47185933);
    } else {
        IF_SETONMOUSEREPEAT(callback(), comp(720, 13));
    };
    int3 = MIN((int3 + 36), 512);
    int3 = MAX(int3, 270);
    IF_SETSIZE(int3, int2, 0, 0, comp(720, 2));
    return;
}