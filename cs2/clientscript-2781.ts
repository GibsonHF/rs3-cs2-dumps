//
function script2781(): string {
    var string0 = "";
    var int0 = DATE_RUNEDAY();
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = USERDETAIL_LOBBY_MEMBERSHIP();
    int1 = ((int1 / 1440) - 11745);
    USERDETAIL_LOBBY_CCEXPIRY();
    var int4 = stack();
    var int5 = USERDETAIL_LOBBY_GRACEEXPIRY();
    var int6 = (int5 - int0);
    if (((int5 <= int4) || (int6 < 0))) {
        int6 = 0;
    };
    if (((((int4 != 0) && ((int1 + int0) >= int4)) && (varclient_1315 != int0)) && (int1 <= 14))) {
        if ((int1 <= 7)) {
            if ((int1 <= 3)) {
                if ((int1 <= 1)) {
                    if ((int1 == 0)) {
                        if (((int6 > 0) && (int6 <= 14))) {
                            if ((int6 <= 7)) {
                                if ((int6 <= 3)) {
                                    if ((int6 == 1)) {
                                        string0 = "Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership.<br><br>If you renew today, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.";
                                        varclient_1316 = int0;
                                    } else if (((varclient_1316 + 2) < int0)) {
                                        string0 = `Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.`;
                                        varclient_1316 = int0;
                                    };
                                } else if (((varclient_1316 + 4) < int0)) {
                                    string0 = `Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.`;
                                    if ((int6 == 7)) {
                                        varclient_1316 = int0;
                                    } else {
                                        varclient_1316 = (int0 - (7 - int6));
                                    };
                                };
                            } else if (((varclient_1316 + 7) < int0)) {
                                string0 = `Your credit card has expired and your membership credit has run out. Please re-subscribe using a new credit card to restart your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will pay the lower 'loyalty' rate. After this, your discount will no longer be available.`;
                                if ((int6 == 14)) {
                                    varclient_1316 = int0;
                                } else {
                                    varclient_1316 = (int0 - (14 - int6));
                                };
                            };
                        };
                    } else {
                        if ((int6 > 0)) {
                            string0 = `Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.`;
                        } else {
                            string0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
                        };
                        varclient_1315 = int0;
                    };
                } else if (((varclient_1315 + 2) < int0)) {
                    if ((int6 > 0)) {
                        string0 = `Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.`;
                    } else {
                        string0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
                    };
                    if ((int1 == 3)) {
                        varclient_1315 = int0;
                    } else {
                        varclient_1315 = (int0 - (3 - int1));
                    };
                };
            } else if (((varclient_1315 + 4) < int0)) {
                if ((int6 > 0)) {
                    string0 = `Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.`;
                } else {
                    string0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
                };
                if ((int1 == 7)) {
                    varclient_1315 = int0;
                } else {
                    varclient_1315 = (int0 - (7 - int1));
                };
            };
        } else if (((varclient_1315 + 7) < int0)) {
            if ((int6 > 0)) {
                string0 = `Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.<br><br>If you renew within the next ${inttostring(int6, 10)} days, you will continue paying your lower 'loyalty' rate. After this, your discount will no longer be available.`;
            } else {
                string0 = "Your credit card has expired. Please re-subscribe using a new credit card to continue your membership.";
            };
            if ((int1 == 14)) {
                varclient_1315 = int0;
            } else {
                varclient_1315 = (int0 - (14 - int1));
            };
        };
    };
    return string0;
}