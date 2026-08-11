//
function script5697(int0: number, int1: number, int2: number): void {
    var string0 = script12096(int1, int2);
    if ((STRING_LENGTH(string0) <= 0)) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 26 as fontmetrics;
    if ((CC_FIND(comp(1218, 246), int0) == 1)) {  // skillguide:content_layer
        if ((IF_GETHIDE(comp(1218, 248)) == true)) {  // skillguide:tooltip_layer
            int4 = ((CC_GETHEIGHT() + CC_GETY()) - 5);
            if ((script6431() == 1)) {
                IF_SETTEXTFONT(28 as fontmetrics, comp(1218, 250));  // skillguide:tooltip_text
                int5 = 28 as fontmetrics;
            };
            int3 = ((MAX(PARAHEIGHT(string0, 500, int5), 1) * 12) + 30);
            IF_SETTEXT(string0, comp(1218, 250));  // skillguide:tooltip_text
            IF_SETSIZE(590, int3, 0, 0, comp(1218, 248));  // skillguide:tooltip_layer
            if ((((int4 + int3) - IF_GETSCROLLY(comp(1218, 244))) > IF_GETHEIGHT(comp(1218, 244)))) {  // skillguide:main_content_layer
                int4 = (CC_GETY() - (int3 - 10));
            };
            IF_SETPOSITION(IF_GETX(comp(1218, 248)), int4, 0, 0, comp(1218, 248));  // skillguide:tooltip_layer
            IF_SETHIDE(false, comp(1218, 248));  // skillguide:tooltip_layer
        } else {
            IF_SETHIDE(true, comp(1218, 248));  // skillguide:tooltip_layer
        };
    };
    return;
}