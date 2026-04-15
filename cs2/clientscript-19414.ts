//
function script19414(): unknown_int {
    var int0 = 0;
    var int1 = ACTIVECLANSETTINGS_GETAFFINEDCOUNT();
    if ((varbitplayer_56588 > int1)) {
        return 0;
    };
    while ((int0 < int1)) {
        if ((unk10985(int0, 5, 5) == 1)) {
            return 0;
        };
        int0 = (int0 + 1);
    };
    return 1;
}