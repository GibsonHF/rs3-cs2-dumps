//
function script7329(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var int3 = script4186();
    if ((int3 < 1)) {
        IF_SETHIDE(false, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(true, comp(1275, 11));  // pop_hud_side:ship_icon_1
        IF_SETGRAPHIC(15550 as graphic, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(true, comp(1275, 15));  // pop_hud_side:ship_rename_button_1
        IF_SETTEXT("No Ship", comp(1275, 14));  // pop_hud_side:ship_status_1
    } else if ((((varbitplayer_17495 == 24) || (varbitplayer_17495 == 25)) || (varbitplayer_17495 == 50))) {
        IF_SETHIDE(false, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(false, comp(1275, 11));  // pop_hud_side:ship_icon_1
        IF_SETGRAPHIC(15546 as graphic, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 14));  // pop_hud_side:ship_status_1
        } else {
            IF_SETTEXT("Sailing", comp(1275, 14));  // pop_hud_side:ship_status_1
        };
    } else if (((varbitplayer_17495 == 26) || (varbitplayer_17495 == 52))) {
        IF_SETHIDE(false, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(false, comp(1275, 11));  // pop_hud_side:ship_icon_1
        IF_SETGRAPHIC(15542 as graphic, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETTEXT("Returned", comp(1275, 14));  // pop_hud_side:ship_status_1
    } else if ((varbitplayer_17072 > 0)) {
        IF_SETHIDE(false, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(false, comp(1275, 11));  // pop_hud_side:ship_icon_1
        IF_SETGRAPHIC(15542 as graphic, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETTEXT("Returned", comp(1275, 14));  // pop_hud_side:ship_status_1
    } else if ((varbitplayer_17081 > 0)) {
        IF_SETHIDE(false, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(false, comp(1275, 11));  // pop_hud_side:ship_icon_1
        IF_SETGRAPHIC(15546 as graphic, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        if ((((varbitplayer_17071 == 32723) || (varbitplayer_17071 == 32724)) || (varbitplayer_17071 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 14));  // pop_hud_side:ship_status_1
        } else {
            int0 = (script7632(varbitplayer_17081) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 14));  // pop_hud_side:ship_status_1
        };
    } else {
        IF_SETHIDE(true, comp(1275, 12));  // pop_hud_side:ship_gone_icon_1
        IF_SETHIDE(false, comp(1275, 11));  // pop_hud_side:ship_icon_1
        IF_SETTEXT("Ready", comp(1275, 14));  // pop_hud_side:ship_status_1
    };
    if ((int3 < 2)) {
        IF_SETHIDE(false, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(true, comp(1275, 17));  // pop_hud_side:ship_icon_2
        IF_SETGRAPHIC(15550 as graphic, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(true, comp(1275, 21));  // pop_hud_side:ship_rename_button_2
        IF_SETTEXT("No Ship", comp(1275, 20));  // pop_hud_side:ship_status_2
    } else if ((varbitplayer_17083 > 0)) {
        IF_SETHIDE(false, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(false, comp(1275, 17));  // pop_hud_side:ship_icon_2
        IF_SETGRAPHIC(15542 as graphic, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(false, comp(1275, 21));  // pop_hud_side:ship_rename_button_2
        IF_SETTEXT("Returned", comp(1275, 20));  // pop_hud_side:ship_status_2
    } else if ((varbitplayer_17092 > 0)) {
        IF_SETHIDE(false, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(false, comp(1275, 17));  // pop_hud_side:ship_icon_2
        IF_SETGRAPHIC(15546 as graphic, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(false, comp(1275, 21));  // pop_hud_side:ship_rename_button_2
        if ((((varbitplayer_17082 == 32723) || (varbitplayer_17082 == 32724)) || (varbitplayer_17082 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 20));  // pop_hud_side:ship_status_2
        } else {
            int0 = (script7632(varbitplayer_17092) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 20));  // pop_hud_side:ship_status_2
        };
    } else {
        IF_SETHIDE(true, comp(1275, 18));  // pop_hud_side:ship_gone_icon_2
        IF_SETHIDE(false, comp(1275, 17));  // pop_hud_side:ship_icon_2
        IF_SETHIDE(false, comp(1275, 21));  // pop_hud_side:ship_rename_button_2
        IF_SETTEXT("Ready", comp(1275, 20));  // pop_hud_side:ship_status_2
    };
    if ((int3 < 3)) {
        IF_SETHIDE(false, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(true, comp(1275, 23));  // pop_hud_side:ship_icon_3
        IF_SETGRAPHIC(15550 as graphic, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(true, comp(1275, 27));  // pop_hud_side:ship_rename_button_3
        IF_SETTEXT("No Ship", comp(1275, 26));  // pop_hud_side:ship_status_3
    } else if ((varbitplayer_17094 > 0)) {
        IF_SETHIDE(false, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(false, comp(1275, 23));  // pop_hud_side:ship_icon_3
        IF_SETGRAPHIC(15542 as graphic, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(false, comp(1275, 27));  // pop_hud_side:ship_rename_button_3
        IF_SETTEXT("Returned", comp(1275, 26));  // pop_hud_side:ship_status_3
    } else if ((varbitplayer_17103 > 0)) {
        IF_SETHIDE(false, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(false, comp(1275, 23));  // pop_hud_side:ship_icon_3
        IF_SETGRAPHIC(15546 as graphic, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(false, comp(1275, 27));  // pop_hud_side:ship_rename_button_3
        if ((((varbitplayer_17093 == 32723) || (varbitplayer_17093 == 32724)) || (varbitplayer_17093 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 26));  // pop_hud_side:ship_status_3
        } else {
            int0 = (script7632(varbitplayer_17103) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 26));  // pop_hud_side:ship_status_3
        };
    } else {
        IF_SETHIDE(true, comp(1275, 24));  // pop_hud_side:ship_gone_icon_3
        IF_SETHIDE(false, comp(1275, 23));  // pop_hud_side:ship_icon_3
        IF_SETHIDE(false, comp(1275, 27));  // pop_hud_side:ship_rename_button_3
        IF_SETTEXT("Ready", comp(1275, 26));  // pop_hud_side:ship_status_3
    };
    if ((int3 < 4)) {
        IF_SETHIDE(false, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(true, comp(1275, 29));  // pop_hud_side:ship_icon_4
        IF_SETGRAPHIC(15550 as graphic, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(true, comp(1275, 33));  // pop_hud_side:ship_rename_button_4
        IF_SETTEXT("No Ship", comp(1275, 32));  // pop_hud_side:ship_status_4
    } else if ((varbitplayer_17105 > 0)) {
        IF_SETHIDE(false, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(false, comp(1275, 29));  // pop_hud_side:ship_icon_4
        IF_SETGRAPHIC(15542 as graphic, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(false, comp(1275, 33));  // pop_hud_side:ship_rename_button_4
        IF_SETTEXT("Returned", comp(1275, 32));  // pop_hud_side:ship_status_4
    } else if ((varbitplayer_17114 > 0)) {
        IF_SETHIDE(false, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(false, comp(1275, 29));  // pop_hud_side:ship_icon_4
        IF_SETGRAPHIC(15546 as graphic, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(false, comp(1275, 33));  // pop_hud_side:ship_rename_button_4
        if ((((varbitplayer_17104 == 32723) || (varbitplayer_17104 == 32724)) || (varbitplayer_17104 == 32722))) {
            IF_SETTEXT("Damaged", comp(1275, 32));  // pop_hud_side:ship_status_4
        } else {
            int0 = (script7632(varbitplayer_17114) - DATE_MINUTES());
            int1 = (int0 / 60);
            int2 = MODULO(int0, 60);
            string0 = inttostring(int2, 10);
            if ((int2 < 10)) {
                string0 = strconcat("0", string0);
            };
            IF_SETTEXT(`Sailing ETA: ${inttostring(int1, 10)}:${string0}`, comp(1275, 32));  // pop_hud_side:ship_status_4
        };
    } else {
        IF_SETHIDE(true, comp(1275, 30));  // pop_hud_side:ship_gone_icon_4
        IF_SETHIDE(false, comp(1275, 29));  // pop_hud_side:ship_icon_4
        IF_SETHIDE(false, comp(1275, 33));  // pop_hud_side:ship_rename_button_4
        IF_SETTEXT("Ready", comp(1275, 32));  // pop_hud_side:ship_status_4
    };
    return;
}