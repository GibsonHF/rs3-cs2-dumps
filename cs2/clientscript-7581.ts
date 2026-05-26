//
function script7581(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 1;
    var int9 = 1;
    var int10 = 1;
    var int11 = 1;
    switch (varbitplayer_18080) {
        case 1: {
            int0 = 10747916;
            int1 = 10747929;
            break;
        }
        case 2: {
            int0 = 10747917;
            int1 = 10747930;
            break;
        }
        case 4: {
            int0 = 10747918;
            int1 = 10747931;
            break;
        }
        case 3: {
            int0 = 10747919;
            int1 = 10747932;
            break;
        }
        default: {
            int8 = 0;
            break;
        }
    };
    switch (varbitplayer_18081) {
        case 1: {
            int2 = 10747916;
            int3 = 10747929;
            break;
        }
        case 2: {
            int2 = 10747917;
            int3 = 10747930;
            break;
        }
        case 4: {
            int2 = 10747918;
            int3 = 10747931;
            break;
        }
        case 3: {
            int2 = 10747919;
            int3 = 10747932;
            break;
        }
        default: {
            int9 = 0;
            break;
        }
    };
    switch (varbitplayer_18082) {
        case 1: {
            int4 = 10747916;
            int5 = 10747929;
            break;
        }
        case 2: {
            int4 = 10747917;
            int5 = 10747930;
            break;
        }
        case 4: {
            int4 = 10747918;
            int5 = 10747931;
            break;
        }
        case 3: {
            int4 = 10747919;
            int5 = 10747932;
            break;
        }
        default: {
            int10 = 0;
            break;
        }
    };
    switch (varbitplayer_18083) {
        case 1: {
            int6 = 10747916;
            int7 = 10747929;
            break;
        }
        case 2: {
            int6 = 10747917;
            int7 = 10747930;
            break;
        }
        case 4: {
            int6 = 10747918;
            int7 = 10747931;
            break;
        }
        case 3: {
            int6 = 10747919;
            int7 = 10747932;
            break;
        }
        default: {
            int11 = 0;
            break;
        }
    };
    if ((int8 == 1)) {
        script7584(int0, 10747906, 1);
    };
    if ((int9 == 1)) {
        script7584(int2, 10747907, 1);
    };
    if ((int10 == 1)) {
        script7584(int4, 10747908, 1);
    };
    if ((int11 == 1)) {
        script7584(int6, 10747909, 1);
    };
    var int12 = -1;
    if ((varbitplayer_18021 > 140)) {
        int12 = script7582(int1);
        if ((int12 == -1)) {
            return;
        };
        stack(int12);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETDRAGGABLE(-1, -1, int0);
        IF_SETHIDE(0, 10747924);
    };
    if ((varbitplayer_18021 > 150)) {
        int12 = script7582(int3);
        if ((int12 == -1)) {
            return;
        };
        stack(int12);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETDRAGGABLE(-1, -1, int2);
        IF_SETHIDE(0, 10747925);
    };
    if ((varbitplayer_18021 > 160)) {
        int12 = script7582(int5);
        if ((int12 == -1)) {
            return;
        };
        stack(int12);
        stack(int5);
        IF_SETGRAPHIC();
        IF_SETDRAGGABLE(-1, -1, int4);
        IF_SETHIDE(0, 10747926);
    };
    if ((varbitplayer_18021 > 170)) {
        int12 = script7582(int7);
        if ((int12 == -1)) {
            return;
        };
        stack(int12);
        stack(int7);
        IF_SETGRAPHIC();
        IF_SETDRAGGABLE(-1, -1, int6);
        IF_SETHIDE(0, 10747927);
    };
    var int13 = script6431();
    script16148(10747916, int13);
    script16148(10747917, int13);
    script16148(10747918, int13);
    script16148(10747919, int13);
    script16148(10747920, int13);
    script16148(10747921, int13);
    script16148(10747922, int13);
    script16148(10747923, int13);
    script16148(10747924, int13);
    script16148(10747925, int13);
    script16148(10747926, int13);
    script16148(10747927, int13);
    return;
}