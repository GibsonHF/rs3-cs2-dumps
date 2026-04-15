//
function script15614(int0: component): void {
    var string0 = "";
    if ((IF_GETHIDE(comp(906, 151)) == true)) {
        switch (varclient_6885) {
            case 0: {
                if ((script13749() == true)) {
                    switch (TOGGLEBIT()) {
                        case 0: {
                            varclient_6885 = (varclient_6885 + 1);
                            break;
                        }
                        case 1: {
                            script3093(10005, 4040 as dbrow, "Pending Transaction", "Pending transactions found!<br><br>Do you wish to apply them now?", 2608, "Yes", "No");
                            break;
                        }
                        case 2: {
                            script3093(10006, 4043 as dbrow, "Pending Transaction", "Attempting to apply transactions", 18963, "", "Cancel");
                            break;
                        }
                        case 3: {
                            script3093(10007, 4037 as dbrow, "Pending Transaction", "Pending transaction failed to apply.<br><br>Do you wish to try again?", 2610, "Yes", "No");
                            break;
                        }
                        case 4: {
                            script3093(10007, 4041 as dbrow, "Pending Transaction", "Transactions applied!", 2607, "", "OK");
                            break;
                        }
                    };
                } else {
                    varclient_6885 = (varclient_6885 + 1);
                };
                break;
            }
            case 1: {
                string0 = script2781();
                if ((STRING_LENGTH(string0) > 0)) {
                    if ((script13749() == false)) {
                        script3093(-3000, 4037 as dbrow, "Credit Card Expiry", string0, 2608, "Re-Subscribe Now", "Close");
                    } else {
                        script3093(-3000, 4037 as dbrow, "Credit Card Expiry", string0, 2608, "", "Close");
                    };
                };
                varclient_6885 = (varclient_6885 + 1);
                break;
            }
            default: {
                IF_SETONTIMER(callback(), int0);
                break;
            }
        };
    };
    return;
}