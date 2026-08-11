//
function script4849(): void {
    var int0 = 82444847;
    var int1 = 82444846;
    var int2 = 82444850;
    var int3 = 82444851;
    var int4 = 82444848;
    var int5 = 82444849;
    IF_SETHIDE(true, comp(1258, 587));  // clan_stronghold_main_decor:custom_slot_tab_selected_1
    IF_SETHIDE(true, comp(1258, 578));  // clan_stronghold_main_decor:custom_slot_tab_selected_2
    IF_SETHIDE(true, comp(1258, 569));  // clan_stronghold_main_decor:custom_slot_tab_selected_3
    switch (varbitplayer_6981) {
        case 1: {
            IF_SETHIDE(false, comp(1258, 587));  // clan_stronghold_main_decor:custom_slot_tab_selected_1
            if ((varbitplayer_6993 == 0)) {
                script4940();
                script4850(int0, int1, int2, int3, int4, int5);
            } else {
                script4942();
                script4851(int0, int1, int2, int3, int4, int5);
            };
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1258, 578));  // clan_stronghold_main_decor:custom_slot_tab_selected_2
            if ((varbitplayer_7002 == 0)) {
                script4940();
                script4850(int0, int1, int2, int3, int4, int5);
            } else {
                script4942();
                script4851(int0, int1, int2, int3, int4, int5);
            };
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1258, 569));  // clan_stronghold_main_decor:custom_slot_tab_selected_3
            if ((varbitplayer_7011 == 0)) {
                script4940();
                script4850(int0, int1, int2, int3, int4, int5);
            } else {
                script4942();
                script4851(int0, int1, int2, int3, int4, int5);
            };
            break;
        }
    };
    script4804();
    script4852();
    return;
}