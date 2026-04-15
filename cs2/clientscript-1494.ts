//
function script1494(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int1, int2, int3, int4] = script4743(INV_GETVAR(93 as inv, int0, 2154));
    var int5 = script1497(1623 as obj, int1);
    var string0 = `Emptied ${inttostring(int5, 10)} ${script4583(int5, "sapphire", "sapphires")}, `;
    int1 = (int1 - int5);
    int5 = script1497(1621 as obj, int2);
    string0 = `${string0}${inttostring(int5, 10)} ${script4583(int5, "emerald", "emeralds")}, `;
    int2 = (int2 - int5);
    int5 = script1497(1619 as obj, int3);
    string0 = `${string0}${inttostring(int5, 10)} ${script4583(int5, "ruby", "rubies")} and `;
    int3 = (int3 - int5);
    int5 = script1497(1617 as obj, int4);
    string0 = `${string0}${inttostring(int5, 10)} ${script4583(int5, "diamond", "diamonds")} into your bank.`;
    int4 = (int4 - int5);
    script1499(int0, int1, int2, int3, int4);
    script14153(string0);
    return;
}