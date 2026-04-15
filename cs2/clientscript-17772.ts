//
function script17772(): int {
    var int0 = comp(1223, 13);
    var int1 = IF_GETHEIGHT(int0);
    var int2 = IF_GETWIDTH(int0);
    script2995(int0, IF_GETNEXTSUBID(int0), 0, 0, 0, 0, int2, int1, 0, 0, 2100 as dbrow, `${inttostring(varbitplayer_53849, 10)} / ${inttostring(script17527(varplayer_11131), 10)}`);
    script2731(int0, CC_GETID(), 2);
    return (CC_GETHEIGHT() + (8 * 3));
}