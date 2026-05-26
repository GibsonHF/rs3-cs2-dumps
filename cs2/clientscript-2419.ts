//
function script2419(): void {
    if ((varclient_806 > 0)) {
        IF_SETHIDE(1, 50135052);
    };
    if ((varclient_806 > 1)) {
        IF_SETMODEL(46964, 50135046);
    };
    if ((varclient_806 > 2)) {
        if ((varbitplayer_13734 == 75)) {
            IF_SETMODEL(46956, 50135046);
            IF_SETHIDE(1, 50135054);
        } else {
            IF_SETMODEL(46966, 50135046);
            IF_SETHIDE(1, 50135063);
        };
    };
    if ((varclient_806 > 3)) {
        if ((varbitplayer_13734 == 75)) {
            IF_SETMODEL(46965, 50135046);
            IF_SETHIDE(1, 50135056);
        } else {
            IF_SETMODEL(46957, 50135046);
            IF_SETHIDE(1, 50135064);
            IF_SETOP(1, "Inspect", 50135046);
        };
    };
    if ((varbitplayer_13748 == 0)) {
        IF_SETMODELANIM(11762, 50135051);
    } else if ((varbitplayer_13748 == 1)) {
        IF_SETMODELANIM(11761, 50135051);
    } else if ((varbitplayer_13748 == 2)) {
        IF_SETMODELANIM(11760, 50135051);
    } else if ((varbitplayer_13748 == 3)) {
        IF_SETMODELANIM(11759, 50135051);
    } else if ((varbitplayer_13748 == 4)) {
        IF_SETMODELANIM(11763, 50135051);
    } else if ((varbitplayer_13748 == 5)) {
        IF_SETMODELANIM(11764, 50135051);
    } else if ((varbitplayer_13748 == 6)) {
        IF_SETMODELANIM(11765, 50135051);
    };
    return;
}