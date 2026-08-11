//
function script15949(): void {
    var int0 = ((IF_GETX(comp(274, 15) /*escape_menu_mobile:bonds_layer*/) - IF_GETX(comp(274, 11) /*escape_menu_mobile:player_info_layer*/)) - 10);
    IF_SETSIZE(int0, 50, 0, 0, comp(274, 11));  // escape_menu_mobile:player_info_layer
    var int1 = -1 as fontmetrics;
    var int2 = 0;
    [int1, int2] = script5742(int0, CHAT_PLAYERNAME(), 16355, 25, 11);
    if ((int2 <= int0)) {
        IF_SETTEXTFONT(int1, comp(274, 12));  // escape_menu_mobile:player_info_name_text
        IF_SETTEXT(CHAT_PLAYERNAME(), comp(274, 12));  // escape_menu_mobile:player_info_name_text
    } else {
        [int1, int2] = script5742(int0, CHAT_PLAYERNAME_UNFILTERED(), 16355, 25, 11);
        IF_SETTEXTFONT(int1, comp(274, 12));  // escape_menu_mobile:player_info_name_text
        IF_SETTEXT(CHAT_PLAYERNAME_UNFILTERED(), comp(274, 12));  // escape_menu_mobile:player_info_name_text
    };
    return;
}