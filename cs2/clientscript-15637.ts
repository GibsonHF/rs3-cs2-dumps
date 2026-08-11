//
function script15637(int0: number): void {
    var int1 = 0;
    var int2 = IF_GETWIDTH(comp(910, 62));  // lobbyscreen_pane_worldselect:list_area
    var int3 = 2;
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    while ((int1 < 7)) {
        switch (int1) {
            case 0: {
                int5 = SCALE(83, 748, int2);
                int6 = comp(910, 31);  // lobbyscreen_pane_worldselect:world_container
                int7 = comp(910, 67);  // lobbyscreen_pane_worldselect:world
                int8 = comp(910, 80);  // lobbyscreen_pane_worldselect:world_main_div_1
                int9 = comp(910, 22);  // lobbyscreen_pane_worldselect:world_main_div
                break;
            }
            case 1: {
                int5 = SCALE(75, 748, int2);
                int6 = comp(910, 36);  // lobbyscreen_pane_worldselect:player_container
                int7 = comp(910, 69);  // lobbyscreen_pane_worldselect:players
                int8 = comp(910, 81);  // lobbyscreen_pane_worldselect:players_main_div_1
                int9 = comp(910, 23);  // lobbyscreen_pane_worldselect:players_main_div
                break;
            }
            case 2: {
                int5 = SCALE(207, 748, int2);
                int6 = comp(910, 41);  // lobbyscreen_pane_worldselect:activity_container
                int7 = comp(910, 70);  // lobbyscreen_pane_worldselect:activity
                int8 = comp(910, 82);  // lobbyscreen_pane_worldselect:activity_main_div_1
                int9 = comp(910, 24);  // lobbyscreen_pane_worldselect:activity_main_div
                break;
            }
            case 3: {
                int5 = SCALE(202, 748, int2);
                int6 = comp(910, 45);  // lobbyscreen_pane_worldselect:location_container
                int7 = comp(910, 71);  // lobbyscreen_pane_worldselect:location
                int8 = comp(910, 83);  // lobbyscreen_pane_worldselect:location_main_div_1
                int9 = comp(910, 25);  // lobbyscreen_pane_worldselect:location_main_div
                break;
            }
            case 4: {
                int5 = SCALE(75, 748, int2);
                int6 = comp(910, 49);  // lobbyscreen_pane_worldselect:type_container
                int7 = comp(910, 73);  // lobbyscreen_pane_worldselect:type
                int8 = comp(910, 84);  // lobbyscreen_pane_worldselect:type_main_div_1
                int9 = comp(910, 26);  // lobbyscreen_pane_worldselect:type_main_div
                break;
            }
            case 5: {
                int5 = SCALE(40, 748, int2);
                int6 = comp(910, 54);  // lobbyscreen_pane_worldselect:lootshare_container
                int7 = comp(910, 74);  // lobbyscreen_pane_worldselect:lootshare
                int8 = comp(910, 85);  // lobbyscreen_pane_worldselect:qchat_main_div_1
                int9 = comp(910, 27);  // lobbyscreen_pane_worldselect:qchat_main_div
                break;
            }
            case 6: {
                int5 = (int2 - int4);
                int6 = comp(910, 58);  // lobbyscreen_pane_worldselect:ping_container
                int7 = comp(910, 75);  // lobbyscreen_pane_worldselect:ping
                int8 = comp(-1, 65535);
                int9 = comp(-1, 65535);
                break;
            }
        };
        if ((int8 != comp(-1, 65535))) {
            IF_SETCOLOUR(int0, int8);
        };
        if ((int9 != comp(-1, 65535))) {
            IF_SETCOLOUR(int0, int9);
        };
        IF_SETSIZE(int5, 0, 0, 1, int6);
        IF_SETSIZE(int5, 0, 0, 1, int7);
        IF_SETPOSITION(int4, 0, 0, 0, int6);
        IF_SETPOSITION(int4, 0, 0, 0, int7);
        if ((int7 == comp(910, 71))) {  // lobbyscreen_pane_worldselect:location
            IF_SETSIZE(int5, 0, 0, 1, comp(910, 72));  // lobbyscreen_pane_worldselect:location_flag
            IF_SETPOSITION(int4, 0, 0, 0, comp(910, 72));  // lobbyscreen_pane_worldselect:location_flag
        };
        if (((int8 != comp(-1, 65535)) && (int9 != comp(-1, 65535)))) {
            IF_SETPOSITION((int4 + int5), 0, 0, 0, int8);
            IF_SETPOSITION((int4 + int5), 0, 0, 0, int9);
        };
        int4 = (int4 + (int5 + int3));
        int1 = (int1 + 1);
    };
    var int10 = 26 as fontmetrics;
    var int11 = 15;
    var int12 = 21;
    if (((script13749() == 1) && (IF_GETWIDTH(comp(910, 0)) >= 900))) {  // lobbyscreen_pane_worldselect:main
        int10 = 28 as fontmetrics;
        int11 = 24;
        int12 = 42;
    };
    IF_SETSIZE(int12, 0, 0, 1, comp(910, 66));  // lobbyscreen_pane_worldselect:fav
    IF_SETPOSITION((int12 + int3), 0, 0, 0, comp(910, 67));  // lobbyscreen_pane_worldselect:world
    if ((script13749() == 1)) {
        IF_SETHIDE(true, comp(910, 33));  // lobbyscreen_pane_worldselect:world_title
        IF_SETHIDE(true, comp(910, 38));  // lobbyscreen_pane_worldselect:player_title
        IF_SETHIDE(true, comp(910, 51));  // lobbyscreen_pane_worldselect:type_title
        IF_SETHIDE(false, comp(910, 34));  // lobbyscreen_pane_worldselect:world_graphic
        IF_SETHIDE(false, comp(910, 39));  // lobbyscreen_pane_worldselect:player_graphic
        IF_SETHIDE(false, comp(910, 52));  // lobbyscreen_pane_worldselect:type_graphic
        IF_SETGRAPHIC(13461 as graphic, comp(910, 56));  // lobbyscreen_pane_worldselect:lootshare_title
        IF_SETSIZE(int11, int11, 0, 0, comp(910, 34));  // lobbyscreen_pane_worldselect:world_graphic
        IF_SETSIZE(int11, int11, 0, 0, comp(910, 39));  // lobbyscreen_pane_worldselect:player_graphic
        IF_SETSIZE(int11, int11, 0, 0, comp(910, 52));  // lobbyscreen_pane_worldselect:type_graphic
    } else {
        IF_SETTEXTFONT(int10, comp(910, 33));  // lobbyscreen_pane_worldselect:world_title
        IF_SETTEXTFONT(int10, comp(910, 38));  // lobbyscreen_pane_worldselect:player_title
        IF_SETTEXTFONT(int10, comp(910, 51));  // lobbyscreen_pane_worldselect:type_title
        IF_SETPOSITION(4, 0, 0, 1, comp(910, 33));  // lobbyscreen_pane_worldselect:world_title
        IF_SETPOSITION(4, 0, 0, 1, comp(910, 38));  // lobbyscreen_pane_worldselect:player_title
        IF_SETPOSITION(4, 0, 0, 1, comp(910, 51));  // lobbyscreen_pane_worldselect:type_title
    };
    IF_SETTEXTFONT(int10, comp(910, 43));  // lobbyscreen_pane_worldselect:activity_title
    IF_SETTEXTFONT(int10, comp(910, 47));  // lobbyscreen_pane_worldselect:location_title
    IF_SETTEXTFONT(int10, comp(910, 60));  // lobbyscreen_pane_worldselect:ping_title
    IF_SETPOSITION(4, 0, 0, 1, comp(910, 43));  // lobbyscreen_pane_worldselect:activity_title
    IF_SETPOSITION(4, 0, 0, 1, comp(910, 47));  // lobbyscreen_pane_worldselect:location_title
    IF_SETPOSITION(4, 0, 0, 1, comp(910, 60));  // lobbyscreen_pane_worldselect:ping_title
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 35));  // lobbyscreen_pane_worldselect:world_icon_sort
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 40));  // lobbyscreen_pane_worldselect:player_icon_sort
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 53));  // lobbyscreen_pane_worldselect:type_icon_sort
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 57));  // lobbyscreen_pane_worldselect:lootshare_icon_sort
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 44));  // lobbyscreen_pane_worldselect:activity_icon_sort
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 48));  // lobbyscreen_pane_worldselect:location_icon_sort
    IF_SETSIZE(int11, int11, 0, 0, comp(910, 61));  // lobbyscreen_pane_worldselect:ping_icon_sort
    return;
}