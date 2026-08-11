//
function script12516(): void {
    IF_SETHIDE(true, comp(1746, 45));  // gwd2_overlay:seren_bg
    IF_SETHIDE(true, comp(1746, 8));  // gwd2_overlay:seren_bg_1
    IF_SETHIDE(true, comp(1746, 51));  // gwd2_overlay:sliske_bg
    IF_SETHIDE(true, comp(1746, 14));  // gwd2_overlay:sliske_bg_1
    IF_SETHIDE(true, comp(1746, 57));  // gwd2_overlay:zamorak_bg
    IF_SETHIDE(true, comp(1746, 20));  // gwd2_overlay:zamorak_bg_1
    IF_SETHIDE(true, comp(1746, 63));  // gwd2_overlay:zaros_bg
    IF_SETHIDE(true, comp(1746, 26));  // gwd2_overlay:zaros_bg_1
    IF_SETCOLOUR(16777215, comp(1746, 10));  // gwd2_overlay:seren_value_1
    IF_SETCOLOUR(16777215, comp(1746, 17));  // gwd2_overlay:sliske_value_1
    IF_SETCOLOUR(16777215, comp(1746, 23));  // gwd2_overlay:zamorak_value_1
    IF_SETCOLOUR(16777215, comp(1746, 29));  // gwd2_overlay:zaros_value_1
    switch (varbitplayer_30930) {
        case 1: {
            IF_SETHIDE(false, comp(1746, 45));  // gwd2_overlay:seren_bg
            IF_SETCOLOUR(65535, comp(1746, 45));  // gwd2_overlay:seren_bg
            IF_SETCOLOUR(65280, comp(1746, 10));  // gwd2_overlay:seren_value_1
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1746, 51));  // gwd2_overlay:sliske_bg
            IF_SETCOLOUR(65535, comp(1746, 51));  // gwd2_overlay:sliske_bg
            IF_SETCOLOUR(65280, comp(1746, 17));  // gwd2_overlay:sliske_value_1
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1746, 57));  // gwd2_overlay:zamorak_bg
            IF_SETCOLOUR(65535, comp(1746, 57));  // gwd2_overlay:zamorak_bg
            IF_SETCOLOUR(65280, comp(1746, 23));  // gwd2_overlay:zamorak_value_1
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1746, 63));  // gwd2_overlay:zaros_bg
            IF_SETCOLOUR(65535, comp(1746, 63));  // gwd2_overlay:zaros_bg
            IF_SETCOLOUR(65280, comp(1746, 29));  // gwd2_overlay:zaros_value_1
            break;
        }
    };
    switch (varbitplayer_30931) {
        case 1: {
            IF_SETHIDE(false, comp(1746, 45));  // gwd2_overlay:seren_bg
            IF_SETCOLOUR(16711680, comp(1746, 45));  // gwd2_overlay:seren_bg
            IF_SETCOLOUR(16711680, comp(1746, 10));  // gwd2_overlay:seren_value_1
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1746, 51));  // gwd2_overlay:sliske_bg
            IF_SETCOLOUR(16711680, comp(1746, 51));  // gwd2_overlay:sliske_bg
            IF_SETCOLOUR(16711680, comp(1746, 17));  // gwd2_overlay:sliske_value_1
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1746, 57));  // gwd2_overlay:zamorak_bg
            IF_SETCOLOUR(16711680, comp(1746, 57));  // gwd2_overlay:zamorak_bg
            IF_SETCOLOUR(16711680, comp(1746, 23));  // gwd2_overlay:zamorak_value_1
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1746, 63));  // gwd2_overlay:zaros_bg
            IF_SETCOLOUR(16711680, comp(1746, 63));  // gwd2_overlay:zaros_bg
            IF_SETCOLOUR(16711680, comp(1746, 29));  // gwd2_overlay:zaros_value_1
            break;
        }
    };
    return;
}