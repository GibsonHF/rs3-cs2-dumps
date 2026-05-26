//[clientscript,player_kit_feet_initialise]
function script1503(): void {
    CC_DELETEALL(47710220);
    script7794(47710220, 21361);
    CC_DELETEALL(47710210);
    script7794(47710211, 21362);
    script1516(47710210, 380, 100);
    CC_DELETEALL(47710223);
    script7794(47710223, 21361);
    script1506();
    IF_SETONVARCTRANSMIT(callback(script1505, 1014, 1018, 2), 47710217);
    return;
}