//
function script15628(): void {
    var int0 = 0;
    var int1 = 550;
    var int2 = 56;
    var int3 = 50;
    var int4 = 0;
    var int5 = script13749();
    if ((int5 == 0)) {
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
    if ((IF_GETHIDE(59375669) == 0)) {
        int4 = 30;
        if ((IF_GETHIDE(59375672) == 1)) {
            IF_SETPOSITION(0, 0, 1, 1, 59375669);
        } else {
            IF_SETPOSITION(0, 0, 1, 0, 59375669);
            IF_SETPOSITION(0, 0, 1, 2, 59375672);
        };
    } else if ((IF_GETHIDE(59375672) == 0)) {
        int4 = 30;
        IF_SETPOSITION(0, 0, 1, 1, 59375672);
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    if ((IF_GETHIDE(59375667) == 0)) {
        [int6, int7, int8, int9] = script2956();
        IF_SETSIZE((int6 + int8), IF_GETHEIGHT(54132736), 1, 0, 54132736);
        IF_SETPOSITION(int6, IF_GETY(54132736), 0, 0, 54132736);
        int4 = (int4 + IF_GETHEIGHT(54132736));
    };
    if ((varclient_4270 == 5)) {
        int2 = 56;
        int3 = 0;
    };
    if ((int5 == 0)) {
        if ((int0 == 0)) {
            IF_SETSIZE(800, (int1 + int4), 0, 0, 59375641);
        } else {
            IF_SETSIZE(800, int1, 0, 1, 59375641);
        };
        IF_SETPOSITION(0, 0, 1, 0, 59375641);
    };
    IF_SETSIZE(0, (int2 + int4), 1, 1, 59375644);
    IF_SETSIZE(0, int4, 1, 0, 59375666);
    IF_SETPOSITION(0, int3, 1, 2, 59375666);
    switch (varclient_4270) {
        case 0: {
            script15633();
            script10941();
            break;
        }
        case 2: {
            if ((int5 == 0)) {
                IF_SETONTIMER(callback(script10055), 59572224);
            } else {
                IF_SETONTIMER(callback(script10055), 68419584);
            };
            break;
        }
        case 3: {
            if ((int5 == 0)) {
                script11557();
            };
            break;
        }
        case 4: {
            if ((int5 == 0)) {
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
    if ((int5 == 1)) {
        int10 = 0;
    };
    IF_SETPOSITION(0, 0, 1, int10, 59899906);
    IF_SETPOSITION(0, 0, 1, int10, 59965441);
    IF_SETPOSITION(0, 0, 1, int10, 59834369);
    return;
}