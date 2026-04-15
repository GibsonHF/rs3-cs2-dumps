//
function script12356(int0: component, int1: inv, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    while ((int3 < INV_SIZE(int1))) {
        CC_CREATE(int0, 5, int3);
        CC_SETSIZE(49, 49, 0, 0);
        CC_SETPOSITION((56 * int4), (56 * int5), 0, 0);
        if ((INV_GETOBJ(int1, int3) != -1 as obj)) {
            if ((varclient_5183 != -1 as cs2enum)) {
                CC_SETGRAPHIC(enum_getvalue(33, 23, varclient_5183, INV_GETOBJ(int1, int3)));
            };
            if ((int2 == 0)) {
                CC_SETOPBASE(OC_NAME(INV_GETOBJ(int1, int3)));
                CC_SETOP(1, "Move");
                CC_SETONOP(callback(script106, -2147483645, int3, -2147483644, int1));
            };
        } else {
            CC_SETHIDE(true);
        };
        int4 = MODULO(++int3, 5);
        int5 = (int3 / 5);
    };
    return;
}