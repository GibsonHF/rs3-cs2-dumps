//
function script15052(int0: number, int1: number): void {
    var int2 = script20893();
    if ((int2 == 0)) {
        IF_TRIGGEROP(comp(105, 228), -1, 1);
        varclient_6787 = 10;
        IF_SETONTIMER(callback(script15061, int0), comp(105, 212));
    };
    script15054();
    if ((int1 <= 0)) {
        if ((int2 == 0)) {
            if ((STRING_LENGTH(varclient_6788) > 0)) {
                script15060(varclient_6788, int0, 0);
            } else if ((IF_FIND(comp(105, 225)) == 1)) {
                script15060(CC_GETTEXT(), int0, 0);
            };
        } else if ((IF_FIND(comp(105, 225)) == 1)) {
            script15060(CC_GETTEXT(), int0, 0);
        };
    };
    if ((varplayer_135 != int0)) {
        varplayer_135 = int0;
        script621();
        script15036(0, 1, 1, 1, 1, 1);
        if (((int1 == 1) || (int1 == 2))) {
            script20898(0);
        };
    };
    return;
}