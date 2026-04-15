//
function script19608(int0: inv, int1: obj, int2: int, int3: unknown_int): void {
    var int4 = script19594(int0, int1);
    if ((int4 == int2)) {
        return;
    };
    var int5 = script19567(int0);
    var int6 = cc_getparam(3819);
    var int7 = 0;
    var int8 = INV_SIZE(int0);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    [string0, string1, string2, string3, string4, string5, string6, string7, string8, string9] = script14419(int0, int1, int4, "Deposit");
    while ((int7 < int8)) {
        if (((CC_FIND(int5, int7) == 1) && (CC_GETINVOBJECT() == int1))) {
            script9240(int5, int6, int0, int1, CC_GETINVCOUNT(), 1, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
        };
        int7 = (int7 + 1);
    };
    return;
}