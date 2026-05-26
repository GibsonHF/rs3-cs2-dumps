//
function script14228(): void {
    script3350();
    CC_DELETEALL(86638602);
    CC_DELETEALL(86638606);
    CC_DELETEALL(86638601);
    CC_DELETEALL(86638609);
    CC_DELETEALL(86638605);
    IF_SETSIZE(0, 0, 0, 0, 86638597);
    IF_SETPOSITION(0, 0, 0, 0, 86638597);
    IF_SETSCROLLPOS(0, 0, 86638602);
    IF_SETHIDE(1, 86638593);
    IF_SETHIDE(1, 86638596);
    IF_SETHIDE(1, 86638595);
    IF_SETHIDE(1, 86638594);
    IF_SETHIDE(1, 86638608);
    IF_SETHIDE(1, 86638607);
    if ((script6431() == 1)) {
        stack(-1);
        stack("");
        stack(script83());
        IF_SETONRELEASE();
        ACTIVECLANCHANNEL_FIND_AFFINED(0);
    };
    return;
}