//
function script1610(): void {
    IF_SETHIDE(false, comp(549, 66));
    if ((script133(pos(0,50,50,0,0), pos(0,50,50,60,63), COORD()) == 1)) {
        IF_SETTEXT("This won't send your photo to the web.<br><br> Are you sure you want to continue?", comp(549, 3));
    };
    return;
}