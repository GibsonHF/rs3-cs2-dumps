//
function script7989(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    script9092(int0, int1, "Large gnomeball", 56623129, comp(864, 5));
    script9092(int0, int2, "Cabbage ball", 56623130, comp(864, 0));
    script9092(int0, int3, "Skull ball", 56623131, comp(864, 1));
    script9092(int0, int4, "Golden chinchompa ball", 56623132, comp(864, 2));
    script9092(int0, int5, "Zaros ball", 56623133, comp(864, 3));
    script9092(int0, int6, "Stone of Jas ball", 56623134, comp(864, 4));
    IF_SETTEXT(`Kicks: ${inttostring(int0, 10)}`, comp(864, 34));
    return;
}