//
function script19407(): void {
    var int0 = comp(1299, 16);
    var int1 = comp(1299, 17);
    CC_DELETEALL(int0);
    var int2 = 0;
    var int3 = 4;
    var int4 = ACTIVECLANSETTINGS_GETAFFINEDCOUNT();
    var int5 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    var int6 = MAX(varbitplayer_56588, int4);
    while ((int2 < int6)) {
        int3 = script19408(int0, int2, int3, int4, int5);
        int2 = (int2 + 1);
    };
    int3 = (int3 + 4);
    script19620(int1, int0, int3, comp(-1, 65535), -1, 0, 8, 0);
    return;
}