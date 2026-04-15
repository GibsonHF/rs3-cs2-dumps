//
function script9220(int0: inv, int1: unknown_int, int2: obj, int3: int, int4: int, int5: unknown_int): void {
    if (((int0 != 93 as inv) && (int0 != 95 as inv))) {
        return;
    };
    if ((script9224(int2, -1 as obj) == 1)) {
        return;
    };
    if (((INV_FREESPACE(int0) == 0) && ((OC_STACKABLE(int2) == 0) || ((INV_TOTAL(int0, int2) > 0) && ((2147483647 - INV_GETNUM(94 as inv, int3)) < INV_GETNUM(int0, script9250(int0, int2))))))) {
        if ((int1 == 1)) {
            printmessage("You don't have enough space in your inventory to do that.");
        };
        return;
    };
    var int6 = OC_UNCERT(int2);
    if ((int0 == 93 as inv)) {
        if ((int4 == -1)) {
            script9215(int3, script9249(93 as inv));
        } else if (((int4 >= 0) && (int4 < INV_SIZE(int0)))) {
            if ((INV_GETOBJ(int0, int4) == -1 as obj)) {
                script9215(int3, int4);
            };
        } else {
            return;
        };
    } else if ((int0 == 95 as inv)) {
        if ((int4 != -1)) {
            script2347(int2, int6, script14339(94 as inv, int6), INV_GETNUM(94 as inv, int3), int4, -1, 94 as inv, int3, 1, 1);
        } else {
            script2295(94 as inv, int2, INV_GETNUM(94 as inv, int3), int3, 1, 1);
        };
        return;
    };
    return;
}