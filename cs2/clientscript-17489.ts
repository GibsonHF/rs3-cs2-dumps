//
function script17489(int0: dbrow, int1: unknown_int, int2: unknown_int): graphic {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 233))) {
        return -1 as graphic;
    };
    var int3 = -1 as graphic;
    if ((int1 == 0)) {
        if ((int2 == 0)) {
            int3 = dbrow_getfield(int0, 954449, 0);
        } else if ((int2 == 1)) {
            int3 = dbrow_getfield(int0, 954465, 0);
        };
    } else if ((int1 == 1)) {
        if ((int2 == 0)) {
            int3 = dbrow_getfield(int0, 954450, 0);
        } else if ((int2 == 1)) {
            int3 = dbrow_getfield(int0, 954466, 0);
        };
    };
    if ((int3 != -1 as graphic)) {
        return int3;
    };
    switch (dbrow_getfield(int0, 954400, 0)) {
        case 1: {
            if ((int2 == 0)) {
                return struct_getparam(dbrow_getfield(int0, 954496, 0), 8120);
            };
            if ((int2 == 1)) {
                return struct_getparam(dbrow_getfield(int0, 954496, 0), 2802);
            };
            break;
        }
    };
    return -1 as graphic;
}