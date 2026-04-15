//
function script16620(): void {
    script15938(comp(1253, 37), 0, 3, 0, 0, 1, 1, 0, 0, 1, 1);
    var int0 = 0;
    script10034(comp(1253, 37), 4, int0++, 0, 3, 0, 0, 1, 1, 0, 0, 1, 1, 4128 as dbrow);
    CC_SETNOCLICKTHROUGH(true);
    CC_SETCOLOUR(1118481);
    CC_SETTRANS(100);
    script7866(comp(1253, 37), 4, int0++, 0, 3, 0, 0, 1, 1, 400, 200, 0, 0, 4476 as dbrow, "", false, 0, false, false);
    script10507(comp(1253, 37), 4, int0++, 0, 3, 0, -25, 1, 1, 350, 140, 0, 0, 1314 as dbrow, `Time Crash is ending soon, you won't be able to use the entire ${inttostring((16 - 1), 10)} minutes of your rerolled modifier.<br>Are you sure you want to continue?`);
    CC_SETTEXTFONT(169 as fontmetrics);
    CC_SETMAXLINES(-1);
    script7863(comp(1253, 37), 4, int0++, 0, 3, -100, 75, 1, 1, 75, 40, 0, 0, 17062 as dbrow, "Yes");
    CC_SETONOP(callback(script16622));
    CC_SETOP(1, "Yes");
    script7863(82116645, 4, int0++, 0, 3, 100, 75, 1, 1, 75, 40, 0, 0, 17063, "No");
    CC_SETONOP(callback(script16621));
    CC_SETOP(1, "No");
    return;
}