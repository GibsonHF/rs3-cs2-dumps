//
function script17115(): void {
    var int0 = (varbitplayer_52409 + varbitplayer_52410);
    var int1 = (int0 + varbitplayer_52411);
    var int2 = true;
    var string0 = `Number of items stored with Death:<br>${inttostring(int0, 10)} with Death<br>${inttostring(varbitplayer_52411, 10)} / ${inttostring(50, 10)} in overflow storage`;
    if (((int0 > 0) && (int1 >= 50))) {
        int2 = false;
        string0 = `${string0}<br><br><col=FF0000>Warning: If you die, you may permanently lose items. Reclaim items from Death when you can!`;
    };
    script17116(true, int2, 24196, inttostring(int1, 10), string0);
    return;
}