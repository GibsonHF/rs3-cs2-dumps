//
function script2671(): void {
    var int0 = false;
    var int1 = false;
    var int2 = false;
    var int3 = false;
    var int4 = false;
    var int5 = false;
    var int6 = false;
    var int7 = false;
    if ((varplayer_1831 != -1 as obj)) {
        [int0, int1, int2, int3, int4, int5, int6, int7] = script8083(varplayer_1784);
        if ((OC_CATEGORY(varplayer_1831) == 2840 as category)) {
            if ((item_getparam(varplayer_1831, 5048) == 1)) {
                int0 = true;
            } else {
                int0 = false;
            };
            int1 = false;
            int2 = false;
            int3 = true;
            int4 = true;
            if ((item_getparam(varplayer_1831, 5048) == 1)) {
                if ((varbitplayer_27747 == 1)) {
                    int5 = true;
                } else {
                    int5 = false;
                };
            } else {
                int5 = false;
            };
            int6 = false;
            int7 = true;
        };
        if ((item_getparam(varplayer_1831, 5120) == 0)) {
            int7 = false;
        };
    };
    if ((varbitplayer_6068 == 5)) {
        if ((int0 == true)) {
            IF_SETHIDE(false, comp(1430, 46));  // toplevel_v2_combat_bar:details_op1
            IF_SETHIDE(true, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
            IF_SETHIDE(false, comp(1506, 27));  // topstat_lore:details_op1
            IF_SETHIDE(true, comp(1506, 26));  // topstat_lore:details_layer
            IF_SETHIDE(false, comp(1923, 44));  // toplevel_v2_combat_bar_mobile:details_op1
            IF_SETHIDE(true, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
        } else {
            IF_SETHIDE(true, comp(1430, 46));  // toplevel_v2_combat_bar:details_op1
            IF_SETHIDE(false, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
            IF_SETHIDE(true, comp(1506, 27));  // topstat_lore:details_op1
            IF_SETHIDE(false, comp(1506, 26));  // topstat_lore:details_layer
            IF_SETHIDE(true, comp(1923, 44));  // toplevel_v2_combat_bar_mobile:details_op1
            IF_SETHIDE(false, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 46));  // toplevel_v2_combat_bar:details_op1
        IF_SETHIDE(false, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
        IF_SETHIDE(true, comp(1506, 27));  // topstat_lore:details_op1
        IF_SETHIDE(false, comp(1506, 26));  // topstat_lore:details_layer
        IF_SETHIDE(true, comp(1923, 44));  // toplevel_v2_combat_bar_mobile:details_op1
        IF_SETHIDE(false, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
    };
    if ((varbitplayer_6068 == 2)) {
        if ((int2 == true)) {
            IF_SETHIDE(false, comp(1430, 43));  // toplevel_v2_combat_bar:attack_op1
            IF_SETHIDE(true, comp(1430, 33));  // toplevel_v2_combat_bar:attack_layer
            IF_SETHIDE(false, comp(1506, 24));  // topstat_lore:attack_op1
            IF_SETHIDE(true, comp(1506, 13));  // topstat_lore:attack_layer
            IF_SETHIDE(false, comp(1923, 41));  // toplevel_v2_combat_bar_mobile:attack_op1
            IF_SETHIDE(true, comp(1923, 31));  // toplevel_v2_combat_bar_mobile:attack_layer
        } else {
            IF_SETHIDE(true, comp(1430, 43));  // toplevel_v2_combat_bar:attack_op1
            IF_SETHIDE(false, comp(1430, 33));  // toplevel_v2_combat_bar:attack_layer
            IF_SETHIDE(true, comp(1506, 24));  // topstat_lore:attack_op1
            IF_SETHIDE(false, comp(1506, 13));  // topstat_lore:attack_layer
            IF_SETHIDE(true, comp(1923, 41));  // toplevel_v2_combat_bar_mobile:attack_op1
            IF_SETHIDE(false, comp(1923, 31));  // toplevel_v2_combat_bar_mobile:attack_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 43));  // toplevel_v2_combat_bar:attack_op1
        IF_SETHIDE(false, comp(1430, 33));  // toplevel_v2_combat_bar:attack_layer
        IF_SETHIDE(true, comp(1506, 24));  // topstat_lore:attack_op1
        IF_SETHIDE(false, comp(1506, 13));  // topstat_lore:attack_layer
        IF_SETHIDE(true, comp(1923, 41));  // toplevel_v2_combat_bar_mobile:attack_op1
        IF_SETHIDE(false, comp(1923, 31));  // toplevel_v2_combat_bar_mobile:attack_layer
    };
    if ((varbitplayer_6068 == 4)) {
        if ((int3 == true)) {
            IF_SETHIDE(false, comp(1430, 50));  // toplevel_v2_combat_bar:call_op1
            IF_SETHIDE(true, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
            IF_SETHIDE(false, comp(1506, 31));  // topstat_lore:call_op1
            IF_SETHIDE(true, comp(1506, 29));  // topstat_lore:call_layer
            IF_SETHIDE(false, comp(1923, 48));  // toplevel_v2_combat_bar_mobile:call_op1
            IF_SETHIDE(true, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
        } else {
            IF_SETHIDE(true, comp(1430, 50));  // toplevel_v2_combat_bar:call_op1
            IF_SETHIDE(false, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
            IF_SETHIDE(true, comp(1506, 31));  // topstat_lore:call_op1
            IF_SETHIDE(false, comp(1506, 29));  // topstat_lore:call_layer
            IF_SETHIDE(true, comp(1923, 48));  // toplevel_v2_combat_bar_mobile:call_op1
            IF_SETHIDE(false, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 50));  // toplevel_v2_combat_bar:call_op1
        IF_SETHIDE(false, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
        IF_SETHIDE(true, comp(1506, 31));  // topstat_lore:call_op1
        IF_SETHIDE(false, comp(1506, 29));  // topstat_lore:call_layer
        IF_SETHIDE(true, comp(1923, 48));  // toplevel_v2_combat_bar_mobile:call_op1
        IF_SETHIDE(false, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
    };
    if ((varbitplayer_6068 == 3)) {
        if ((int4 == true)) {
            IF_SETHIDE(false, comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
            IF_SETHIDE(true, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
            IF_SETHIDE(false, comp(1506, 32));  // topstat_lore:dismiss_op1
            IF_SETHIDE(true, comp(1506, 30));  // topstat_lore:dismiss_layer
            IF_SETHIDE(false, comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
            IF_SETHIDE(true, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
            if ((item_getparam(varplayer_1831, 395) > 0)) {
                if ((item_getparam(varplayer_1831, 5051) == -1 as struct)) {
                    IF_SETOP(1, "Pick up", comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
                    IF_SETOP(1, "Pick up", comp(1506, 32));  // topstat_lore:dismiss_op1
                    IF_SETOP(1, "Pick up", comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
                } else {
                    IF_SETOP(1, "Dismiss", comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
                    IF_SETOP(1, "Dismiss", comp(1506, 32));  // topstat_lore:dismiss_op1
                    IF_SETOP(1, "Dismiss", comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
                };
            } else {
                IF_SETOP(1, "Dismiss", comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
                IF_SETOP(1, "Dismiss", comp(1506, 32));  // topstat_lore:dismiss_op1
                IF_SETOP(1, "Dismiss", comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
            };
        } else {
            IF_SETHIDE(true, comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
            IF_SETHIDE(false, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
            IF_SETHIDE(true, comp(1506, 32));  // topstat_lore:dismiss_op1
            IF_SETHIDE(false, comp(1506, 30));  // topstat_lore:dismiss_layer
            IF_SETHIDE(true, comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
            IF_SETHIDE(false, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
        IF_SETHIDE(false, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
        IF_SETHIDE(true, comp(1506, 32));  // topstat_lore:dismiss_op1
        IF_SETHIDE(false, comp(1506, 30));  // topstat_lore:dismiss_layer
        IF_SETHIDE(true, comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
        IF_SETHIDE(false, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
    };
    if ((varbitplayer_6068 == 8)) {
        if ((int5 == true)) {
            IF_SETHIDE(false, comp(1430, 40));  // toplevel_v2_combat_bar:bob_take_op1
            IF_SETHIDE(true, comp(1430, 30));  // toplevel_v2_combat_bar:bob_take_layer
            IF_SETHIDE(false, comp(1506, 20));  // topstat_lore:bob_take_op1
            IF_SETHIDE(true, comp(1506, 10));  // topstat_lore:bob_take_layer
            IF_SETHIDE(false, comp(1923, 38));  // toplevel_v2_combat_bar_mobile:bob_take_op1
            IF_SETHIDE(true, comp(1923, 28));  // toplevel_v2_combat_bar_mobile:bob_take_layer
        } else {
            IF_SETHIDE(true, comp(1430, 40));  // toplevel_v2_combat_bar:bob_take_op1
            IF_SETHIDE(false, comp(1430, 30));  // toplevel_v2_combat_bar:bob_take_layer
            IF_SETHIDE(true, comp(1506, 20));  // topstat_lore:bob_take_op1
            IF_SETHIDE(false, comp(1506, 10));  // topstat_lore:bob_take_layer
            IF_SETHIDE(true, comp(1923, 38));  // toplevel_v2_combat_bar_mobile:bob_take_op1
            IF_SETHIDE(false, comp(1923, 28));  // toplevel_v2_combat_bar_mobile:bob_take_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 40));  // toplevel_v2_combat_bar:bob_take_op1
        IF_SETHIDE(false, comp(1430, 30));  // toplevel_v2_combat_bar:bob_take_layer
        IF_SETHIDE(true, comp(1506, 20));  // topstat_lore:bob_take_op1
        IF_SETHIDE(false, comp(1506, 10));  // topstat_lore:bob_take_layer
        IF_SETHIDE(true, comp(1923, 38));  // toplevel_v2_combat_bar_mobile:bob_take_op1
        IF_SETHIDE(false, comp(1923, 28));  // toplevel_v2_combat_bar_mobile:bob_take_layer
    };
    if ((varbitplayer_6068 == 9)) {
        if ((int5 == true)) {
            IF_SETHIDE(false, comp(1430, 41));  // toplevel_v2_combat_bar:bob_give_op1
            IF_SETHIDE(true, comp(1430, 31));  // toplevel_v2_combat_bar:bob_give_layer
            IF_SETHIDE(false, comp(1506, 21));  // topstat_lore:bob_give_op1
            IF_SETHIDE(true, comp(1506, 11));  // topstat_lore:bob_give_layer
            IF_SETHIDE(false, comp(1923, 39));  // toplevel_v2_combat_bar_mobile:bob_give_op1
            IF_SETHIDE(true, comp(1923, 29));  // toplevel_v2_combat_bar_mobile:bob_give_layer
        } else {
            IF_SETHIDE(true, comp(1430, 41));  // toplevel_v2_combat_bar:bob_give_op1
            IF_SETHIDE(false, comp(1430, 31));  // toplevel_v2_combat_bar:bob_give_layer
            IF_SETHIDE(true, comp(1506, 21));  // topstat_lore:bob_give_op1
            IF_SETHIDE(false, comp(1506, 11));  // topstat_lore:bob_give_layer
            IF_SETHIDE(true, comp(1923, 39));  // toplevel_v2_combat_bar_mobile:bob_give_op1
            IF_SETHIDE(false, comp(1923, 29));  // toplevel_v2_combat_bar_mobile:bob_give_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 41));  // toplevel_v2_combat_bar:bob_give_op1
        IF_SETHIDE(false, comp(1430, 31));  // toplevel_v2_combat_bar:bob_give_layer
        IF_SETHIDE(true, comp(1506, 21));  // topstat_lore:bob_give_op1
        IF_SETHIDE(false, comp(1506, 11));  // topstat_lore:bob_give_layer
        IF_SETHIDE(true, comp(1923, 39));  // toplevel_v2_combat_bar_mobile:bob_give_op1
        IF_SETHIDE(false, comp(1923, 29));  // toplevel_v2_combat_bar_mobile:bob_give_layer
    };
    if ((varbitplayer_6068 == 7)) {
        if ((int6 == true)) {
            IF_SETHIDE(false, comp(1430, 42));  // toplevel_v2_combat_bar:renew_op1
            IF_SETHIDE(true, comp(1430, 32));  // toplevel_v2_combat_bar:renew_layer
            IF_SETHIDE(false, comp(1506, 23));  // topstat_lore:renew_op1
            IF_SETHIDE(true, comp(1506, 12));  // topstat_lore:renew_layer
            IF_SETHIDE(false, comp(1923, 40));  // toplevel_v2_combat_bar_mobile:renew_op1
            IF_SETHIDE(true, comp(1923, 30));  // toplevel_v2_combat_bar_mobile:renew_layer
        } else {
            IF_SETHIDE(true, comp(1430, 42));  // toplevel_v2_combat_bar:renew_op1
            IF_SETHIDE(false, comp(1430, 32));  // toplevel_v2_combat_bar:renew_layer
            IF_SETHIDE(true, comp(1506, 23));  // topstat_lore:renew_op1
            IF_SETHIDE(false, comp(1506, 12));  // topstat_lore:renew_layer
            IF_SETHIDE(true, comp(1923, 40));  // toplevel_v2_combat_bar_mobile:renew_op1
            IF_SETHIDE(false, comp(1923, 30));  // toplevel_v2_combat_bar_mobile:renew_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 42));  // toplevel_v2_combat_bar:renew_op1
        IF_SETHIDE(false, comp(1430, 32));  // toplevel_v2_combat_bar:renew_layer
        IF_SETHIDE(true, comp(1506, 23));  // topstat_lore:renew_op1
        IF_SETHIDE(false, comp(1506, 12));  // topstat_lore:renew_layer
        IF_SETHIDE(true, comp(1923, 40));  // toplevel_v2_combat_bar_mobile:renew_op1
        IF_SETHIDE(false, comp(1923, 30));  // toplevel_v2_combat_bar_mobile:renew_layer
    };
    if ((varbitplayer_6068 == 6)) {
        if ((int7 == true)) {
            IF_SETHIDE(false, comp(1430, 44));  // toplevel_v2_combat_bar:interact_op1
            IF_SETHIDE(true, comp(1430, 34));  // toplevel_v2_combat_bar:interact_layer
            IF_SETHIDE(false, comp(1506, 25));  // topstat_lore:interact_op1
            IF_SETHIDE(true, comp(1506, 14));  // topstat_lore:interact_layer
            IF_SETHIDE(false, comp(1923, 42));  // toplevel_v2_combat_bar_mobile:interact_op1
            IF_SETHIDE(true, comp(1923, 32));  // toplevel_v2_combat_bar_mobile:interact_layer
        } else {
            IF_SETHIDE(true, comp(1430, 44));  // toplevel_v2_combat_bar:interact_op1
            IF_SETHIDE(false, comp(1430, 34));  // toplevel_v2_combat_bar:interact_layer
            IF_SETHIDE(true, comp(1506, 25));  // topstat_lore:interact_op1
            IF_SETHIDE(false, comp(1506, 14));  // topstat_lore:interact_layer
            IF_SETHIDE(true, comp(1923, 42));  // toplevel_v2_combat_bar_mobile:interact_op1
            IF_SETHIDE(false, comp(1923, 32));  // toplevel_v2_combat_bar_mobile:interact_layer
        };
    } else {
        IF_SETHIDE(true, comp(1430, 44));  // toplevel_v2_combat_bar:interact_op1
        IF_SETHIDE(false, comp(1430, 34));  // toplevel_v2_combat_bar:interact_layer
        IF_SETHIDE(true, comp(1506, 25));  // topstat_lore:interact_op1
        IF_SETHIDE(false, comp(1506, 14));  // topstat_lore:interact_layer
        IF_SETHIDE(true, comp(1923, 42));  // toplevel_v2_combat_bar_mobile:interact_op1
        IF_SETHIDE(false, comp(1923, 32));  // toplevel_v2_combat_bar_mobile:interact_layer
    };
    IF_SETHIDE(false, comp(1430, 52));  // toplevel_v2_combat_bar:open_pet_interface
    IF_SETHIDE(true, comp(1430, 54));  // toplevel_v2_combat_bar:call_pet
    IF_SETHIDE(false, comp(1430, 27));  // toplevel_v2_combat_bar:select_leftclick_layer
    IF_SETHIDE(false, comp(1506, 33));  // topstat_lore:open_pet_interface
    IF_SETHIDE(false, comp(1923, 50));  // toplevel_v2_combat_bar_mobile:open_pet_interface
    IF_SETHIDE(true, comp(1506, 35));  // topstat_lore:call_pet
    IF_SETHIDE(true, comp(1923, 52));  // toplevel_v2_combat_bar_mobile:call_pet
    IF_SETHIDE(false, comp(1506, 6));  // topstat_lore:select_leftclick_layer
    IF_SETHIDE(false, comp(1923, 25));  // toplevel_v2_combat_bar_mobile:select_leftclick_layer
    if ((((varplayer_1831 == 24906 as obj) || (varplayer_1831 == 24907 as obj)) || (varplayer_1831 == 24908 as obj))) {
        IF_SETHIDE(false, comp(1430, 28));  // toplevel_v2_combat_bar:main_ops
        IF_SETHIDE(false, comp(1506, 7));  // topstat_lore:main_ops
        IF_SETHIDE(false, comp(1923, 26));  // toplevel_v2_combat_bar_mobile:main_ops
        IF_SETHIDE(false, comp(1430, 50));  // toplevel_v2_combat_bar:call_op1
        IF_SETHIDE(true, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
        IF_SETHIDE(true, comp(1430, 43));  // toplevel_v2_combat_bar:attack_op1
        IF_SETHIDE(true, comp(1430, 33));  // toplevel_v2_combat_bar:attack_layer
        IF_SETHIDE(true, comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
        IF_SETHIDE(false, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
        IF_SETHIDE(true, comp(1430, 40));  // toplevel_v2_combat_bar:bob_take_op1
        IF_SETHIDE(true, comp(1430, 30));  // toplevel_v2_combat_bar:bob_take_layer
        IF_SETHIDE(true, comp(1430, 41));  // toplevel_v2_combat_bar:bob_give_op1
        IF_SETHIDE(true, comp(1430, 31));  // toplevel_v2_combat_bar:bob_give_layer
        IF_SETHIDE(true, comp(1430, 42));  // toplevel_v2_combat_bar:renew_op1
        IF_SETHIDE(true, comp(1430, 32));  // toplevel_v2_combat_bar:renew_layer
        IF_SETHIDE(true, comp(1430, 44));  // toplevel_v2_combat_bar:interact_op1
        IF_SETHIDE(true, comp(1430, 34));  // toplevel_v2_combat_bar:interact_layer
        IF_SETHIDE(true, comp(1430, 46));  // toplevel_v2_combat_bar:details_op1
        IF_SETHIDE(false, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
        IF_SETHIDE(false, comp(1506, 31));  // topstat_lore:call_op1
        IF_SETHIDE(true, comp(1506, 29));  // topstat_lore:call_layer
        IF_SETHIDE(true, comp(1506, 24));  // topstat_lore:attack_op1
        IF_SETHIDE(true, comp(1506, 13));  // topstat_lore:attack_layer
        IF_SETHIDE(true, comp(1506, 32));  // topstat_lore:dismiss_op1
        IF_SETHIDE(false, comp(1506, 30));  // topstat_lore:dismiss_layer
        IF_SETHIDE(true, comp(1506, 20));  // topstat_lore:bob_take_op1
        IF_SETHIDE(true, comp(1506, 10));  // topstat_lore:bob_take_layer
        IF_SETHIDE(true, comp(1506, 21));  // topstat_lore:bob_give_op1
        IF_SETHIDE(true, comp(1506, 11));  // topstat_lore:bob_give_layer
        IF_SETHIDE(true, comp(1506, 23));  // topstat_lore:renew_op1
        IF_SETHIDE(true, comp(1506, 12));  // topstat_lore:renew_layer
        IF_SETHIDE(true, comp(1506, 25));  // topstat_lore:interact_op1
        IF_SETHIDE(true, comp(1506, 14));  // topstat_lore:interact_layer
        IF_SETHIDE(true, comp(1506, 27));  // topstat_lore:details_op1
        IF_SETHIDE(false, comp(1506, 26));  // topstat_lore:details_layer
        IF_SETHIDE(false, comp(1923, 48));  // toplevel_v2_combat_bar_mobile:call_op1
        IF_SETHIDE(true, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
        IF_SETHIDE(true, comp(1923, 41));  // toplevel_v2_combat_bar_mobile:attack_op1
        IF_SETHIDE(true, comp(1923, 31));  // toplevel_v2_combat_bar_mobile:attack_layer
        IF_SETHIDE(true, comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
        IF_SETHIDE(false, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
        IF_SETHIDE(true, comp(1923, 38));  // toplevel_v2_combat_bar_mobile:bob_take_op1
        IF_SETHIDE(true, comp(1923, 28));  // toplevel_v2_combat_bar_mobile:bob_take_layer
        IF_SETHIDE(true, comp(1923, 39));  // toplevel_v2_combat_bar_mobile:bob_give_op1
        IF_SETHIDE(true, comp(1923, 29));  // toplevel_v2_combat_bar_mobile:bob_give_layer
        IF_SETHIDE(true, comp(1923, 40));  // toplevel_v2_combat_bar_mobile:renew_op1
        IF_SETHIDE(true, comp(1923, 30));  // toplevel_v2_combat_bar_mobile:renew_layer
        IF_SETHIDE(true, comp(1923, 42));  // toplevel_v2_combat_bar_mobile:interact_op1
        IF_SETHIDE(true, comp(1923, 32));  // toplevel_v2_combat_bar_mobile:interact_layer
        IF_SETHIDE(true, comp(1923, 44));  // toplevel_v2_combat_bar_mobile:details_op1
        IF_SETHIDE(false, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
        IF_SETHIDE(true, comp(1430, 53));  // toplevel_v2_combat_bar:summon_pet
        IF_SETHIDE(true, comp(1506, 34));  // topstat_lore:summon_pet
        IF_SETHIDE(true, comp(1923, 51));  // toplevel_v2_combat_bar_mobile:summon_pet
    } else if ((((((((((((((((((((((((((((((((((((((((((((((((((((((((OC_CATEGORY(varplayer_1831) == 2840 as category) || (varplayer_1831 == 26547 as obj)) || (varplayer_1831 == 26549 as obj)) || (varplayer_1831 == 26550 as obj)) || (varplayer_1831 == 26551 as obj)) || (varplayer_1831 == 26553 as obj)) || (varplayer_1831 == 26554 as obj)) || (varplayer_1831 == 26555 as obj)) || (varplayer_1831 == 26557 as obj)) || (varplayer_1831 == 26558 as obj)) || (varplayer_1831 == 29531 as obj)) || (varplayer_1831 == 27211 as obj)) || (varplayer_1831 == 27213 as obj)) || (varplayer_1831 == 27214 as obj)) || (varplayer_1831 == 28824 as obj)) || (varplayer_1831 == 28826 as obj)) || (varplayer_1831 == 28827 as obj)) || (varplayer_1831 == 28829 as obj)) || (varplayer_1831 == 28831 as obj)) || (varplayer_1831 == 28832 as obj)) || (varplayer_1831 == 30062 as obj)) || (varplayer_1831 == 30065 as obj)) || (varplayer_1831 == 30909 as obj)) || (varplayer_1831 == 31304 as obj)) || (varplayer_1831 == 40181 as obj)) || (varplayer_1831 == 31307 as obj)) || (varplayer_1831 == 30234 as obj)) || (varplayer_1831 == 30364 as obj)) || (varplayer_1831 == 30231 as obj)) || (varplayer_1831 == 30369 as obj)) || (varplayer_1831 == 30366 as obj)) || (varplayer_1831 == 30367 as obj)) || (varplayer_1831 == 30811 as obj)) || (varplayer_1831 == 31025 as obj)) || (varplayer_1831 == 28683 as obj)) || (varplayer_1831 == 31302 as obj)) || (varplayer_1831 == 31659 as obj)) || (varplayer_1831 == 31662 as obj)) || (varplayer_1831 == 31656 as obj)) || (varplayer_1831 == 31957 as obj)) || (varplayer_1831 == 31960 as obj)) || (varplayer_1831 == 31963 as obj)) || (varplayer_1831 == 32148 as obj)) || (varplayer_1831 == 32512 as obj)) || (varplayer_1831 == 32730 as obj)) || (varplayer_1831 == 32613 as obj)) || (varplayer_1831 == 33566 as obj)) || (varplayer_1831 == 33631 as obj)) || (varplayer_1831 == 33643 as obj)) || (varplayer_1831 == 33656 as obj)) || (varplayer_1831 == 34109 as obj)) || (varplayer_1831 == 34196 as obj)) || (varplayer_1831 == 34478 as obj)) || (varplayer_1831 == 34504 as obj)) || (varplayer_1831 == 34753 as obj))) {
        IF_SETHIDE(false, comp(1430, 28));  // toplevel_v2_combat_bar:main_ops
        IF_SETHIDE(false, comp(1506, 7));  // topstat_lore:main_ops
        IF_SETHIDE(false, comp(1923, 26));  // toplevel_v2_combat_bar_mobile:main_ops
        if ((int0 == false)) {
            IF_SETHIDE(true, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
            IF_SETHIDE(true, comp(1506, 26));  // topstat_lore:details_layer
            IF_SETHIDE(true, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
        };
        if ((int1 == false)) {
            IF_SETHIDE(true, comp(1430, 35));  // toplevel_v2_combat_bar:spell_layer
            IF_SETHIDE(true, comp(1506, 15));  // topstat_lore:spell_layer
            IF_SETHIDE(true, comp(1923, 33));  // toplevel_v2_combat_bar_mobile:spell_layer
        };
        if ((int2 == false)) {
            IF_SETHIDE(true, comp(1430, 33));  // toplevel_v2_combat_bar:attack_layer
            IF_SETHIDE(true, comp(1506, 13));  // topstat_lore:attack_layer
            IF_SETHIDE(true, comp(1923, 31));  // toplevel_v2_combat_bar_mobile:attack_layer
        };
        if ((int3 == false)) {
            IF_SETHIDE(true, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
            IF_SETHIDE(true, comp(1506, 29));  // topstat_lore:call_layer
            IF_SETHIDE(true, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
        };
        if ((int4 == false)) {
            IF_SETHIDE(true, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
            IF_SETHIDE(true, comp(1506, 30));  // topstat_lore:dismiss_layer
            IF_SETHIDE(true, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
        };
        if ((int5 == false)) {
            IF_SETHIDE(true, comp(1430, 30));  // toplevel_v2_combat_bar:bob_take_layer
            IF_SETHIDE(true, comp(1506, 10));  // topstat_lore:bob_take_layer
            IF_SETHIDE(true, comp(1923, 28));  // toplevel_v2_combat_bar_mobile:bob_take_layer
            IF_SETHIDE(true, comp(1430, 31));  // toplevel_v2_combat_bar:bob_give_layer
            IF_SETHIDE(true, comp(1506, 11));  // topstat_lore:bob_give_layer
            IF_SETHIDE(true, comp(1923, 29));  // toplevel_v2_combat_bar_mobile:bob_give_layer
        };
        if ((int6 == false)) {
            IF_SETHIDE(true, comp(1430, 32));  // toplevel_v2_combat_bar:renew_layer
            IF_SETHIDE(true, comp(1506, 12));  // topstat_lore:renew_layer
            IF_SETHIDE(true, comp(1923, 30));  // toplevel_v2_combat_bar_mobile:renew_layer
        };
        if ((int7 == false)) {
            IF_SETHIDE(true, comp(1430, 34));  // toplevel_v2_combat_bar:interact_layer
            IF_SETHIDE(true, comp(1506, 14));  // topstat_lore:interact_layer
            IF_SETHIDE(true, comp(1923, 32));  // toplevel_v2_combat_bar_mobile:interact_layer
        };
        IF_SETHIDE(false, comp(1430, 27));  // toplevel_v2_combat_bar:select_leftclick_layer
        IF_SETHIDE(false, comp(1506, 6));  // topstat_lore:select_leftclick_layer
        IF_SETHIDE(false, comp(1923, 25));  // toplevel_v2_combat_bar_mobile:select_leftclick_layer
    } else if ((varplayer_1831 != -1 as obj)) {
        if ((varplayer_1784 != -1 as npc)) {
            IF_SETHIDE(false, comp(1430, 28));  // toplevel_v2_combat_bar:main_ops
            IF_SETHIDE(false, comp(1506, 7));  // topstat_lore:main_ops
            IF_SETHIDE(false, comp(1923, 26));  // toplevel_v2_combat_bar_mobile:main_ops
            if ((int0 == false)) {
                IF_SETHIDE(true, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
                IF_SETHIDE(true, comp(1506, 26));  // topstat_lore:details_layer
                IF_SETHIDE(true, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
            };
            if ((int1 == false)) {
                IF_SETHIDE(true, comp(1430, 35));  // toplevel_v2_combat_bar:spell_layer
                IF_SETHIDE(true, comp(1506, 15));  // topstat_lore:spell_layer
                IF_SETHIDE(true, comp(1923, 33));  // toplevel_v2_combat_bar_mobile:spell_layer
            };
            if ((int2 == false)) {
                IF_SETHIDE(true, comp(1430, 33));  // toplevel_v2_combat_bar:attack_layer
                IF_SETHIDE(true, comp(1506, 13));  // topstat_lore:attack_layer
                IF_SETHIDE(true, comp(1923, 31));  // toplevel_v2_combat_bar_mobile:attack_layer
            };
            if ((int3 == false)) {
                IF_SETHIDE(true, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
                IF_SETHIDE(true, comp(1506, 29));  // topstat_lore:call_layer
                IF_SETHIDE(true, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
            };
            if ((int4 == false)) {
                IF_SETHIDE(true, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
                IF_SETHIDE(true, comp(1506, 30));  // topstat_lore:dismiss_layer
                IF_SETHIDE(true, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
            };
            if ((int5 == false)) {
                IF_SETHIDE(true, comp(1430, 30));  // toplevel_v2_combat_bar:bob_take_layer
                IF_SETHIDE(true, comp(1506, 10));  // topstat_lore:bob_take_layer
                IF_SETHIDE(true, comp(1923, 28));  // toplevel_v2_combat_bar_mobile:bob_take_layer
                IF_SETHIDE(true, comp(1430, 31));  // toplevel_v2_combat_bar:bob_give_layer
                IF_SETHIDE(true, comp(1506, 11));  // topstat_lore:bob_give_layer
                IF_SETHIDE(true, comp(1923, 29));  // toplevel_v2_combat_bar_mobile:bob_give_layer
            };
            if ((int6 == false)) {
                IF_SETHIDE(true, comp(1430, 32));  // toplevel_v2_combat_bar:renew_layer
                IF_SETHIDE(true, comp(1506, 12));  // topstat_lore:renew_layer
                IF_SETHIDE(true, comp(1923, 30));  // toplevel_v2_combat_bar_mobile:renew_layer
            };
            if ((int7 == false)) {
                IF_SETHIDE(true, comp(1430, 34));  // toplevel_v2_combat_bar:interact_layer
                IF_SETHIDE(true, comp(1506, 14));  // topstat_lore:interact_layer
                IF_SETHIDE(true, comp(1923, 32));  // toplevel_v2_combat_bar_mobile:interact_layer
            };
            IF_SETHIDE(false, comp(1430, 27));  // toplevel_v2_combat_bar:select_leftclick_layer
            IF_SETHIDE(false, comp(1506, 6));  // topstat_lore:select_leftclick_layer
            IF_SETHIDE(false, comp(1923, 25));  // toplevel_v2_combat_bar_mobile:select_leftclick_layer
        } else {
            script8084();
        };
    } else {
        script8084();
    };
    varclient_6248 = int0;
    varclient_6249 = int1;
    varclient_6250 = int2;
    varclient_6251 = int3;
    varclient_6252 = int4;
    varclient_6253 = int5;
    varclient_6254 = int6;
    varclient_6255 = int7;
    script9286();
    return;
}