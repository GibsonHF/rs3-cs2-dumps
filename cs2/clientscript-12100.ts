//
function script12100(int0: number, int1: number): number {
    var int2 = 0;
    if ((int0 != -1)) {
        int2 = struct_getparam(int0, 2220);
        var int1 = struct_getparam(int0, 6569);
    };
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                switch (dbrow_getfield(int1, 20592, 0)) {
                    case 2: {
                        int2 = 4;
                        break;
                    }
                    case 1: {
                        int2 = 3;
                        break;
                    }
                    case 0: {
                        int2 = 2;
                        break;
                    }
                    case 3: {
                        int2 = 5;
                        break;
                    }
                };
                if ((struct_getparam(int0, 2218) == true)) {
                    int2 = 1;
                };
                break;
            }
            case 370: {
                int2 = enum_getvalue(0, 0, 8820 as cs2enum, dbrow_getfield(int1, 1515600, 0));
                break;
            }
        };
    };
    return int2;
}