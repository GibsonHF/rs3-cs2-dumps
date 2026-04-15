//
function script5481(): unknown_int {
    if (((varbitplayer_5748 == 2) || (varbitplayer_5748 == 3))) {
        return 1;
    };
    if ((varbitplayer_5035 != 0)) {
        return 1;
    };
    switch (INV_GETOBJ(94 as inv, 17)) {
        case 15445:
        case 15446:
        case 15447:
        case 15448:
        case 15449: {
            return 1;
        }
    };
    if ((varbitplayer_3808 == 1)) {
        return 1;
    };
    if ((varclient_186 == true)) {
        return 1;
    };
    return 0;
}