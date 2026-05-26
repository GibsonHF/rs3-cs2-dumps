//
function script19406(): void {
    var string0 = ACTIVECLANCHANNEL_GETCLANNAME();
    var int0 = -1 as graphic;
    var string1 = "";
    [int0, string1] = script19390();
    var string2 = script19324(varbitplayer_56614, varbitplayer_56616);
    IF_SETTEXT(string0, comp(1299, 11));
    IF_SETGRAPHIC(int0, comp(1299, 10));
    script3536(string1, 85131274, -1);
    IF_SETTEXT(string2, comp(1299, 12));
    return;
}