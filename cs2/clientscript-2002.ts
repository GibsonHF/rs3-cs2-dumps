//[proc,battlestaff_number]
function script2002(): int {
    var int0 = 0;
    if ((script12952() == 1)) {
        if (((varbitplayer_15630 == 1) && (STAT_BASE(1 as stat) >= 37))) {
            if ((varbitplayer_15560 > 159)) {
                int0 = 0;
            } else {
                int0 = (160 - varbitplayer_15560);
            };
        } else if (((varbitplayer_15548 == 1) && (STAT_BASE(1 as stat) >= 35))) {
            if ((varbitplayer_15560 > 127)) {
                int0 = 0;
            } else {
                int0 = (128 - varbitplayer_15560);
            };
        } else if (((varbitplayer_15547 == 1) && (STAT_BASE(1 as stat) >= 35))) {
            if ((varbitplayer_15560 > 63)) {
                int0 = 0;
            } else {
                int0 = (64 - varbitplayer_15560);
            };
        } else if ((varbitplayer_15546 == 1)) {
            if ((varbitplayer_15560 > 31)) {
                int0 = 0;
            } else {
                int0 = (32 - varbitplayer_15560);
            };
        } else if ((varbitplayer_15546 == 0)) {
            if ((varbitplayer_15560 > 15)) {
                int0 = 0;
            } else {
                int0 = (16 - varbitplayer_15560);
            };
        };
    } else if (((varbitplayer_15630 == 1) && (STAT_BASE(1 as stat) >= 37))) {
        if ((varbitplayer_15560 > 79)) {
            int0 = 0;
        } else {
            int0 = (80 - varbitplayer_15560);
        };
    } else if (((varbitplayer_15548 == 1) && (STAT_BASE(1 as stat) >= 35))) {
        if ((varbitplayer_15560 > 63)) {
            int0 = 0;
        } else {
            int0 = (64 - varbitplayer_15560);
        };
    } else if (((varbitplayer_15547 == 1) && (STAT_BASE(1 as stat) >= 35))) {
        if ((varbitplayer_15560 > 31)) {
            int0 = 0;
        } else {
            int0 = (32 - varbitplayer_15560);
        };
    } else if ((varbitplayer_15546 == 1)) {
        if ((varbitplayer_15560 > 15)) {
            int0 = 0;
        } else {
            int0 = (16 - varbitplayer_15560);
        };
    } else if ((varbitplayer_15546 == 0)) {
        if ((varbitplayer_15560 > 7)) {
            int0 = 0;
        } else {
            int0 = (8 - varbitplayer_15560);
        };
    };
    return int0;
}