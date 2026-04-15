//
function script5228(int0: int): void {
    var int1 = 0;
    var string0 = "";
    var int2 = script4969(int0);
    var int3 = comp(-1, 65535);
    var int4 = 2;
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    if ((CLANPROFILE_FIND() == 1)) {
        int1 = script4949(int0);
        if ((int1 > 0)) {
            string0 = `Teleport to the ${enum_getvalue(0, 36, 4287 as cs2enum, int1)} skill plot.`;
            int3 = IF_GETPARENTLAYER(int2);
            if ((IF_GETY(int2) > (IF_GETHEIGHT(int3) / 2))) {
                int4 = 0;
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int2);
            IF_SETOP(1, `Teleport to ${enum_getvalue(0, 36, 4287, int1)}`, int2);
            return;
        };
    };
    IF_SETONMOUSEREPEAT(callback(), int2);
    IF_SETONMOUSELEAVE(callback(), int2);
    return;
}