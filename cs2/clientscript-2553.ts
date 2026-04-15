//
function script2553(int0: struct): boolean {
    if ((struct_getparam(int0, 2217) == true)) {
        return true;
    };
    var int1 = struct_getparam(int0, 6569);
    var int2 = struct_getparam(int0, 8877);
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 86: {
                return dbrow_getfield(int1, 352320, 0);
            }
            case 88: {
                return dbrow_getfield(int1, 360496, 0);
            }
            case 94: {
                return dbrow_getfield(int1, 385072, 0);
            }
        };
    };
    if (((int2 != -1 as struct) && ((struct_getparam(int2, 2793) > 0) || (struct_getparam(int2, 2799) == 6)))) {
        return script734(struct_getparam(int2, 2809));
    };
    if (((struct_getparam(int0, 2213) != -1 as obj) && (OC_MEMBERS(struct_getparam(int0, 2213)) == 1))) {
        return true;
    };
    return false;
}