//
function script20874(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if (((IF_FIND(comp(105, 147) /*stockmarket:choosebuy6_button_on_layer ?*/) == 1) && (IF_FIND[1](comp(105, 149) /*stockmarket:choosebuy6_button_hit_layer ?*/) == 1))) {
        int1 = CC_GETWIDTH();
        int2 = PARAWIDTH(CC_GETTEXT(), int1, 26 as fontmetrics);
        int3 = CC_GETWIDTH[1]();
        int0 = (((int1 - int2) / 2) - (int3 - 5));
        CC_SETPOSITION[1](int0, 14, 0, 2);
    };
    if (((IF_FIND(comp(105, 150) /*stockmarket:choosebuy6 ?*/) == 1) && (IF_FIND[1](comp(105, 152) /*stockmarket:choosesell6_button_layer ?*/) == 1))) {
        int1 = CC_GETWIDTH();
        int2 = MAX(int2, PARAWIDTH(CC_GETTEXT(), int1, 26 as fontmetrics));
        int3 = CC_GETWIDTH[1]();
        int0 = (((int1 - int2) / 2) - (int3 - 5));
        CC_SETPOSITION[1](int0, 0, 0, 2);
    };
    return;
}