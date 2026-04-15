//
function script13745(int0: int): void {
    if ((int0 == -1)) {
        var int0 = varbitplayer_45139;
    };
    var int1 = false;
    if ((varclient_6709 > 0)) {
        IF_SETTRANS(0, comp(517, 65));
    } else {
        int1 = true;
        IF_SETTRANS(128, comp(517, 65));
    };
    script13973(comp(517, 55), comp(517, 56), 28595 as struct, "", false, script9670(int0, 0));
    script13973(comp(517, 59), comp(517, 60), 28595 as struct, "", false, script9670(int0, 2));
    script13973(comp(517, 63), comp(517, 64), 28595 as struct, "", int1, script9670(int0, 1));
    if ((varbitclient_45221 == int0)) {
        return;
    };
    varbitplayer_45139 = int0;
    varbitclient_45221 = int0;
    script9313();
    script13572();
    return;
}