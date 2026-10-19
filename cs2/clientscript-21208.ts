//
function script21208(): void {
    stack(-1);
    unk11541();
    if (BRANCH_EQUALS(1)) {
        IF_SETHIDE(true, comp(1604, 27));
        stack(int0);
        stack(int1);
        stack(int2);
        stack("The Plugin Hub is currently disabled. Please try again later.");
        script21189();
        return;
    };
    stack(105119771);
    script21162();
    if (BRANCH_EQUALS(0)) {
        stack(21207);
        stack(int0);
        stack(int1);
        stack(int2);
        stack(int3);
        IF_SETONTIMER("iiii", 105119745);
        return;
    };
    if ((varclient_8511 == CLIENTCLOCK())) {
        return;
    };
    varclient_8511 = CLIENTCLOCK();
    IF_SETONTIMER(callback(), comp(1604, 1));  // toplevel_v2_plugin_content:init
    unk11717();
    var int4 = [];
    if ((int4 < 1)) {
        stack(int0);
        stack(int1);
        stack(int2);
        stack("You do not have any plugins installed.");
        script21189();
        return;
    };
    CC_DELETEALL(int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    while ((int5 < int4)) {
        stack(int5);
        unk12176();
        int7 = [];
        script14391(int0, int5, 0, int6, 0, 0, 0, 72, 1, 0);
        stack(int0);
        stack(int5);
        stack(int7);
        script21209();
        if (BRANCH_EQUALS(1)) {
            int6 = (int6 + (72 + 4));
        };
        int5 = (int5 + 1);
    };
    script19620(int2, int0, int6, -1, -1, 0, 0, 0);
    if ((int6 > IF_GETHEIGHT(int0))) {
        IF_SETHIDE(false, int2);
    } else {
        IF_SETHIDE(true, int2);
    };
    return;
}