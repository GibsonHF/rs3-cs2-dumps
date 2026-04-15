//
function script6192(): void {
    if (((varclient_1919 < 1) && (varbitplayer_16467 < 1))) {
        IF_SETHIDE(false, comp(906, 148));
        IF_SETHIDE(true, comp(803, 32));
        IF_SETHIDE(false, comp(803, 33));
        IF_SETTEXT("You have successfully validated your email address.<br> This gives you access to all these perks.", comp(803, 18));
        IF_SETTEXT("To collect your perks head into the game world and visit Diango in Draynor Market. Your extra bank space has already been added to your account.", comp(803, 14));
        IF_SETTEXT("continue", comp(803, 15));
    } else {
        script6190();
    };
    return;
}