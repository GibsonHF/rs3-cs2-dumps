//
function script10528(): void {
    script13991(33882275, -1, 28557, 1);
    if ((varbitplayer_45192 == 1)) {
        IF_SETONTIMER(callback(script13348, (IF_GETSCROLLHEIGHT(33882280) - IF_GETHEIGHT(33882280))), 33882270);
    } else {
        IF_SETONTIMER(callback(script13348, (IF_GETSCROLLWIDTH(33882280) - IF_GETWIDTH(33882280))), 33882270);
    };
    return;
}