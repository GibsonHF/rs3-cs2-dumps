//
function script10140(int0: number): void {
    if ((varbitclient_23079 == 1)) {
        printmessage("You can't change that while your broadcast is active");
        return;
    };
    IF_SETHIDE(true, comp(232, 64));  // toplevel_v2_parent_suboverlay_twitch:api_check
    IF_SETHIDE(true, comp(232, 72));  // toplevel_v2_parent_suboverlay_twitch:twitch_login
    IF_SETHIDE(true, comp(232, 73));  // toplevel_v2_parent_suboverlay_twitch:twitch_setup
    IF_SETHIDE(true, comp(232, 69));  // toplevel_v2_parent_suboverlay_twitch:logging_in
    IF_SETHIDE(false, comp(232, 66));  // toplevel_v2_parent_suboverlay_twitch:autosetup
    script10141(int0);
    return;
}