//
function script7220(int0: number, int1: number, int2: number): void {
    var int3 = 12189705;
    var int4 = 12189706;
    var int5 = 12189709;
    var int6 = 12189713;
    var int7 = 12189712;
    var int8 = 12189714;
    var string0 = OC_NAME(int0);
    var string1 = "";
    var int9 = item_getparam(int0, 2655);
    var int10 = 0;
    if ((int1 == 1)) {
        IF_SETTEXT(string0, int6);
        IF_SETTEXT(script7221(int0), int7);
    } else {
        IF_SETTEXT("???", int6);
        IF_SETTEXT("", int7);
    };
    IF_SETOBJECT_NONUM(int0, 1, int3);
    IF_SETPOSITION(0, item_getparam(int0, 7942), 1, 0, int3);
    IF_SETMODELANGLE(0, 0, 0, item_getparam(int0, 7943), 0, item_getparam(int0, 7941), int3);
    if ((script6681(int0) == 1)) {
        IF_RESETMODELLIGHTING(int3);
        switch (int2) {
            case 0: {
                IF_SETTEXT("Totem state: <col=FF0000>Inactive", int8);
                break;
            }
            case 1: {
                IF_SETTEXT("Totem state: <col=00FF00>Active", int8);
                break;
            }
        };
    } else {
        IF_SETMODELLIGHTING(0, 0, 0, 16, 14, 14, -100, -2, 3, 3224, int3);
        IF_SETTEXT("", int8);
    };
    while ((int10 < 3)) {
        switch (int10) {
            case 0: {
                int9 = item_getparam(int0, 2655);
                int4 = 12189706;
                int5 = 12189709;
                break;
            }
            case 1: {
                int9 = item_getparam(int0, 2656);
                int4 = 12189707;
                int5 = 12189710;
                break;
            }
            case 2: {
                int9 = item_getparam(int0, 2657);
                int4 = 12189708;
                int5 = 12189711;
                break;
            }
        };
        IF_SETOBJECT_NONUM(int9, 1, int4);
        if ((script6681(int9) == 1)) {
            IF_SETCOLOUR(16777215, int4);
            if ((script6683(int9) == 1)) {
                string1 = "This totem piece is owned and is currently stored in the totem bag.";
                IF_SETHIDE(0, int5);
            } else {
                string1 = "This totem piece is owned but is not currently stored in the totem bag.";
                IF_SETHIDE(1, int5);
            };
        } else {
            string1 = "This totem piece is not currently owned.";
            IF_SETCOLOUR(65536, int4);
            IF_SETHIDE(1, int5);
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string1, int4, -1), int4);
        int10 = (int10 + 1);
    };
    script13982(12189716, -1, 28553, "Withdraw", 0, -1, 0);
    return;
}