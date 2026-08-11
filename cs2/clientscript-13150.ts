//
function script13150(int0: number): void {
    script2731(int0, -1, 3);
    if ((STRING_LENGTH(varclient_4670) > 0)) {
        IF_SETTEXT(`Your personal message is currently set to:<br>${REMOVETAGS(varclient_4670)}`, int0);
        IF_SETHIDE(true, comp(1561, 40));  // player_inspect_settings:clear_button_disabled_layer
    } else {
        IF_SETTEXT("You currently have no personal message set.", int0);
        IF_SETHIDE(false, comp(1561, 40));  // player_inspect_settings:clear_button_disabled_layer
    };
    return;
}