//
function script5500(): void {
    CC_DELETEALL(comp(1177, 0));
    var int0 = script15709(1);
    var int1 = script15709(0);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    IF_SETHIDE(true, comp(1177, 1));
    IF_SETONTIMER(callback(), comp(1177, 0));
    IF_SETONTIMER(callback(), int0);
    IF_SETONTIMER(callback(), int1);
    varclient_1696 = -1;
    return;
}