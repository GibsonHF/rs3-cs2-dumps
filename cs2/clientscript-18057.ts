//
function script18057(): void {
    var int0 = script17896();
    var int1 = 0;
    var int2 = -1 as dbrow;
    while ((++int1 <= int0)) {
        int2 = script17897(int1);
        if ((int2 != -1 as dbrow)) {
            script15938(comp(1226, 34), (int1 + 40), 0, 0, ((100 * int1) - 100), 0, 0, IF_GETWIDTH(comp(1226, 34)), 200, 0, 0);
            cc_setparam(4255, (58 + 5));
            CC_SETPARAM_INT(8193, script17900(int1));
            script10485((int1 + 40), 2, ((IF_GETWIDTH(comp(1226, 34)) / 2) - 100), 20, 0, 0, (IF_GETWIDTH(comp(1226, 34)) / 3), 20, 0, 0, 7991 as dbrow, dbrow_getfield(int2, 1015808, 0));
            script7862(0, (int1 + 100), 4, 0, 0, 0, (IF_GETWIDTH(comp(1226, 34)) - 8), 58, 0, 0, 7968 as dbrow, "", true, 1, true, true);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script18063, int1));
        };
    };
    return;
}