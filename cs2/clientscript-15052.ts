//
function script15052(int0: obj): void {
    if ((varclient_2235 != comp(105, 332))) {
        IF_TRIGGEROP(comp(105, 341), -1, 1);
        varclient_6787 = 10;
        IF_SETONTIMER(callback(script15061, int0), comp(105, 323));
    };
    script15054();
    if ((varclient_2235 != comp(105, 332))) {
        script15060(varclient_6788, int0, 0);
    } else {
        script15060(varclient_2250, int0, 0);
    };
    if ((varplayer_135 != int0)) {
        varplayer_135 = int0;
        script621();
        script15036(0, 1, 1, 1, 1);
    };
    return;
}