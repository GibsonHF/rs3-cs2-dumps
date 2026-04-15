//
function script1730(int0: component, int1: int): void {
    if (((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1)) && (varclient_198 != 1))) {
        CC_SETHIDE(false);
        varclient_198 = 1;
        CC_SETONTIMER(callback(script2196, int0, int1, CC_GETTEXT()));
    };
    return;
}