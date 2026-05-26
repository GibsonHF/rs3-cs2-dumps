//
function script14380(): number {
    var int0 = IF_GETHEIGHT(33882280);
    var int1 = IF_GETSCROLLHEIGHT(33882280);
    var int2 = IF_GETSCROLLY(33882280);
    var int3 = 0;
    var int4 = 0;
    if ((int1 > int0)) {
        int3 = script8403(33882280);
        if ((int3 < 38)) {
            int4 = script8404(33882280);
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