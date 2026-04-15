//
function script11116(int0: int): void {
    var int1 = comp(1598, 35);
    CC_DELETEALL(int1);
    var int2 = 0;
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    while ((int2 < ENUM_GETOUTPUTCOUNT(9849 as cs2enum))) {
        CC_CREATE(int1, 5, int2);
        int3 = enum_getvalue(0, 33, 9849 as cs2enum, int2);
        int4 = INV_TOTAL(93 as inv, int3);
        CC_SETPOSITION((((MODULO(int5, 6) * 44) + ((int5 / 6) * 22)) + 30), (((int5 / 6) * 44) + 26), 0, 0);
        CC_SETSIZE(36, 32, 0, 0);
        if (((int0 == 3) || (int0 == 1))) {
            CC_SETOBJECT(int3, int4);
        } else {
            CC_SETOBJECT(int3, -1);
        };
        if ((int4 > 0)) {
            CC_SETONMOUSEREPEAT(callback(script8799, OC_NAME(int3), -2147483645, -2147483643));
            CC_SETOP(1, "Add to machine");
        } else {
            string0 = `${OC_NAME(int3)}<br>You don't have any of these eggs.`;
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            CC_SETTRANS(196);
        };
        script10764(comp(1598, 0), 21363 as struct, (((MODULO(int5, 6) * 44) + ((int5 / 6) * 22)) + 22), (((int5 / 6) * 44) + 18), 40, 40, 16777215);
        int5 = (int5 + 1);
        int2 = (int2 + 1);
    };
    if (((int0 == 3) || (int0 == 1))) {
        IF_SETTEXT("Which egg do you want to start with?", comp(1598, 36));
    } else {
        IF_SETTEXT("Which egg's effect do you want to apply?", comp(1598, 36));
    };
    return;
}