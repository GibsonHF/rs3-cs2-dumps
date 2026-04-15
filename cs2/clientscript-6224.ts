//
function script6224(int0: component): void {
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
            SPLINE_ADDPOINT(0, 0, script6216(pos(0,17,95,21,28)), 500, script6216(pos(0,17,95,17,31)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6216(pos(0,17,95,5,23)), 350, script6216(pos(0,17,95,9,24)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6216(pos(0,17,95,37,36)), 600, script6216(pos(0,17,95,29,39)), 600, 0);
            SPLINE_ADDPOINT(1, 1, script6216(pos(0,17,95,1,31)), 400, script6216(pos(0,17,95,57,33)), 400, 0);
            SPLINE_ADDPOINT(0, 2, script6216(pos(0,17,95,45,37)), 700, script6216(pos(0,17,95,37,40)), 700, 0);
            SPLINE_ADDPOINT(1, 2, script6216(pos(0,17,95,49,43)), 550, script6216(pos(0,17,95,37,44)), 550, 0);
            CAM_MOVEALONG(0, 0, 150, 200, 1, 0);
            IF_SETONCAMFINISHED(callback(script6223, 1, 1, int0, 150, 150), int0);
            break;
        }
        case 6: {
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6216(pos(0,17,95,17,28)), 500, script6216(pos(0,17,95,17,29)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6216(pos(0,17,95,5,23)), 350, script6216(pos(0,17,95,5,24)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6216(pos(0,17,95,13,33)), 500, script6216(pos(0,17,95,13,34)), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6216(pos(0,17,95,9,24)), 350, script6216(pos(0,17,95,9,25)), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6216(pos(0,17,95,21,39)), 500, script6216(pos(0,17,95,25,40)), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6216(pos(0,17,95,17,25)), 350, script6216(pos(0,17,95,21,25)), 350, 0);
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
            SPLINE_ADDPOINT(0, 0, script6222(pos(0,43,24,44,52)), 500, script6222(pos(0,43,24,48,52)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6222(pos(0,43,24,40,53)), 350, script6222(pos(0,43,24,40,54)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6222(pos(0,43,24,52,52)), 500, script6222(pos(0,43,24,56,52)), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6222(pos(0,43,24,48,55)), 350, script6222(pos(0,43,24,52,54)), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6222(pos(0,43,24,56,54)), 500, script6222(pos(0,43,24,60,54)), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6222(pos(0,43,24,4,55)), 350, script6222(pos(0,43,24,8,54)), 350, 0);
            SPLINE_ADDPOINT(0, 3, script6222(pos(0,43,24,8,52)), 500, script6222(pos(0,43,24,8,53)), 500, 0);
            SPLINE_ADDPOINT(1, 3, script6222(pos(0,43,24,20,54)), 350, script6222(pos(0,43,24,24,57)), 350, 0);
            SPLINE_ADDPOINT(0, 4, script6222(pos(0,43,24,12,53)), 500, script6222(pos(0,43,24,16,52)), 500, 0);
            SPLINE_ADDPOINT(1, 4, script6222(pos(0,43,24,20,51)), 350, script6222(pos(0,43,24,24,50)), 350, 0);
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
            SPLINE_ADDPOINT(0, 0, script6219(pos(0,22,95,25,43)), 500, script6219(pos(0,22,95,21,41)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6219(pos(0,22,95,33,25)), 350, script6219(pos(0,22,95,37,28)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6219(pos(0,22,95,21,36)), 500, script6219(pos(0,22,95,21,33)), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6219(pos(0,22,95,45,32)), 350, script6219(pos(0,22,95,49,34)), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6219(pos(0,22,95,5,28)), 750, script6219(pos(0,22,95,57,27)), 750, 0);
            SPLINE_ADDPOINT(1, 2, script6219(pos(0,22,95,57,37)), 450, script6219(pos(0,22,95,61,40)), 450, 0);
            SPLINE_ADDPOINT(0, 3, script6219(pos(0,22,95,41,31)), 750, script6219(pos(0,22,95,37,34)), 750, 0);
            SPLINE_ADDPOINT(1, 3, script6219(pos(0,22,95,61,42)), 450, script6219(pos(0,22,95,61,44)), 450, 0);
            SPLINE_ADDPOINT(0, 4, script6219(pos(0,22,95,57,38)), 1000, script6219(pos(0,22,95,57,39)), 1000, 0);
            SPLINE_ADDPOINT(1, 4, script6219(pos(0,22,95,61,47)), 500, script6219(pos(0,22,95,61,49)), 500, 0);
            CAM_MOVEALONG(0, 0, 400, 400, 1, 0);
            IF_SETONCAMFINISHED(callback(script6223, 1, 3, int0, 350, 350), int0);
            break;
        }
        case 30: {
            script4140(75, int0);
            SPLINE_NEW(0, 4);
            SPLINE_NEW(1, 4);
            SPLINE_ADDPOINT(0, 0, script6220(pos(0,20,97,49,36)), 500, script6220(pos(0,20,97,57,35)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6220(pos(0,20,97,41,32)), 350, script6220(pos(0,20,97,33,32)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6220(pos(0,20,97,1,35)), 700, script6220(pos(0,20,97,9,35)), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6220(pos(0,20,97,17,32)), 400, script6220(pos(0,20,97,9,32)), 400, 0);
            SPLINE_ADDPOINT(0, 2, script6220(pos(0,20,97,17,33)), 900, script6220(pos(0,20,97,21,32)), 900, 0);
            SPLINE_ADDPOINT(1, 2, script6220(pos(0,20,97,61,32)), 500, script6220(pos(0,20,97,53,32)), 500, 0);
            SPLINE_ADDPOINT(0, 3, script6220(pos(0,20,97,17,30)), 1200, script6220(pos(0,20,97,5,29)), 1200, 0);
            SPLINE_ADDPOINT(1, 3, script6220(pos(0,20,97,45,32)), 700, script6220(pos(0,20,97,37,32)), 700, 0);
            CAM_MOVEALONG(0, 0, 300, 300, 1, 0);
            IF_SETONCAMFINISHED(callback(script6223, 1, 1, int0, 300, 250), int0);
            break;
        }
        case 35: {
            SPLINE_NEW(0, 2);
            SPLINE_NEW(1, 2);
            SPLINE_ADDPOINT(0, 0, script6220(pos(0,20,97,1,34)), 500, script6220(pos(0,20,97,57,34)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6220(pos(0,20,97,41,32)), 350, script6220(pos(0,20,97,37,32)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6220(pos(0,20,97,9,37)), 700, script6220(pos(0,20,97,5,38)), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6220(pos(0,20,97,49,31)), 350, script6220(pos(0,20,97,45,31)), 350, 0);
            CAM_MOVEALONG(0, 0, 300, 0, 1, 0);
            break;
        }
        case 40: {
            script4140(75, int0);
            SPLINE_NEW(0, 3);
            SPLINE_NEW(1, 3);
            SPLINE_ADDPOINT(0, 0, script6217(pos(0,16,95,1,35)), 500, script6217(pos(0,16,95,9,36)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6217(pos(0,16,95,45,40)), 350, script6217(pos(0,16,95,29,35)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6217(pos(0,16,95,17,33)), 500, script6217(pos(0,16,95,17,32)), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6217(pos(0,16,95,1,28)), 350, script6217(pos(0,16,95,17,28)), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6217(pos(0,16,95,21,30)), 500, script6217(pos(0,16,95,25,29)), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6217(pos(0,16,95,37,23)), 350, script6217(pos(0,16,95,49,23)), 350, 0);
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
            SPLINE_ADDPOINT(0, 0, script6218(pos(0,18,95,1,29)), 500, script6218(pos(0,18,95,5,29)), 500, 0);
            SPLINE_ADDPOINT(1, 0, script6218(pos(0,18,95,45,29)), 350, script6218(pos(0,18,95,49,28)), 350, 0);
            SPLINE_ADDPOINT(0, 1, script6218(pos(0,18,95,9,30)), 500, script6218(pos(0,18,95,13,30)), 500, 0);
            SPLINE_ADDPOINT(1, 1, script6218(pos(0,18,95,49,28)), 350, script6218(pos(0,18,95,53,27)), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6218(pos(0,18,95,21,32)), 500, script6218(pos(0,18,95,25,32)), 500, 0);
            SPLINE_ADDPOINT(1, 2, script6218(pos(0,18,95,1,25)), 350, script6218(pos(0,18,95,5,25)), 350, 0);
            SPLINE_ADDPOINT(0, 3, script6218(pos(0,18,95,1,37)), 500, script6218(pos(0,18,95,5,36)), 500, 0);
            SPLINE_ADDPOINT(1, 3, script6218(pos(0,18,95,33,29)), 350, script6218(pos(0,18,95,33,31)), 350, 0);
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
            SPLINE_ADDPOINT(0, 0, script6221(pos(0,21,103,33,37)), 600, script6221(pos(0,21,103,25,39)), 600, 0);
            SPLINE_ADDPOINT(1, 0, script6221(pos(0,21,103,1,32)), 400, script6221(pos(0,21,103,1,32)), 400, 0);
            SPLINE_ADDPOINT(0, 1, script6221(pos(0,21,103,33,31)), 700, script6221(pos(0,21,103,33,39)), 700, 0);
            SPLINE_ADDPOINT(1, 1, script6221(pos(0,21,103,1,31)), 350, script6221(pos(0,21,103,1,31)), 350, 0);
            SPLINE_ADDPOINT(0, 2, script6221(pos(0,21,103,17,40)), 600, script6221(pos(0,21,103,17,40)), 600, 0);
            SPLINE_ADDPOINT(1, 2, script6221(pos(0,21,103,53,31)), 350, script6221(pos(0,21,103,37,32)), 350, 0);
            SPLINE_ADDPOINT(0, 3, script6221(pos(0,21,103,13,39)), 600, script6221(pos(0,21,103,13,39)), 600, 0);
            SPLINE_ADDPOINT(1, 3, script6221(pos(0,21,103,49,30)), 350, script6221(pos(0,21,103,49,30)), 350, 0);
            SPLINE_ADDPOINT(0, 4, script6221(pos(0,21,103,29,32)), 700, script6221(pos(0,21,103,29,32)), 700, 0);
            SPLINE_ADDPOINT(1, 4, script6221(pos(0,21,103,1,31)), 450, script6221(pos(0,21,103,1,31)), 450, 0);
            SPLINE_ADDPOINT(0, 5, script6221(pos(0,21,103,33,31)), 750, script6221(pos(0,21,103,33,31)), 750, 0);
            SPLINE_ADDPOINT(1, 5, script6221(pos(0,21,103,9,31)), 500, script6221(pos(0,21,103,9,31)), 500, 0);
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