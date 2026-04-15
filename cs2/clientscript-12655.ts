//
function script12655(): void {
    script12656();
    IF_SETHIDE(false, comp(1776, 30));
    IF_SETHIDE(true, comp(1776, 32));
    IF_SETHIDE(true, comp(1776, 76));
    if ((varbitplayer_34241 == 1)) {
        IF_SETHIDE(false, comp(1776, 32));
        IF_SETHIDE(false, comp(1776, 76));
    };
    IF_SETHIDE(true, comp(1776, 10));
    IF_SETHIDE(true, comp(1776, 9));
    if ((script5257(0) == 1)) {
        IF_SETHIDE(false, comp(1776, 10));
        IF_SETHIDE(false, comp(1776, 9));
    };
    if ((varplayer_6406 <= 0)) {
        IF_SETHIDE(true, comp(1776, 43));
    };
    IF_SETTEXT(`${inttostring(script12651(), 10)} supplies`, comp(1776, 28));
    var string0 = "Nearby islands with 0-1 rare resources (5 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 116391978);
    string0 = "Distant islands with 2-3 rare resources (12 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 116391977);
    string0 = "Remote islands with 3-5 rare resources (20 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 116391976);
    string0 = "Return to your claimed island (3 supplies)";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 116391979);
    string0 = "Show named islands.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 116391980);
    return;
}