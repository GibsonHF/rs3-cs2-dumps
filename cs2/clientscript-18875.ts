//
function script18875(int0: number, int1: number, int2: number): number {
    var int3 = -1;
    var int4 = -1;
    if ((int0 != -1)) {
        int3 = script18922(int0, 7);
        switch (MAP_LANG()) {
            case 1: {
                int4 = script18922(int0, 8);
                break;
            }
            case 2: {
                int4 = script18922(int0, 9);
                break;
            }
            case 3: {
                int4 = script18922(int0, 10);
                break;
            }
        };
    } else if ((int1 != -1)) {
        int3 = struct_getparam(int1, 9102);
        switch (MAP_LANG()) {
            case 1: {
                int4 = struct_getparam(int1, 9103);
                break;
            }
            case 2: {
                int4 = struct_getparam(int1, 9104);
                break;
            }
            case 3: {
                int4 = struct_getparam(int1, 9105);
                break;
            }
        };
    };
    if ((int4 != -1)) {
        return int4;
    };
    if ((int3 != -1)) {
        return int3;
    };
    stack(1163264);
    stack(int2);
    DB_FIND(0);
    var int5 = dbrow_findnext();
    if ((int5 != -1)) {
        int3 = dbrow_getfield(int5, 1163296, 0);
    };
    return int3;
}