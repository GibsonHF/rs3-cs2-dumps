//
function script10521(int0: number, int1: number): void {
    if ((varclient_2236 == 9)) {
        switch (int0) {
            case 119930893: {
                IF_SETHIDE(1, 119930897);
                break;
            }
            case 97452039: {
                script9853();
                break;
            }
            case 102301715: {
                script10787();
                break;
            }
            case 36438037: {
                IF_SETHIDE(1, 36438034);
                break;
            }
            case 33882347: {
                script13907();
                break;
            }
            case 86048865: {
                script19557();
                break;
            }
        };
    } else if ((varclient_2236 == 7)) {
        switch (int0) {
            case 6881556: {
                script15050(int1);
                break;
            }
            case 6881515: {
                script15051(int1);
                break;
            }
            case 97321040: {
                script20584(int1);
                break;
            }
        };
    };
    switch (int0) {
        case 6881613: {
            if ((strcmp(varclient_6788, "") != 0)) {
                IF_SETHIDE(0, 6881617);
                IF_SETONCLICK(callback(script15048), 6881617);
            };
            break;
        }
    };
    return;
}