//
function script14228(): void {
    script3350();
    CC_DELETEALL(comp(1322, 10));
    CC_DELETEALL(comp(1322, 14));
    CC_DELETEALL(comp(1322, 9));
    CC_DELETEALL(comp(1322, 17));
    CC_DELETEALL(comp(1322, 13));
    IF_SETSIZE(0, 0, 0, 0, comp(1322, 5));
    IF_SETPOSITION(0, 0, 0, 0, comp(1322, 5));
    IF_SETSCROLLPOS(0, 0, comp(1322, 10));
    IF_SETHIDE(true, comp(1322, 1));
    IF_SETHIDE(true, comp(1322, 4));
    IF_SETHIDE(true, comp(1322, 3));
    IF_SETHIDE(true, comp(1322, 2));
    IF_SETHIDE(true, comp(1322, 16));
    IF_SETHIDE(true, comp(1322, 15));
    if ((script6431() == true)) {
        stack(-1);
        stack("");
        stack(script83());
        IF_SETONRELEASE();
        ACTIVECLANCHANNEL_FIND_AFFINED(0);
    };
    return;
}