//
function script16559(int0: component, int1: int): void {
    var int2 = enum_getvalue(0, 26, 5134 as cs2enum, int1);
    if ((int2 == -1 as cs2enum)) {
        return;
    };
    if ((CC_FIND(int0, 0) == 0)) {
        script16555(int0, int1);
    };
    var int3 = false;
    var int4 = false;
    var string0 = "";
    var int5 = -1 as dbrow;
    var int6 = IF_GETWIDTH(int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = ENUM_GETOUTPUTCOUNT(int2);
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 3;
    var int16 = 24;
    var int17 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int16 = 32;
        int17 = 28 as fontmetrics;
    };
    [int3, int9] = script16562(int2, int6, int0);
    if ((int3 == false)) {
        int12 = (int16 + int15);
    } else {
        int12 = ((int6 - int9) / 2);
    };
    while ((int10 < int11)) {
        int5 = enum_getvalue(0, 74, int2, int10);
        if (((int3 == false) && (dbrow_getfield(int5, 114800, 0) == false))) {
            int4 = true;
        } else {
            int4 = script12585(script16564(int5, int0));
        };
        int14 = script16565(int5, int0);
        switch (int14) {
            case 0: {
                if ((CC_FINDBYCATEGORY(int0, int10, 0) == 1)) {
                    CC_SETPOSITION(int12, 0, 0, 0);
                    CC_SETHIDE(int4);
                    if ((int4 == false)) {
                        int12 = (int12 + (int16 + int15));
                    };
                };
                break;
            }
            case 3: {
                if ((CC_FINDBYCATEGORY(int0, int10, 0) == 1)) {
                    CC_SETPOSITION(int12, 0, 0, 0);
                    CC_SETHIDE(int4);
                    if ((int4 == false)) {
                        int12 = (int12 + (CC_GETWIDTH() + int15));
                    };
                };
                break;
            }
            case 1: {
                [string0, int7] = script17399(varclient_6480);
                int8 = STRINGWIDTH(string0, int17);
                if ((CC_FINDBYCATEGORY(int0, int10, 0) == 1)) {
                    CC_SETSIZE(int8, CC_GETHEIGHT(), 0, 0);
                    CC_SETPOSITION(int12, 0, 0, 0);
                    CC_SETHIDE(int4);
                };
                if ((CC_FINDBYCATEGORY(int0, int10, 1) == 1)) {
                    CC_SETTEXT(string0);
                    CC_SETCOLOUR(int7);
                    string0 = `You currently have <br>${TOSTRING_LOCALISED_LONG(varclient_6480, 1)} ${script17379(varclient_6480, "coin", "coins")}.`;
                    CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                };
                int12 = (int12 + (int8 + 4));
                break;
            }
            case 2: {
                [string0, int7] = script16568(int5, int14);
                int8 = script16561(int0, int10, string0, int7, int12, int4);
                int12 = (int12 + (int8 + int15));
                break;
            }
        };
        int10 = (int10 + 1);
    };
    if ((CC_FINDBYCATEGORY(int0, int10, 0) == 1)) {
        CC_SETHIDE(int3);
    };
    return;
}