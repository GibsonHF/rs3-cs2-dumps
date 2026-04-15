//
function script10363(int0: component, int1: component): void {
    var string0 = "";
    if ((IF_FIND(int1) == 1)) {
        string0 = cc_getparam(5206);
    };
    if ((strcmp(string0, "") != 0)) {
        FRIEND_DEL(REMOVETAGS(string0));
    };
    IF_SETHIDE(true, int0);
    return;
}