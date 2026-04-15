//
function script18022(int0: int, int1: boolean, int2: boolean, int3: int, int4: int): void {
    var int5 = comp(1227, 40);
    var int6 = 0;
    var int7 = 0;
    if ((int4 > 0)) {
        var int0 = script18018(int4);
    };
    if ((CC_FINDBYCATEGORY(int5, 2, int0) == 1)) {
        int6 = cc_getparam(4935);
        int7 = cc_getparam(8654);
        if ((CC_FINDBYCATEGORY(int5, int6, int7) == 1)) {
            CC_DELETE();
        };
        if ((CC_FINDBYCATEGORY(int5, 2, int0) == 1)) {
            script17947(int6, int7, 0, 0, 0, 0, 0, 0, 1, 1, script17986(int1, int2, int3));
            switch (int4) {
                case 1: {
                    if ((CC_FINDBYCATEGORY(int5, script17895(int0, 0)) == 1)) {
                        CC_SENDTOFRONT();
                    };
                    break;
                }
            };
        };
    };
    return;
}