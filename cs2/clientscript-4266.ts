//
function script4266(): void {
    script4267();
    script4274();
    IF_SETTEXT("", comp(1083, 136));
    IF_SETTEXT("Select a reward for more information.", comp(1083, 138));
    IF_SETTEXT("", comp(1083, 140));
    IF_SETHIDE(true, comp(1083, 141));
    IF_SETHIDE(true, comp(1083, 95));
    IF_SETHIDE(true, comp(1083, 92));
    IF_SETHIDE(false, comp(1083, 90));
    IF_SETHIDE(false, comp(1083, 91));
    IF_SETHIDE(false, comp(1083, 96));
    if ((varbitplayer_16374 < 11)) {
        script4270();
        IF_SETTEXT("Spells", comp(1083, 136));
    } else {
        script4272();
        IF_SETTEXT("Wishes", comp(1083, 136));
    };
    return;
}