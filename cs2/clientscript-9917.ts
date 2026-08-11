//
function script9917(int0: number, int1: number): string {
    switch (int0) {
        case 0: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 217));  // chatdefault:legacy_text_game_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Filter", comp(137, 217));  // chatdefault:legacy_text_game_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>All", comp(137, 217));  // chatdefault:legacy_text_game_setting
            };
            break;
        }
        case 1: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 222));  // chatdefault:legacy_text_public_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Friends", comp(137, 222));  // chatdefault:legacy_text_public_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 222));  // chatdefault:legacy_text_public_setting
            } else if ((int1 == 3)) {
                IF_SETTEXT("<col=00ffff>Hide", comp(137, 222));  // chatdefault:legacy_text_public_setting
            };
            break;
        }
        case 2: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 227));  // chatdefault:legacy_text_private_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Friends", comp(137, 227));  // chatdefault:legacy_text_private_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 227));  // chatdefault:legacy_text_private_setting
            };
            break;
        }
        case 3: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 232));  // chatdefault:legacy_text_friendschat_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Friends", comp(137, 232));  // chatdefault:legacy_text_friendschat_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 232));  // chatdefault:legacy_text_friendschat_setting
            };
            break;
        }
        case 4: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 237));  // chatdefault:legacy_text_clan_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Friends", comp(137, 237));  // chatdefault:legacy_text_clan_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 237));  // chatdefault:legacy_text_clan_setting
            };
            break;
        }
        case 5: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 242));  // chatdefault:legacy_text_guest_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Friends", comp(137, 242));  // chatdefault:legacy_text_guest_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 242));  // chatdefault:legacy_text_guest_setting
            };
            break;
        }
        case 6: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 247));  // chatdefault:legacy_text_trade_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Friends", comp(137, 247));  // chatdefault:legacy_text_trade_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 247));  // chatdefault:legacy_text_trade_setting
            };
            break;
        }
        case 15: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 252));  // chatdefault:legacy_text_group_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Team", comp(137, 252));  // chatdefault:legacy_text_group_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 252));  // chatdefault:legacy_text_group_setting
            };
            break;
        }
        case 16: {
            if ((int1 == 0)) {
                IF_SETTEXT("<col=ff0000>Off", comp(137, 262));  // chatdefault:legacy_text_group_ironman_setting
            } else if ((int1 == 1)) {
                IF_SETTEXT("<col=ffff00>Notifications Only", comp(137, 262));  // chatdefault:legacy_text_group_ironman_setting
            } else if ((int1 == 2)) {
                IF_SETTEXT("<col=00ff00>On", comp(137, 262));  // chatdefault:legacy_text_group_ironman_setting
            };
            break;
        }
    };
    return "null";
}