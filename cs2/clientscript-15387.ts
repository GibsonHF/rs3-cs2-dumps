//
function script15387(): void {
    if (((script6431() == 1) || (varbitplayer_37056 == 1))) {
        IF_SETHIDE(true, comp(137, 78));  // chatdefault:wiki_button
        return;
    };
    IF_SETHIDE(false, comp(137, 78));  // chatdefault:wiki_button
    script13990(8978511, 8978512, 28557);
    IF_SETONOP(callback(script15388), comp(137, 80));  // chatdefault:wiki_button_click
    return;
}