//
function script4195(int0: number, int1: number, int2: number, int3: number): [number, number, number] {
    var int4 = INV_GETOBJ(int0, int1);
    if ((int4 == -1)) {
        return [int4, -1 as dbrow, 0];
    };
    var int5 = item_getparam(int4, 7452);
    if ((int5 == -1 as dbrow)) {
        return [int4, int5, 0];
    };
    if (((int2 != 0) && (dbrow_getfield(int5, 118784, 0) != int2))) {
        return [int4, int5, 0];
    };
    var int6 = item_getparam(int4, 7451);
    switch (int6) {
        case 4:
        case 5:
        case 6: {
            if (((int3 != 7) && (int6 != int3))) {
                return [int4, int5, 0];
            };
            break;
        }
        default: {
            if (((int3 != 0) && (int6 != int3))) {
                return [int4, int5, 0];
            };
            break;
        }
    };
    return [int4, int5, 1];
}