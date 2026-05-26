//
function script18331(): void {
    var int0 = comp(1802, 288);
    var int1 = script17343();
    if ((int1 == -1)) {
        return;
    };
    var int2 = (int1 * 46);
    IF_SETSIZE(180, int2, 0, 0, int0);
    script7925(int0, 0, 0, 0, 0, 0, 0, int2, 1, 0, 0, 1, (int1 + 1), 4);
    var int3 = 0;
    var int4 = -1;
    var string0 = "";
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    while ((int3 <= int1)) {
        IF_CREATENESTED(0, (int3 + 1), 0, 0, 0, int0);
        CC_SETSIZE(0, 0, 1, 1);
        if ((int3 == 0)) {
            string0 = "Info";
            int5 = 33374;
            int6 = -1;
            int7 = 1;
        } else {
            int4 = script17347(int3);
            string0 = script18332(int4);
            int5 = script18333(int4);
            int6 = script18334(int4, int3);
            int7 = 0;
        };
        script7862(int3, 1, 0, 0, 0, 0, 0, 36, 1, 0, 4479, string0, 1, 1, 1, int7);
        CC_SETONBUTTONCLICK(callback(script18335, int4, int3));
        script7918(int3, 2, 6, 6, 0, 0, 24, 24, 0, 0, int5);
        script7918(int3, 3, 6, 6, 2, 0, 24, 24, 0, 0, int6);
        int3 = (int3 + 1);
    };
    return;
}