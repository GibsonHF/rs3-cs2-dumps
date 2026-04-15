//
function script18058(): void {
    var int0 = script17896();
    var int1 = 0;
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = 7989 as dbrow;
    while ((++int1 <= int0)) {
        int2 = script17897(int1);
        if (((int2 != -1 as dbrow) && (CC_FINDBYCATEGORY(comp(1226, 34), (int1 + 40), 0) == 1))) {
            int3 = cc_getparam(5165);
            if ((int3 == 0)) {
                int4 = 7992 as dbrow;
            } else {
                int4 = 7991 as dbrow;
            };
            script10485((int1 + 40), 3, 25, 20, 0, 0, 20, 20, 0, 0, int4, inttostring(int3, 10));
            cc_setparam(5165, 1);
        };
    };
    return;
}