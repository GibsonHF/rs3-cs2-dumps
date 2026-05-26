//
function script13048(): number {
    if ((STAFFMODLEVEL() >= 2)) {
        if (((varplayer_10719 >= 0) && (INV_GETOBJ(93, varplayer_10719) == 5733))) {
            return 1;
        };
        varplayer_10719 = script12517(93, 5733, 0);
        if ((varplayer_10719 >= 0)) {
            return 1;
        };
    };
    return 0;
}