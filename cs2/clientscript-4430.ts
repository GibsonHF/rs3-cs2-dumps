//
function script4430(int0: number, int1: number, int2: number): void {
    var int3 = comp(1110, 161);  // clan_chat:clan_invite_button_selected
    if ((int2 == 94371845)) {
        int3 = comp(1440, 131);  // toplevel_v2_parent_suboverlay_clan_chat:clan_invite_button_selected
    } else if ((int2 == 96403508)) {
        int3 = comp(1440, 131);  // toplevel_v2_parent_suboverlay_clan_chat:clan_invite_button_selected
    };
    IF_SETGRAPHIC(6242 as graphic, int1);
    IF_SETONTARGETLEAVE(callback(), int0);
    IF_SETHIDE(true, int3);
    return;
}