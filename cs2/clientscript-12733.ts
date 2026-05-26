//
function script12733(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "Travel";
    var int5 = -1;
    var int6 = -1;
    [int0, int1, int2] = script12705(varbitplayer_33712);
    [int3, int4] = script12742();
    if ((int2 == 1)) {
        int0 = MIN((int0 + 1), 8);
    };
    int5 = 117047442;
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
    int5 = 117047322;
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
        IF_SETHIDE(1, 117047417);
    } else {
        IF_SETHIDE(0, 117047417);
    };
    IF_SETHIDE(1, 117047298);
    IF_SETHIDE(1, 117047299);
    IF_SETHIDE(1, 117047300);
    IF_SETHIDE(1, 117047301);
    IF_SETHIDE(1, 117047302);
    IF_SETHIDE(1, 117047303);
    IF_SETHIDE(1, 117047304);
    IF_SETHIDE(1, 117047305);
    switch (varbitplayer_33713) {
        case 0: {
            IF_SETHIDE(0, 117047298);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 117047299);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 117047300);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 117047301);
            break;
        }
        case 4: {
            IF_SETHIDE(0, 117047302);
            break;
        }
        case 5: {
            IF_SETHIDE(0, 117047303);
            break;
        }
        case 6: {
            IF_SETHIDE(0, 117047304);
            break;
        }
        case 7: {
            IF_SETHIDE(0, 117047305);
            break;
        }
    };
    return;
}