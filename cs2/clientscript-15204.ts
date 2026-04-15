//
function script15204(int0: int, int1: int, int2: int): string {
    var string0 = "";
    var int3 = 0;
    varbitplayer_156 = int0;
    if ((((((varbitplayer_156 <= 3) || (varbitplayer_156 == 48)) || (varbitplayer_156 == 155)) || (varbitplayer_156 == 172)) || (varbitplayer_156 == 175))) {
        if ((enum_getvalue(0, 0, 98 as cs2enum, int2) > 0)) {
            int3 = 1;
        };
    } else if ((((((varbitplayer_156 <= 7) || (varbitplayer_156 == 49)) || (varbitplayer_156 == 162)) || (varbitplayer_156 == 176)) || (varbitplayer_156 == 148))) {
        if ((enum_getvalue(0, 0, 92 as cs2enum, int1) > 0)) {
            int3 = 1;
        };
    } else if ((varbitplayer_156 == 153)) {
        if ((int1 == 44)) {
            int3 = 1;
        };
    } else if (((varbitplayer_156 == 31) && (int1 == 34))) {
        int3 = 1;
    };
    switch (int1) {
        case 1: {
            string0 = "Empty";
            break;
        }
        case 9: {
            string0 = "Has a Grape Vine Frame";
            break;
        }
        case 2: {
            string0 = "Full of weeds";
            break;
        }
        case 3: {
            string0 = "Growing";
            break;
        }
        case 32: {
            if ((int3 == 1)) {
                string0 = "Ready for a health check";
            } else {
                string0 = "<col=00ff00>Produce is fully grown</col>";
            };
            break;
        }
        case 4: {
            string0 = "<col=00ff00>Growing fruit</col>";
            break;
        }
        case 5: {
            string0 = "Just a tree stump";
            break;
        }
        case 7: {
            string0 = "<col=ffb000>Can be watered</col>";
            break;
        }
        case 33: {
            string0 = "<col=ff7000>Is diseased!</col>";
            break;
        }
        case 34: {
            string0 = "<col=ff3000>Is dead!</col>";
            break;
        }
        case 6: {
            string0 = "Has a scarecrow in it";
            break;
        }
        case 10: {
            string0 = "Has a Sprinkler MK1 in it";
            break;
        }
        case 16: {
            string0 = "Not yet built";
            break;
        }
        default: {
            string0 = "Needs attention";
            break;
        }
    };
    return string0;
}