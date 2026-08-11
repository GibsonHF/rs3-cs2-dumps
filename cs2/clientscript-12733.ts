//
function script12733(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "Travel";
    var int5 = comp(-1, 65535);
    var int6 = -1 as graphic;
    [int0, int1, int2] = script12705(varbitplayer_33712);
    [int3, int4] = script12742();
    if ((int2 == 1)) {
        int0 = MIN((int0 + 1), 8);
    };
    int5 = comp(1786, 146);  // trh104_overlay:east
    if (((varbitplayer_33713 + 1) < int0)) {
        if (((varbitplayer_33713 + 1) < 8)) {
            int6 = 15455 as graphic;
            IF_SETOP(1, "Travel", int5);
            IF_SETGRAPHIC(int6, int5);
            IF_SETONMOUSEOVER(callback(script12734, int5, 1), int5);
            IF_SETONMOUSELEAVE(callback(script12734, int5, 0), int5);
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
        } else {
            string0 = "Unlock all treasures within the area to move on.";
            if (((varbitplayer_33713 + 1) == 8)) {
                int6 = -1 as graphic;
                IF_SETONMOUSEREPEAT(callback(), int5);
            } else {
                int6 = 15457 as graphic;
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
            };
            IF_SETOP(callback(script1), int5);
            IF_SETGRAPHIC(int6, int5);
            IF_SETONMOUSEOVER(callback(), int5);
            IF_SETONMOUSELEAVE(callback(), int5);
        };
    } else {
        string0 = "Unlock all treasures within the area to move on.";
        if (((varbitplayer_33713 + 1) == 8)) {
            int6 = -1 as graphic;
            IF_SETONMOUSEREPEAT(callback(), int5);
        } else {
            int6 = 15457 as graphic;
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
        };
        IF_SETOP(callback(script1), int5);
        IF_SETGRAPHIC(int6, int5);
        IF_SETONMOUSEOVER(callback(), int5);
        IF_SETONMOUSELEAVE(callback(), int5);
    };
    string0 = "Travel";
    int5 = comp(1786, 26);  // trh104_overlay:west
    if ((varbitplayer_33713 > 0)) {
        int6 = 15455 as graphic;
        IF_SETOP(1, "Travel", int5);
        IF_SETGRAPHIC(int6, int5);
        IF_SETONMOUSEOVER(callback(script12734, int5, 1), int5);
        IF_SETONMOUSELEAVE(callback(script12734, int5, 0), int5);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
    } else {
        string0 = "";
        IF_SETOP(callback(script1), int5);
        IF_SETGRAPHIC(-1 as graphic, int5);
        IF_SETONMOUSEOVER(callback(), int5);
        IF_SETONMOUSELEAVE(callback(), int5);
        IF_SETONMOUSEREPEAT(callback(), int5);
    };
    if ((varbitplayer_33716 > 0)) {
        if (((varbitplayer_33713 + 1) == int0)) {
            if ((varbitplayer_33712 != 45)) {
                IF_SETHIDE(true, comp(1786, 121));  // trh104_overlay:positive_button_disabled_layer
            } else {
                IF_SETHIDE(false, comp(1786, 121));  // trh104_overlay:positive_button_disabled_layer
            };
        } else {
            IF_SETHIDE(false, comp(1786, 121));  // trh104_overlay:positive_button_disabled_layer
        };
    } else {
        IF_SETHIDE(false, comp(1786, 121));  // trh104_overlay:positive_button_disabled_layer
    };
    IF_SETHIDE(true, comp(1786, 2));  // trh104_overlay:title1
    IF_SETHIDE(true, comp(1786, 3));  // trh104_overlay:title2
    IF_SETHIDE(true, comp(1786, 4));  // trh104_overlay:title3
    IF_SETHIDE(true, comp(1786, 5));  // trh104_overlay:title4
    IF_SETHIDE(true, comp(1786, 6));  // trh104_overlay:title5
    IF_SETHIDE(true, comp(1786, 7));  // trh104_overlay:title6
    IF_SETHIDE(true, comp(1786, 8));  // trh104_overlay:title7
    IF_SETHIDE(true, comp(1786, 9));  // trh104_overlay:title8
    switch (varbitplayer_33713) {
        case 0: {
            IF_SETHIDE(false, comp(1786, 2));  // trh104_overlay:title1
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1786, 3));  // trh104_overlay:title2
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1786, 4));  // trh104_overlay:title3
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1786, 5));  // trh104_overlay:title4
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1786, 6));  // trh104_overlay:title5
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1786, 7));  // trh104_overlay:title6
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1786, 8));  // trh104_overlay:title7
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1786, 9));  // trh104_overlay:title8
            break;
        }
    };
    return;
}