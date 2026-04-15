//
function script11870(int0: component, int1: component, int2: component): void {
    var int3 = 0;
    if ((varbitplayer_43685 == 1)) {
        int3 = MAX(0, SCALE(varplayer_1787, 60, IF_GETHEIGHT(int2)));
        IF_SETTEXT(inttostring(varplayer_1787, 10), int1);
    } else {
        int3 = MAX(0, SCALE(script873(), (script859() / 10), IF_GETHEIGHT(int2)));
        IF_SETTEXT(inttostring(script873(), 10), int1);
    };
    IF_SETSIZE(IF_GETWIDTH(int0), int3, 0, 0, int0);
    return;
}