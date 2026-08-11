//
function script4839(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 82444741: {
            int3 = comp(1258, 456);  // clan_stronghold_main_decor:custom_details_expand_1_1
            int2 = IF_GETNEXTSUBID(comp(1258, 461));  // clan_stronghold_main_decor:custom_details_select_1_1
            break;
        }
        case 82444664: {
            int3 = comp(1258, 379);  // clan_stronghold_main_decor:custom_details_expand_1_2
            int2 = IF_GETNEXTSUBID(comp(1258, 384));  // clan_stronghold_main_decor:custom_details_select_1_2
            break;
        }
        case 82444581: {
            int3 = comp(1258, 296);  // clan_stronghold_main_decor:custom_details_expand_1_3
            int2 = IF_GETNEXTSUBID(comp(1258, 301));  // clan_stronghold_main_decor:custom_details_select_1_3
            break;
        }
        case 82444729: {
            int3 = comp(1258, 444);  // clan_stronghold_main_decor:custom_details_expand_2_1
            int2 = IF_GETNEXTSUBID(comp(1258, 449));  // clan_stronghold_main_decor:custom_details_select_2_1
            break;
        }
        case 82444650: {
            int3 = comp(1258, 365);  // clan_stronghold_main_decor:custom_details_expand_2_2
            int2 = IF_GETNEXTSUBID(comp(1258, 370));  // clan_stronghold_main_decor:custom_details_select_2_2
            break;
        }
        case 82444565: {
            int3 = comp(1258, 280);  // clan_stronghold_main_decor:custom_details_expand_2_3
            int2 = IF_GETNEXTSUBID(comp(1258, 285));  // clan_stronghold_main_decor:custom_details_select_2_3
            break;
        }
        case 82444717: {
            int3 = comp(1258, 432);  // clan_stronghold_main_decor:custom_details_expand_3_1
            int2 = IF_GETNEXTSUBID(comp(1258, 437));  // clan_stronghold_main_decor:custom_details_select_3_1
            break;
        }
        case 82444636: {
            int3 = comp(1258, 351);  // clan_stronghold_main_decor:custom_details_expand_3_2
            int2 = IF_GETNEXTSUBID(comp(1258, 356));  // clan_stronghold_main_decor:custom_details_select_3_2
            break;
        }
        case 82444549: {
            int3 = comp(1258, 264);  // clan_stronghold_main_decor:custom_details_expand_3_3
            int2 = IF_GETNEXTSUBID(comp(1258, 269));  // clan_stronghold_main_decor:custom_details_select_3_3
            break;
        }
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETSCROLLSIZE(0, cc_getparam(1564));
        if ((int1 >= 0)) {
            CC_SETSIZE(0, 27, 1, 0);
            CC_SETSCROLLPOS(0, int1);
            if ((int3 != comp(-1, 65535))) {
                IF_SETPOSITION(IF_GETX(int3), int1, 0, 0, int3);
                if ((int2 > 1)) {
                    IF_SETHIDE(false, int3);
                } else {
                    IF_SETHIDE(true, int3);
                };
            };
        } else {
            CC_SETSIZE(0, cc_getparam(1564), 1, 0);
            CC_SETSCROLLPOS(0, 0);
            if ((int3 != comp(-1, 65535))) {
                IF_SETHIDE(true, int3);
            };
        };
    };
    return;
}