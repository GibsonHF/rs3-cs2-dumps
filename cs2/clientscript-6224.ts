//
function script6224(int0: number): void {
    switch (varclient_1007) {
        case 0: {
            script4138(0, 1, int0);
            break;
        }
        case 1: {
            script4138(0, 25, int0);
            break;
        }
        case 2: {
            script4140(25, int0);
            break;
        }
        case 3: {
            script4138(0, 100, int0);
            break;
        }
        case 4: {
            script4140(100, int0);
            break;
        }
        case 5: {
            script4140(75, int0);
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6216(18438108), 500, script6216(18421727), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6216(18372567), 350, script6216(18388952), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6216(18503652), 600, script6216(18470887), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6216(18356191), 400, script6216(18323425), 400, 0);
            SPLINE_ADDPOINT(0, 2, script6216(18274277), 700, script6216(18241512), 700, 0);
            SPLINE_ADDPOINT(1, 2, script6216(18290667), 550, script6216(18241516), 550, 0);
            CAM_MOVEALONG(0, 0, 150, 200, 1, 0);
            IF_SETONCAMFINISHED(callback(script6223, 1, 1, int0, 150, 150), int0);
            break;
        }
        case 6: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6216(18421724), 500, script6216(18421725), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6216(18372567), 350, script6216(18372568), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6216(18405345), 500, script6216(18405346), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6216(18388952), 350, script6216(18388953), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6216(18438119), 500, script6216(18454504), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6216(18421721), 350, script6216(18438105), 350, 0);
            CAM_MOVEALONG(0, 0, 250, 0, 1, 0);
            break;
        }
        case 7: {
            CAM_MOVEALONG(0, 1, 250, 0, 1, 1);
            break;
        }
        case 10: {
            script4140(75, int0);
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, script6222(45532724), 500, script6222(45549108), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6222(45516341), 350, script6222(45516342), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6222(45565492), 500, script6222(45581876), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6222(45549111), 350, script6222(45565494), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6222(45581878), 500, script6222(45598262), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6222(45631031), 350, script6222(45647414), 350, 0);
            SPLINE_ADDPOINT(0, 3, script6222(45647412), 500, script6222(45647413), 500, 0);
            SPLINE_ADDPOINT(1, 3, script6222(45696566), 350, script6222(45712953), 350, 0);
            SPLINE_ADDPOINT(0, 4, script6222(45663797), 500, script6222(45680180), 500, 0);
            SPLINE_ADDPOINT(1, 4, script6222(45696563), 350, script6222(45712946), 350, 0);
            CAM_MOVEALONG(0, 0, 200, 0, 1, 0);
            break;
        }
        case 11: {
            CAM_MOVEALONG(0, 1, 200, 0, 1, 1);
            break;
        }
        case 12: {
            CAM_MOVEALONG(0, 2, 200, 0, 1, 2);
            break;
        }
        case 13: {
            CAM_MOVEALONG(0, 3, 200, 0, 1, 3);
            break;
        }
        case 20: {
            script4140(75, int0);
            SPLINE_NEW(0, 5);
            SPLINE_NEW(1, 5);
            SPLINE_ADDPOINT(0, 0, script6219(23697387), 500, script6219(23681001), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6219(23467993), 350, script6219(23484380), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6219(23680996), 500, script6219(23680993), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6219(23517152), 350, script6219(23533538), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6219(23615452), 750, script6219(23566299), 750, 0);
            SPLINE_ADDPOINT(1, 2, script6219(23566309), 450, script6219(23582696), 450, 0);
            SPLINE_ADDPOINT(0, 3, script6219(23500767), 750, script6219(23484386), 750, 0);
            SPLINE_ADDPOINT(1, 3, script6219(23582698), 450, script6219(23582700), 450, 0);
            SPLINE_ADDPOINT(0, 4, script6219(23566310), 1000, script6219(23566311), 1000, 0);
            SPLINE_ADDPOINT(1, 4, script6219(23582703), 500, script6219(23582705), 500, 0);
            CAM_MOVEALONG(0, 0, 400, 400, 1, 0);
            IF_SETONCAMFINISHED(callback(script6223, 1, 3, int0, 350, 350), int0);
            break;
        }
        case 30: {
            script4140(75, int0);
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script6220(21436516), 500, script6220(21469283), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6220(21665888), 350, script6220(21633120), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6220(21502051), 700, script6220(21534819), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6220(21567584), 400, script6220(21534816), 400, 0);
            SPLINE_ADDPOINT(0, 2, script6220(21567585), 900, script6220(21583968), 900, 0);
            SPLINE_ADDPOINT(1, 2, script6220(21485664), 500, script6220(21452896), 500, 0);
            SPLINE_ADDPOINT(0, 3, script6220(21567582), 1200, script6220(21518429), 1200, 0);
            SPLINE_ADDPOINT(1, 3, script6220(21420128), 700, script6220(21387360), 700, 0);
            CAM_MOVEALONG(0, 0, 300, 300, 1, 0);
            IF_SETONCAMFINISHED(callback(script6223, 1, 1, int0, 300, 250), int0);
            break;
        }
        case 35: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6220(21502050), 500, script6220(21469282), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6220(21665888), 350, script6220(21649504), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6220(21272677), 700, script6220(21256294), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6220(21436511), 350, script6220(21420127), 350, 0);
            CAM_MOVEALONG(0, 0, 300, 0, 1, 0);
            break;
        }
        case 40: {
            script4140(75, int0);
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6217(17307619), 500, script6217(17340388), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6217(17225704), 350, script6217(17160163), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6217(17373153), 500, script6217(17373152), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6217(17307612), 350, script6217(17373148), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6217(17389534), 500, script6217(17405917), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6217(17455063), 350, script6217(17504215), 350, 0);
            CAM_MOVEALONG(0, 0, 150, 100, 1, 0);
            break;
        }
        case 41: {
            CAM_MOVEALONG(0, 1, 150, 200, 1, 1);
            break;
        }
        case 50: {
            script4140(75, int0);
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script6218(19404765), 500, script6218(19421149), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6218(19322845), 350, script6218(19339228), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6218(19437534), 500, script6218(19453918), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6218(19339228), 350, script6218(19355611), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6218(19486688), 500, script6218(19503072), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6218(19404761), 350, script6218(19421145), 350, 0);
            SPLINE_ADDPOINT(0, 3, script6218(19404773), 500, script6218(19421156), 500, 0);
            SPLINE_ADDPOINT(1, 3, script6218(19535837), 350, script6218(19535839), 350, 0);
            CAM_MOVEALONG(0, 0, 250, 0, 1, 0);
            break;
        }
        case 51: {
            CAM_MOVEALONG(0, 1, 200, 200, 1, 1);
            break;
        }
        case 52: {
            CAM_MOVEALONG(0, 2, 200, 200, 1, 2);
            break;
        }
        case 60: {
            script4140(75, int0);
            SPLINE_NEW(0, 7);
            SPLINE_NEW(1, 7);
            SPLINE_ADDPOINT(0, 0, script6221(22419941), 600, script6221(22649319), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6221(22551008), 400, script6221(22551008), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6221(22419935), 700, script6221(22419943), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6221(22551007), 350, script6221(22551007), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6221(22616552), 600, script6221(22616552), 600, 0);
            SPLINE_ADDPOINT(1, 2, script6221(22501855), 350, script6221(22436320), 350, 0);
            SPLINE_ADDPOINT(0, 3, script6221(22600167), 600, script6221(22600167), 600, 0);
            SPLINE_ADDPOINT(1, 3, script6221(22485470), 350, script6221(22485470), 350, 0);
            SPLINE_ADDPOINT(0, 4, script6221(22403552), 700, script6221(22403552), 700, 0);
            SPLINE_ADDPOINT(1, 4, script6221(22551007), 450, script6221(22551007), 450, 0);
            SPLINE_ADDPOINT(0, 5, script6221(22419935), 750, script6221(22419935), 750, 0);
            SPLINE_ADDPOINT(1, 5, script6221(22583775), 500, script6221(22583775), 500, 0);
            CAM_MOVEALONG(0, 0, 150, 150, 1, 0);
            break;
        }
        case 61: {
            CAM_MOVEALONG(0, 2, 200, 0, 1, 2);
            break;
        }
        case 63: {
            CAM_MOVEALONG(0, 4, 200, 0, 1, 4);
            break;
        }
    };
    return;
}