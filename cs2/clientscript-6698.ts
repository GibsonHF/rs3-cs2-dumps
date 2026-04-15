//
function script6698(int0: unknown_int, int1: component, int2: unknown_int, int3: component, int4: unknown_int): void {
    var string0 = "This shows how many moths you have collected in your jar.";
    if ((varclient_2013 == -1)) {
        IF_SETTEXT("-<br>-", int1);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    while ((int13 < 32)) {
        switch ((int13 / 4)) {
            case 0: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int5 = SETBIT(int5, MODULO(int13, 4));
                };
                break;
            }
            case 1: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int6 = SETBIT(int6, MODULO(int13, 4));
                };
                break;
            }
            case 2: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int7 = SETBIT(int7, MODULO(int13, 4));
                };
                break;
            }
            case 3: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int8 = SETBIT(int8, MODULO(int13, 4));
                };
                break;
            }
            case 4: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int9 = SETBIT(int9, MODULO(int13, 4));
                };
                break;
            }
            case 5: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int10 = SETBIT(int10, MODULO(int13, 4));
                };
                break;
            }
            case 6: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int11 = SETBIT(int11, MODULO(int13, 4));
                };
                break;
            }
            case 7: {
                if ((TESTBIT(varclient_2013, int13) == 1)) {
                    int12 = SETBIT(int12, MODULO(int13, 4));
                };
                break;
            }
        };
        int13 = (int13 + 1);
    };
    var int14 = (((((((int5 + int6) + int7) + int8) + int9) + int10) + int11) + int12);
    IF_SETTEXT(`<col=ffffff>${inttostring(MIN(int14, 15), 10)}</col><br>15`, int1);
    IF_SETTEXT(inttostring(int5, 10), comp(1341, 25));
    IF_SETTEXT(inttostring(int6, 10), comp(1341, 26));
    IF_SETTEXT(inttostring(int7, 10), comp(1341, 27));
    IF_SETTEXT(inttostring(int8, 10), comp(1341, 28));
    IF_SETTEXT(inttostring(int9, 10), comp(1341, 29));
    IF_SETTEXT(inttostring(int10, 10), comp(1341, 30));
    IF_SETTEXT(inttostring(int11, 10), comp(1341, 31));
    IF_SETTEXT(inttostring(int12, 10), comp(1341, 32));
    script41(int3);
    return;
}