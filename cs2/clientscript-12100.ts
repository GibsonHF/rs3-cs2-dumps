//
function script12100(int0: struct): int {
    var int1 = 0;
    var int2 = struct_getparam(int0, 6569);
    if ((int2 == -1 as dbrow)) {
        int1 = struct_getparam(int0, 2220);
    } else {
        switch (DB_GETROWTABLE(int2)) {
            case 5: {
                switch (dbrow_getfield(int2, 20592, 0)) {
                    case 2: {
                        int1 = 4;
                        break;
                    }
                    case 1: {
                        int1 = 3;
                        break;
                    }
                    case 0: {
                        int1 = 2;
                        break;
                    }
                    case 3: {
                        int1 = 5;
                        break;
                    }
                };
                if ((struct_getparam(int0, 2218) == true)) {
                    int1 = 1;
                };
                break;
            }
            default: {
                int1 = struct_getparam(int0, 2220);
                break;
            }
        };
    };
    return int1;
}