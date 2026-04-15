//
function script19175(int0: struct): string {
    var int1 = 0;
    switch (int0) {
        case 32986: {
            int1 = varbitplayer_51602;
            break;
        }
        case 50263: {
            int1 = varbitplayer_56043;
            break;
        }
        case 2951: {
            int1 = varbitplayer_57721;
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            break;
        }
    };
    return enum_getvalue(0, 36, 2023 as cs2enum, int1);
}