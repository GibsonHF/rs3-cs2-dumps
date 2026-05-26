//
function script3498(): void {
    var int0 = unk11026(120783153);
    var int1 = unk11025(120783153);
    var int2 = IF_GETWIDTH(comp(1843, 305));
    var int3 = IF_GETHEIGHT(comp(1843, 305));
    if ((IF_FIND(comp(1843, 305)) == 1)) {
        MES_TYPED(99, 0, `mtxmgt_store:apply_button_on_layer x:${inttostring(int0, 10)} y:${inttostring(int1, 10)} w:${inttostring(int2, 10)} h:${inttostring(int3, 10)}`);
    };
    return;
}