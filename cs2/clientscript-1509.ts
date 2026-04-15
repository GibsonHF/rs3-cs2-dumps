//[clientscript,player_kit_body_initialise]
function script1509(): void {
    CC_DELETEALL(comp(729, 16));
    script7794(comp(729, 16), 21361 as struct);
    CC_DELETEALL(comp(729, 2));
    script1516(comp(729, 2), 380, 100);
    CC_DELETEALL(comp(729, 19));
    script7794(comp(729, 19), 21361 as struct);
    varclient_778 = varbitplayer_481;
    script1513();
    IF_SETONVARTRANSMIT(callback(script1510, 172, 1), comp(729, 8));
    IF_SETONVARCTRANSMIT(callback(script1511, 1010, 1011, 1012, 1013, 1016, 1017, 6), 47775752);
    IF_SETONOP(callback(script1512, -2147483644, 0), 47775756);
    IF_SETONOP(callback(script1512, -2147483644, 1), 47775757);
    IF_SETONOP(callback(script1512, -2147483644, 2), 47775758);
    IF_SETONOP(callback(script1512, -2147483644, 3), 47775759);
    var string0 = "Choose a top";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 47775756);
    string0 = "Choose some sleeves";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 47775757);
    string0 = "Decorate your wrists";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 47775758);
    string0 = "Choose some leggings";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 47775759);
    return;
}