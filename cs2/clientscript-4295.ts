//[proc,clansettings_interface_refresh]
function script4295(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = script6430(script6518());
    var int9 = script6430(script6519());
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((script6518() == false)) {
        int8 = true;
    };
    if ((script6519() == false)) {
        int9 = true;
    };
    if ((unk10986(0) == 1)) {
        script4329(comp(1096, 96));
        if ((unk11116() == -1)) {
            int1 = 1;
        };
        if ((unk11115() == 1)) {
            int2 = 1;
        };
        if ((varbitclansettings_43993 == 1)) {
            int3 = 1;
        };
        if ((varbitclansettings_43995 == 1)) {
            int4 = 1;
        };
        if ((varbitclansettings_43997 == 1)) {
            int5 = 1;
        };
        int0 = ((varclansettings_0 / 10) + 72);
        if ((varbitclansettings_8805 == 0)) {
            string1 = "Not Set";
        };
        if ((CLANPROFILE_FIND() == 1)) {
            int6 = varclan_2811;
            int7 = varbitclansettings_6339;
        } else {
            string2 = "N/A";
        };
        string0 = "Check this box to use the timezone offset to display event timings on the noticeboard. Uncheck to use standard game time (UTC).";
        script14139(comp(1096, 76), comp(1096, 77), "Clan Time", string0, string0, varbitclansettings_8804, int9);
        string0 = "Check to allow guests into your clan chat channel.";
        script14139(comp(1096, 79), comp(1096, 80), "Guests can enter chat", string0, string0, int2, int9);
        string0 = "Check to allow guests (and all ranks) to talk in your clan chat channel.";
        script14139(comp(1096, 82), comp(1096, 83), "Guests can talk in chat", string0, string0, int1, int8);
        if ((int3 == 1)) {
            string0 = `Current guest PIN: ${inttostring(varbitclansettings_43992, 10)}`;
        } else {
            string0 = "Check to force guests to enter a PIN to join your clan chat channel (if checked you will be prompted to set a PIN).";
        };
        script14139(comp(1096, 625), comp(1096, 626), "Guest pin", string0, string0, int3, int9);
        string0 = "Check this box to indicate that your clan is recruiting. This will display on your clan information interface when a player clicks your vexillum and on your clan website.";
        script14139(comp(1096, 87), comp(1096, 88), "Clan recruiting", string0, string0, varbitclansettings_8803, int9);
        if ((int4 == 1)) {
            string0 = `Total level required to join Clan Chat as a guest: ${TOSTRING_LOCALISED(varbitclansettings_43994, 1)}`;
        } else {
            string0 = "Check to force a clan guest to have reached a certain total level to be able to join your Clan Chat as a guest.";
        };
        script14139(comp(1096, 627), comp(1096, 628), "Total level for guests to join chat", string0, string0, int4, int9);
        if ((int5 == 1)) {
            string0 = `Total level required for someone to join your Clan: ${TOSTRING_LOCALISED(varbitclansettings_43996, 1)}`;
        } else {
            string0 = "Check to force clan members to have reached a certain total level to join your clan.";
        };
        script14139(comp(1096, 629), comp(1096, 630), "Total level to join clan", string0, string0, int5, int9);
        script14140(comp(1096, 17), comp(1096, 18), 3797 as cs2enum, 127, "Select the ranks to display.", varclient_1516, 0, false);
        script14141(comp(1096, 103), comp(1096, 104), 3700 as cs2enum, (261 - 1), "Select a world to designate as your home (optional). This will appear on your clan information interface when a player clicks on your vexillum.", varbitclansettings_8805, 0, int9, string1);
        script14140(comp(1096, 107), comp(1096, 108), 3711 as cs2enum, 156, "Specify a time offset for your clan. Standard game time is UTC.", int0, 0, int9);
        script14141(comp(1096, 111), comp(1096, 112), 4514 as cs2enum, -1, "Select who can view the relationships set on your clan signpost.", int6, 0, int9, string2);
        script14141(comp(1096, 115), comp(1096, 116), 4255 as cs2enum, -1, "Select where guests can go in your citadel. You must be in your citadel to change this.", int7, 0, int9, string2);
        script13971(comp(1096, 120), comp(1096, 121), 28554 as struct, "Motto Editor", int8);
        script13971(comp(1096, 123), comp(1096, 124), 28554 as struct, "Motif Editor", int8);
        script13971(comp(1096, 126), comp(1096, 127), 28554 as struct, "Keyword Editor", int8);
        script13971(comp(1096, 132), comp(1096, 133), 28554 as struct, "Broadcast Settings", int8);
        script13971(comp(1096, 129), comp(1096, 130), 28554 as struct, "Chat Broadcast Settings", int8);
        script13994(comp(1096, 98), comp(1096, 99), 28556 as struct, "Edit Thread ID", int8);
        script13991(comp(1096, 139), comp(1096, 140), 28556 as struct, int8);
        script4301();
    };
    script4310();
    return;
}