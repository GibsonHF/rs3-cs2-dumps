//
function script15400(): void {
    var int0 = script15392(varbitplayer_48371);
    var string0 = dbrow_getfield(int0, 475168, 0);
    var string1 = dbrow_getfield(int0, 475184, 0);
    var string2 = enum_getvalue(0, 36, 16104, varbitplayer_48373);
    var int1 = -1;
    if ((varbitplayer_48371 > 0)) {
        IF_SETTEXT(string0, comp(736, 4));  // con_contracts_minigame_child:location_title
        IF_SETTEXT(string1, comp(736, 15));  // con_contracts_minigame_child:description
        IF_SETTEXT(string2, comp(736, 14));  // con_contracts_minigame_child:contract_npc
        IF_SETTEXT(`XP Reward: ${TOSTRING_LOCALISED((dbrow_getfield(int0, 475328, 0) / 10), 1)}`, comp(736, 24));  // con_contracts_minigame_child:contract_reward_text
        IF_SETHIDE(false, comp(736, 5));  // con_contracts_minigame_child:task_info
        int1 = (int1 + 1);
        while ((int1 < 5)) {
            script15401(int0, int1);
        };
    } else {
        IF_SETTEXT("Contract complete.", comp(736, 4));  // con_contracts_minigame_child:location_title
        IF_SETTEXT("Head over to any estate agent to pick up a contract.", comp(736, 15));  // con_contracts_minigame_child:description
        IF_SETHIDE(true, comp(736, 5));  // con_contracts_minigame_child:task_info
    };
    return;
}