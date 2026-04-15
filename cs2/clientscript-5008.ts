//
function script5008(): unknown_int {
    var int0 = -1;
    var int1 = -1;
    var int2 = 0;
    if ((unk10986(0) == 1)) {
        int0 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(CHAT_PLAYERNAME_UNFILTERED());
        if ((int0 < 0)) {
            return 0;
        };
        int1 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int0);
        int2 = (varclan_2132 - DATE_MINUTES());
        if ((int2 < 360)) {
            if ((int1 < 126)) {
                return 0;
            };
            return 1;
        };
        return 1;
    };
    return 0;
}