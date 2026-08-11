//
function script10831(int0: number): void {
    var int1 = comp(1567, 32);  // xmas2014:reward_graphic_bg1
    var int2 = 0;
    switch (int0) {
        case 102694939: {
            int1 = comp(1567, 32);  // xmas2014:reward_graphic_bg1
            if ((varbitplayer_26363 == 1)) {
                int2 = 1;
            };
            break;
        }
        case 102694940: {
            int1 = comp(1567, 33);  // xmas2014:reward_graphic_bg2
            if ((varbitplayer_26364 == 1)) {
                int2 = 1;
            };
            break;
        }
        case 102694941: {
            int1 = comp(1567, 34);  // xmas2014:reward_graphic_bg3
            if ((varbitplayer_26365 == 1)) {
                int2 = 1;
            };
            break;
        }
        case 102694942: {
            int1 = comp(1567, 35);  // xmas2014:reward_graphic_bg4
            if ((varbitplayer_26366 == 1)) {
                int2 = 1;
            };
            break;
        }
        case 102694943: {
            int1 = comp(1567, 36);  // xmas2014:reward_graphic_bg5
            if ((varbitplayer_26367 == 1)) {
                int2 = 1;
            };
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETCOLOUR(3333170, int1);
        IF_SETCOLOUR(3333170, int0);
    } else {
        IF_SETCOLOUR(16768180, int1);
        IF_SETCOLOUR(16768180, int0);
    };
    return;
}