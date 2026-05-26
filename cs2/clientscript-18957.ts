//
function script18957(): void {
    if ((varbitplayer_3067 == 0)) {
        IF_SETTEXT("<col=941212>You have not purchased this bundle.</col>", comp(136, 18));
        IF_SETTEXT("Buy", comp(136, 19));
        IF_SETOP(1, "Buy", comp(136, 19));
        IF_SETENABLED(true, comp(136, 19));
    } else if ((varbitplayer_3068 == varplayer_3079)) {
        IF_SETTEXT("<col=00FF00>You have already claimed all available rewards for today.</col>", comp(136, 18));
        IF_SETTEXT("Claimed", comp(136, 19));
        IF_SETOP(1, "", comp(136, 19));
        IF_SETENABLED(false, comp(136, 19));
    } else {
        IF_SETTEXT("<col=00FF00>Your rewards are ready to claim!</col>", comp(136, 18));
        IF_SETTEXT("Claim", comp(136, 19));
        IF_SETOP(1, "Claim", comp(136, 19));
        IF_SETENABLED(true, comp(136, 19));
    };
    var int0 = MAX(1, (varplayer_3079 - varbitplayer_3068));
    var int1 = (2 * int0);
    var int2 = (1 * int0);
    var int3 = (1 * int0);
    var int4 = (1 * int0);
    var int5 = (10 * int0);
    var int6 = (10 * int0);
    var int7 = (50 * int0);
    var int8 = (50 * int0);
    var string0 = `${inttostring(int1, 10)}x Earned Treasure Hunter key<br>${inttostring(int2, 10)}x Large prismatic star<br>${inttostring(int3, 10)}x Medium protean pack<br>${inttostring(int4, 10)}x Medium skill dummy crate<br>${inttostring(int5, 10)}x Advanced pulse core<br>${inttostring(int6, 10)}x Cinder core<br>${inttostring(int7, 10)}x Tight springs<br>${inttostring(int8, 10)}x Silverhawk down`;
    IF_SETTEXT(string0, comp(136, 16));
    return;
}