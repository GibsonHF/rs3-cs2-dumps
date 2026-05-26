//
function script17327(): void {
    var int0 = -1;
    var int1 = 0;
    var string0 = "";
    var int2 = -1;
    [int0, int1, string0] = script17297();
    IF_SETHIDE(0, 75497542);
    IF_SETHIDE(1, 75497541);
    if ((int0 != -1)) {
        if ((int1 > 1)) {
            IF_SETTEXT(`${inttostring(int1, 10)} x ${OC_NAME(int0)}`, 75497543);
        } else {
            IF_SETTEXT(OC_NAME(int0), 75497543);
        };
        switch (int0) {
            case 28906: {
                int2 = 11640;
                break;
            }
            case 29923: {
                int2 = 11641;
                break;
            }
            case 54776: {
                IF_SETHIDE(0, 75497541);
                IF_SETHIDE(1, 75497542);
                break;
            }
        };
        if ((int2 != -1)) {
            stack(int2);
            stack(75497542);
            IF_SETGRAPHIC();
        } else if ((int1 == 1)) {
            IF_SETOBJECT_HIGHRES(int0, 75497542);
        } else {
            IF_SETOBJECT(int0, int1, 75497542);
        };
        if ((script17296() == 19)) {
            stack(27544);
            stack(75497558);
            IF_SETGRAPHIC();
            IF_SETHIDE(1, 75497559);
            IF_SETHIDE(0, 75497558);
        } else if ((int2 != -1)) {
            stack(int2);
            stack(75497558);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 75497558);
            IF_SETHIDE(1, 75497559);
        } else {
            IF_SETOBJECT(int0, int1, 75497559);
            IF_SETHIDE(1, 75497558);
            IF_SETHIDE(0, 75497559);
        };
        script17328(int0, MAX(1, int1), string0);
    };
    return;
}