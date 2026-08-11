//
function script19282(): void {
    CC_DELETEALL(comp(1290, 55));  // trh_dungeon_crawl_overlay:map_bonus_path_2_build_layer
    CC_DELETEALL(comp(1290, 56));  // trh_dungeon_crawl_overlay:map_bonus_path_2_control_layer
    var int0 = DB_GETFIELDCOUNT(varplayer_11902, 1220720);
    var int1 = -1;
    int1 = (int1 + 1);
    while ((int1 < int0)) {
        script19283(84541495, 84541496, int1, dbrow_getfield(varplayer_11902, 1220640, 0), dbrow_getfield(varplayer_11902, 1220720, int1));
    };
    return;
}