//[clientscript,rand_map_reset]
function script3277(): void {
    CC_DELETEALL(comp(942, 9));  // rand_dungeon_map:player_layer
    CC_DELETEALL(comp(942, 8));  // rand_dungeon_map:draw_layer
    return;
}