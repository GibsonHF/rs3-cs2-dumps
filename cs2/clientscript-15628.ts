//
function script15628(): void {
    var int0 = 0;
    var int1 = 550;
    var int2 = 56;
    var int3 = 50;
    var int4 = 0;
    var int5 = script13749();
    if ((int5 == false)) {
        int1 = 546;
        int2 = 106;
        if ((((varclient_4270 == 2) || (varclient_4270 == 4)) || (varclient_4270 == 3))) {
            int0 = 1;
            int1 = 0;
        };
    };
    if (((varclient_4270 == 1) && (MAP_LANG() == 0))) {
        int0 = 1;
        int1 = 0;
    };
    if ((IF_GETHIDE(comp(906, 53)) == false)) {
        int4 = 30;
        if ((IF_GETHIDE(comp(906, 56)) == true)) {
            IF_SETPOSITION(0, 0, 1, 1, comp(906, 53));
        } else {
            IF_SETPOSITION(0, 0, 1, 0, comp(906, 53));
            IF_SETPOSITION(0, 0, 1, 2, comp(906, 56));
        };
    } else if ((IF_GETHIDE(comp(906, 56)) == false)) {
        int4 = 30;
        IF_SETPOSITION(0, 0, 1, 1, comp(906, 56));
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    if ((IF_GETHIDE(comp(906, 51)) == false)) {
        [int6, int7, int8, int9] = script2956();
        IF_SETSIZE((int6 + int8), IF_GETHEIGHT(comp(826, 0)), 1, 0, comp(826, 0));
        IF_SETPOSITION(int6, IF_GETY(comp(826, 0)), 0, 0, comp(826, 0));
        int4 = (int4 + IF_GETHEIGHT(comp(826, 0)));
    };
    if ((varclient_4270 == 5)) {
        int2 = 56;
        int3 = 0;
    };
    if ((int5 == false)) {
        if ((int0 == 0)) {
            IF_SETSIZE(800, (int1 + int4), 0, 0, comp(906, 25));
        } else {
            IF_SETSIZE(800, int1, 0, 1, comp(906, 25));
        };
        IF_SETPOSITION(0, 0, 1, 0, comp(906, 25));
    };
    IF_SETSIZE(0, (int2 + int4), 1, 1, comp(906, 28));
    IF_SETSIZE(0, int4, 1, 0, comp(906, 50));
    IF_SETPOSITION(0, int3, 1, 2, comp(906, 50));
    switch (varclient_4270) {
        case 0: {
            script15633();
            script10941();
            break;
        }
        case 2: {
            if ((int5 == false)) {
                IF_SETONTIMER(callback(script10055), comp(909, 0));
            } else {
                IF_SETONTIMER(callback(script10055), comp(1044, 0));
            };
            break;
        }
        case 3: {
            if ((int5 == false)) {
                script11557();
            };
            break;
        }
        case 4: {
            if ((int5 == false)) {
                script11460();
            };
            break;
        }
        case 5: {
            script15590(2);
            break;
        }
    };
    var int10 = 1;
    if ((int5 == true)) {
        int10 = 0;
    };
    IF_SETPOSITION(0, 0, 1, int10, comp(914, 2));
    IF_SETPOSITION(0, 0, 1, int10, comp(915, 1));
    IF_SETPOSITION(0, 0, 1, int10, comp(913, 1));
    return;
}