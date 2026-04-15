//
function script4634(int0: int): void {
    if ((script4597() == 1)) {
        return;
    };
    varclient_3708 = 1;
    if ((CREATE_CONNECT_REPLY() == 2)) {
        LOBBY_LEAVELOBBY();
    };
    var int1 = -1;
    varclient_4194 = int0;
    varclient_6962 = int0;
    var int2 = 8;
    var int3 = 0;
    var string0 = "";
    if ((script6431() == true)) {
        int2 = 16;
    };
    switch (int0) {
        case 1: {
            int1 = 0;
            string0 = "facebook";
            script380(3995 as dbrow);
            break;
        }
        case 4: {
            int1 = 6;
            string0 = "AXESO5";
            break;
        }
        case 3: {
            int1 = 5;
            string0 = "gamerica";
            break;
        }
        case 5: {
            int1 = 4;
            string0 = "google";
            if ((PLATFORMTYPE() == 2)) {
                int3 = 1;
            };
            script380(3994 as dbrow);
            break;
        }
        case 6: {
            int1 = 8;
            if ((PLATFORMTYPE() == 3)) {
                int3 = 1;
            };
            string0 = "apple";
            break;
        }
        case 7: {
            int1 = 9;
            string0 = "jagex";
            int2 = 16;
            break;
        }
        default: {
            return;
        }
    };
    varclient_1100 = -1;
    varclient_200 = 0;
    varclient_201 = 0;
    IF_SETONCLICK(callback(), comp(744, 134));
    if (((int3 == 1) && (script13749() == true))) {
        switch (varclient_6908) {
            case -1:
            case 0: {
                script15662("Checking SSO details...", int2, 1);
                varclient_6908 = 0;
                break;
            }
            case 1: {
                script15662("Creating account...", int2, 1);
                break;
            }
            case 2: {
                script15662("Sending link request...", int2, 1);
                break;
            }
            default: {
                script15662("Signing in...", int2, 1);
                break;
            }
        };
        varclient_1100 = -3;
    } else {
        script15662("Signing in...", int2, 1);
        varclient_1100 = -3;
        varclient_6908 = -1;
    };
    LOBBY_ENTERLOBBY_SOCIAL_NETWORK(int1, varclient_4192, varclient_4193, varclient_6908);
    varclient_4192 = "";
    IF_SETONTIMER(callback(script2946, int0), 48758952);
    return;
}