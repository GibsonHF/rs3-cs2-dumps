//
function script18905(): void {
    var int0 = 41;
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as graphic;
    var string0 = "";
    var int4 = DB_LISTALL(284);
    var int5 = 0;
    CC_DELETEALL(comp(1284, 26));
    while ((int5 < int4)) {
        if ((script18856(int5) == 1)) {
            int5 = (int5 + 1);
        } else {
            int3 = script18859(int5);
            string0 = script18860(int5);
            int2 = script18857(int5);
            int0 = (41 * int2);
            if ((int2 > 1)) {
                int0 = (int0 + ((int2 - 1) * 4));
            };
            script14391(comp(1284, 26), int5, 0, int1, 0, 0, 41, int0, 0, 0);
            if ((STRING_LENGTH(string0) > 0)) {
                script3537(string0);
            };
            script10034(comp(1284, 26), 1, int5, 0, int5, 0, 0, 1, 1, 0, 0, 1, 1, 7571 as dbrow);
            script7920(comp(1284, 26), 2, int5, 0, int5, 0, 0, 1, 1, 8, (8 + (int0 - 41)), 1, 1, int3);
            int1 = (int1 + (int0 + 4));
            int5 = (int5 + 1);
        };
    };
    return;
}