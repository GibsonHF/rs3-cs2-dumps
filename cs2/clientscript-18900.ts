//
function script18900(): void {
    var int0 = script18854();
    var int1 = (int0 * (91 + 4));
    IF_SETSIZE(int1, IF_GETHEIGHT(comp(1284, 17)), 0, 0, comp(1284, 17));
    var int2 = 0;
    var int3 = 0;
    if ((IF_FIND(comp(1284, 17)) == 1)) {
        while ((int3 < int0)) {
            int2 = ((int3 * (91 + 4)) + 4);
            script10033(0, int3, int2, 0, 0, 2, 91, 35, 0, 0, 7571 as dbrow);
            script10485(1, int3, int2, 0, 0, 2, 91, 35, 0, 0, 5999 as dbrow, "");
            int3 = (int3 + 1);
        };
    };
    int3 = 0;
    if ((IF_FIND(comp(1284, 18)) == 1)) {
        while ((int3 <= (int0 + 1))) {
            int2 = ((int3 * (91 + 4)) + 1);
            script10033(0, int3, int2, 0, 0, 0, 2, 0, 0, 1, 13568 as dbrow);
            int3 = (int3 + 1);
        };
        int3 = (int3 + 1);
        script10033(0, int3, 1, 0, 0, 0, (int1 + 2), 2, 0, 0, 13568 as dbrow);
    };
    script18902();
    return;
}