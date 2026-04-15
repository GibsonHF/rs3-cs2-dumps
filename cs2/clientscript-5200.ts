//
function script5200(int0: int): unknown_int {
    switch (int0) {
        case 1: {
            if ((varbitplayer_10826 >= 60)) {
                return 1;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_13876 >= 60)) {
                return 1;
            };
            break;
        }
        case 3: {
            if ((varbitplayer_9655 >= 3)) {
                return 1;
            };
            break;
        }
        case 4: {
            if ((script6432(int0) >= 24)) {
                return 1;
            };
            break;
        }
        case 5: {
            if ((varbitplayer_9188 >= 100)) {
                return 1;
            };
            break;
        }
        case 6: {
            if ((varplayer_2738 >= 7)) {
                return 1;
            };
            break;
        }
        case 7: {
            if ((varbitplayer_13385 >= 3)) {
                return 1;
            };
            break;
        }
        case 8: {
            if ((script6432(int0) >= 17)) {
                return 1;
            };
            break;
        }
        case 9: {
            if ((varbitplayer_9363 >= 6)) {
                return 1;
            };
            break;
        }
        case 10: {
            if ((varbitplayer_19966 >= 170)) {
                return 1;
            };
            break;
        }
        case 11: {
            if ((varplayer_2547 >= 7)) {
                return 1;
            };
            break;
        }
        case 12: {
            if ((script6432(int0) >= 11)) {
                return 1;
            };
            break;
        }
        case 14: {
            if ((varplayer_2268 >= 10)) {
                return 1;
            };
            break;
        }
        case 15: {
            if (((varbitplayer_14641 >= 25) || (varbitplayer_26347 == 1))) {
                return 1;
            };
            break;
        }
        case 0: {
            break;
        }
        default: {
            script12478(`Herald cape: Failed to check goal completion, invalid goal id (${inttostring(int0, 10)})`);
            break;
        }
    };
    return 0;
}