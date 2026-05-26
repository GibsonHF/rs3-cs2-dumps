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
            IF_SETHIDE(1, 82509928);
            IF_SETHIDE(0, 82509922);
        } else {
            IF_SETHIDE(0, 82509928);
            IF_SETHIDE(1, 82509922);
        };
    };
    if ((int0 == 1)) {
        IF_SETHIDE(1, 82509892);
        IF_SETHIDE(1, 82509899);
    } else {
        IF_SETHIDE(0, 82509892);
        IF_SETHIDE(0, 82509899);
    };
    return;
}