//
function script4885(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int2 = script4964(int0);
        int3 = script4971(int2);
        if ((script4886(int3) == 0)) {
            return;
        };
        if ((((varbitplayer_6993 == int3) || (varbitplayer_7002 == int3)) || (varbitplayer_7011 == int3))) {
            return;
        };
        switch (int2) {
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48: {
                int1 = 0;
                break;
            }
            default: {
                int1 = 1;
                break;
            }
        };
        if (((varbitplayer_6981 > 0) && (script4828(varbitplayer_6981) == 0))) {
            switch (varbitplayer_6981) {
                case 1: {
                    varbitplayer_6993 = int3;
                    varbitplayer_6987 = int1;
                    break;
                }
                case 2: {
                    varbitplayer_7002 = int3;
                    varbitplayer_6996 = int1;
                    break;
                }
                case 3: {
                    varbitplayer_7011 = int3;
                    varbitplayer_7005 = int1;
                    break;
                }
            };
            return;
        };
        if ((((varbitclan_6690 != int3) && (varbitclan_6699 != int3)) && (varbitclan_6708 != int3))) {
            if ((varbitplayer_6982 == 0)) {
                varbitplayer_6993 = int3;
                varbitplayer_6987 = int1;
                varbitplayer_6981 = 1;
                script4849();
            } else if ((varbitplayer_6983 == 0)) {
                varbitplayer_7002 = int3;
                varbitplayer_6996 = int1;
                varbitplayer_6981 = 2;
                script4849();
            } else if ((varbitplayer_6984 == 0)) {
                varbitplayer_7011 = int3;
                varbitplayer_7005 = int1;
                varbitplayer_6981 = 3;
                script4849();
            };
        };
    };
    return;
}