//
function script7616(string0: string): void {
    IF_SETTEXT(string0, comp(1410, 6));  // mtx_pack:gold_window_title_text
    var int0 = 0;
    while ((CC_FIND(comp(1410, 2), int0) == 1)) {  // mtx_pack:gold_window_content_layer
        CC_SETONRELEASE(callback(script7696, -2147483643));
        int0 = (int0 + 1);
    };
    return;
}