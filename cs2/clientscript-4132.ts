//
function script4132(int0: component, int1: coordgrid): void {
    switch (varclient_1452) {
        case 201: {
            CC_DELETEALL(int0);
            CC_CREATE(int0, 3, 0);
            CC_SETFILL(1);
            CC_SETCOLOUR(8323072);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETTRANS(255);
            script665(0, 50, int0, 1);
            break;
        }
        case 202: {
            script667(50, int0, 1);
            break;
        }
        case 203: {
            if ((CC_FIND(int0, 0) == 1)) {
                CC_SETONTIMER(callback(script4133, int0, 0, 3, -3, 150, 255, 50, 0, 3581));
            };
            break;
        }
        case 204: {
            CC_DELETEALL(int0);
            script4138(0, 50, int0);
            break;
        }
        case 205: {
            script4140(50, int0);
            break;
        }
        case 206: {
            CC_DELETEALL(int0);
            break;
        }
    };
    return;
}