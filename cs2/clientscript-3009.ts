//
function script3009(int0: coordgrid): void {
    var int1 = int0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 25;
    var int11 = 25;
    var int12 = 25;
    var int13 = 25;
    var int14 = 25;
    var int15 = -1;
    if ((HAS_NXT() == 1)) {
        if ((CAM2_GETCONTROLMODE() == 1)) {
            CAM2_SETDEPTHPLANES(50, 20000);
        };
        int10 = MAX(25, (CLIENTOPTION_GET(8) * 25));
        int11 = int10;
        int12 = int10;
        int13 = int10;
        int14 = int10;
    };
    var string0 = "";
    switch (varclient_4718) {
        case 0:
        case 2: {
            string0 = "<col=FFFFFF>Esc</col>: Exit<br><br><col=ffffff>F2</col>: Toggle Chat Window<br><col=ffffff>Spc</col>: Toggle Help Window<br><br><col=ffffff>W,A,S,D</col>: Move Camera Forwards/Backwards/Strafe Left/Strafe Right<br><br><col=ffffff>R,F</col>: Move Camera Up/Down<br><br><col=ffffff>Middle Click and DRAG</col> with the mouse to rotate the camera.";
            if ((HAS_NXT() == 1)) {
                string0 = strconcat(string0, "<br><br>You can also use an Xbox compatible controller.");
            };
            IF_SETTEXT(string0, comp(475, 14));
            IF_SETHIDE(false, comp(475, 2));
            CAM2_SETPOSITIONMODE(0);
            CAM2_SETLOOKATMODE(3);
            CAM2_SETPOSITIONPOINTCOLLISION(1);
            switch (unk11110()) {
                case 0: {
                    int9 = -2;
                    break;
                }
                case 2048: {
                    int9 = -2;
                    int8 = -2;
                    break;
                }
                case 4096: {
                    int8 = -2;
                    break;
                }
                case 6144: {
                    int9 = 2;
                    int8 = -2;
                    break;
                }
                case 8192: {
                    int9 = 2;
                    break;
                }
                case 10240: {
                    int9 = 2;
                    int8 = 2;
                    break;
                }
                case 12288: {
                    int8 = 2;
                    break;
                }
                case 14336: {
                    int9 = -2;
                    int8 = 2;
                    break;
                }
            };
            int1 = MOVECOORD(COORD(), int8, 0, int9);
            COORDX_FINE(COORD_GRIDTOFINE(int0, 1));
            int2 = stack();
            stack(COORD_GRIDTOFINE(int0, 1));
            int4 = COORDZ_FINE();
            COORDX_FINE(COORD_GRIDTOFINE(int1, 1));
            int5 = stack();
            stack(COORD_GRIDTOFINE(int1, 1));
            int7 = COORDZ_FINE();
            int8 = (int2 - int5);
            int9 = (int4 - int7);
            if ((varclient_4718 == 2)) {
                int8 = ((int8 / 4) * -1);
                int9 = ((int9 / 4) * -1);
                unk11109(COORD_GRIDTOFINE(int0, 1), COORD_GRIDTOFINE(int0, 1));
                MOVECOORD_FINE(stack(), int8, -100000, int9);
                CAM2_SETPOSITIONPOINT_POINT(stack());
                IF_SETONTIMER(callback(script3010, 0, -2147483645), 31129606);
                stack(COORD_GRIDTOFINE(int1, 1));
                stack(int10);
                stack(int11);
                stack(int13);
                stack(int12);
                stack(int14);
                stack(int15);
                unk11108();
            } else {
                CAM2_SETPOSITIONPOINT_POINT(COORD_GRIDTOFINE(int1, 1));
                stack(COORD_GRIDTOFINE(int0, 1));
                stack(int10);
                stack(int11);
                stack(int13);
                stack(int12);
                stack(int14);
                stack(int15);
                unk11108();
            };
            unk11107(int8, 0, int9);
            break;
        }
        case 1: {
            IF_SETTEXT("<col=FFFFFF>Esc</col>: Exit<br><br><col=ffffff>F2</col>: Toggle Chat Window<br><col=ffffff>Spc</col>: Toggle Help Window<br><br><col=ffffff>Middle Click and DRAG</col> with the mouse to rotate the camera.", comp(475, 14));
            IF_SETHIDE(true, comp(475, 2));
            varclient_4719 = (1200 + ((1860 - 1200) / 2));
            CAM2_SETPOSITIONENTITY_PLAYER(0, 0, varclient_4719, 0, 0, 0, 0, 100);
            CAM2_SETLOOKATENTITY_PLAYER(0, 600, 0, 0);
            CAM2_SETCOLLISIONMODE(0, 0);
            break;
        }
    };
    return;
}