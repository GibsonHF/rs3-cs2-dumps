//
function script7688(): void {
    var int0 = script6431();
    var int1 = 2;
    var int2 = IF_GETNEXTSUBID(comp(1399, 2));  // tsd_boulder_overlay:gold_frame_content_layer
    if ((int0 == 1)) {
        IF_SETSIZE(29, 309, 0, 0, comp(1399, 0));  // tsd_boulder_overlay:gold_frame_layer
    };
    script7730(16533, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    script7730(16534, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    script7730(16535, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    script7730(16536, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    script7730(16537, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    script7730(16538, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    script7730(16539, int2, int0, int1);
    int2 = (int2 + 1);
    int1 = ((int1 + 15) + 25);
    if ((int0 == 1)) {
        IF_SETPOSITION(0, int1, 1, 0, comp(1399, 3));  // tsd_boulder_overlay:close_button
    } else {
        IF_SETPOSITION(int1, 0, 0, 1, comp(1399, 3));  // tsd_boulder_overlay:close_button
    };
    return;
}