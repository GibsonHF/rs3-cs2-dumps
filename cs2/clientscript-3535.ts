//
function script3535(): void {
    if ((varbitplayer_45274 == 1)) {
        script13971(comp(578, 12), comp(-1, 65535), 40787 as struct, "Claimed", true);
    } else if (((varplayer_11702 > 0) && (varplayer_3079 >= varplayer_11702))) {
        script13969(comp(578, 12), comp(-1, 65535), 40787 as struct, "Claim");
    } else {
        script13971(comp(578, 12), comp(-1, 65535), 40787 as struct, "Claim", true);
    };
    if ((varbitplayer_45275 == 1)) {
        script13971(comp(578, 19), comp(-1, 65535), 40787 as struct, "Claimed", true);
    } else if (((varplayer_11702 > 0) && (varplayer_3079 >= (varplayer_11702 + 7)))) {
        script13969(comp(578, 19), comp(-1, 65535), 40787 as struct, "Claim");
    } else {
        script13971(comp(578, 19), comp(-1, 65535), 40787 as struct, "Claim", true);
    };
    if ((varbitplayer_45276 == 1)) {
        script13971(comp(578, 26), comp(-1, 65535), 40787 as struct, "Claimed", true);
    } else if (((varplayer_11702 > 0) && (varplayer_3079 >= (varplayer_11702 + 14)))) {
        script13969(comp(578, 26), comp(-1, 65535), 40787 as struct, "Claim");
    } else {
        script13971(comp(578, 26), comp(-1, 65535), 40787 as struct, "Claim", true);
    };
    return;
}