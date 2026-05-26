//
function script16904(): void {
    var int0 = 0;
    var int1 = 0;
    CC_DELETEALL(59441221);
    while ((int0 < 4)) {
        if ((script16906(int0) == 1)) {
            script15938(59441221, int0, 0, int1, 0, 0, 0, 30, 30, 0, 0);
            CC_SETONCLICK(callback(script16914, int0));
            script7918(int0, 1, 0, 0, 1, 1, 13, 13, 0, 0, 25025);
            int1 = (int1 + 30);
        };
        int0 = (int0 + 1);
    };
    script15938(59441221, int0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SETNOCLICKTHROUGH(1);
    CC_SETHIDE(1);
    IF_SETSIZE(int1, 30, 0, 0, 59441221);
    if (((IF_FIND(59441221) == 1) && (cc_getparam(8704) != -1))) {
        script16905(cc_getparam(8704));
    };
    return;
}