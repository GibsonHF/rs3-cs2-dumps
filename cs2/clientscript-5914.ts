//
function script5914(int0: component): void {
    var string0 = "Unlock SILVER at 25% enrage. This will significantly increase your chance at receiving high value items.";
    if ((varbitplayer_32626 >= 100)) {
        string0 = "You have a significantly increased chance to receive Telos-related item pieces and other high value items.";
    } else if ((varbitplayer_32626 >= 25)) {
        string0 = "Unlock GOLD at 100% enrage. This will significantly increase your chance at receiving Telos-related item pieces.";
    };
    script8800(string0, int0, -1);
    return;
}