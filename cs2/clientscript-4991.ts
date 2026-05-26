//
function script4991(): void {
    script4993();
    script4994();
    var int0 = -1;
    var int1 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int0 = varbitclan_6507;
        IF_SETHIDE(0, 82641151);
        IF_SETHIDE(0, 82641160);
        IF_SETHIDE(0, 82641169);
        IF_SETHIDE(0, 82641178);
        int1 = 4;
        if ((int0 >= 2)) {
            IF_SETHIDE(0, 82641187);
            int1 = (int1 + 1);
        };
        if ((int0 >= 3)) {
            IF_SETHIDE(0, 82641196);
            IF_SETHIDE(0, 82641205);
            int1 = (int1 + 2);
        };
        if ((int0 >= 5)) {
            IF_SETHIDE(0, 82641223);
            IF_SETHIDE(0, 82641232);
            int1 = (int1 + 2);
        };
        if ((int0 >= 6)) {
            IF_SETHIDE(0, 82641214);
            int1 = (int1 + 1);
        };
        if ((MODULO(int1, 2) != 0)) {
            int1 = (int1 + 1);
        };
        IF_SETSCROLLSIZE(IF_GETWIDTH(82641150), (((int1 / 2) * 58) + 6), 82641150);
        script31(82641149, 82641150, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    return;
}