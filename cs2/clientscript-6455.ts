//
function script6455(int0: unknown_int): void {
    if ((int0 == 1)) {
        varclient_1963 = -1;
        varclient_1969 = false;
        script6443(0, 0, 10, 200, 1, 1);
    } else if ((((varclient_1963 == varbitplayer_673) && (varbitplayer_673 > 0)) && (int0 == 0))) {
        return;
    };
    script6473();
    script15002();
    if ((varbitplayer_673 < 1)) {
        return;
    };
    script7487(varbitplayer_673);
    script7488(varbitplayer_673);
    script6443(0, 0, 10, 200, 1, 1);
    script6454(-1 as struct, -1, varbitplayer_34341);
    varclient_2699 = -1;
    script10993(22);
    IF_SETHIDE(true, comp(1311, 472));
    IF_SETHIDE(true, comp(1311, 447));
    script6876(varbitplayer_673);
    script6873();
    script6878();
    script6880();
    if ((varbitplayer_673 == 1)) {
        varclient_1968 = 1;
        if ((CC_FIND(comp(1311, 343), 0) == 1)) {
            cc_setparam(6373, 1);
        };
    } else {
        varclient_1968 = 0;
    };
    script13254();
    return;
}