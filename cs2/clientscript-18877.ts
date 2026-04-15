//
function script18877(int0: unknown_int, int1: dbrow): string {
    var string0 = script18921(int1, 24);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    var int2 = script18920(int1, 23);
    switch (int2) {
        case 1: {
            return "Open Website";
        }
        case 2: {
            return "Read News";
        }
        case 3: {
            return "Open Interface";
        }
        case 4: {
            return "Teleport";
        }
        case 5: {
            return "Open Settings";
        }
        case 6: {
            return "Advent Calendar";
        }
    };
    if ((script18925(int1, 16) != -1 as quest)) {
        return "View Quest";
    };
    var int3 = script18924(int1, 15);
    if ((struct_getparam(int3, 1346) > 0)) {
        return "View Boss";
    };
    stack(1163264);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int4 = stack();
    if ((int4 != -1)) {
        return dbrow_getfield(int4, 1163360, 0);
    };
    return "Continue";
}