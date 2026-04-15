//
function script7722(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 2608;
    var int3 = 0;
    script2954(0);
    if ((IF_SET2DANGLE() == 1)) {
        script15660();
    };
    script15652();
    if ((STRING_LENGTH(varclient_6896) > 0)) {
        script380(3992 as dbrow);
        int1 = LOGIN_ACCOUNTAPPEAL(varclient_6896);
        switch (int1) {
            case 2: {
                script2950(-1000, 0, "Account Recovery has opened in your default web browser.", 2612, "Back");
                break;
            }
            case 3: {
                script2950(-1000, 1, "Error connecting to server.", int2, "Back");
                break;
            }
            case 4: {
                script2950(-1000, 1, "The part of the website you are trying to connect to is offline at the moment. Please try again later.", int2, "Back");
                break;
            }
            case 5: {
                script2950(-1000, 1, "Sorry, there was an error trying to log you in to this part of the website. Please try again later.", int2, "Back");
                break;
            }
            case 6: {
                script2950(-1000, 1, "Error connecting to server.", int2, "Back");
                break;
            }
            case 7: {
                script2950(-1000, 1, "You must enter a valid login to proceed. For accounts created after 24th November 2010, please use your email address to login. Otherwise please login with your username, even if you have registered your email.", int2, "Back");
                break;
            }
        };
    } else {
        if ((int0 == 0)) {
            script10943("Please enter your Email / Username before trying to recover your password", comp(744, 322));
        } else if ((varclient_6406 == 0)) {
            int3 = STRING_LENGTH(varclient_2576);
            if ((int3 > 0)) {
                varclient_6896 = varclient_2576;
            };
            varclient_1099 = int3;
        };
        script3239(15, 1);
        script15698(113);
    };
    return;
}