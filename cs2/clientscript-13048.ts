//
function script13048(): unknown_int {
    if ((STAFFMODLEVEL() >= 2)) {
        if (((varplayer_10719 >= 0) && (INV_GETOBJ(93 as inv, varplayer_10719) == 5733 as obj))) {
            return 1;
        };
        varplayer_10719 = script12517(93 as inv, 5733 as obj, 0);
        if ((varplayer_10719 >= 0)) {
            return 1;
        };
    };
    return 0;
}