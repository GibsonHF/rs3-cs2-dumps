//
function script17029(int0: unknown_int, int1: dbrow): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int2 = comp(226, 22);
            int3 = comp(226, 21);
            break;
        }
        case 2: {
            int2 = comp(226, 28);
            int3 = comp(226, 25);
            break;
        }
        case 3: {
            int2 = comp(226, 30);
            int3 = comp(226, 29);
            break;
        }
    };
    CC_DELETEALL(int3);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int4 = -1 as obj;
    var int5 = 0;
    [int4, int5] = dbrow_getfield(int1, 880656, 0);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if (((int4 != -1 as obj) && (int5 > 0))) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int5, 1)} x ${OC_NAME(int4)}`, int2);
        script15941(int3, 0, IF_GETNEXTSUBID(int3), 0, 0, 1, 1, 0, 0, 1, 1);
        CC_SETOBJECT_NONUM(int4, int5);
        [int6, int7, int8, int9, int10, int11] = dbrow_getfield(int1, 880672, 0);
        CC_SETMODELANGLE(int6, int7, int8, int9, int10, int11);
    };
    return;
}