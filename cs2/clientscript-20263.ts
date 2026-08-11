//
function script20263(): void {
    var int0 = script20117(varplayer_12314);
    if ((script20132(int0) == 0)) {
        script20254();
        return;
    };
    stack(int0);
    script20938();
    var int1 = [];
    var int2 = dbrow_getfield(int1, 1339392, varbitplayer_58407);
    if ((int2 == -1)) {
        script20254();
        return;
    };
    var int3 = dbrow_getfield(int2, 1343504, varbitplayer_58408);
    if ((int3 == -1)) {
        script20254();
        return;
    };
    script20264(int2, int3);
    script20268(int1);
    IF_SETHIDE(false, comp(1443, 9));  // league_parent_relics:relic_info
    IF_SETHIDE(false, comp(1443, 26));  // league_parent_relics:bg_passive
    IF_SETHIDE(true, comp(1443, 2));  // league_parent_relics:relic_contents
    IF_SETHIDE(true, comp(1443, 1));  // league_parent_relics:progress_bar
    IF_SETHIDE(true, comp(1443, 3));  // league_parent_relics:relic_scrollbar
    IF_SETHIDE(true, comp(1443, 27));  // league_parent_relics:passives_relic_title
    CC_DELETEALL(comp(1443, 23));  // league_parent_relics:confirm_popup
    CC_DELETEALL(comp(1443, 24));  // league_parent_relics:confirm_window
    var string0 = dbrow_getfield(int3, 1347584, 0);
    var int4 = dbrow_getfield(int3, 1347696, 0);
    var int5 = script20144(int3);
    var int6 = dbrow_getfield(int3, 1347616, 0);
    var int7 = dbrow_getfield(int2, 1343664, 0);
    var string1 = "Relics";
    if ((int6 == 1)) {
        string1 = "Blessings";
    };
    stack(int2);
    stack(varbitplayer_58407);
    script21088();
    IF_SETTEXT(` ${string1}`, comp(1443, 15));  // league_parent_relics:bg_contents
    if ((int7 == 1)) {
        if ((int5 == 0)) {
            stack(int2);
            script20944();
            if (BRANCH_EQUALS(1)) {
                stack(int2);
                script20947();
                if (BRANCH_EQUALS(varbitplayer_58408)) {
                    IF_SETENABLED(true, comp(1443, 38));  // league_parent_relics:body_confirm
                } else {
                    IF_SETENABLED(false, comp(1443, 38));  // league_parent_relics:body_confirm
                };
            } else {
                IF_SETENABLED(false, comp(1443, 38));  // league_parent_relics:body_confirm
            };
        } else {
            IF_SETENABLED(false, comp(1443, 38));  // league_parent_relics:body_confirm
        };
    } else if ((int5 == 0)) {
        if ((script20142(varbitplayer_58407) == 1)) {
            IF_SETENABLED(true, comp(1443, 38));  // league_parent_relics:body_confirm
        } else {
            IF_SETENABLED(false, comp(1443, 38));  // league_parent_relics:body_confirm
        };
    } else {
        IF_SETENABLED(false, comp(1443, 38));  // league_parent_relics:body_confirm
    };
    var int8 = 4;
    var int9 = 0;
    var int10 = IF_GETWIDTH(comp(1443, 22));  // league_parent_relics:passive_info
    if ((IF_FIND(comp(1443, 23)) == 1)) {  // league_parent_relics:confirm_popup
        stack(int3);
        [int9, int8] = script20266(int2, int9, int8, int10);
        [int9, int8] = script20265(int3, int9, int8, int10, int5);
        stack(int3);
        [int9, int8] = script20267(int2, int9, int8, int10);
    };
    script19620(94568473, 94568470, int8, -1, -1, 0, 8, 4);
    IF_SETSIZE(24, IF_GETHEIGHT(comp(1443, 22)), 1, 0, comp(1443, 22));  // league_parent_relics:passive_info
    return;
}