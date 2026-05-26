//
function script18055(): void {
    var int0 = 1;
    var int1 = 0;
    var int2 = script17901();
    var int3 = comp(1226, 34);
    CC_DELETEALL(int3);
    var int4 = 0;
    var int5 = -1 as dbrow;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    varclient_7298 = comp(-1, 65535);
    varclient_7299 = -1;
    var int9 = comp(-1, 65535);
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    script18057();
    while ((int0 <= int2)) {
        int4 = script17904(int0);
        if ((int4 > 0)) {
            [int9, int10, int13] = script18067(int0, int3, int13);
            if ((varplayer_11356 == int0)) {
                int11 = int0;
                varclient_7298 = int9;
                varclient_7299 = int10;
            };
            int5 = script17905(int0);
            int6 = dbrow_getfield(int5, 1020128, 0);
            if (((int6 == 1) || (int6 == 2))) {
                int14 = 1;
            } else if ((int6 == 3)) {
                int15 = 1;
            };
        } else if (((varplayer_11356 == int0) && (int4 == 0))) {
            varplayer_11356 = 0;
        };
        int0 = (int0 + 1);
    };
    script18059(int11);
    script18058();
    script18061(int3, int14, int15);
    script18065();
    if (((varclient_7307 <= 0) && (CC_FIND(varclient_7298, varclient_7299) == 1))) {
        script10643(script17989(2));
        int12 = (CC_UNKNOWN2() - 450);
    } else {
        int12 = varclient_7307;
    };
    script18056(int12);
    varclient_7307 = 0;
    if ((varclient_7298 != comp(-1, 65535))) {
        script18071(int11, varclient_7298, varclient_7299);
    } else {
        script18076();
    };
    return;
}