//
function script6629(): void {
    if ((varbitplayer_38842 == 1)) {
        if ((varplayer_1784 == -1 as npc)) {
            IF_SETHIDE(true, comp(1923, 26));  // toplevel_v2_combat_bar_mobile:main_ops
        };
        IF_SETHIDE(true, comp(1923, 48));  // toplevel_v2_combat_bar_mobile:call_op1
        IF_SETHIDE(true, comp(1923, 46));  // toplevel_v2_combat_bar_mobile:call_layer
        IF_SETHIDE(true, comp(1923, 49));  // toplevel_v2_combat_bar_mobile:dismiss_op1
        IF_SETHIDE(true, comp(1923, 47));  // toplevel_v2_combat_bar_mobile:dismiss_layer
        IF_SETHIDE(true, comp(1923, 44));  // toplevel_v2_combat_bar_mobile:details_op1
        IF_SETHIDE(true, comp(1923, 43));  // toplevel_v2_combat_bar_mobile:details_layer
        IF_SETHIDE(false, comp(1923, 51));  // toplevel_v2_combat_bar_mobile:summon_pet
        IF_SETHIDE(true, comp(1923, 52));  // toplevel_v2_combat_bar_mobile:call_pet
        IF_SETHIDE(false, comp(1923, 25));  // toplevel_v2_combat_bar_mobile:select_leftclick_layer
    } else if ((varbitplayer_27169 == 0)) {
        if ((varplayer_1784 == -1 as npc)) {
            IF_SETHIDE(true, comp(1430, 28));  // toplevel_v2_combat_bar:main_ops
        };
        IF_SETHIDE(true, comp(1430, 50));  // toplevel_v2_combat_bar:call_op1
        IF_SETHIDE(true, comp(1430, 48));  // toplevel_v2_combat_bar:call_layer
        IF_SETHIDE(true, comp(1430, 51));  // toplevel_v2_combat_bar:dismiss_op1
        IF_SETHIDE(true, comp(1430, 49));  // toplevel_v2_combat_bar:dismiss_layer
        IF_SETHIDE(true, comp(1430, 46));  // toplevel_v2_combat_bar:details_op1
        IF_SETHIDE(true, comp(1430, 45));  // toplevel_v2_combat_bar:details_layer
        IF_SETHIDE(false, comp(1430, 53));  // toplevel_v2_combat_bar:summon_pet
        IF_SETHIDE(true, comp(1430, 54));  // toplevel_v2_combat_bar:call_pet
        IF_SETHIDE(false, comp(1430, 27));  // toplevel_v2_combat_bar:select_leftclick_layer
    } else {
        if ((varplayer_1784 == -1 as npc)) {
            IF_SETHIDE(true, comp(1506, 7));  // topstat_lore:main_ops
        };
        IF_SETHIDE(true, comp(1506, 31));  // topstat_lore:call_op1
        IF_SETHIDE(true, comp(1506, 29));  // topstat_lore:call_layer
        IF_SETHIDE(true, comp(1506, 32));  // topstat_lore:dismiss_op1
        IF_SETHIDE(true, comp(1506, 30));  // topstat_lore:dismiss_layer
        IF_SETHIDE(true, comp(1506, 27));  // topstat_lore:details_op1
        IF_SETHIDE(true, comp(1506, 26));  // topstat_lore:details_layer
        IF_SETHIDE(false, comp(1506, 34));  // topstat_lore:summon_pet
        IF_SETHIDE(true, comp(1506, 35));  // topstat_lore:call_pet
        IF_SETHIDE(false, comp(1506, 6));  // topstat_lore:select_leftclick_layer
    };
    return;
}