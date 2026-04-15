//
function script6158(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1909, 1), comp(1274, 5));
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1916, 1), comp(1274, 2));
    switch (varclient_1917) {
        case 1: {
            stack(10708);
            stack(83492873);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(10709);
            stack(83492873);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(10710);
            stack(83492873);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            stack(1726);
            stack(83492873);
            IF_SETGRAPHIC();
            break;
        }
    };
    var string0 = "Runesphere Active!";
    switch (varclient_1918) {
        case 1: {
            string0 = `Runesphere Active on the Bottom Floor! (${enum_getvalue(0, 36, 11936 as cs2enum, varclient_5910)})`;
            break;
        }
        case 2: {
            string0 = `Runesphere Active on the Middle Floor! (${enum_getvalue(0, 36, 11936 as cs2enum, varclient_5910)})`;
            break;
        }
        case 3: {
            string0 = `Runesphere Active on the Top Floor! (${enum_getvalue(0, 36, 11936 as cs2enum, varclient_5910)})`;
            break;
        }
    };
    if ((varclient_1918 != 0)) {
        IF_SETHIDE(false, comp(1274, 10));
        stack(enum_getvalue(0, 23, 11934 as cs2enum, varclient_5910));
        stack(83492878);
        IF_SETGRAPHIC();
        if ((varclient_5910 == 0)) {
            stack(29007);
            stack(83492877);
            IF_SETGRAPHIC();
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 83492877);
        IF_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0), 83492877);
        IF_SETPOSITION(100, 158, 2, 0, 83492875);
    } else {
        IF_SETHIDE(true, comp(1274, 10));
        stack(-1);
        stack(83492878);
        IF_SETGRAPHIC();
        stack(10707);
        stack(83492878);
        IF_SETGRAPHIC();
        IF_SETPOSITION(100, 120, 2, 0, 83492875);
    };
    if ((varclient_5911 == 1)) {
        IF_SETHIDE(false, comp(1274, 11));
    } else {
        IF_SETHIDE(true, comp(1274, 11));
    };
    return;
}