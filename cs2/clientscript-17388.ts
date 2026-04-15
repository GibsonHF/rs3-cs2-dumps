//
function script17388(int0: int, int1: unknown_int): void {
    var int2 = 0;
    if ((varplayer_139 == 1)) {
        if ((OC_CERT(varplayer_135) != varplayer_135)) {
            int2 = script11882(INV_TOTAL(93 as inv, varplayer_135), INV_TOTAL(93 as inv, OC_CERT(varplayer_135)));
        } else {
            int2 = INV_TOTAL(93 as inv, varplayer_135);
        };
        if ((int0 == 1000)) {
            varclient_84 = int2;
        } else if ((int1 == 1)) {
            varclient_84 = MIN(int2, int0);
        } else {
            varclient_84 = MIN(int2, (varclient_84 + int0));
        };
    } else if ((varclient_84 <= (2147483647 - int0))) {
        varclient_84 = (varclient_84 + int0);
    } else {
        varclient_84 = 2147483647;
    };
    script15038(varclient_84, varclient_85, 1);
    return;
}