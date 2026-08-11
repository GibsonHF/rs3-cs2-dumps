//
function script11308(int0: number): void {
    var string0 = "";
    var int1 = comp(-1, 65535);
    var int2 = -1;
    var string1 = "<col=00CC00>";
    var string2 = "<col=00CC00>";
    var int3 = true;
    switch (int0) {
        case 26345547: {
            int2 = 8395;
            int1 = comp(402, 73);  // poh_room_creation_menu:poh_parlour_button_disabled_layer
            break;
        }
        case 26345556: {
            int2 = 8415;
            int1 = comp(402, 82);  // poh_room_creation_menu:poh_garden_button_disabled_layer
            break;
        }
        case 26345565: {
            int2 = 8396;
            int1 = comp(402, 91);  // poh_room_creation_menu:poh_kitchen_button_disabled_layer
            break;
        }
        case 26345573: {
            int2 = 8397;
            int1 = comp(402, 99);  // poh_room_creation_menu:poh_dining_button_disabled_layer
            break;
        }
        case 26345589: {
            int2 = 8398;
            int1 = comp(402, 115);  // poh_room_creation_menu:poh_bedroom_button_disabled_layer
            break;
        }
        case 26345605: {
            int2 = 8399;
            int1 = comp(402, 131);  // poh_room_creation_menu:poh_games_button_disabled_layer
            break;
        }
        case 26345597: {
            int2 = 8401;
            int1 = comp(402, 123);  // poh_room_creation_menu:poh_skilltroph_button_disabled_layer
            break;
        }
        case 26345621: {
            int2 = 8403;
            int1 = comp(402, 147);  // poh_room_creation_menu:poh_questtroph_button_disabled_layer
            break;
        }
        case 26345653: {
            int2 = 8405;
            int1 = comp(402, 179);  // poh_room_creation_menu:poh_chapel_button_disabled_layer
            break;
        }
        case 26345581: {
            int2 = 8406;
            int1 = comp(402, 107);  // poh_room_creation_menu:poh_workshop_button_disabled_layer
            break;
        }
        case 26345637: {
            int2 = 8407;
            int1 = comp(402, 163);  // poh_room_creation_menu:poh_study_button_disabled_layer
            break;
        }
        case 26345661: {
            int2 = 8408;
            int1 = comp(402, 187);  // poh_room_creation_menu:poh_portal_button_disabled_layer
            break;
        }
        case 26345677: {
            int2 = 8409;
            int1 = comp(402, 203);  // poh_room_creation_menu:poh_throne_button_disabled_layer
            break;
        }
        case 26345685: {
            int2 = 8410;
            int1 = comp(402, 211);  // poh_room_creation_menu:poh_oubliette_button_disabled_layer
            break;
        }
        case 26345693: {
            int2 = 8411;
            int1 = comp(402, 219);  // poh_room_creation_menu:poh_corridor_button_disabled_layer
            break;
        }
        case 26345710: {
            int2 = 8412;
            int1 = comp(402, 236);  // poh_room_creation_menu:poh_junction_button_disabled_layer
            break;
        }
        case 26345718: {
            int2 = 8413;
            int1 = comp(402, 244);  // poh_room_creation_menu:poh_stairs_button_disabled_layer
            break;
        }
        case 26345734: {
            int2 = 8414;
            int1 = comp(402, 260);  // poh_room_creation_menu:poh_treasure_button_disabled_layer
            break;
        }
        case 26345669: {
            int2 = 8416;
            int1 = comp(402, 195);  // poh_room_creation_menu:poh_formal_button_disabled_layer
            break;
        }
        case 26345613: {
            int2 = 8400;
            int1 = comp(402, 139);  // poh_room_creation_menu:poh_combat_button_disabled_layer
            break;
        }
        case 26345645: {
            int2 = 9842;
            int1 = comp(402, 171);  // poh_room_creation_menu:poh_costume_button_disabled_layer
            break;
        }
        case 26345629: {
            int2 = 15221;
            int1 = comp(402, 155);  // poh_room_creation_menu:poh_menagerie_button_disabled_layer
            break;
        }
        case 26345726: {
            int2 = 18800;
            int1 = comp(402, 252);  // poh_room_creation_menu:poh_pit_button_disabled_layer
            break;
        }
        case 26345702: {
            int2 = 34685;
            int1 = comp(402, 227);  // poh_room_creation_menu:poh_aqua_button_disabled_layer
            break;
        }
    };
    if ((script17401() < script17369(int2))) {
        int3 = false;
        string2 = "<col=CC0000>";
    };
    if ((STAT(22 as stat) < item_getparam(int2, 23))) {
        int3 = false;
        string1 = "<col=CC0000>";
    };
    string0 = `${string1}Level: ${inttostring(item_getparam(int2, 23), 10)}</col><br>${string2}Cost: ${TOSTRING_LOCALISED(script17369(int2), 1)} coins</col>`;
    IF_SETTEXT(string0, int0);
    IF_SETHIDE(int3, int1);
    return;
}