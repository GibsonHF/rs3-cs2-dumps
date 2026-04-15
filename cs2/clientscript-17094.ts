//
function script17094(int0: int, long0: long, long1: long, long2: long, long3: long, long4: long, long5: long, long6: long): void {
    CC_DELETEALL(comp(1626, 52));
    var int1 = STRINGWIDTH(TOSTRING_LOCALISED(2147483647, 1), 168 as fontmetrics);
    var int2 = IF_GETWIDTH(comp(1626, 52));
    var int3 = 0;
    var int4 = 0;
    var int5 = script15891("Carried wealth:", 1000, 28 as fontmetrics, 0);
    var string0 = "Values shown here are a summary of the combined items being carried.";
    var string1 = "Items will be reclaimed to your backpack or worn equipment.";
    if ((int0 != 0)) {
        string1 = "";
    };
    [int3, int4] = script17385(int3, int4, int1, int5, "Coins available:", script17372(script17400(), 9, 1));
    if ((varbitplayer_52406 == 2)) {
        [int3, int4] = script17095(int3, int4, int1, int5, "Used slots:", 0, INT_TO_LONG((50 - INV_FREESPACE(930 as inv))));
        [int3, int4] = script17095(int3, int4, int1, int5, "Max slots:", 0, INT_TO_LONG(50));
        string0 = "Reclaim items from Death's overflow storage. When the storage is full, the cheapest items will be replaced.<br><br>You can destroy items from storage, or reclaim for 10x the normal reclaim cost.";
        string1 = "Items will be reclaimed to your bank.";
    };
    int4 = MAX(60, (int4 + 5));
    var int6 = script15891(string0, int2, 28 as fontmetrics, 0);
    script2995(comp(1626, 52), int3++, 0, int4, 0, 0, 0, int6, 1, 0, 2100 as dbrow, string0);
    int4 = ((int4 + int6) + 5);
    if ((varbitplayer_52406 != 2)) {
        script2995(comp(1626, 52), int3++, 0, int4, 0, 0, 0, int5, 1, 0, 17467 as dbrow, "Coins:");
        CC_SETTEXTALIGN(2, 1, 0);
        int4 = ((int4 + int5) + 5);
        [int3, int4] = script17095(int3, int4, int1, int5, "Carried wealth:", 1, long0);
        [int3, int4] = script17095(int3, int4, int1, int5, "Carried wealth at risk:", 1, long1);
        if ((int0 == 0)) {
            [int3, int4] = script17095(int3, int4, int1, int5, "Base reclaim cost:", 1, long2);
            [int3, int4] = script17095(int3, int4, int1, int5, "Death's deal:", 1, SUB_LONG(0n, long3));
            [int3, int4] = script17095(int3, int4, int1, int5, "Gravestone:", 1, SUB_LONG(0n, long4));
            if ((varbitplayer_1942 == 3)) {
                [int3, int4] = script17095(int3, int4, int1, int5, "Free death discount:", 1, SUB_LONG(0n, long5));
            };
            [int3, int4] = script17095(int3, int4, int1, int5, "Final reclaim cost:", 1, long6);
        };
    };
    int4 = (int4 + 5);
    int6 = script15891(string1, int2, 28 as fontmetrics, 0);
    script2995(comp(1626, 52), int3++, 0, int4, 0, 0, 0, int6, 1, 0, 2100 as dbrow, string1);
    return;
}