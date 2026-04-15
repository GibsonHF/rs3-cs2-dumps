//
function script19406(): void {
    var string0 = ACTIVECLANCHANNEL_GETCLANNAME();
    var int0 = -1;
    var string1 = "";
    [int0, string1] = script19390();
    var string2 = script19324(varbitplayer_56614, varbitplayer_56616);
    IF_SETTEXT(string0, comp(1299, 11));
    stack(int0);
    stack(85131274);
    IF_SETGRAPHIC();
    script3536(string1, 85131274, -1);
    IF_SETTEXT(string2, 85131276);
    return;
}