//
function script5616(): void {
    if ((varbitplayer_11719 == 0)) {
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1198, 1)), 0, 0, comp(1198, 1));  // fmc_wave_progress:bar_fill
    } else {
        switch (varbitplayer_11719) {
            case 1: {
                IF_SETONTIMER(callback(script5617, (IF_GETWIDTH(comp(1198, 8)) / 4)), comp(1198, 8));  // fmc_wave_progress:filling
                break;
            }
            case 2: {
                IF_SETONTIMER(callback(script5617, (IF_GETWIDTH(comp(1198, 8)) / 2)), comp(1198, 8));  // fmc_wave_progress:filling
                break;
            }
            case 3: {
                IF_SETONTIMER(callback(script5617, ((IF_GETWIDTH(comp(1198, 8)) * 3) / 4)), comp(1198, 8));  // fmc_wave_progress:filling
                break;
            }
            case 4: {
                IF_SETONTIMER(callback(script5617, IF_GETWIDTH(comp(1198, 8))), comp(1198, 8));  // fmc_wave_progress:filling
                break;
            }
        };
    };
    return;
}