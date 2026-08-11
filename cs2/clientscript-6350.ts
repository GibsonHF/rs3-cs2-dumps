//
function script6350(): void {
    IF_SETGRAPHIC(539 as graphic, comp(237, 14));  // sliske1_riddle:sliske1_shadow_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 15));  // sliske1_riddle:sliske1_sand_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 16));  // sliske1_riddle:sliske1_fire_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 17));  // sliske1_riddle:sliske1_time_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 18));  // sliske1_riddle:sliske1_water_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 19));  // sliske1_riddle:sliske1_life_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 20));  // sliske1_riddle:sliske1_death_button
    IF_SETGRAPHIC(539 as graphic, comp(237, 21));  // sliske1_riddle:sliske1_light_button
    switch (varbitplayer_20646) {
        case 1: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 14));  // sliske1_riddle:sliske1_shadow_button
            IF_SETTEXT("Shadow", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 2: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 15));  // sliske1_riddle:sliske1_sand_button
            IF_SETTEXT("Sand", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 3: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 16));  // sliske1_riddle:sliske1_fire_button
            IF_SETTEXT("Fire", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 4: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 17));  // sliske1_riddle:sliske1_time_button
            IF_SETTEXT("Time", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 5: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 18));  // sliske1_riddle:sliske1_water_button
            IF_SETTEXT("Water", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 6: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 19));  // sliske1_riddle:sliske1_life_button
            IF_SETTEXT("Life", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 7: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 20));  // sliske1_riddle:sliske1_death_button
            IF_SETTEXT("Death", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
        case 8: {
            IF_SETGRAPHIC(541 as graphic, comp(237, 21));  // sliske1_riddle:sliske1_light_button
            IF_SETTEXT("Light", comp(237, 1));  // sliske1_riddle:sliske1_riddle_text
            break;
        }
    };
    return;
}