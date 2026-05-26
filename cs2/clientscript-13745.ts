//
function script13745(int0: number): void {
    if ((int0 == -1)) {
        var int0 = varbitplayer_45139;
    };
    var int1 = 0;
    if ((varclient_6709 > 0)) {
        IF_SETTRANS(0, 33882177);
    } else {
        int1 = 1;
        IF_SETTRANS(128, 33882177);
    };
    script13973(33882167, 33882168, 28595, "", 0, script9670(int0, 0));
    script13973(33882171, 33882172, 28595, "", 0, script9670(int0, 2));
    script13973(33882175, 33882176, 28595, "", int1, script9670(int0, 1));
    if ((varbitclient_45221 == int0)) {
        return;
    };
    varbitplayer_45139 = int0;
    varbitclient_45221 = int0;
    script9313();
    script13572();
    return;
}