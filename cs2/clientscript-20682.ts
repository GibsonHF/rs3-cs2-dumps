//
function script20682(int0: dbrow): [int, unknown_string, unknown_int] {
    var int1 = (script20673(int0) - 1);
    if ((((int0 == -1 as dbrow) || (script20666(int0) == 2)) || (int1 < 0))) {
        return [-1, "", -1];
    };
    var int2 = -1 as var_reference;
    var int3 = -1;
    var string0 = "";
    var int4 = -1;
    var int5 = -1;
    [string0, int2, int4, int5] = script20681(int0, int1);
    if (((int4 > 0) && (int2 != -1 as var_reference))) {
        int3 = WORLDMAP_GETDISPLAYCOORD(int2);
        if ((int5 == 1)) {
            int3 = BITCOUNT(int3);
        };
    };
    return [int3, string0, int4];
}