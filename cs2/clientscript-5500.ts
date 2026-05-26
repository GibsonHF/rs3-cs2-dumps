//
function script5500(): void {
    CC_DELETEALL(77135872);
    var int0 = script15709(1);
    var int1 = script15709(0);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    IF_SETHIDE(1, 77135873);
    IF_SETONTIMER(callback(), 77135872);
    IF_SETONTIMER(callback(), int0);
    IF_SETONTIMER(callback(), int1);
    varclient_1696 = -1;
    return;
}