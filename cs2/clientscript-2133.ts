//
function script2133(int0: quest): [string, int] {
    if ((int0 == -1 as quest)) {
        script12478("Null .quest.");
        return ["", -1];
    };
    var int1 = QUEST_POINTS(int0);
    switch (int0) {
        case 74: {
            if (((varplayer_2163 >= 21) && (varbitplayer_9584 == 0))) {
                int1 = 1;
            };
            break;
        }
        case 20: {
            if (((varplayer_2473 >= 3) && (varbitplayer_9585 == 0))) {
                int1 = 1;
            };
            break;
        }
        case 341: {
            if ((varplayer_2692 == 100)) {
                int1 = 0;
            };
            break;
        }
        case 355: {
            if ((varplayer_2388 == 110)) {
                int1 = 0;
            };
            break;
        }
        case 357: {
            if ((varplayer_2261 == 100)) {
                int1 = 0;
            };
            break;
        }
        case 358: {
            if ((varplayer_2689 == 6)) {
                int1 = 0;
            };
            break;
        }
        case 363: {
            if ((varplayer_2552 == 4)) {
                int1 = 0;
            };
            break;
        }
    };
    switch (int1) {
        case 0: {
            return ["", int1];
        }
        case 1: {
            return ["1 Quest Point", int1];
        }
    };
    return [`${inttostring(int1, 10)} Quest Points`, int1];
}