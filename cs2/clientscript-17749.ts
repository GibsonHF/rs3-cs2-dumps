//
function script17749(int0: number, int1: number): void {
    script17754();
    IF_SETHIDE(false, comp(1222, 5));  // skill_tree:popup_window
    IF_SETHIDE(false, comp(1222, 57));  // skill_tree:more_information_window
    var int2 = 0;
    var string0 = "";
    if ((int1 != -1)) {
        [int2, string0] = script17490(int1);
        if ((int0 != -1)) {
            IF_SETTEXT(`Requires:<br>- Access to tier <col=ffffff>${dbrow_getfield(int0, 950272, 0)}</col> talents`, comp(1222, 139));  // skill_tree:more_information_summary
        } else {
            IF_SETTEXT("Requires:", comp(1222, 139));  // skill_tree:more_information_summary
        };
        IF_SETTEXT(script17486(int1), comp(1222, 134));  // skill_tree:more_information_name
        IF_SETGRAPHIC(script17489(int1, 0, 1), comp(1222, 137));  // skill_tree:more_information_icon_graphic
        IF_SETTEXT(`${IF_GETTEXT(comp(1222, 139))}${string0}`, comp(1222, 139));  // skill_tree:more_information_summary
    } else if ((int0 != -1)) {
        [int2, string0] = script17482(int0);
        IF_SETTEXT(`Tier <col=ffffff>${dbrow_getfield(int0, 950272, 0)}</col>`, comp(1222, 134));  // skill_tree:more_information_name
        IF_SETGRAPHIC(25128 as graphic, comp(1222, 137));  // skill_tree:more_information_icon_graphic
        IF_SETTEXT(`Requires:${string0}`, comp(1222, 139));  // skill_tree:more_information_summary
    } else if ((varplayer_11091 != -1 as dbrow)) {
        IF_SETTEXT(dbrow_getfield(varplayer_11091, 946192, 0), 80085126);
        IF_SETGRAPHIC(25128 as graphic, comp(1222, 137));  // skill_tree:more_information_icon_graphic
        switch (varplayer_11091) {
            case 7599: {
                string0 = "The amount of XP required to earn a talent point will increase.";
                break;
            }
        };
        IF_SETTEXT(string0, comp(1222, 139));  // skill_tree:more_information_summary
    };
    return;
}