//
function script8577(int0: component, int1: int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        cc_setparam(5151, CC_GETGRAPHIC());
        CC_SETONVARTRANSMIT(callback(script11655, int0, int1, 3814, 1));
        script11656();
    };
    return;
}