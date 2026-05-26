//
function script11525(): void {
    IF_SETCOLOUR(HSVTORGB(script11527(varplayer_5455, varplayer_5456)), 106627107);
    script11521(varplayer_5455);
    if (((varclient_4887 != -1) && (CC_FIND(106627106, varclient_4887) == 1))) {
        CC_SETHIDE(1);
    };
    varclient_4887 = -1;
    return;
}