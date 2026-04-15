//
function script12733(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "Travel";
    var int5 = comp(-1, 65535);
    var int6 = -1;
    [int0, int1, int2] = script12705(varbitplayer_33712);
    [int3, int4] = script12742();
    if ((int2 == 1)) {
        int0 = MIN((int0 + 1), 8);
    };
    int5 = comp(1786, 146);
    if ((((varbitplayer_33713 + 1) < int0) && ((varbitplayer_33713 + 1) < 8))) {
        int6 = 15455;
        IF_SETOP(1, "Travel", int5);
        stack(int6);
        stack(int5);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(script12734, int5, 1), int5);
        IF_SETONMOUSELEAVE(callback(script12734, int5, 0), int5);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
    } else {
        string0 = "Unlock all treasures within the area to move on.";
        if (((varbitplayer_33713 + 1) == 8)) {
            int6 = -1;
            IF_SETONMOUSEREPEAT(callback(), int5);
        } else {
            int6 = 15457;
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
        };
        IF_SETOP(1, "", int5);
        stack(int6);
        stack(int5);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(), int5);
        IF_SETONMOUSELEAVE(callback(), int5);
    };
    string0 = "Travel";
    int5 = comp(1786, 26);
    if ((varbitplayer_33713 > 0)) {
        int6 = 15455;
        IF_SETOP(1, "Travel", int5);
        stack(int6);
        stack(int5);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(script12734, int5, 1), int5);
        IF_SETONMOUSELEAVE(callback(script12734, int5, 0), int5);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
    } else {
        string0 = "";
        IF_SETOP(1, "", int5);
        stack(-1);
        stack(int5);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(), int5);
        IF_SETONMOUSELEAVE(callback(), int5);
        IF_SETONMOUSEREPEAT(callback(), int5);
    };
    if ((((varbitplayer_33716 > 0) && ((varbitplayer_33713 + 1) == int0)) && (varbitplayer_33712 != 45))) {
        IF_SETHIDE(true, comp(1786, 121));
    } else {
        IF_SETHIDE(false, comp(1786, 121));
    };
    IF_SETHIDE(true, comp(1786, 2));
    IF_SETHIDE(true, comp(1786, 3));
    IF_SETHIDE(true, comp(1786, 4));
    IF_SETHIDE(true, comp(1786, 5));
    IF_SETHIDE(true, comp(1786, 6));
    IF_SETHIDE(true, comp(1786, 7));
    IF_SETHIDE(true, comp(1786, 8));
    IF_SETHIDE(true, comp(1786, 9));
    switch (varbitplayer_33713) {
        case 0: {
            IF_SETHIDE(false, comp(1786, 2));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1786, 3));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1786, 4));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1786, 5));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1786, 6));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1786, 7));
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1786, 8));
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1786, 9));
            break;
        }
    };
    return;
}