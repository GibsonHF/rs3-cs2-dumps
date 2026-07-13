//
function script12099(int0: number, int1: number): number {
    var int2 = -1 as graphic;
    var int3 = -1 as struct;
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 2214);
        var int1 = struct_getparam(int0, 6569);
        int3 = struct_getparam(int0, 8877);
    };
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                int2 = dbrow_getfield(int1, 20560, 0);
                break;
            }
            default: {
                int2 = struct_getparam(int0, 2214);
                break;
            }
        };
    } else if (((int3 != -1 as struct) && ((struct_getparam(int3, 2793) > 0) || (struct_getparam(int3, 2799) == 6)))) {
        int2 = struct_getparam(int3, 2802);
    };
    return int2;
}