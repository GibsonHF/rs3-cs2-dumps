//
function script10798(): void {
    var int0 = comp(1562, 23);  // mtxmgt_purchase:mainmodal_window_content
    var int1 = comp(1562, 2);  // mtxmgt_purchase:header_layer
    var int2 = comp(1562, 3);  // mtxmgt_purchase:outfit_layer
    var int3 = comp(1562, 4);  // mtxmgt_purchase:flow_layer
    var int4 = 4;
    var int5 = ((IF_GETWIDTH(int0) - (int4 * 3)) / 2);
    var int6 = IF_GETHEIGHT(int3);
    IF_SETPOSITION(int4, int4, 2, 2, int3);
    IF_SETSIZE(int5, int6, 0, 0, int3);
    IF_SETPOSITION(int4, int4, 0, 2, int2);
    IF_SETSIZE(int5, (int6 + 1), 0, 0, int2);
    IF_SETPOSITION(int4, int4, 0, 0, int1);
    IF_SETSIZE((IF_GETWIDTH(int0) - (int4 * 2)), (int6 + (int4 * 2)), 0, 1, int1);
    return;
}