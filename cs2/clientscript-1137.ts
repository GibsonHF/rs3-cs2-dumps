//
function script1137(): void {
    if ((varbitplayer_17461 <= 0)) {
        script13960(comp(1276, 43), 28693 as struct, true, 0);
        script13960(comp(1276, 65), 28693 as struct, true, 0);
        script13960(comp(1276, 87), 28693 as struct, true, 0);
    } else {
        script13960(comp(1276, 43), 28693 as struct, false, 0);
        script13960(comp(1276, 65), 28693 as struct, false, 0);
        script13960(comp(1276, 87), 28693 as struct, false, 0);
    };
    if ((varbitplayer_17422 <= 0)) {
        script13960(comp(1276, 35), 28693 as struct, true, 0);
    } else {
        script13960(comp(1276, 35), 28693 as struct, false, 0);
    };
    if (((varbitplayer_17420 < 1) || (varbitplayer_17461 > 10))) {
        IF_SETHIDE(false, comp(1276, 106));
    } else {
        IF_SETHIDE(true, comp(1276, 106));
    };
    return;
}