//
function script19931(int0: dbrow): int {
    var int1 = dbrow_getfield(int0, 1306640, 0);
    var int2 = CC_SETPARAM_STRING(WORLDMAP_LISTELEMENT_START(1306640, int1, 3, 0), 1306624, 1, -1, 0);
    var int3 = -1;
    var int4 = -1;
    while ((++int3 < int2)) {
        dbrow_findnext();
        int4 = stack();
        if ((int4 == int0)) {
            return int3;
        };
    };
    script12478("Unable to find clue number.");
    return 0;
}