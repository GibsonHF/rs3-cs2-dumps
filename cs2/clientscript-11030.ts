//
function script11030(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(25636 as graphic, comp(1631, 77));  // trh55_world_event:godless_background
            IF_SETGRAPHIC(25662 as graphic, comp(1631, 50));  // trh55_world_event:astromancer_overlay
            break;
        }
        case 2: {
            IF_SETGRAPHIC(25638 as graphic, comp(1631, 77));  // trh55_world_event:godless_background
            IF_SETGRAPHIC(25663 as graphic, comp(1631, 50));  // trh55_world_event:astromancer_overlay
            break;
        }
        case 3: {
            IF_SETGRAPHIC(25639 as graphic, comp(1631, 77));  // trh55_world_event:godless_background
            IF_SETGRAPHIC(25664 as graphic, comp(1631, 50));  // trh55_world_event:astromancer_overlay
            break;
        }
        default: {
            IF_SETGRAPHIC(25637 as graphic, comp(1631, 77));  // trh55_world_event:godless_background
            IF_SETGRAPHIC(25661 as graphic, comp(1631, 50));  // trh55_world_event:astromancer_overlay
            break;
        }
    };
    return;
}