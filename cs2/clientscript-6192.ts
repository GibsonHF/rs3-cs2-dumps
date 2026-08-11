//
function script6192(): void {
    if ((varclient_1919 < 1)) {
        if ((varbitplayer_16467 < 1)) {
            IF_SETHIDE(false, comp(906, 148));  // lobbyscreen:email_validation
            IF_SETHIDE(true, comp(803, 32));  // lobbyscreen_evalid:request_email
            IF_SETHIDE(false, comp(803, 33));  // lobbyscreen_evalid:success
            IF_SETTEXT("You have successfully validated your email address.<br> This gives you access to all these perks.", comp(803, 18));  // lobbyscreen_evalid:body_text
            IF_SETTEXT("To collect your perks head into the game world and visit Diango in Draynor Market. Your extra bank space has already been added to your account.", comp(803, 14));  // lobbyscreen_evalid:success_text
            IF_SETTEXT("continue", comp(803, 15));  // lobbyscreen_evalid:evalid_success_confirm_button
        } else {
            script6190();
        };
    } else {
        script6190();
    };
    return;
}