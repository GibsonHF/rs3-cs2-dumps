//
function script16067(int0: component): void {
    var string0 = "Unlock SILVER at 25% Enrage. This will significantly increase your chance of receiving high-value items.";
    if ((varbitplayer_50177 >= 100)) {
        string0 = "You have a significantly increased chance to receive Arch-Glacor-related item pieces and other high-value items.";
    } else if ((varbitplayer_50177 >= 25)) {
        string0 = "Unlock GOLD at 100% Enrage. This will significantly increase your chance of receiving Arch-Glacor-related item pieces.";
    };
    script8800(string0, int0, -1);
    return;
}