//
function script4756(int0: number): void {
    var int1 = SCALE(16384, 5000, varplayer_2122);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, comp(642, 90));  // slug3_hero_overlay:ezekial_large_progress_value_layer
    IF_SETTEXT(inttostring(varplayer_2122, 10), int0);
    if ((varplayer_2122 >= 3000)) {
        IF_SETCOLOUR(16777215, comp(642, 91));  // slug3_hero_overlay:ezekial_healthbar_left
        IF_SETCOLOUR(16777215, comp(642, 93));  // slug3_hero_overlay:ezekial_healthbar_mid
        IF_SETCOLOUR(16777215, comp(642, 92));  // slug3_hero_overlay:ezekial_healthbar_right
        IF_SETMODELANIM(2602 as seq, comp(642, 96));  // slug3_hero_overlay:ezekial_head
    } else if ((varplayer_2122 <= 1500)) {
        IF_SETCOLOUR(16720486, comp(642, 91));  // slug3_hero_overlay:ezekial_healthbar_left
        IF_SETCOLOUR(16720486, comp(642, 93));  // slug3_hero_overlay:ezekial_healthbar_mid
        IF_SETCOLOUR(16720486, comp(642, 92));  // slug3_hero_overlay:ezekial_healthbar_right
        IF_SETMODELANIM(2601 as seq, comp(642, 96));  // slug3_hero_overlay:ezekial_head
    } else {
        IF_SETCOLOUR(16777215, comp(642, 91));  // slug3_hero_overlay:ezekial_healthbar_left
        IF_SETCOLOUR(16777215, comp(642, 93));  // slug3_hero_overlay:ezekial_healthbar_mid
        IF_SETCOLOUR(16777215, comp(642, 92));  // slug3_hero_overlay:ezekial_healthbar_right
        IF_SETMODELANIM(9804 as seq, comp(642, 96));  // slug3_hero_overlay:ezekial_head
    };
    return;
}