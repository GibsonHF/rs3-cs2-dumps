//
function script6192(): void {
    if (((varclient_1919 < 1) && (varbitplayer_16467 < 1))) {
        IF_SETHIDE(0, 59375764);
        IF_SETHIDE(1, 52625440);
        IF_SETHIDE(0, 52625441);
        IF_SETTEXT("You have successfully validated your email address.<br> This gives you access to all these perks.", 52625426);
        IF_SETTEXT("To collect your perks head into the game world and visit Diango in Draynor Market. Your extra bank space has already been added to your account.", 52625422);
        IF_SETTEXT("continue", 52625423);
    } else {
        script6190();
    };
    return;
}