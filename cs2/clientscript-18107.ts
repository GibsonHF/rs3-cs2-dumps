//
function script18107(int0: int): void {
    var int1 = 0;
    if ((CC_FINDBYCATEGORY(comp(403, 9), int0, 0) == 1)) {
        int1 = (1 - cc_getparam(8193));
        CC_SETPARAM_INT(8193, int1);
        if ((int1 == 0)) {
            CC_SETSIZE(CC_GETWIDTH(), cc_getparam(4255), 0, 0);
        } else {
            CC_SETSIZE(CC_GETWIDTH(), 58, 0, 0);
        };
        script18108();
    };
    return;
}