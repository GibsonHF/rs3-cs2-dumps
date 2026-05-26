//
function script12305(int0: number): void {
    if (((int0 == 1) && ((IF_GETNEXTSUBID(96796685) != 0) || (IF_GETNEXTSUBID(96796686) != 0)))) {
        return;
    };
    CC_DELETEALL(96796685);
    CC_DELETEALL(96796686);
    script12307();
    IF_SETHIDE(1, 96796685);
    IF_SETHIDE(1, 96796686);
    if ((script12278() == 0)) {
        return;
    };
    if ((varbitclient_30618 == 0)) {
        script12296(1, 0);
    } else {
        varclient_5156 = MAX(varclient_5156, 1);
    };
    IF_SETONTIMER(callback(script12306), 96796684);
    return;
}