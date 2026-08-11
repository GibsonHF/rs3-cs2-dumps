//
function script20556(int0: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(853, 10));  // mtx_front_end_bonds:fake_op_layer
    IF_TRIGGEROP(comp(853, 10), int0, 1);  // mtx_front_end_bonds:fake_op_layer
    if ((CC_FINDBYCATEGORY(comp(853, 10), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {  // mtx_front_end_bonds:fake_op_layer
        CC_DELETE();
    };
    return;
}