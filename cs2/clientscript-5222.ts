//
function script5222(int0: int): void {
    var int1 = script4949(int0);
    var int2 = script4959(int0);
    var int3 = script4972(int0);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    var int4 = IF_GETPARENTLAYER(int3);
    var int5 = IF_GETPARENTLAYER(int4);
    var string0 = "";
    var string1 = "Empty skill plot";
    var int6 = 3;
    if ((int0 == 1)) {
        string0 = `Citadel : Tier ${inttostring(int2, 10)}`;
    } else if ((int0 == 2)) {
        string0 = `Storehouse : Tier ${inttostring(int2, 10)}`;
    } else if ((int0 == 3)) {
        string0 = `Battlefield : Tier ${inttostring(int2, 10)}`;
    } else {
        string1 = enum_getvalue(0, 36, 4287 as cs2enum, int1);
        if ((int2 > 0)) {
            string0 = `${string1} : Tier ${inttostring(int2, 10)}`;
        } else {
            string0 = "Empty skill plot";
        };
    };
    if ((IF_GETX(int4) < ((IF_GETWIDTH(int5) / 2) - 50))) {
        int6 = 1;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int3);
    return;
}