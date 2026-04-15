//
function script10210(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: unknown_int): void {
    var string0 = "Joining World";
    if (((int7 == -3) && (int8 == 1))) {
        script3064(false);
        if ((MAP_WORLD() != -1)) {
            string0 = `Joining World ${inttostring(MAP_WORLD(), 10)}`;
        };
        script3093(int7, 4035 as dbrow, string0, "Please Wait", 18963, "", "");
        varclient_1100 = -3;
        return;
    };
    if (((varclient_1100 == -3) && (int8 == 1))) {
        script3097();
    };
    var int9 = 0;
    var string1 = "";
    var int10 = 0;
    var string2 = "";
    var int11 = 0;
    var string3 = "";
    var int12 = 0;
    var int13 = 0;
    var string4 = "";
    if ((int7 == 21)) {
        if ((int8 == 1)) {
            IF_SETONTIMER(callback(script10209, int0, int1, int2, int3, int4, int5, int6), int0);
        };
        script5874();
        varclient_1100 = 21;
        script3064(false);
        if (((varclient_200 == 0) && (varclient_1745 == false))) {
            varclient_200 = LOGIN_HOPTIME();
            if (((PLAYERMEMBER() == false) && (VIDEO_ADVERT_PLAY(6) == 1))) {
                varclient_1745 = true;
            };
        };
        if ((varclient_200 > 0)) {
            varclient_200 = (varclient_200 - 1);
            if ((((varclient_1745 == true) && (varclient_200 == 0)) && (VIDEO_ADVERT_HAS_FINISHED() == 0))) {
                unk11163();
            };
        };
        if (((varclient_200 <= 0) && ((varclient_1745 == false) || (VIDEO_ADVERT_HAS_FINISHED() == 1)))) {
            if ((WORLDLIST_FETCH() == 0)) {
                varclient_200 = 1;
                return;
            };
            if ((int1 > 0)) {
                stack(WORLDLIST_SPECIFIC(int1));
                [int10, string2, int11, string3, int12, int13, string4] = stack();
                if ((unk11027(int1, string4) == 1)) {
                    int10 = 0;
                };
            };
            IF_SETONTIMER(callback(), int0);
            if ((varclient_1745 == 1)) {
                VIDEO_ADVERT_FORCE_REMOVE();
                varclient_1745 = false;
            };
            if (((varclient_1745 == false) || (VIDEO_ADVERT_HAS_FINISHED() == 1))) {
                DETAIL_SOUNDVOL(int2);
                stack(int4);
                DETAIL_BGSOUNDVOL();
                stack(int5);
                DETAIL_SPEECHVOL();
                stack(int6);
                DETAIL_LOGINVOL();
            };
            script3062(int0);
            return;
        };
        int9 = (varclient_200 / 50);
        if ((int9 == 1)) {
            string1 = "You have only just left another world. Your profile will be transferred in<br>1 second.";
        } else {
            string1 = `You have only just left another world. Your profile will be transferred in<br>${inttostring(int9, 10)} seconds.`;
        };
        if ((IF_GETHIDE(comp(906, 151)) == true)) {
            script3093(int7, 4042 as dbrow, "World Change", string1, 2611, "Abort Login", "");
        } else {
            script1871(string1);
        };
        return;
    };
    if ((int7 == 42)) {
        IF_SETHIDE(false, comp(906, 84));
        IF_SETTEXT(inttostring(int1, 10), comp(906, 87));
        IF_SETTEXT(inttostring(unk11162(), 10), comp(906, 89));
        if ((((varclient_1100 != 42) && (varclient_1100 != 43)) && (varclient_1100 != -1))) {
            script3093(int7, 4039 as dbrow, "World Full", `World ${inttostring(int1, 10)} is currently full.<br><br>You have been added to the queue for this world.`, 2611, "", "OK");
        };
        varclient_1100 = 42;
        return;
    };
    if ((int7 == 43)) {
        IF_SETTEXT(inttostring(int1, 10), comp(906, 87));
        IF_SETTEXT(inttostring(unk11162(), 10), comp(906, 89));
        varclient_1100 = 43;
        return;
    };
    IF_SETHIDE(true, comp(906, 84));
    if (((int0 == comp(906, 0)) || (int0 == comp(906, 20)))) {
        script1299();
    };
    script3097();
    script3064(true);
    IF_SETONTIMER(callback(), int0);
    string0 = "";
    var int14 = 2608;
    var string5 = "";
    var string6 = "Back";
    var int15 = LOGIN_DISALLOWRESULT();
    var int16 = LOGIN_DISALLOWTRIGGER();
    switch (int7) {
        case -2: {
            script3097();
            return;
        }
        case 29: {
            switch (int15) {
                case 0: {
                    string0 = "You must have a Combat Level of at least 20 (not including Summoning) to enter a Bounty Hunter world.";
                    break;
                }
                case 1: {
                    string0 = "You are currently carrying lent items and cannot enter a PvP world.";
                    break;
                }
                case 2: {
                    string0 = "You must be standing in the Wilderness or Edgeville to enter this bounty world.";
                    break;
                }
                case 3: {
                    string0 = "You must have a total skill level of 1,000 or greater to enter this world.";
                    break;
                }
                case 5: {
                    string0 = "You must have a total skill level of 1,500 or greater to enter this world.";
                    break;
                }
                case 6: {
                    string0 = "You must have a total skill level of 2,000 or greater to enter this world.";
                    break;
                }
                case 7: {
                    string0 = "You must have a total skill level of 2,600 or greater to enter this world.";
                    break;
                }
                case 4: {
                    string0 = "You must move to a safe area before you can log in to a Bounty Hunter world.";
                    break;
                }
                case 9: {
                    string0 = "This server is for staff only.";
                    break;
                }
                case 10: {
                    string0 = "You cannot enter a Classic Mode world while in the tutorial.";
                    break;
                }
                case 12: {
                    string0 = "Your account has been involved in serious rule breaking, and so has been temporarily disabled.";
                    break;
                }
                case 13: {
                    string0 = "You are standing in a members-only area. To play on this world, move to a free area first.";
                    break;
                }
                case 14: {
                    string0 = "You need a member's account to log in to this world. Select the banner above to opt into the open access weekend or use a different world.";
                    int14 = 2607;
                    string5 = "Subscribe";
                    break;
                }
                case 15: {
                    string0 = "You can not login to a Classic Mode world on mobile.";
                    break;
                }
                case 17: {
                    string0 = "Your account cannot currently log into this world. Please try another world.";
                    break;
                }
                case 18: {
                    string0 = "You do not have access to Fresh Start Worlds. Please select a different world and try again.";
                    break;
                }
                case 19: {
                    string0 = "You only have access to Fresh Start Worlds. Please select a different world and try again.";
                    break;
                }
                default: {
                    string0 = "Unexpected server response. Please try using a different world.";
                    break;
                }
            };
            break;
        }
        case 46: {
            string0 = "This instance is marked for deletion/rebuild. Please try using a different world.";
            break;
        }
        case 45: {
            switch (int16) {
                case 0: {
                    switch (int15) {
                        case 0: {
                            string0 = "You must be near the TzHaar Fight Pit entrance to enter a global match.";
                            break;
                        }
                        default: {
                            string0 = "Unable to log in. Please try using a different world.";
                            break;
                        }
                    };
                    break;
                }
                case 1: {
                    switch (int15) {
                        case 1: {
                            string0 = "There was an error connecting to your meeting room. Please try again.";
                            break;
                        }
                        case 2: {
                            string0 = "You need a higher rank to enter that private tent.";
                            break;
                        }
                        case 3: {
                            string0 = "You need an invitation to enter that private room.";
                            break;
                        }
                        default: {
                            string0 = "Unable to log in. Please try using a different world.";
                            break;
                        }
                    };
                    break;
                }
                case 5: {
                    switch (int15) {
                        case 0: {
                            string0 = "The instance you attempted to join is full.";
                            break;
                        }
                        case 1: {
                            string0 = "You can't join that instance as you or your follower are carrying items.";
                            break;
                        }
                        default: {
                            string0 = "Unable to log in. Please try using a different world.";
                            break;
                        }
                    };
                    break;
                }
                default: {
                    string0 = "Unable to log in. Please try using a different world.";
                    break;
                }
            };
            break;
        }
        case -5: {
            string0 = "Connection timed out. Please try using a different world.";
            break;
        }
        case -4: {
            string0 = "Error connecting to server.";
            break;
        }
        case -1: {
            string0 = "No response from server. Please try using a different world.";
            break;
        }
        case 5: {
            string0 = "Your account has not logged out from its last session or the server is too busy to handle your request. Please try again in a few minutes or try a different server.";
            break;
        }
        case 7: {
            string0 = "This world is full. Please use a different world.";
            break;
        }
        case 8: {
            string0 = "Unable to connect: login server offline.";
            break;
        }
        case 9: {
            string0 = "Login limit exceeded: too many connections from your address.";
            break;
        }
        case 10: {
            string0 = "Unable to connect: bad session id.";
            break;
        }
        case 13: {
            string0 = "Could not complete login. Please try using a different world.";
            break;
        }
        case 16: {
            string0 = "Too many logins from your address. Please wait 5 minutes before trying again.";
            break;
        }
        case 17: {
            string0 = "You are standing in a members-only area. To play on this world, move to a free area first.";
            break;
        }
        case 20: {
            string0 = "Invalid loginserver requested. Please try using a different world.";
            break;
        }
        case 22: {
            string0 = "Sorry, we had trouble logging you in. Please try again.";
            break;
        }
        case 23: {
            string0 = "No reply from login server. Please wait a minute and try again.";
            break;
        }
        case 24: {
            string0 = "Error loading your profile. Please contact customer support.";
            break;
        }
        case 25: {
            string0 = "Unexpected loginserver response. Please try using a different world.";
            break;
        }
        case 26: {
            string0 = "This computer's address has been blocked, as it was used to break our rules.";
            break;
        }
        case 27: {
            string0 = "Service unavailable.";
            break;
        }
        case 3: {
            string0 = "Your password has been updated. Please leave the lobby and log in again.";
            break;
        }
        case 36: {
            string0 = "Unable to connect: authentication server offline.";
            break;
        }
        case 37:
        case 62: {
            string0 = "Your account is currently inaccessible. Please try again in a few minutes.";
            break;
        }
        case 39: {
            string0 = "The instance you tried to join no longer exists. Please try using a different world.";
            break;
        }
        case 41: {
            string0 = "The instance you tried to join is full. Please try back later or try using a different world.";
            break;
        }
        case 44: {
            string0 = "Our systems are currently unavailable. Please try again in a few minutes.";
            break;
        }
        case 1401: {
            string0 = "Single Sign on failed because your token has expired. Please try re-entering your login details.";
            break;
        }
        case 1402: {
            string0 = "Single Sign on failed because you exited the Google login without signing in.";
            break;
        }
        case 1403: {
            string0 = "Could not connect. Please check your internet connection or try again later.";
            break;
        }
        case 1404: {
            string0 = "Single Sign on failed because your access is unauthorized. Please try re-entering your login details.";
            break;
        }
        case 1405: {
            string0 = "Revoking token action unsuccessful.";
            break;
        }
        case 1406: {
            string0 = "Single Sign on failed because your Google account creation was unsuccessful. Please ensure you have entered a valid date of birth.";
            break;
        }
        case 1407: {
            string0 = "Single Sign on failed because you have a pending transaction.";
            break;
        }
        case 55: {
            string0 = "Sorry, but your account is not eligible to play.<br>For more information, please take a look at our privacy policy.";
            string6 = "Back";
            string5 = "Privacy Policy";
            break;
        }
        case 35: {
            string0 = "Your session has expired. Please select 'Back' in your browser to renew it.";
            string6 = "Close";
            break;
        }
        case 14: {
            if ((script13749() == true)) {
                string0 = "RuneScape is currently updating. Please wait a few minutes and restart the app to retry.";
            } else {
                string0 = "RuneScape is currently updating. Please wait a few minutes and restart the game to retry.";
            };
            int14 = 2610;
            break;
        }
        case 6: {
            if ((script13749() == true)) {
                string0 = "RuneScape has been updated! Please restart the app to retry.";
            } else {
                string0 = "RuneScape has been updated! Please restart the game to retry.";
            };
            int14 = 2610;
            break;
        }
        case 4: {
            string0 = "Your account has been involved in serious rule breaking.";
            string5 = "More info";
            break;
        }
        case 11: {
            string0 = "Your password is an extremely common choice, and is not secure. You must change it before you can log in.";
            string5 = "Change Password";
            break;
        }
        case 18: {
            string0 = "Your account has been locked due to suspicious activity. Please recover your account.";
            int14 = 2612;
            string5 = "Recover Account";
            break;
        }
        case 31: {
            string0 = "You must change your account's display name before you can log in.";
            string5 = "Change Display Name";
            break;
        }
        case 30: {
            string0 = "This is not a member's account. Please choose a 'free' world from the website to play on this account.";
            if ((script13749() == false)) {
                string5 = "Subscribe";
            };
            break;
        }
        case 19: {
            string0 = "Fullscreen is currently a members-only feature. To log in, either exit fullscreen via the options menu or use a member's account.";
            if ((script13749() == false)) {
                string5 = "Subscribe";
            };
            break;
        }
        case 12: {
            string0 = "You need a member's account to log in to this world. Please use a free to play world.";
            int14 = 10151;
            break;
        }
        case 40: {
            string0 = "You need a member's account to log in to this instance. Please subscribe or use a different world.";
            int14 = 10151;
            if ((script13749() == false)) {
                string5 = "Subscribe";
            };
            break;
        }
        case 32: {
            string0 = "The unpaid balance on your account needs to be settled before you can log into game.";
            if ((script13749() == false)) {
                string5 = "Unpaid Balance";
            };
            string6 = "";
            break;
        }
        case 47:
        case 51: {
            string0 = "You need to validate your email address to log in.";
            IF_SETHIDE(false, comp(906, 148));
            break;
        }
        case 48: {
            if ((script13749() == true)) {
                string0 = "Your game session has now ended.<br><br>To play again, please close the app and wait 5 minutes before reloading it. ";
            } else {
                string0 = "Your game session has now ended.<br><br>To play again, please close your browser tab/window and wait 5 minutes before reloading the game. ";
            };
            break;
        }
        case 50: {
            string0 = "The Jagex Account Guardian is protecting this account.<br><br>This device is not recognised.<br><br>No new devices can be added for up to 24 hours as too many failed attempts to answer the security questions have been made.<br><br>During this time access will still be granted to any devices already trusted.";
            string5 = "Back";
            string6 = "";
            int14 = 13105;
            break;
        }
        case 52: {
            string0 = "You need to validate this device to use with your account. Please follow the instructions in the window that will open shortly.";
            string5 = "Back";
            string6 = "";
            int14 = 13105;
            break;
        }
        case 49: {
            string0 = "The device you are doing is no longer valid. You should have received an email to validate the device. Please follow the instructions there. Be sure to check your spam folder.";
            string5 = "Back";
            string6 = "";
            int14 = 13105;
            break;
        }
        case 58: {
            string0 = "Jagex Account Guardian cannot be used with the NXT Beta Client. Please disable JAG via Account Settings before continuing.<br><br>We strongly suggest activating the RuneScape Authenticator to enhance the security of your account.";
            string5 = "Account Settings";
            break;
        }
        case 59: {
            string0 = "Jagex Account Guardian cannot be used with the NXT Beta Client. Please disable JAG via Account Settings before continuing.";
            string5 = "Account Settings";
            break;
        }
        case 54: {
            string0 = "Activity on this account has been exceeded.<br><br>Please try again tomorrow.";
            break;
        }
        case 38: {
            string0 = "Your account does not currently have access to the NXT Beta.";
            break;
        }
        case 60: {
            string0 = "Connection timed out. Please try again.";
            break;
        }
        case 61: {
            string0 = "You need to set your date of birth to continue. Please log into the website to do so.";
            break;
        }
        default: {
            string0 = "Unexpected server response. Please try using a different world.";
            break;
        }
    };
    IF_TRIGGEROP(comp(906, 3), -1, 1);
    script3093(int7, 4035 as dbrow, "Login Failed", string0, int14, string5, string6);
    return;
}