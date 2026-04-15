//
function script5975(): void {
    var int0 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        if ((varbitplayer_6675 != varbitclan_6661)) {
            int0 = 1;
        };
        if ((varbitplayer_6676 != varbitclan_6662)) {
            int0 = 1;
        };
        if ((varbitplayer_6676 == 0)) {
            IF_SETHIDE(true, comp(1259, 104));
            IF_SETHIDE(false, comp(1259, 98));
        } else {
            IF_SETHIDE(false, comp(1259, 104));
            IF_SETHIDE(true, comp(1259, 98));
        };
    };
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1259, 68));
        IF_SETHIDE(true, comp(1259, 75));
    } else {
        IF_SETHIDE(false, comp(1259, 68));
        IF_SETHIDE(false, comp(1259, 75));
    };
    return;
}