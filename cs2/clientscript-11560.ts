//
function script11560(int0: number): void {
    var int1 = -1 as graphic;
    switch (int0) {
        case 1: {
            int1 = 25648 as graphic;
            IF_SETGRAPHIC(int1, comp(1631, 31));  // trh55_world_event:saradomin_button_graphic
            IF_SETONMOUSELEAVE(callback(script11561, 1, int1), comp(1631, 31));  // trh55_world_event:saradomin_button_graphic
            int1 = 25649 as graphic;
            IF_SETONMOUSEOVER(callback(script11561, 1, int1), comp(1631, 31));  // trh55_world_event:saradomin_button_graphic
            stack(callback(script11561, 1, int1));
            stack(106889247);
            IF_SETONRELEASE();
            int1 = 25650 as graphic;
            IF_SETONCLICK(callback(script11561, 1, int1), comp(1631, 31));  // trh55_world_event:saradomin_button_graphic
            break;
        }
        case 2: {
            int1 = 25651 as graphic;
            IF_SETGRAPHIC(int1, comp(1631, 16));  // trh55_world_event:zamorak_button_graphic
            IF_SETONMOUSELEAVE(callback(script11561, 2, int1), comp(1631, 16));  // trh55_world_event:zamorak_button_graphic
            int1 = 25652 as graphic;
            IF_SETONMOUSEOVER(callback(script11561, 2, int1), comp(1631, 16));  // trh55_world_event:zamorak_button_graphic
            stack(callback(script11561, 2, int1));
            stack(106889232);
            IF_SETONRELEASE();
            int1 = 25653 as graphic;
            IF_SETONCLICK(callback(script11561, 2, int1), comp(1631, 16));  // trh55_world_event:zamorak_button_graphic
            break;
        }
        case 3: {
            int1 = 25642 as graphic;
            IF_SETGRAPHIC(int1, comp(1631, 82));  // trh55_world_event:armadyl_button_graphic
            IF_SETONMOUSELEAVE(callback(script11561, 3, int1), comp(1631, 82));  // trh55_world_event:armadyl_button_graphic
            int1 = 25643 as graphic;
            IF_SETONMOUSEOVER(callback(script11561, 3, int1), comp(1631, 82));  // trh55_world_event:armadyl_button_graphic
            stack(callback(script11561, 3, int1));
            stack(106889298);
            IF_SETONRELEASE();
            int1 = 25644 as graphic;
            IF_SETONCLICK(callback(script11561, 3, int1), comp(1631, 82));  // trh55_world_event:armadyl_button_graphic
            break;
        }
        case 4: {
            int1 = 25645 as graphic;
            IF_SETGRAPHIC(int1, comp(1631, 91));  // trh55_world_event:godless_button_graphic
            IF_SETONMOUSELEAVE(callback(script11561, 4, int1), comp(1631, 91));  // trh55_world_event:godless_button_graphic
            int1 = 25646 as graphic;
            IF_SETONMOUSEOVER(callback(script11561, 4, int1), comp(1631, 91));  // trh55_world_event:godless_button_graphic
            stack(callback(script11561, 4, int1));
            stack(106889307);
            IF_SETONRELEASE();
            int1 = 25647 as graphic;
            IF_SETONCLICK(callback(script11561, 4, int1), comp(1631, 91));  // trh55_world_event:godless_button_graphic
            break;
        }
    };
    return;
}