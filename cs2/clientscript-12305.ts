//
function script12305(int0: unknown_int): void {
    if (((int0 == 1) && ((IF_GETNEXTSUBID(comp(1477, 13)) != 0) || (IF_GETNEXTSUBID(comp(1477, 14)) != 0)))) {
        return;
    };
    CC_DELETEALL(comp(1477, 13));
    CC_DELETEALL(comp(1477, 14));
    script12307();
    IF_SETHIDE(true, comp(1477, 13));
    IF_SETHIDE(true, comp(1477, 14));
    if ((script12278() == 0)) {
        return;
    };
    if ((varbitclient_30618 == 0)) {
        script12296(1, 0);
    } else {
        varclient_5156 = MAX(varclient_5156, 1);
    };
    IF_SETONTIMER(callback(script12306), comp(1477, 12));
    return;
}