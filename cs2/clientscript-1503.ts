//[clientscript,player_kit_feet_initialise]
function script1503(): void {
    CC_DELETEALL(comp(728, 12));
    script7794(comp(728, 12), 21361 as struct);
    CC_DELETEALL(comp(728, 2));
    script7794(comp(728, 3), 21362 as struct);
    script1516(comp(728, 2), 380, 100);
    CC_DELETEALL(comp(728, 15));
    script7794(comp(728, 15), 21361 as struct);
    script1506();
    IF_SETONVARCTRANSMIT(callback(script1505, 1014, 1018, 2), comp(728, 9));
    return;
}