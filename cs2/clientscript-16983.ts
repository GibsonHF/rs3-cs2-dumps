//
function script16983(int0: obj, int1: int, int2: component): void {
    var string0 = "";
    if ((IF_FIND(int2) == 1)) {
        if ((item_getparam(int0, 4414) != -1 as struct)) {
            if ((script6431() == false)) {
                script14994(53888 as obj, -1 as inv, -1, int0, 819 as inv, 1);
            } else {
                string0 = OC_NAME(int0);
                CC_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0));
            };
        } else {
            if ((int1 > 1)) {
                string0 = `${TOSTRING_LOCALISED(int1, 1)} x ${OC_NAME(int0)}`;
            } else {
                string0 = OC_NAME(int0);
            };
            script3537(string0);
        };
    };
    return;
}