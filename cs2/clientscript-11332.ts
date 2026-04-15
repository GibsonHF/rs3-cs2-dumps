//
function script11332(): void {
    var int0 = 0;
    var int1 = 390;
    switch (varclient_4786) {
        case 0: {
            int0 = 200;
            break;
        }
        case 1: {
            int0 = 600;
            break;
        }
        case 2: {
            int0 = 1800;
            break;
        }
        case 3: {
            int0 = 4000;
            break;
        }
        case 4: {
            int0 = 10000;
            break;
        }
        case 5: {
            int0 = 10000;
            break;
        }
        default: {
            return;
        }
    };
    var int2 = IF_GETWIDTH(comp(1615, 319));
    var int3 = 0;
    if ((int2 >= int1)) {
        if ((varclient_4786 < 4)) {
            varclient_4786 = (varclient_4786 + 1);
            varclient_4785 = 1;
            script9554(comp(1615, 1), comp(1615, 521), comp(1615, 2), script11327(varclient_4786), 21218 as struct);
            IF_SETSIZE(1, 19, 0, 0, comp(1615, 319));
            script11330();
            return;
        };
        int3 = 1;
    };
    var int4 = MIN(SCALE(int1, int0, varclient_4784), int1);
    if (((int2 >= int4) || (int3 == 1))) {
        if ((varclient_4784 == 10000)) {
            varclient_4786 = 5;
            script9554(comp(1615, 1), comp(1615, 521), comp(1615, 2), script11327(varclient_4786), 21218 as struct);
            IF_SETTEXT("Fully Upgraded!", comp(1615, 323));
            script11330();
        } else {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varclient_4784, 1)} / ${TOSTRING_LOCALISED(int0, 1)}`, comp(1615, 323));
        };
        IF_SETONTIMER(callback(), comp(1615, 319));
        return;
    };
    int4 = (int2 + MAX(((int4 - int2) / 20), 1));
    IF_SETSIZE(int4, 19, 0, 0, comp(1615, 319));
    varclient_4785 = SCALE(int0, int1, int4);
    IF_SETTEXT(`${TOSTRING_LOCALISED(varclient_4785, 1)} / ${TOSTRING_LOCALISED(int0, 1)}`, comp(1615, 323));
    return;
}