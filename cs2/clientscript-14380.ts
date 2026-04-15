//
function script14380(): unknown_int {
    var int0 = IF_GETHEIGHT(comp(517, 168));
    var int1 = IF_GETSCROLLHEIGHT(comp(517, 168));
    var int2 = IF_GETSCROLLY(comp(517, 168));
    var int3 = 0;
    var int4 = 0;
    if ((int1 > int0)) {
        int3 = script8403(comp(517, 168));
        if ((int3 < 38)) {
            int4 = script8404(comp(517, 168));
            if (((int4 >= int0) && (int2 < (int1 - int0)))) {
                script11068();
                return 1;
            };
            if (((int4 <= (0 - 48)) && (int2 > 0))) {
                script10529();
                return 1;
            };
        };
    };
    return 0;
}