//
function script2197(int0: component, int1: int, string0: string): void {
    var int2 = 0;
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((varclient_198 != 1)) {
            CC_SETONTIMER(callback());
            CC_SETTEXT(string0);
            return;
        };
        if ((MODULO(CLIENTCLOCK(), 20) > 9)) {
            CC_SETTEXT("");
        } else {
            CC_SETTEXT(string0);
        };
    };
    return;
}