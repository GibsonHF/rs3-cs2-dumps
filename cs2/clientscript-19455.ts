//
function script19455(): void {
    var int0 = comp(1302, 68);
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 0;
    var int3 = ACTIVECLANSETTINGS_GETAFFINEDCOUNT();
    var string0 = "";
    var int4 = 0;
    var int5 = 0;
    var string1 = "";
    var int6 = -1 as graphic;
    var string2 = "";
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as graphic;
    var string3 = "";
    var string4 = "";
    var int10 = -1;
    var int11 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    var int12 = ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT();
    var int13 = -1;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var string5 = "";
    var string6 = "";
    script19458();
    while ((int1 < int3)) {
        string0 = ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int1);
        int4 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int1);
        int5 = script19391(string0);
        if ((int4 >= 126)) {
            string0 = `${string0}<nbsp><sprite=34560>`;
            string1 = `${string0} - Group Leader`;
        } else {
            string1 = string0;
        };
        int13 = script19413(int1);
        [int6, string2] = script19389(int1, int3);
        [int7, string4, int8, string3, int9] = script19392(int1, string0, int5);
        int10 = script19460(int11, int1, int13);
        int14 = script19331(int13, 0);
        int15 = script19331(int13, 1);
        int16 = (int16 + int14);
        int17 = (int17 + int15);
        string5 = TOSTRING_LOCALISED(int14, 1);
        string6 = TOSTRING_LOCALISED(int15, 1);
        script19459(int0, int1, int12, int11, string0, string1, int6, string2, int5, int7, string4, int8, string3, int9, int10, string5, string6);
        int1 = (int1 + 1);
    };
    script19457(int0, int1);
    script19461(int0, TOSTRING_LOCALISED(int16, 1), TOSTRING_LOCALISED(int17, 1));
    return;
}