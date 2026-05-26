//
function script3512(): void {
    var int0 = struct_getparam(21303, 6121);
    if ((IF_HASSUB(int0) == 1)) {
        script5695();
        script381();
        if ((IF_HASSUBMODAL(int0, 387) == 1)) {
            script3513();
        };
        script3514();
        if ((IF_HASSUBMODAL(int0, 327) == 1)) {
            if ((IF_FIND(21430294) == 1)) {
                CC_CALLONRESIZE();
            };
        } else if ((CC_FIND(25362454, 0) == 1)) {
            CC_CALLONRESIZE();
        };
    };
    return;
}