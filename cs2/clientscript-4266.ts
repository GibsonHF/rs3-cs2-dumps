//
function script4266(): void {
    script4267();
    script4274();
    IF_SETTEXT("", 70975624);
    IF_SETTEXT("Select a reward for more information.", 70975626);
    IF_SETTEXT("", 70975628);
    IF_SETHIDE(1, 70975629);
    IF_SETHIDE(1, 70975583);
    IF_SETHIDE(1, 70975580);
    IF_SETHIDE(0, 70975578);
    IF_SETHIDE(0, 70975579);
    IF_SETHIDE(0, 70975584);
    if ((varbitplayer_16374 < 11)) {
        script4270();
        IF_SETTEXT("Spells", 70975624);
    } else {
        script4272();
        IF_SETTEXT("Wishes", 70975624);
    };
    return;
}