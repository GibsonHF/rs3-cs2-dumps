//
function script7586(int0: component): void {
    var int1 = -1 as cs2enum;
    var int2 = 0;
    var string0 = "";
    switch (int0) {
        case 10747920: {
            int1 = 7349 as cs2enum;
            int2 = 1;
            break;
        }
        case 10747921: {
            int1 = 7349 as cs2enum;
            int2 = 2;
            break;
        }
        case 10747922: {
            int1 = 7349 as cs2enum;
            int2 = 3;
            break;
        }
        case 10747923: {
            int1 = 7349 as cs2enum;
            int2 = 4;
            break;
        }
        case 10747916: {
            int1 = 7347 as cs2enum;
            int2 = 1;
            break;
        }
        case 10747917: {
            int1 = 7347 as cs2enum;
            int2 = 2;
            break;
        }
        case 10747918: {
            int1 = 7347 as cs2enum;
            int2 = 4;
            break;
        }
        case 10747919: {
            int1 = 7347 as cs2enum;
            int2 = 3;
            break;
        }
        case 10747924:
        case 10747925:
        case 10747926:
        case 10747927: {
            string0 = "You have already entered this wing, and therefore cannot move the defender you assigned to it.";
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 != -1 as cs2enum)) {
        string0 = enum_getvalue(0, 36, int1, int2);
    };
    if ((script6431() == false)) {
        script10071(string0, 350, int0, -1);
    } else {
        script426(string0, int0, -1, 0);
    };
    return;
}