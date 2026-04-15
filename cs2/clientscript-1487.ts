//[proc,bank_cert_button]
function script1487(int0: component, int1: unknown_int): void {
    var string0 = "";
    if ((varplayer_160 == 0)) {
        script13960(int0, 28222 as struct, false, 0);
        stack(1428);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTRANS(128, int1);
        string0 = "Switch to note withdrawal mode";
    } else {
        script13960(int0, 28222 as struct, false, 1);
        stack(1427);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETTRANS(0, int1);
        string0 = "Switch to item withdrawal mode";
    };
    IF_SETOP(1, string0, int0);
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), int0);
    return;
}