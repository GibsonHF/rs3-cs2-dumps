//
function script12127(int0: component, int1: int): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    script12129(varplayer_5988, varplayer_5994, varplayer_5995);
    return;
}