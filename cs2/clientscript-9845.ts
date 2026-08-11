//
function script9845(): void {
    var string0 = "You can change your character name for free in:";
    var string1 = "Don't want to wait? Redeem a Bond to change your name now.";
    var string2 = "";
    var string3 = "";
    if ((varbitplayer_22833 == 0)) {
        string2 = "Redeeming a Bond will consume it.";
        string3 = "Redeem bond";
        IF_SETHIDE(false, comp(1501, 9));  // bonds_namechange_redeem:info_layer
        IF_SETHIDE(false, comp(1501, 5));  // bonds_namechange_redeem:cooldown_layer
    } else if ((varbitplayer_22833 == 1)) {
        string1 = `You have purchased the ability to change your name early.<br>You have ${inttostring(varbitplayer_22834, 10)} early name ${script4583(varbitplayer_22834, "change", "changes")} remaining.`;
        string3 = "Change name";
        IF_SETHIDE(true, comp(1501, 9));  // bonds_namechange_redeem:info_layer
        IF_SETHIDE(false, comp(1501, 5));  // bonds_namechange_redeem:cooldown_layer
    } else if ((varbitplayer_22833 == 2)) {
        string2 = "You don't have any Bonds to redeem.";
        string3 = "Buy Bonds";
        IF_SETHIDE(false, comp(1501, 9));  // bonds_namechange_redeem:info_layer
        IF_SETHIDE(false, comp(1501, 5));  // bonds_namechange_redeem:cooldown_layer
    };
    IF_SETTEXT(varclient_4201, comp(1501, 7));  // bonds_namechange_redeem:cooldown_text
    IF_SETTEXT(string0, comp(1501, 4));  // bonds_namechange_redeem:namechange_info
    IF_SETTEXT(string1, comp(1501, 8));  // bonds_namechange_redeem:namechange_info_secondary
    IF_SETTEXT(string2, comp(1501, 12));  // bonds_namechange_redeem:namechange_warning
    if ((varplayer_9781 < 1)) {
        IF_SETHIDE(true, comp(1501, 20));  // bonds_namechange_redeem:untradeable_bond_layer
        IF_SETHIDE(false, comp(1501, 16));  // bonds_namechange_redeem:tradeable_bond_layer
    } else {
        IF_SETHIDE(false, comp(1501, 20));  // bonds_namechange_redeem:untradeable_bond_layer
        IF_SETHIDE(true, comp(1501, 16));  // bonds_namechange_redeem:tradeable_bond_layer
    };
    return;
}