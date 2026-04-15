//
function script11267(int0: component, int1: cs2enum, int2: component, int3: component, int4: unknown_int): void {
    var int5 = 0;
    var string0 = "";
    var int6 = 15;
    while ((int5 < ENUM_GETOUTPUTCOUNT(int1))) {
        string0 = struct_getparam(enum_getvalue(0, 73, int1, int5), 4992);
        CC_CREATE(int2, 3, int5);
        CC_SETSIZE(0, int6, 1, 0);
        CC_SETPOSITION(0, (int5 * int6), 0, 0);
        CC_SETFILL(1);
        if ((MODULO(int5, 2) == 0)) {
            CC_SETCOLOUR(1846324);
        } else {
            CC_SETCOLOUR(464928);
        };
        CC_CREATE(int0, 4, int5);
        CC_SETSIZE(0, int6, 1, 0);
        CC_SETCOLOUR(script10495(3));
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, script10495(3)));
        CC_SETTEXTFONT(26);
        CC_SETOP(1, "Select");
        CC_SETOPBASE(string0);
        CC_SETTEXT(string0);
        int5 = (int5 + 1);
    };
    var int7 = 0;
    int5 = 0;
    var int8 = (IF_GETNEXTSUBID(int0) - 1);
    define_array(IF_GETNEXTSUBID(int0));
    while ((int5 <= int8)) {
        if (((CC_FIND(int0, int5) == 1) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
            pop_array(int7, int5);
            int7 = (int7 + 1);
        };
        int5 = (int5 + 1);
    };
    if ((int7 > 1)) {
        script4424(0, int0, 0, (int7 - 1));
    };
    int5 = 0;
    while ((int5 < int7)) {
        if ((CC_FIND(int0, push_array(int5)) == 1)) {
            CC_SETPOSITION(0, (int6 * int5), 0, 0);
        };
        int5 = (int5 + 1);
    };
    IF_SETSIZE(0, (int6 * (int5 + 1)), 1, 0, IF_GETPARENTLAYER(int0));
    IF_SETPARAM_INT(4052, (int6 * (int5 + 1)), IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0)));
    IF_CALLONRESIZE(int3);
    return;
}