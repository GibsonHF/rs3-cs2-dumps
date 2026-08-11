//
function script5037(int0: number): void {
    IF_SETHIDE(false, comp(1111, 6));  // clan_field_editor:display
    IF_SETHIDE(true, comp(1111, 1));  // clan_field_editor:restoration
    script4510(72810498, 1736);
    script4510(72810499, 1737);
    script4211(72810501, 28, 15708259, 3156001);
    stack(callback(script5039));
    stack(int0);
    IF_SETONVARCLANTRANSMIT();
    IF_SETONSCROLLWHEEL(callback(script5042, int0, -2147483646), comp(1111, 12));  // clan_field_editor:grid_container
    IF_SETONOP(callback(script5042, int0, 1), comp(1111, 43));  // clan_field_editor:zoom_out
    IF_SETONOP(callback(script5042, int0, -1), comp(1111, 50));  // clan_field_editor:zoom_in
    IF_SETONDRAGCOMPLETE(callback(script5043, int0, -2147483645, -2147483647), comp(1111, 48));  // clan_field_editor:zoom_scrubber
    var int1 = 0;
    var int2 = POW(112, 2);
    while ((int1 < int2)) {
        CC_CREATE(comp(1111, 13), 3, int1);  // clan_field_editor:grid
        CC_SETCOLOUR(2039590);
        CC_SETFILL(1);
        CC_SETOP(1, "Set");
        CC_SETOP(10, "Teleport");
        CC_SETDRAGDEADTIME(5);
        CC_SETDRAGRENDERBEHAVIOUR(2);
        CC_SETONDRAG(callback(script5054, -2147483647, -2147483646));
        int1 = (int1 + 1);
    };
    script5040();
    CC_CREATE(comp(1111, 16), 5, 0);  // clan_field_editor:vertical_scroll
    CC_CREATE[1](comp(1111, 17), 5, 0);  // clan_field_editor:horizontal_scroll
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_SETSIZE(0, 32, 1, 1);
    CC_SETSIZE[1](32, 0, 1, 1);
    CC_SETGRAPHIC(5666 as graphic);
    CC_SETGRAPHIC[1](7605 as graphic);
    CC_SETTILING(true);
    CC_SETTILING[1](true);
    CC_SETONCLICK(callback(script5052, -2147483645, 1));
    CC_SETONCLICK[1](callback(script5052, -2147483645, 0));
    CC_CREATE(comp(1111, 16), 5, 1);  // clan_field_editor:vertical_scroll
    CC_CREATE[1](comp(1111, 17), 5, 1);  // clan_field_editor:horizontal_scroll
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETPOSITION[1](0, 0, 0, 1);
    CC_SETSIZE(0, 16, 1, 0);
    CC_SETSIZE[1](16, 0, 0, 1);
    CC_SETGRAPHIC(5686 as graphic);
    CC_SETGRAPHIC[1](5686 as graphic);
    CC_SET2DANGLE[1](16384);
    CC_SETONHOLD(callback(script5049, -4, 1, 1));
    CC_SETONHOLD[1](callback(script5049, -4, 1, 0));
    CC_CREATE(comp(1111, 16), 5, 2);  // clan_field_editor:vertical_scroll
    CC_CREATE[1](comp(1111, 17), 5, 2);  // clan_field_editor:horizontal_scroll
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETPOSITION[1](0, 0, 2, 1);
    CC_SETSIZE(0, 16, 1, 0);
    CC_SETSIZE[1](16, 0, 0, 1);
    CC_SETGRAPHIC(5685 as graphic);
    CC_SETGRAPHIC[1](5685 as graphic);
    CC_SET2DANGLE[1](16384);
    CC_SETONHOLD(callback(script5049, 4, 1, 1));
    CC_SETONHOLD[1](callback(script5049, 4, 1, 0));
    CC_CREATE(comp(1111, 16), 5, 3);  // clan_field_editor:vertical_scroll
    CC_CREATE[1](comp(1111, 17), 5, 3);  // clan_field_editor:horizontal_scroll
    CC_SETGRAPHIC(5664 as graphic);
    CC_SETGRAPHIC[1](7603 as graphic);
    CC_SETTILING(true);
    CC_SETTILING[1](true);
    CC_SETDRAGGABLE(comp(1111, 16), 0);  // clan_field_editor:vertical_scroll
    CC_SETDRAGGABLE[1](comp(1111, 17), 0);  // clan_field_editor:horizontal_scroll
    CC_SETDRAGRENDERBEHAVIOUR(1);
    CC_SETDRAGRENDERBEHAVIOUR[1](1);
    CC_SETONDRAG(callback(script5051, -2147483645, -2147483646, 0, 1));
    CC_SETONDRAG[1](callback(script5051, -2147483645, -2147483647, 0, 0));
    CC_SETONDRAGCOMPLETE(callback(script5051, -2147483645, -2147483646, 1, 1));
    CC_SETONDRAGCOMPLETE[1](callback(script5051, -2147483645, -2147483647, 1, 0));
    CC_CREATE(comp(1111, 16), 5, 4);  // clan_field_editor:vertical_scroll
    CC_CREATE[1](comp(1111, 17), 5, 4);  // clan_field_editor:horizontal_scroll
    CC_SETSIZE(0, 5, 1, 0);
    CC_SETSIZE[1](5, 0, 0, 1);
    CC_SETGRAPHIC(5663 as graphic);
    CC_SETGRAPHIC[1](7602 as graphic);
    CC_CREATE(comp(1111, 16), 5, 5);  // clan_field_editor:vertical_scroll
    CC_CREATE[1](comp(1111, 17), 5, 5);  // clan_field_editor:horizontal_scroll
    CC_SETSIZE(0, 5, 1, 0);
    CC_SETSIZE[1](5, 0, 0, 1);
    CC_SETGRAPHIC(5665 as graphic);
    CC_SETGRAPHIC[1](7604 as graphic);
    IF_SETONSCROLLWHEEL(callback(script5049, -2147483646, 20, 1), comp(1111, 16));  // clan_field_editor:vertical_scroll
    IF_SETONSCROLLWHEEL(callback(script5049, -2147483646, 20, 0), comp(1111, 17));  // clan_field_editor:horizontal_scroll
    CC_CREATE(comp(1111, 12), 3, 0);  // clan_field_editor:grid_container
    CC_SETFILL(0);
    CC_SETHIDE(true);
    IF_SETONTIMER(callback(script5074, -2147483645, CC_GETID()), comp(1111, 12));  // clan_field_editor:grid_container
    IF_SETONVARCTRANSMIT(callback(script5074, -2147483645, CC_GETID(), 1065, 1), comp(1111, 12));  // clan_field_editor:grid_container
    IF_SETONOP(callback(script5075, 72810508, CC_GETID()), comp(1111, 51));  // clan_field_editor:focus
    if (((varclient_1396 < 3) || (varclient_1396 > 21))) {
        varclient_1396 = (3 + ((21 - 3) / 4));
    };
    script5047(varclient_1396, 0, 112, 0, 0);
    script5048();
    script5073(1);
    script5055(1, "Architecture", 3944, 72810561, 72810550, 72810551);
    script5055(2, "Toys", 3945, 72810562, 72810553, 72810554);
    script5055(3, "Hazards", 3946, 72810563, 72810556, 72810557);
    script5055(4, "Monsters", 3947, 72810564, 72810559, 72810560);
    varclient_768 = 1;
    script5065(1);
    IF_SETONVARTRANSMIT(callback(script5066, 1992, 1), int0);
    script5067();
    script5076(72810508, 0);
    return;
}