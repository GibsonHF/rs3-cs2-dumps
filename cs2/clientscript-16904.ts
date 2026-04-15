//
function script16904(): void {
    var int0 = 0;
    var int1 = 0;
    CC_DELETEALL(comp(907, 69));
    while ((int0 < 4)) {
        if ((script16906(int0) == 1)) {
            script15938(comp(907, 69), int0, 0, int1, 0, 0, 0, 30, 30, 0, 0);
            CC_SETONCLICK(callback(script16914, int0));
            script7918(int0, 1, 0, 0, 1, 1, 13, 13, 0, 0, 25025);
            int1 = (int1 + 30);
        };
        int0 = (int0 + 1);
    };
    script15938(comp(907, 69), int0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    CC_SETNOCLICKTHROUGH(true);
    CC_SETHIDE(true);
    IF_SETSIZE(int1, 30, 0, 0, comp(907, 69));
    if (((IF_FIND(comp(907, 69)) == 1) && (cc_getparam(8704) != -1))) {
        script16905(cc_getparam(8704));
    };
    return;
}