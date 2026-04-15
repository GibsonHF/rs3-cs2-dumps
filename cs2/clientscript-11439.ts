//
function script11439(int0: component, int1: unknown_int): void {
    var int2 = 0;
    switch (int1) {
        case 73924664: {
            int2 = varbitplayer_4740;
            break;
        }
        case 73924665: {
            int2 = varbitplayer_4741;
            break;
        }
        case 73924666: {
            int2 = varbitplayer_4742;
            break;
        }
        case 73924670: {
            int2 = varbitplayer_4743;
            break;
        }
        case 73924674: {
            int2 = varbitplayer_4744;
            break;
        }
        case 73924678: {
            int2 = varbitplayer_4745;
            break;
        }
        case 73924682: {
            int2 = varbitplayer_4746;
            break;
        }
        case 73924759: {
            int2 = varbitplayer_36973;
            break;
        }
        case 73924773: {
            int2 = varbitplayer_36974;
            break;
        }
    };
    if ((int2 == 1)) {
        if ((int0 != comp(-1, 65535))) {
            script7794(int0, 21361 as struct);
        };
        stack(6007);
        stack(int1);
        IF_SETGRAPHIC();
    } else {
        if ((int0 != comp(-1, 65535))) {
            script7794(int0, 21362 as struct);
        };
        stack(6009);
        stack(int1);
        IF_SETGRAPHIC();
    };
    script5245();
    return;
}