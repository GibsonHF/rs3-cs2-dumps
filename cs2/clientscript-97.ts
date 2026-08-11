//
function script97(int0: number, int1: number, int2: number, string0: string): void {
    if ((int0 < 330)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script97, int0, int1, int2, string0), comp(16, 8));  // twitch_jun18:chest_layer
        return;
    };
    IF_SETTEXT(`${TOSTRING_LOCALISED(int2, 1)}x ${OC_NAME(varplayer_7995)}`, comp(16, 19));  // twitch_jun18:reward_name_label
    IF_SETTEXT(string0, comp(16, 22));  // twitch_jun18:reward_description_label
    IF_SETGRAPHIC(678 as graphic, comp(16, 20));  // twitch_jun18:reward_rarity_graphic
    IF_SETOBJECT(int1, int2, comp(16, 21));  // twitch_jun18:reward_rarity_prize_model
    IF_SETHIDE(false, comp(16, 15));  // twitch_jun18:reward_claim_container
    IF_SETHIDE(true, comp(16, 14));  // twitch_jun18:anim_skip_layer
    IF_SETMODELANIM(32036 as seq, comp(16, 10));  // twitch_jun18:chest
    IF_SETONTIMER(callback(), comp(16, 8));  // twitch_jun18:chest_layer
    IF_SETONMOUSEOVER(callback(script98), comp(16, 10));  // twitch_jun18:chest
    IF_SETONMOUSELEAVE(callback(script100), comp(16, 10));  // twitch_jun18:chest
    return;
}