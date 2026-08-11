//
function script19281(): void {
    CC_DELETEALL(comp(1290, 52));  // trh_dungeon_crawl_overlay:map_bonus_path_1_build_layer
    CC_DELETEALL(comp(1290, 53));  // trh_dungeon_crawl_overlay:map_bonus_path_1_control_layer
    var int0 = DB_GETFIELDCOUNT(varplayer_11902, 1220704);
    var int1 = -1;
    int1 = (int1 + 1);
    while ((int1 < int0)) {
        script19283(84541492, 84541493, int1, dbrow_getfield(varplayer_11902, 1220640, 0), dbrow_getfield(varplayer_11902, 1220704, int1));
    };
    return;
}