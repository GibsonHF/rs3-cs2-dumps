//
function script14792(): void {
    var int0 = unk11026(120913952);
    var int1 = unk11025(120913952);
    var int2 = IF_GETWIDTH(comp(1845, 32));  // mtxmgt_store_checkout:purchase_button_0_layer
    var int3 = IF_GETHEIGHT(comp(1845, 32));  // mtxmgt_store_checkout:purchase_button_0_layer
    if ((IF_FIND(comp(1845, 32)) == 1)) {  // mtxmgt_store_checkout:purchase_button_0_layer
        MES_TYPED(99, 0, `mtxmgt_store_checkout:purchase_button_0_layer x:${inttostring(int0, 10)} y:${inttostring(int1, 10)} w:${inttostring(int2, 10)} h:${inttostring(int3, 10)}`);
    };
    return;
}