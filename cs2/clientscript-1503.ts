//[clientscript,player_kit_feet_initialise]
function script1503(): void {
    CC_DELETEALL(comp(728, 10));  // player_kit_feet:menu_graphics
    script7794(47710218, 21361);
    CC_DELETEALL(comp(728, 2));  // player_kit_feet:player_container
    script7794(47710211, 21362);
    script1516(47710210, 380, 100);
    CC_DELETEALL(comp(728, 13));  // player_kit_feet:colours_graphics
    script7794(47710221, 21361);
    script1506();
    IF_SETONVARCTRANSMIT(callback(script1505, 1014, 1018, 2), comp(728, 7));  // player_kit_feet:universe
    return;
}