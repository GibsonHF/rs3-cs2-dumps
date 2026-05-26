//
function script18064(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FINDBYCATEGORY(80347170, (int0 + 40), 0) == 1)) {
        if ((int1 == 1)) {
            int2 = (1 - cc_getparam(8193));
            CC_SETPARAM_INT(8193, int2);
            script17899(int0, int2);
        };
        int3 = cc_getparam(8193);
        if ((int3 == 0)) {
            CC_SETSIZE(IF_GETWIDTH(80347170), cc_getparam(4255), 0, 0);
        } else {
            CC_SETSIZE(IF_GETWIDTH(80347170), 58, 0, 0);
        };
        if ((CC_FINDBYCATEGORY(80347170, 0, (int0 + 100)) == 1)) {
            script7872(1, 1, 1, script734(int3));
        };
    };
    script18056(IF_GETSCROLLY(80347170));
    return;
}