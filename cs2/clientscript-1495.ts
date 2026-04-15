//
function script1495(): void {
    var int0 = script1497(1623 as obj, varbitplayer_22581);
    if ((int0 > 0)) {
        varbitplayer_22581 = (varbitplayer_22581 - int0);
    };
    var int1 = script1497(1621 as obj, varbitplayer_22582);
    if ((int1 > 0)) {
        varbitplayer_22582 = (varbitplayer_22582 - int1);
    };
    var int2 = script1497(1619 as obj, varbitplayer_22583);
    if ((int2 > 0)) {
        varbitplayer_22583 = (varbitplayer_22583 - int2);
    };
    var int3 = script1497(1617 as obj, varbitplayer_22584);
    if ((int3 > 0)) {
        varbitplayer_22584 = (varbitplayer_22584 - int3);
    };
    var int4 = script1497(1631 as obj, varbitplayer_22585);
    if ((int4 > 0)) {
        varbitplayer_22585 = (varbitplayer_22585 - int4);
    };
    var string0 = `Emptied ${inttostring(int0, 10)} ${script4583(int0, "sapphire", "sapphires")}, `;
    string0 = `${string0}${inttostring(int1, 10)} ${script4583(int1, "emerald", "emeralds")}, `;
    string0 = `${string0}${inttostring(int2, 10)} ${script4583(int2, "ruby", "rubies")}, `;
    string0 = `${string0}${inttostring(int3, 10)} ${script4583(int3, "diamond", "diamonds")} and `;
    string0 = `${string0}${inttostring(int4, 10)} ${script4583(int4, "dragonstone", "dragonstones")} into your bank.`;
    script14153(string0);
    return;
}