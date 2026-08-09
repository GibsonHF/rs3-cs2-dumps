//
function script14715(int0: number, int1: number): number {
    var int2 = -1 as obj;
    if ((int0 != -1)) {
        int2 = struct_getparam(int0, 2213);
        if ((int2 != -1 as obj)) {
            return int2;
        };
        var int1 = struct_getparam(int0, 6569);
    };
    var int3 = -1 as dbrow;
    var int4 = 0;
    if ((int1 != -1)) {
        switch (DB_GETROWTABLE(int1)) {
            case 86: {
                if ((dbrow_getfield(int1, 352272, 0) == 2)) {
                    int3 = dbrow_getfield(int1, 352528, 0);
                    if (((int3 != -1 as dbrow) && (DB_GETFIELDCOUNT(int3, 360720) > 0))) {
                        [int3, int4] = dbrow_getfield(int3, 360720, MAX(0, (DB_GETFIELDCOUNT(int3, 360720) - 1)));
                        if (((int3 != -1) && (DB_GETROWTABLE(int3) == 89))) {
                            int2 = dbrow_getfield(int3, 364640, 0);
                        };
                    };
                };
                break;
            }
            case 88: {
                switch (dbrow_getfield(int1, 360464, 0)) {
                    case 1: {
                        if ((DB_GETFIELDCOUNT(int1, 360720) > 0)) {
                            [int3, int4] = dbrow_getfield(int1, 360720, 0);
                            if (((int3 != -1) && (DB_GETROWTABLE(int3) == 89))) {
                                int2 = dbrow_getfield(int3, 364640, 0);
                            };
                        };
                        break;
                    }
                    case 2: {
                        if ((DB_GETFIELDCOUNT(int1, 360688) > 0)) {
                            [int2, int4] = dbrow_getfield(int1, 360688, 0);
                        };
                        break;
                    }
                };
                break;
            }
            case 94: {
                int2 = dbrow_getfield(int1, 385168, 0);
                break;
            }
            case 235: {
                int2 = dbrow_getfield(int1, 962769, 0);
                break;
            }
            case 370: {
                int2 = dbrow_getfield(int1, 1515584, 0);
                break;
            }
        };
    };
    return int2;
}