//
function script12097(int0: struct): int {
    var int1 = 0;
    var int2 = struct_getparam(int0, 6569);
    if ((int2 == -1 as dbrow)) {
        if ((struct_getparam(int0, 2215) > 0)) {
            int1 = struct_getparam(int0, 2215);
        };
    } else {
        switch (DB_GETROWTABLE(int2)) {
            case 5: {
                int1 = 27;
                break;
            }
            case 88: {
                int1 = 28;
                break;
            }
            default: {
                if ((struct_getparam(int0, 2215) > 0)) {
                    int1 = struct_getparam(int0, 2215);
                };
                break;
            }
        };
    };
    return int1;
}