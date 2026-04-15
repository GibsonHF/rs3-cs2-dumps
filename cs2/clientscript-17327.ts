//
function script17327(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var string0 = "";
    var int2 = -1;
    [int0, int1, string0] = script17297();
    IF_SETHIDE(false, comp(1152, 70));
    IF_SETHIDE(true, comp(1152, 69));
    if ((int0 != -1 as obj)) {
        if ((int1 > 1)) {
            IF_SETTEXT(`${inttostring(int1, 10)} x ${OC_NAME(int0)}`, comp(1152, 71));
        } else {
            IF_SETTEXT(OC_NAME(int0), comp(1152, 71));
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
                IF_SETHIDE(false, comp(1152, 69));
                IF_SETHIDE(true, comp(1152, 70));
                break;
            }
        };
        if ((int2 != -1)) {
            stack(int2);
            stack(75497542);
            IF_SETGRAPHIC();
        } else if ((int1 == 1)) {
            IF_SETOBJECT_HIGHRES(int0, comp(1152, 70));
        } else {
            IF_SETOBJECT(int0, int1, comp(1152, 70));
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
            IF_SETOBJECT(int0, int1, comp(1152, 87));
            IF_SETHIDE(true, comp(1152, 86));
            IF_SETHIDE(false, comp(1152, 87));
        };
        script17328(int0, MAX(1, int1), string0);
    };
    return;
}