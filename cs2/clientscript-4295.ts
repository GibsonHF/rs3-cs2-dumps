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
    if ((script6518() == 0)) {
        int8 = 1;
    };
    if ((script6519() == 0)) {
        int9 = 1;
    };
    if ((unk10986(0) == 1)) {
        script4329(71827552);
        if ((unk11115() == -1)) {
            int1 = 1;
        };
        if ((unk11114() == 1)) {
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
        script14139(71827532, 71827533, "Clan Time", string0, string0, varbitclansettings_8804, int9);
        string0 = "Check to allow guests into your clan chat channel.";
        script14139(71827535, 71827536, "Guests can enter chat", string0, string0, int2, int9);
        string0 = "Check to allow guests (and all ranks) to talk in your clan chat channel.";
        script14139(71827538, 71827539, "Guests can talk in chat", string0, string0, int1, int8);
        if ((int3 == 1)) {
            string0 = `Current guest PIN: ${inttostring(varbitclansettings_43992, 10)}`;
        } else {
            string0 = "Check to force guests to enter a PIN to join your clan chat channel (if checked you will be prompted to set a PIN).";
        };
        script14139(71828081, 71828082, "Guest pin", string0, string0, int3, int9);
        string0 = "Check this box to indicate that your clan is recruiting. This will display on your clan information interface when a player clicks your vexillum and on your clan website.";
        script14139(71827543, 71827544, "Clan recruiting", string0, string0, varbitclansettings_8803, int9);
        if ((int4 == 1)) {
            string0 = `Total level required to join Clan Chat as a guest: ${TOSTRING_LOCALISED(varbitclansettings_43994, 1)}`;
        } else {
            string0 = "Check to force a clan guest to have reached a certain total level to be able to join your Clan Chat as a guest.";
        };
        script14139(71828083, 71828084, "Total level for guests to join chat", string0, string0, int4, int9);
        if ((int5 == 1)) {
            string0 = `Total level required for someone to join your Clan: ${TOSTRING_LOCALISED(varbitclansettings_43996, 1)}`;
        } else {
            string0 = "Check to force clan members to have reached a certain total level to join your clan.";
        };
        script14139(71828085, 71828086, "Total level to join clan", string0, string0, int5, int9);
        script14140(71827473, 71827474, 3797, 127, "Select the ranks to display.", varclient_1516, 0, 0);
        script14141(71827559, 71827560, 3700, (261 - 1), "Select a world to designate as your home (optional). This will appear on your clan information interface when a player clicks on your vexillum.", varbitclansettings_8805, 0, int9, string1);
        script14140(71827563, 71827564, 3711, 156, "Specify a time offset for your clan. Standard game time is UTC.", int0, 0, int9);
        script14141(71827567, 71827568, 4514, -1, "Select who can view the relationships set on your clan signpost.", int6, 0, int9, string2);
        script14141(71827571, 71827572, 4255, -1, "Select where guests can go in your citadel. You must be in your citadel to change this.", int7, 0, int9, string2);
        script13971(71827576, 71827577, 28554, "Motto Editor", int8);
        script13971(71827579, 71827580, 28554, "Motif Editor", int8);
        script13971(71827582, 71827583, 28554, "Keyword Editor", int8);
        script13971(71827588, 71827589, 28554, "Broadcast Settings", int8);
        script13971(71827585, 71827586, 28554, "Chat Broadcast Settings", int8);
        script13994(71827554, 71827555, 28556, "Edit Thread ID", int8);
        script13991(71827595, 71827596, 28556, int8);
        script4301();
    };
    script4310();
    return;
}