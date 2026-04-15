//
function script12099(int0: struct): graphic {
    var int1 = struct_getparam(int0, 2214);
    var int2 = struct_getparam(int0, 6569);
    var int3 = struct_getparam(int0, 8877);
    if ((int2 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int2)) {
            case 5: {
                int1 = dbrow_getfield(int2, 20560, 0);
                break;
            }
            default: {
                int1 = struct_getparam(int0, 2214);
                break;
            }
        };
    } else if (((int3 != -1 as struct) && ((struct_getparam(int3, 2793) > 0) || (struct_getparam(int3, 2799) == 6)))) {
        int1 = struct_getparam(int3, 2802);
    };
    return int1;
}