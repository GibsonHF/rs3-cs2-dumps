//
function script11520(): void {
    CC_DELETEALL(106627106);
    varclient_4887 = -1;
    var int0 = 0;
    while ((int0 < 32)) {
        CC_CREATE(106627106, 3, int0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETOP(1, "Select");
        CC_SETHIDE(1);
        CC_SETCOLOUR(0);
        CC_SETTRANS(255);
        int0 = (int0 + 1);
    };
    script11521(varplayer_5455);
    return;
}