//
function script20208(): void {
    CC_DELETEALL(91815980);
    CC_DELETEALL(91815957);
    CC_DELETEALL(91815957);
    CC_DELETEALL(91815963);
    CC_DELETEALL(91815963);
    CC_DELETEALL(91815970);
    if ((script6431() == 1)) {
        IF_SETSIZE(800, 0, 0, 1, 91815943);
    } else {
        IF_SETSIZE(800, 600, 0, 0, 91815943);
    };
    IF_SETSIZE(500, 456, 0, 4, 91815944);
    IF_SETHIDE(0, 91815947);
    IF_SETTRANS(0, 91815947);
    IF_SETTRANS(255, 91815946);
    IF_SETTRANS(255, 91815942);
    IF_SETTRANS(255, 91815949);
    IF_SETGRAPHIC(35284, 91815946);
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