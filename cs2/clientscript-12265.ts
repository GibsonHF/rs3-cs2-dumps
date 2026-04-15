//
function script12265(): void {
    var int0 = IF_GETWIDTH(comp(1727, 11));
    var int1 = IF_GETWIDTH(comp(1727, 17));
    var int2 = IF_GETWIDTH(comp(1727, 20));
    var int3 = SCALE(varclient_5134, 10, 100);
    var int4 = SCALE(varclient_5136, 10, 100);
    var int5 = SCALE(varclient_5135, 10, 100);
    if ((int0 > int3)) {
        int0 = MAX(0, (int0 - 1));
    } else if ((int0 < int3)) {
        int0 = MIN(100, (int0 + 1));
    };
    if ((int1 > int4)) {
        int1 = MAX(0, (int1 - 1));
    } else if ((int1 < int4)) {
        int1 = MIN(100, (int1 + 1));
    };
    if ((int2 > int5)) {
        int2 = MAX(0, (int2 - 1));
    } else if ((int2 < int5)) {
        int2 = MIN(100, (int2 + 1));
    };
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(1727, 11)), 0, 0, comp(1727, 11));
    IF_SETSIZE(int1, IF_GETHEIGHT(comp(1727, 17)), 0, 0, comp(1727, 17));
    IF_SETSIZE(int2, IF_GETHEIGHT(comp(1727, 20)), 0, 0, comp(1727, 20));
    if ((varclient_5137 > varclient_5138)) {
        if ((varclient_5137 >= 10)) {
            IF_SETMODELANIM(9780 as seq, comp(1727, 16));
        } else if ((varclient_5137 >= 5)) {
            IF_SETMODELANIM(9773 as seq, comp(1727, 16));
        } else {
            IF_SETMODELANIM(9769 as seq, comp(1727, 16));
        };
    } else if ((varclient_5137 < varclient_5138)) {
        if ((varclient_5138 >= 10)) {
            IF_SETMODELANIM(9854 as seq, comp(1727, 16));
        } else if ((varclient_5138 >= 5)) {
            IF_SETMODELANIM(9847 as seq, comp(1727, 16));
        } else {
            IF_SETMODELANIM(9843 as seq, comp(1727, 16));
        };
    } else {
        IF_SETMODELANIM(9804 as seq, comp(1727, 16));
    };
    return;
}