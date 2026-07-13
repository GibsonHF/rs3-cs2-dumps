//
function script9887(int0: number, int1: number, int2: number): number {
    if ((int2 <= 0)) {
        return 0;
    };
    var int3 = enum_getvalue(33, 0, 259 as cs2enum, int0);
    if ((int3 != 0)) {
        return (int3 * int2);
    };
    switch (int1) {
        case 33784:
        case 33785:
        case 33786:
        case 33787:
        case 53296:
        case 53297:
        case 53298: {
            var int0 = 1539 as obj;
            break;
        }
    };
    return (INVPOW((script17369(int0) * int2), 2) * 10);
}