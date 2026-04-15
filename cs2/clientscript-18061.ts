//
function script18061(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = (script17901() + 1);
    var int5 = 0;
    var int6 = 2195;
    var int7 = 20;
    if ((((int1 == 0) || (int2 == 0)) && (CC_FINDBYCATEGORY(int0, (1 + 40), 0) == 1))) {
        int5 = cc_getparam(4255);
        cc_setparam(4255, (int5 + 75));
        script15937(int4, int3, 0, int5, 0, 0, 0, 0, 1, 1);
        int3 = (int3 + 1);
        script7918(int4, int3, 90, 5, 0, 0, 60, 60, 0, 0, 4442 as graphic);
        int3 = (int3 + 1);
        if (((int1 == 0) && (int2 == 0))) {
            int7 = 5;
        };
        if ((int1 == 0)) {
            script10485(int4, int3, 160, int7, 0, 0, 0, 30, 1, 0, 7979 as dbrow, `New Daily Hero Point Mission in: ${script18087(varplayer_11359, 1, 0)}`);
            int3 = (int3 + 1);
            int7 = (int7 + 26);
        };
        if ((int2 == 0)) {
            script10485(int4, int3, 160, int7, 0, 0, 0, 30, 1, 0, 7979 as dbrow, `New Weekly Hero Point Mission in: ${script18087(script18062(), 1, 0)}`);
            int3 = (int3 + 1);
        };
        script7862(0, int4, 8, 0, 0, 0, (IF_GETWIDTH(int0) - 16), 70, 0, 0, script17989(2), "", false, 1, false, false);
    };
    int4 = (int4 + 1);
    if ((CC_FINDBYCATEGORY(int0, (2 + 40), 0) == 1)) {
        int5 = cc_getparam(4255);
        cc_setparam(4255, (int5 + 75));
        script15937(int4, int3, 0, int5, 0, 0, 0, 0, 1, 1);
        int3 = (int3 + 1);
        script7918(int4, int3, 90, 5, 0, 0, 60, 60, 0, 0, 4465 as graphic);
        int3 = (int3 + 1);
        script10485(int4, int3, 160, 20, 0, 0, 0, 30, 1, 0, 7982 as dbrow, `New Random General Mission in: ${script18087(script18062(), 1, 0)}`);
        int3 = (int3 + 1);
        script7862(0, int4, 8, 0, 0, 0, (IF_GETWIDTH(int0) - 16), 70, 0, 0, script17989(2), "", false, 1, false, false);
    };
    return;
}