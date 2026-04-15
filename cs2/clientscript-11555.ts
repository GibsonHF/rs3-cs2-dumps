//
function script11555(int0: obj, int1: int): void {
    if (((int0 == -1 as obj) || (int1 < 0))) {
        return;
    };
    script12094(int0, 676 as inv, int1);
    if ((script11470(int0) > 0)) {
        if ((int1 < varbitplayer_28114)) {
            varclient_4645 = "<col=00FF00>Protected: Will not degrade on death.";
        } else {
            varclient_4645 = "<col=FF0000>Unprotected: Will degrade on death.";
        };
    };
    return;
}