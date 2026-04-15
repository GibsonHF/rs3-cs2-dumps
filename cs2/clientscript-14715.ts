//
function script14715(int0: struct): obj {
    var int1 = struct_getparam(int0, 2213);
    if ((int1 != -1 as obj)) {
        return int1;
    };
    var int2 = struct_getparam(int0, 6569);
    var int3 = -1 as dbrow;
    var int4 = 0;
    if ((int2 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int2)) {
            case 86: {
                if ((dbrow_getfield(int2, 352272, 0) == 2)) {
                    int3 = dbrow_getfield(int2, 352528, 0);
                    if (((int3 != -1 as dbrow) && (DB_GETFIELDCOUNT(int3, 360720) > 0))) {
                        [int3, int4] = dbrow_getfield(int3, 360720, MAX(0, (DB_GETFIELDCOUNT(int3, 360720) - 1)));
                        if (((int3 != -1 as dbrow) && (DB_GETROWTABLE(int3) == 89))) {
                            int1 = dbrow_getfield(int3, 364640, 0);
                        };
                    };
                };
                break;
            }
            case 88: {
                switch (dbrow_getfield(int2, 360464, 0)) {
                    case 1: {
                        if ((DB_GETFIELDCOUNT(int2, 360720) > 0)) {
                            [int3, int4] = dbrow_getfield(int2, 360720, 0);
                            if (((int3 != -1 as dbrow) && (DB_GETROWTABLE(int3) == 89))) {
                                int1 = dbrow_getfield(int3, 364640, 0);
                            };
                        };
                        break;
                    }
                    case 2: {
                        if ((DB_GETFIELDCOUNT(int2, 360688) > 0)) {
                            [int1, int4] = dbrow_getfield(int2, 360688, 0);
                        };
                        break;
                    }
                };
                break;
            }
            case 94: {
                int1 = dbrow_getfield(int2, 385168, 0);
                break;
            }
            case 235: {
                int1 = dbrow_getfield(int2, 962769, 0);
                break;
            }
        };
    };
    return int1;
}