//
function script17767(): void {
    CC_DELETEALL(comp(1223, 6));
    CC_DELETEALL(comp(1223, 21));
    CC_DELETEALL(comp(1223, 12));
    CC_DELETEALL(comp(1223, 25));
    CC_DELETEALL(comp(1223, 7));
    CC_DELETEALL(comp(1223, 22));
    CC_DELETEALL(comp(1223, 13));
    CC_DELETEALL(comp(1223, 26));
    var int0 = 8;
    script17768();
    if ((varplayer_11131 == -1 as dbrow)) {
        script17769(int0);
        return;
    };
    int0 = (int0 + script17770());
    int0 = (int0 + script17771());
    int0 = (int0 + script17772());
    int0 = (int0 + script17773());
    int0 = (int0 + script17775(int0));
    IF_CHECK_SET(script734(varbitplayer_53834), 80150545);
    IF_SETPOSITION(0, int0, 1, 0, comp(1223, 15));
    return;
}