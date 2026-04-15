//
function script3462(int0: component, int1: component, int2: component, int3: unknown_int): void {
    switch (varclient_1007) {
        case 21: {
            IF_SETHIDE(true, int1);
            CC_DELETEALL(int0);
            script2766(0, 75, int0);
            break;
        }
        case 22: {
            IF_SETHIDE(false, int1);
            CC_DELETEALL(int1);
            CC_DELETEALL(int2);
            CC_CREATE(int2, 6, 0);
            CC_SETSIZE(0, 85, 1, 0);
            CC_SETPOSITION(0, 0, 1, 0);
            CC_SETPLAYERMODEL_SELF();
            CC_SETMODELANGLE(0, 30, 0, 0, 0, 850);
            CC_SETMODELANIM(14230 as seq);
            CC_SETONTIMER(callback(script3464, -2147483645, -2147483643));
            IF_SETSIZE(IF_GETWIDTH(int2), ((PARAHEIGHT(IF_GETTEXT(int3), IF_GETWIDTH(int3), 26) * 12) + 75), 0, 0, int2);
            CAM_MOVETO(MOVECOORD(COORD(), 0, 0, -3), 1500, 1000, 100);
            CAM_LOOKAT(COORD(), 0, 1000, 100);
            script2768(75, int0);
            IF_SETONTIMER(callback(script3463, -2147483645, COORD()), int0);
            break;
        }
        case 23: {
            IF_SETONTIMER(callback(), int0);
            script2766(0, 25, int0);
            break;
        }
        case 24: {
            CAM_SMOOTHRESET();
            CC_DELETEALL(int1);
            CC_DELETEALL(int2);
            IF_SETHIDE(true, int1);
            script2768(25, int0);
            break;
        }
        default: {
            IF_SETHIDE(true, int1);
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}