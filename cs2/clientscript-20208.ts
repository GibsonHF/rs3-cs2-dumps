//
function script20208(): void {
    CC_DELETEALL(comp(1401, 44));
    CC_DELETEALL(comp(1401, 21));
    CC_DELETEALL(comp(1401, 21));
    CC_DELETEALL(comp(1401, 27));
    CC_DELETEALL(comp(1401, 27));
    CC_DELETEALL(comp(1401, 34));
    if ((script6431() == 1)) {
        IF_SETSIZE(800, 0, 0, 1, comp(1401, 7));
    } else {
        IF_SETSIZE(800, 600, 0, 0, comp(1401, 7));
    };
    script20923();
    IF_SETGRAPHIC(91815946 as graphic);
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = IF_GETGRAPHICDIMENSIONS(comp(1396, 18));
    IF_SETSIZE(int0, int1, 0, 4, comp(1401, 8));
    IF_SETHIDE(false, comp(1401, 11));
    IF_SETTRANS(0, comp(1401, 11));
    IF_SETTRANS(255, comp(1401, 10));
    IF_SETTRANS(255, comp(1401, 6));
    IF_SETTRANS(255, comp(1401, 13));
    script20220(255);
    script20221(255);
    varbitplayer_58385 = 0;
    script20211(1);
    IF_SETONTIMER(callback(script20212, CLIENTCLOCK()), comp(1401, 3));
    IF_SETTEXT("Continue", comp(1401, 23));
    IF_SETTEXT("Continue", comp(1401, 29));
    IF_SETTEXT("Confirm this Account", comp(1401, 36));
    IF_SETTEXT("Confirm Nomination", comp(1401, 37));
    script20209(0, "You can switch between the League and RuneScape at any time by switching worlds.");
    return;
}