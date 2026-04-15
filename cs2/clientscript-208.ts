//
function script208(): unknown_int {
    var int0 = 0;
    var int1 = MAP_WORLD();
    var string0 = "";
    var int2 = 0;
    var string1 = "";
    var int3 = 0;
    var int4 = 0;
    var string2 = "";
    if ((int1 != -1)) {
        stack(WORLDLIST_SPECIFIC(int1));
        [int0, string0, int2, string1, int3, int4, string2] = stack();
        if ((TESTBIT(int0, 5) == 1)) {
            return 1;
        };
    };
    return 0;
}