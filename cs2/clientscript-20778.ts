//
function script20778(int0: number): void {
    if ((script6431() == 0)) {
        return;
    };
    var int1 = true;
    var int2 = true;
    if ((int0 == 1)) {
        if ((varbitplayer_61207 == 0)) {
            IF_SETONCLICK(callback(script20780, -2147483645), comp(1477, 30));  // toplevel_v2:gameview_window_content
            int1 = false;
            int2 = false;
        } else {
            IF_SETONCLICK(callback(), comp(1477, 30));  // toplevel_v2:gameview_window_content
            int2 = true;
            int1 = false;
        };
    } else {
        IF_SETONCLICK(callback(), comp(1477, 30));  // toplevel_v2:gameview_window_content
        if ((varbitplayer_61207 == 1)) {
            int1 = false;
            int2 = true;
        } else if ((script20783(varplayer_12920) == 1)) {
            script20779(varplayer_12920);
            int1 = true;
            int2 = true;
        } else {
            int1 = true;
            int2 = false;
        };
    };
    if ((CC_FINDBYCATEGORY(comp(1665, 4), 0, 0) == 1)) {  // poh_house_controls:instructions_build
        CC_SETENABLED(int2);
    };
    if ((CC_FINDBYCATEGORY(comp(1665, 4), 1, 0) == 1)) {  // poh_house_controls:instructions_build
        CC_SETENABLED(int1);
    };
    return;
}