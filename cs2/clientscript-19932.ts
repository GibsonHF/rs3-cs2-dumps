//
function script19932(int0: dbrow): unknown_int {
    var int1 = dbrow_getfield(int0, 1302544, 0);
    var int2 = dbrow_getfield(int0, 1302576, 0);
    var int3 = -1 as var_reference;
    var int4 = -1;
    [int3, int4] = dbrow_getfield(int0, 1302528, 0);
    if ((script12477() < int1)) {
        return 1;
    };
    if (((script12477() == int1) && (script19938() < dbrow_getfield(int0, 1302560, 0)))) {
        return 1;
    };
    if ((script12477() > int2)) {
        return 2;
    };
    if (((script12477() == int2) && (script19938() >= dbrow_getfield(int0, 1302592, 0)))) {
        return 2;
    };
    if (((int3 != -1 as var_reference) && (WORLDMAP_GETDISPLAYCOORD(int3) < int4))) {
        return 3;
    };
    return 0;
}