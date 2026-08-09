//
function script1850(int0: number, int1: number): void {
    var int2 = script10405(int0);
    var int3 = -1;
    var int4 = 0;
    if ((int2 != -1)) {
        int4 = struct_getparam(int2, 3734);
        if ((int4 != 0)) {
            if ((int1 == 0)) {
                IF_SETNOCLICKTHROUGH(1, struct_getparam(int2, 3503));
                script3415(0, struct_getparam(int2, 3506));
            } else if ((struct_getparam(int2, 3734) == 1)) {
                if (((varbitplayer_20188 == 1) || (script12616(int2) == 1))) {
                    IF_SETNOCLICKTHROUGH(0, struct_getparam(int2, 3503));
                    script3415(1, struct_getparam(int2, 3506));
                } else if ((int0 == 1004)) {
                    if ((varbitplayer_60446 == 1)) {
                        IF_SETNOCLICKTHROUGH(0, struct_getparam(int2, 3503));
                        script3415(1, struct_getparam(int2, 3506));
                    } else {
                        IF_SETNOCLICKTHROUGH(1, struct_getparam(int2, 3503));
                        script3415(0, struct_getparam(int2, 3506));
                    };
                } else {
                    IF_SETNOCLICKTHROUGH(1, struct_getparam(int2, 3503));
                    script3415(0, struct_getparam(int2, 3506));
                };
            } else if ((script12616(int2) == 1)) {
                IF_SETNOCLICKTHROUGH(0, struct_getparam(int2, 3503));
                script3415(1, struct_getparam(int2, 3506));
            } else if ((int0 == 1004)) {
                if ((varbitplayer_60446 == 1)) {
                    IF_SETNOCLICKTHROUGH(0, struct_getparam(int2, 3503));
                    script3415(1, struct_getparam(int2, 3506));
                } else {
                    IF_SETNOCLICKTHROUGH(1, struct_getparam(int2, 3503));
                    script3415(0, struct_getparam(int2, 3506));
                };
            } else {
                IF_SETNOCLICKTHROUGH(1, struct_getparam(int2, 3503));
                script3415(0, struct_getparam(int2, 3506));
            };
        };
    };
    return;
}