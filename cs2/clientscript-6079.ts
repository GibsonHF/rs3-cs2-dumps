//
function script6079(int0: number, int1: number): void {
    var int2 = varbitplayer_987;
    if ((int0 == comp(1265, 47))) {  // shop_main:compact_mode
        int2 = MODULO((varbitplayer_987 + 1), 2);
    };
    if ((int1 == 1)) {
        if ((int0 == comp(1265, 46))) {  // shop_main:verbose_mode
            if ((int2 == 1)) {
                IF_SETGRAPHIC(10487 as graphic, int0);
            } else {
                IF_SETGRAPHIC(10487 as graphic, int0);
            };
        } else if ((int0 == comp(1265, 47))) {  // shop_main:compact_mode
            if ((int2 == 1)) {
                IF_SETGRAPHIC(10485 as graphic, int0);
            } else {
                IF_SETGRAPHIC(10485 as graphic, int0);
            };
        };
    } else {
        script41(82903041);
        if ((int0 == comp(1265, 46))) {  // shop_main:verbose_mode
            if ((int2 == 1)) {
                IF_SETGRAPHIC(10487 as graphic, int0);
            } else {
                IF_SETGRAPHIC(10486 as graphic, int0);
            };
        } else if ((int0 == comp(1265, 47))) {  // shop_main:compact_mode
            if ((int2 == 1)) {
                IF_SETGRAPHIC(10485 as graphic, int0);
            } else {
                IF_SETGRAPHIC(10484 as graphic, int0);
            };
        };
    };
    return;
}