//
function script14368(int0: inv, int1: obj, int2: int): void {
    var int3 = script14352(int0, int1);
    if ((int3 == int2)) {
        return;
    };
    var int4 = script14074(int0);
    var int5 = cc_getparam(3819);
    var int6 = 0;
    var int7 = INV_SIZE(int0);
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
    [string0, string1, string2, string3, string4, string5, string6, string7, string8, string9] = script14419(int0, int1, int3, "Deposit");
    while ((int6 < int7)) {
        if (((CC_FIND(int4, int6) == 1) && (CC_GETINVOBJECT() == int1))) {
            script9240(int4, int5, int0, int1, CC_GETINVCOUNT(), 1, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
        };
        int6 = (int6 + 1);
    };
    return;
}