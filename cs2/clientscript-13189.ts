//
function script13189(int0: component, int1: inv, int2: int, int3: obj, int4: int): void {
    if ((((((int1 == -1 as inv) || (int2 < 0)) || (int2 >= INV_SIZE(int1))) || (int3 == -1 as obj)) || (int4 < 1))) {
        return;
    };
    var int5 = -1;
    var int6 = -1 as dbrow;
    var int7 = -1;
    var int8 = -1;
    if ((IF_FIND(int0) == 1)) {
        int6 = script15768(cc_getparam(6361));
        if (((int6 != -1 as dbrow) && (script18206(int6) == 1))) {
            int8 = dbrow_getfield(int6, 667920, 0);
            if ((int8 < INV_SIZE(675 as inv))) {
                if ((INV_GETOBJ(675 as inv, int8) == -1 as obj)) {
                    if (((int8 == 0) || (INV_GETOBJ(675 as inv, (int8 - 1)) != -1 as obj))) {
                        CC_DELETEALL(comp(1843, 185));
                        while ((++int7 < int2)) {
                            CC_CREATE(comp(1843, 185), 5, int7);
                        };
                        CC_CREATE(comp(1843, 185), 5, int7);
                        CC_SETOBJECT(int3, int4);
                        IF_TRIGGEROP(comp(1843, 185), int7, 1);
                        return;
                    };
                    return;
                };
                return;
            };
        };
    };
    return;
}