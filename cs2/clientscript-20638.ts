//
function script20638(int0: int): void {
    IF_SETSCROLLPOS(0, 0, comp(1498, 2));
    var int1 = 0;
    int1 = script20641("Search Results", int1);
    var int2 = script20635(int1);
    var int3 = 0;
    var int4 = CC_SETPARAM_STRING(script20644(int0, 1), 1425408, 0, -1, 0);
    if ((int4 > 0)) {
        int3 = (int3 + script20636(int0, 1, int2, 0, 0));
    };
    var int5 = CC_SETPARAM_STRING(script20644(int0, 0), 1425408, 0, -1, 0);
    if ((int5 > 0)) {
        int3 = (int3 + script20636(int0, 0, int2, 0, 0));
    };
    int1 = script20637(int1, int3, int2);
    if ((int3 == 0)) {
        script2995(comp(1498, 2), IF_GETNEXTSUBID(comp(1498, 2)), 11, int1, 0, 0, 22, 20, 1, 0, 2099 as dbrow, "No results.");
    };
    script20634(int1);
    return;
}