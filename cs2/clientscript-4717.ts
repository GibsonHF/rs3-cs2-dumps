//
function script4717(int0: component, int1: component, int2: cs2enum): void {
    CC_DELETEALL(int0);
    var int3 = -1;
    var int4 = -1 as struct;
    var int5 = -1 as graphic;
    var int6 = -1;
    var string0 = "";
    var int7 = 1;
    var int8 = -1;
    var int9 = MAX(varclient_2823, 0);
    var int10 = ENUM_GETOUTPUTCOUNT(int2);
    var int11 = 5;
    var int12 = 13;
    var int13 = 26 as fontmetrics;
    var int14 = script13749();
    if ((varbitplayer_34815 == 1)) {
        if ((int14 == true)) {
            int13 = 32 as fontmetrics;
            int12 = 30;
        };
        int11 = 4;
    };
    while ((++int3 < int10)) {
        int4 = enum_getvalue(0, 73, int2, int3);
        int5 = struct_getparam(int4, 1420);
        int7 = script4718(int4);
        string0 = struct_getparam(int4, 1419);
        CC_CREATE(int0, int11, int3);
        CC_SETPOSITION(0, 0, 0, 0);
        if ((int7 == 0)) {
            int5 = struct_getparam(int4, 1421);
        };
        if ((int4 == 1783 as struct)) {
            if ((GENDER() > 0)) {
                int4 = 1789 as struct;
                int5 = struct_getparam(int4, 1420);
                string0 = struct_getparam(int4, 1419);
                CC_SETOP(1, "Curtsy");
                CC_SETOP(2, "Bow");
            } else {
                CC_SETOP(1, "Bow");
                CC_SETOP(2, "Curtsy");
            };
        } else if ((int4 == 19557 as struct)) {
            CC_SETOP(1, "Talk (A)");
            CC_SETOP(2, "Talk (B)");
        };
        if (((int7 == 1) && (struct_getparam(int4, 5430) == 1))) {
            CC_SETOP(1, string0);
            CC_SETOP(2, struct_getparam(int4, 9006));
        } else {
            CC_SETOP(1, string0);
        };
        cc_setparam(6277, int7);
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        if ((varbitplayer_34815 == 1)) {
            CC_SETTEXT(string0);
            CC_SETTEXTFONT(int13);
            CC_SETMAXLINES(1);
            if ((int7 == 1)) {
                script11024(3);
            } else {
                script11024(5);
            };
        } else {
            CC_SETGRAPHIC(int5);
        };
        CC_SETONMOUSELEAVE(callback(script8805));
        if ((int14 == 0)) {
            CC_SETDRAGDEADTIME(5);
            CC_SETDRAGDEADZONE(5);
        } else {
            CC_SETDRAGDEADTIME(5);
            CC_SETDRAGDEADZONE(20);
        };
        CC_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642));
    };
    script4716(int0, int1, int2, int9);
    return;
}