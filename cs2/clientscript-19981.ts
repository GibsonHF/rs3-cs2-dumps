//
function script19981(int0: number, int1: number): number {
    var int2 = struct_getparam(int0, 9075);
    var int3 = -1;
    switch (DB_GETROWTABLE(int2)) {
        case 280: {
            int3 = dbrow_getfield(int2, 1146896, 0);
            break;
        }
        case 26: {
            int3 = dbrow_getfield(int2, 106512, (int1 - 1));
            break;
        }
    };
    return int3;
}