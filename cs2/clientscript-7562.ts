//
function script7562(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = -1 as graphic;
    switch (int0) {
        case 0: {
            switch (int1) {
                case 0: {
                    int2 = comp(1398, 58);  // tsd_unlocking_power:map_effect_area1
                    int3 = 16512 as graphic;
                    break;
                }
                case 1: {
                    int2 = comp(1398, 59);  // tsd_unlocking_power:map_effect_area2
                    int3 = 16515 as graphic;
                    break;
                }
                case 2: {
                    int2 = comp(1398, 60);  // tsd_unlocking_power:map_effect_area3
                    int3 = 16518 as graphic;
                    break;
                }
            };
            break;
        }
        case 1: {
            switch (int1) {
                case 0: {
                    int2 = comp(1398, 58);  // tsd_unlocking_power:map_effect_area1
                    int3 = 16513 as graphic;
                    break;
                }
                case 1: {
                    int2 = comp(1398, 59);  // tsd_unlocking_power:map_effect_area2
                    int3 = 16516 as graphic;
                    break;
                }
                case 2: {
                    int2 = comp(1398, 60);  // tsd_unlocking_power:map_effect_area3
                    int3 = 16519 as graphic;
                    break;
                }
            };
            break;
        }
        case 2: {
            switch (int1) {
                case 0: {
                    int2 = comp(1398, 58);  // tsd_unlocking_power:map_effect_area1
                    int3 = 16511 as graphic;
                    break;
                }
                case 1: {
                    int2 = comp(1398, 59);  // tsd_unlocking_power:map_effect_area2
                    int3 = 16514 as graphic;
                    break;
                }
                case 2: {
                    int2 = comp(1398, 60);  // tsd_unlocking_power:map_effect_area3
                    int3 = 16517 as graphic;
                    break;
                }
            };
            break;
        }
    };
    IF_SETGRAPHIC(int3, int2);
    IF_SETTRANS(255, int2);
    IF_SETHIDE(false, int2);
    IF_SETONTIMER(callback(script7563, int2), int2);
    return;
}