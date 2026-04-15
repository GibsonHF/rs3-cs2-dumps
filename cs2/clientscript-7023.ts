//
function script7023(int0: unknown_int, int1: int, int2: component, int3: int): void {
    if ((int3 != 10)) {
        script4149(int0, int1, int2, int3);
        return;
    };
    var int4 = int1;
    switch (script11786(int2)) {
        case 1003: {
            break;
        }
        case 1032: {
            int4 = (int4 + 14);
            break;
        }
        case 1033: {
            int4 = (int4 + (2 * 14));
            break;
        }
        case 1034: {
            int4 = (int4 + (3 * 14));
            break;
        }
        case 1035: {
            int4 = (int4 + (4 * 14));
            break;
        }
        default: {
            return;
        }
    };
    if (((int4 >= 1) && (int4 <= 70))) {
        script8197(5, int4, int2);
    };
    return;
}