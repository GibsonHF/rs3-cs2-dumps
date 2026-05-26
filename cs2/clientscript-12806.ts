//
function script12806(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 10;
    var int4 = 7;
    while ((int0 < 15)) {
        CC_CREATE(comp(1795, 3), 5, int1);
        int1 = (int1 + 1);
        CC_SETGRAPHIC(18266 as graphic);
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETPOSITION(int3, int4, 0, 0);
        CC_CREATE(comp(1795, 3), 5, int1);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int3 + 4), (int4 + 2), 0, 0);
        int3 = ((int3 + 36) + 10);
        if (((int0 == 4) || (int0 == 9))) {
            int4 = ((int4 + 36) + 7);
            int3 = 10;
        };
        int2 = 1965 as obj;
        if ((MAP_MEMBERS() == 1)) {
            int2 = enum_getvalue(0, 33, 11668 as cs2enum, int0);
        } else {
            int2 = enum_getvalue(0, 33, 11667 as cs2enum, int0);
        };
        CC_SETOBJECT(int2, 1);
        CC_SETOPBASE(`<col=ff9040>${OC_NAME(int2)}`);
        CC_SETOP(1, "Examine");
        CC_SETOUTLINE(1);
        cc_setparam(4009, int2);
        CC_SETONMOUSEREPEAT(callback(script9564, int2, -2147483645, CC_GETID()));
        CC_SETONMOUSELEAVE(callback(script9300, -2147483645, -2147483643));
        int0 = (int0 + 1);
        int1 = (int1 + 1);
    };
    return;
}