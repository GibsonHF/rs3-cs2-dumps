//[clientscript,loginscreen_slider_drag]
function script1215(int0: component, int1: component, int2: int, int3: unknown_int): void {
    var int4 = MAX((IF_GETWIDTH(int0) - IF_GETWIDTH(int1)), 1);
    var int2 = MIN(MAX(int2, 0), int4);
    var int5 = MIN(SCALE(int2, int4, 5), 4);
    switch (int3) {
        case 3: {
            CLIENTOPTION_SET(5, int5);
            script1185(int0, int1);
            break;
        }
    };
    script15657();
    return;
}