//
function script20208(): void {
    CC_DELETEALL(comp(1401, 44));
    CC_DELETEALL(comp(1401, 21));
    CC_DELETEALL(comp(1401, 21));
    CC_DELETEALL(comp(1401, 27));
    CC_DELETEALL(comp(1401, 27));
    CC_DELETEALL(comp(1401, 34));
    if ((script6431() == true)) {
        IF_SETSIZE(800, 0, 0, 1, comp(1401, 7));
    } else {
        IF_SETSIZE(800, 600, 0, 0, comp(1401, 7));
    };
    IF_SETSIZE(500, 456, 0, 4, comp(1401, 8));
    IF_SETHIDE(false, comp(1401, 11));
    IF_SETTRANS(0, comp(1401, 11));
    IF_SETTRANS(255, comp(1401, 10));
    IF_SETTRANS(255, comp(1401, 6));
    IF_SETTRANS(255, comp(1401, 13));
    stack(35284);
    stack(91815946);
    IF_SETGRAPHIC();
    script20220(255);
    script20221(255);
    varbitplayer_58385 = 0;
    script20211(1);
    IF_SETONTIMER(callback(script20212, CLIENTCLOCK()), 91815939);
    IF_SETTEXT("Nominate this Account", 91815959);
    IF_SETTEXT("Nominate another Account", 91815965);
    IF_SETTEXT("Confirm this Account", 91815972);
    IF_SETTEXT("Confirm Nomination", 91815973);
    script20209(0, "You can switch between the League and RuneScape at any time by switching worlds.");
    return;
}