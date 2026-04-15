//
function script16563(int0: dbrow): void {
    var int1 = DB_GETFIELDCOUNT(int0, 114752);
    var int2 = 0;
    var int3 = false;
    var string0 = "";
    while ((int2 < int1)) {
        stack(dbrow_getfield(int0, 114752, int2));
        [int3, string0] = stack();
        if (((int3 == true) || (varbitplayer_38842 == 0))) {
            switch (int0) {
                case 1013: {
                    CC_SETONOP(callback(script5154, -2147483644, 1));
                    break;
                }
                case 1200: {
                    switch ((int2 + 1)) {
                        case 2: {
                            if ((varbitplayer_40074 == 0)) {
                                string0 = "";
                            };
                            break;
                        }
                        case 3: {
                            if ((varbitplayer_28229 == 0)) {
                                string0 = "";
                            };
                            break;
                        }
                        case 4: {
                            if ((varbitplayer_28227 == 0)) {
                                string0 = "";
                            };
                            break;
                        }
                        case 5: {
                            if ((varbitplayer_28228 == 0)) {
                                string0 = "";
                            };
                            break;
                        }
                        case 6: {
                            if ((varbitplayer_28226 == 0)) {
                                string0 = "";
                            };
                            break;
                        }
                        case 7: {
                            if ((varbitplayer_38660 == 0)) {
                                string0 = "";
                            };
                            break;
                        }
                    };
                    break;
                }
            };
            CC_SETOP((int2 + 1), string0);
        };
        int2 = (int2 + 1);
    };
    return;
}