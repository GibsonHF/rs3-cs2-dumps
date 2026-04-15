//
function script4590(): [int, int, int, int, int, int, int] {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    if ((unk10993(0) == 1)) {
        int2 = unk11053();
        int0 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
        if ((int0 >= 0)) {
            int1 = ACTIVECLANCHANNEL_GETUSERRANK(int0);
            if ((unk10986(0) == 1)) {
                int3 = unk10985(ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED())), 10, 10);
            };
        };
    };
    if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
        int6 = unk11053();
        int4 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
        if ((int4 >= 0)) {
            int5 = ACTIVECLANCHANNEL_GETUSERRANK(int4);
        };
    };
    return [int0, int1, int2, int3, int4, int5, int6];
}