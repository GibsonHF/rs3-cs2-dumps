//
function script4849(): void {
    var int0 = comp(1258, 559);
    var int1 = comp(1258, 558);
    var int2 = comp(1258, 562);
    var int3 = comp(1258, 563);
    var int4 = comp(1258, 560);
    var int5 = comp(1258, 561);
    IF_SETHIDE(true, comp(1258, 587));
    IF_SETHIDE(true, comp(1258, 578));
    IF_SETHIDE(true, comp(1258, 569));
    switch (varbitplayer_6981) {
        case 1: {
            IF_SETHIDE(false, comp(1258, 587));
            if ((varbitplayer_6993 == 0)) {
                script4940();
                script4850(int0, int1, int2, int3, int4, int5);
            } else {
                script4942();
                script4851(int0, int1, int2, int3, int4, int5);
            };
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1258, 578));
            if ((varbitplayer_7002 == 0)) {
                script4940();
                script4850(int0, int1, int2, int3, int4, int5);
            } else {
                script4942();
                script4851(int0, int1, int2, int3, int4, int5);
            };
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1258, 569));
            if ((varbitplayer_7011 == 0)) {
                script4940();
                script4850(int0, int1, int2, int3, int4, int5);
            } else {
                script4942();
                script4851(int0, int1, int2, int3, int4, int5);
            };
            break;
        }
    };
    script4804();
    script4852();
    return;
}