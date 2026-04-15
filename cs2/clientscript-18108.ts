//
function script18108(): void {
    if ((script17853() == -1 as dbrow)) {
        return;
    };
    var int0 = DB_GETFIELDCOUNT(script17853(), 991520);
    var int1 = 0;
    var int2 = 0;
    while ((int2 < int0)) {
        if ((CC_FINDBYCATEGORY(comp(403, 9), int2, 0) == 1)) {
            CC_SETPOSITION(CC_GETX(), int1, 0, 0);
            if ((cc_getparam(8193) == 1)) {
                int1 = (int1 + 58);
            } else {
                int1 = (int1 + cc_getparam(4255));
            };
        };
        int2 = (int2 + 1);
    };
    script18109(int1);
    return;
}