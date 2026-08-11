//[proc,lobbyscreen_tabswitch]
function script3060(int0: number): void {
    var int1 = script13749();
    var int2 = script17126();
    var int3 = enum_getvalue(0, 9, int2, int0);
    if ((int3 == comp(-1, 65535))) {
        script15612();
        return;
    } else if (((IF_GETHIDE(int3) == false) && (int1 == 0))) {
        script15612();
        return;
    };
    varclient_4270 = int0;
    script15628();
    script15612();
    IF_SETHIDE(true, enum_getvalue(0, 9, int2, 0));
    IF_SETHIDE(true, enum_getvalue(0, 9, int2, 1));
    IF_SETHIDE(true, enum_getvalue(0, 9, int2, 2));
    IF_SETHIDE(true, enum_getvalue(0, 9, int2, 4));
    IF_SETHIDE(true, enum_getvalue(0, 9, int2, 3));
    IF_SETHIDE(true, enum_getvalue(0, 9, int2, 5));
    script3017();
    if ((int0 != 4)) {
        script3161(0);
    };
    if ((int0 != 3)) {
        script4556(0);
    };
    if ((int0 == 2)) {
        if ((int1 == 0)) {
            IF_SETONTIMER(callback(script10055), comp(909, 0));  // lobbyscreen_pane_friendslist:main
        } else {
            IF_SETONTIMER(callback(script10055), comp(1044, 0));  // lobbyscreen_pane_mobile_social:main
        };
    };
    if ((int0 == 1)) {
        script15639();
        WORLDLIST_PINGWORLDS(1);
    } else {
        WORLDLIST_PINGWORLDS(0);
    };
    if ((int0 == 5)) {
        IF_SETHIDE(true, comp(906, 59));  // lobbyscreen:bottom_bar
    } else {
        if ((WORLDLIST_FETCH() == 0)) {
            IF_SETONTIMER(callback(script13117, -2147483645), comp(906, 6));  // lobbyscreen:current_world_timer
        } else {
            script3116();
        };
        IF_SETHIDE(false, comp(906, 59));  // lobbyscreen:bottom_bar
    };
    IF_SETHIDE(false, int3);
    switch (int0) {
        case 2: {
            if ((int1 == 1)) {
                IF_BUTTON_SETTOGGLED(0, comp(1044, 6));  // lobbyscreen_pane_mobile_social:friends_chat_button
                IF_BUTTON_SETTOGGLED(0, comp(1044, 7));  // lobbyscreen_pane_mobile_social:clan_chat_button
            };
            break;
        }
        case 4: {
            script3161(1);
            if ((int1 == 1)) {
                IF_BUTTON_SETTOGGLED(0, comp(1044, 5));  // lobbyscreen_pane_mobile_social:friends_button
                IF_BUTTON_SETTOGGLED(0, comp(1044, 6));  // lobbyscreen_pane_mobile_social:friends_chat_button
            };
            break;
        }
        case 3: {
            script4556(1);
            if ((int1 == 1)) {
                IF_BUTTON_SETTOGGLED(0, comp(1044, 5));  // lobbyscreen_pane_mobile_social:friends_button
                IF_BUTTON_SETTOGGLED(0, comp(1044, 7));  // lobbyscreen_pane_mobile_social:clan_chat_button
            };
            break;
        }
    };
    script15600(int0);
    return;
}