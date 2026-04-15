//
function script14381(): unknown_int {
    var int0 = IF_GETWIDTH(comp(517, 168));
    var int1 = IF_GETSCROLLWIDTH(comp(517, 168));
    var int2 = IF_GETSCROLLX(comp(517, 168));
    var int3 = 0;
    var int4 = 0;
    if ((int1 > int0)) {
        int4 = script8404(comp(517, 168));
        if ((int4 < 48)) {
            int3 = script8403(comp(517, 168));
            if (((int3 >= int0) && (int2 < (int1 - int0)))) {
                script11068();
                return 1;
            };
            if (((int3 <= (0 - 48)) && (int2 > 0))) {
                script10529();
                return 1;
            };
        };
    };
    return 0;
}