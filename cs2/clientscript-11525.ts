//
function script11525(): void {
    IF_SETCOLOUR(HSVTORGB(script11527(varplayer_5455, varplayer_5456)), comp(1627, 35));
    script11521(varplayer_5455);
    if (((varclient_4887 != -1) && (CC_FIND(comp(1627, 34), varclient_4887) == 1))) {
        CC_SETHIDE(true);
    };
    varclient_4887 = -1;
    return;
}