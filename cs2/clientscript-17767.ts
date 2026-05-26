//
function script17767(): void {
    CC_DELETEALL(80150534);
    CC_DELETEALL(80150549);
    CC_DELETEALL(80150540);
    CC_DELETEALL(80150553);
    CC_DELETEALL(80150535);
    CC_DELETEALL(80150550);
    CC_DELETEALL(80150541);
    CC_DELETEALL(80150554);
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
    IF_SETPOSITION(0, int0, 1, 0, 80150543);
    return;
}