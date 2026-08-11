//
function script1442(): void {
    switch (varplayer_1045) {
        case 0: {
            return;
        }
        case 1: {
            IF_SETHIDE(false, comp(299, 54));  // ship_journey:sarim_entrana_layer
            IF_SETMODELANIM(632 as seq, comp(299, 53));  // ship_journey:sarim_to_entrana_ship
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(299, 46));  // ship_journey:entrana_sarim_layer
            IF_SETMODELANIM(633 as seq, comp(299, 52));  // ship_journey:entrana_to_sarim_ship
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(299, 44));  // ship_journey:sarim_crandor_layer
            IF_SETMODELANIM(630 as seq, comp(299, 55));  // ship_journey:sarim_to_crandor_ship
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(299, 43));  // ship_journey:sarim_karamja_layer
            IF_SETMODELANIM(634 as seq, comp(299, 57));  // ship_journey:sarim_to_karamja_ship
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(299, 42));  // ship_journey:karamja_sarim_layer
            IF_SETMODELANIM(635 as seq, comp(299, 58));  // ship_journey:karamja_to_sarim_ship
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(299, 41));  // ship_journey:ardougne_brimhaven_layer
            IF_SETMODELANIM(636 as seq, comp(299, 59));  // ship_journey:ardougne_to_brimhaven_ship
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(299, 40));  // ship_journey:brimhaven_ardougne_layer
            IF_SETMODELANIM(637 as seq, comp(299, 60));  // ship_journey:brimhaven_to_ardougne_ship
            break;
        }
        case 10: {
            IF_SETHIDE(false, comp(299, 38));  // ship_journey:cairn_khazzard_layer
            IF_SETMODELANIM(638 as seq, comp(299, 62));  // ship_journey:cairn_to_khazzard_ship
            break;
        }
        case 11: {
            IF_SETHIDE(false, comp(299, 37));  // ship_journey:khazzard_trawler_layer
            IF_SETMODELANIM(639 as seq, comp(299, 63));  // ship_journey:khazzard_to_trawler_ship
            break;
        }
        case 12: {
            IF_SETHIDE(false, comp(299, 36));  // ship_journey:trawler_khazzard_layer
            IF_SETMODELANIM(640 as seq, comp(299, 64));  // ship_journey:trawler_to_khazzard_ship
            break;
        }
        case 13: {
            IF_SETHIDE(false, comp(299, 35));  // ship_journey:cairn_sarim_layer
            IF_SETMODELANIM(641 as seq, comp(299, 65));  // ship_journey:cairn_to_sarim_ship
            break;
        }
        case 14: {
            IF_SETHIDE(false, comp(299, 34));  // ship_journey:sarim_voidknight_layer
            IF_SETMODELANIM(3545 as seq, comp(299, 66));  // ship_journey:sarim_to_voidknight_ship
            break;
        }
        case 15: {
            IF_SETHIDE(false, comp(299, 33));  // ship_journey:karamja_voidknight_layer
            IF_SETMODELANIM(3546 as seq, comp(299, 67));  // ship_journey:karamja_to_voidknight_ship
            break;
        }
        case 16: {
            IF_SETHIDE(false, comp(299, 32));  // ship_journey:feldip_tai_layer
            IF_SETMODELANIM(3476 as seq, comp(299, 68));  // ship_journey:feldip_to_tai_bwo_wannai_boat
            break;
        }
        case 17: {
            IF_SETHIDE(false, comp(299, 31));  // ship_journey:tai_feldip_layer
            IF_SETMODELANIM(3477 as seq, comp(299, 51));  // ship_journey:tai_bwo_wannai_to_feldip_boat
            break;
        }
    };
    return;
}