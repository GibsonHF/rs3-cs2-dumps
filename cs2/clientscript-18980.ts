//
function script18980(): void {
    var int0 = unk11026(85918089);
    var int1 = unk11025(85918089);
    var int2 = IF_GETWIDTH(85918089);
    var int3 = IF_GETHEIGHT(85918089);
    if ((IF_FIND(85918089) == 1)) {
        MES_TYPED(99, 0, `mtxmg:call_pet_button x:${inttostring(int0, 10)} y:${inttostring(int1, 10)} w:${inttostring(int2, 10)} h:${inttostring(int3, 10)}`);
    };
    return;
}