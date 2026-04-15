//
function script4704(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    [int0, int1, int2] = unk11114();
    switch (int0) {
        case 0: {
            break;
        }
        case 1: {
            break;
        }
        case 2: {
            break;
        }
        case 3: {
            printmessage("Your password has been updated. Please leave the world and log in again.");
            break;
        }
        case 4: {
            printmessage("Your account has been involved in serious rule breaking. Check your Message Centre for details.");
            break;
        }
        case 5: {
            printmessage("Your account has not logged out from its last session or the server is too busy to handle your request. Please try again in a few minutes or try a different server.");
            break;
        }
        case 6: {
            if ((script13749() == true)) {
                printmessage("RuneScape has been updated! Please restart the app to retry.");
            } else {
                printmessage("RuneScape has been updated! Please restart the game to retry.");
            };
            break;
        }
        case 7: {
            printmessage("This world is full. Please try back later.");
            break;
        }
        case 8: {
            printmessage("Unable to connect: login server offline.");
            break;
        }
        case 9: {
            printmessage("Login limit exceeded: too many connections from your address.");
            break;
        }
        case 10: {
            printmessage("Unable to connect: bad session id.");
            break;
        }
        case 11: {
            printmessage("Your password is an extremely common choice, and is not secure. You must change it.");
            break;
        }
        case 12: {
            printmessage("You need a member's account to log in to this world.");
            break;
        }
        case 13: {
            printmessage("Could not complete login. Please try back later.");
            break;
        }
        case 14: {
            printmessage("The server is being updated. Please wait a few minutes and try again.");
            if ((script13749() == true)) {
                printmessage("RuneScape is currently updating. Please wait a few minutes and restart the app to retry.");
            } else {
                printmessage("RuneScape is currently updating. Please wait a few minutes and restart the game to retry.");
            };
            break;
        }
        case 15: {
            break;
        }
        case 16: {
            printmessage("Too many logins from your address. Please wait 5 minutes before trying again.");
            break;
        }
        case 17: {
            printmessage("You are standing in a members-only area. To play on this world, move to a free area first.");
            break;
        }
        case 18: {
            printmessage("Your account has been locked due to suspicious activity. Please recover your account.");
            break;
        }
        case 19: {
            printmessage("Fullscreen is currently a members-only feature. To log in, either exit fullscreen via the options menu or use a member's account.");
            break;
        }
        case 20: {
            printmessage("Invalid loginserver requested. Please try back later.");
            break;
        }
        case 21: {
            break;
        }
        case 22: {
            printmessage("Sorry, we had trouble logging you in. Please try again.");
            break;
        }
        case 23: {
            printmessage("No reply from login server. Please wait a minute and try again.");
            break;
        }
        case 24: {
            printmessage("Error loading your profile. Please contact customer support.");
            break;
        }
        case 25: {
            printmessage("Unexpected loginserver response. Please try back later.");
            break;
        }
        case 26: {
            printmessage("This computer's address has been blocked, as it was used to break our rules.");
            break;
        }
        case 27: {
            printmessage("Service unavailable.");
            break;
        }
        case 28: {
            break;
        }
        case 29: {
            switch (int1) {
                case 0: {
                    printmessage("You must have a Combat Level of at least 20 (not including Summoning) to enter a Bounty Hunter world.");
                    break;
                }
                case 1: {
                    printmessage("You are currently carrying lent items and cannot enter a PvP world.");
                    break;
                }
                case 2: {
                    printmessage("You must be standing in the Wilderness or Edgeville to enter this bounty world.");
                    break;
                }
                case 3: {
                    printmessage("You must have a total skill level of 1,000 or greater to enter this world.");
                    break;
                }
                case 5: {
                    printmessage("You must have a total skill level of 1,500 or greater to enter this world.");
                    break;
                }
                case 6: {
                    printmessage("You must have a total skill level of 2,000 or greater to enter this world.");
                    break;
                }
                case 7: {
                    printmessage("You must have a total skill level of 2,600 or greater to enter this world.");
                    break;
                }
                case 4: {
                    printmessage("You must move to a safe area before you can log in to a Bounty Hunter world.");
                    break;
                }
                case 9: {
                    printmessage("This server is for staff only.");
                    break;
                }
                case 10: {
                    printmessage("You cannot enter a Classic Mode world while in the tutorial.");
                    break;
                }
                case 13: {
                    printmessage("You are standing in a members-only area. To play on this world, move to a free area first.");
                    break;
                }
                case 14: {
                    printmessage("You need a member's account to log in to this world. Enter the lobby and opt into the open access weekend or subscribe to enter this world.");
                    break;
                }
                case 15: {
                    printmessage("You can not login to a Classic Mode world on mobile.");
                    break;
                }
                case 17: {
                    printmessage("Your account cannot currently log into this world. Please try another world.");
                    break;
                }
                default: {
                    printmessage("Unexpected server response. Please try back later.");
                    break;
                }
            };
            break;
        }
        case 30: {
            printmessage("This is not a member's account. Please choose a 'free' world from the website to play on this account.");
            break;
        }
        case 31: {
            break;
        }
        case 32: {
            printmessage("Your account has negative membership credit. Please log into the billing system to add credit to your account.");
            break;
        }
        case 33: {
            break;
        }
        case 34: {
            break;
        }
        case 35: {
            break;
        }
        case 36: {
            break;
        }
        case 37:
        case 62: {
            printmessage("Your account is currently inaccessible. Please try again in a few minutes.");
            break;
        }
        case 38: {
            break;
        }
        case 39: {
            printmessage("The instance you tried to join no longer exists. Please try back later.");
            break;
        }
        case 40: {
            printmessage("You need a member's account to log in to this instance.");
            break;
        }
        case 41: {
            printmessage("The instance you tried to join is full. Please try back later.");
            break;
        }
        case 42: {
            break;
        }
        case 43: {
            break;
        }
        case 44: {
            printmessage("Our systems are currently unavailable. Please try again in a few minutes.");
            break;
        }
        case 48: {
            if ((script13749() == true)) {
                printmessage("Your game session has now ended.<br><br>To play again, please close the app and wait 5 minutes before reloading it.");
            } else {
                printmessage("Your game session has now ended.<br><br>To play again, please close your browser tab/window and wait 5 minutes before reloading the game.");
            };
            break;
        }
        case 45: {
            switch (int2) {
                case 0: {
                    switch (int1) {
                        case 0: {
                            printmessage("You must be near the TzHaar Fight Pit entrance to enter a global match.");
                            break;
                        }
                        default: {
                            printmessage("Unable to log in. Please try back later.");
                            break;
                        }
                    };
                    break;
                }
                case 1: {
                    switch (int1) {
                        case 1: {
                            printmessage("There was an error connecting to your meeting room. Please try again.");
                            break;
                        }
                        case 2: {
                            printmessage("You need a higher rank to enter that private tent.");
                            break;
                        }
                        case 3: {
                            printmessage("You need an invitation to enter that private room.");
                            break;
                        }
                        default: {
                            printmessage("Unable to log in. Please try back later.");
                            break;
                        }
                    };
                    break;
                }
                case 4: {
                    switch (int1) {
                        case 1: {
                            printmessage("You need to clear some inventory space to enter a Flash Factory game.");
                            break;
                        }
                        case 2: {
                            printmessage("You must dismiss your follower before entering a Flash Factory game.");
                            break;
                        }
                    };
                    break;
                }
                case 5: {
                    switch (int1) {
                        case 0: {
                            printmessage("The instance you attempted to join is full.");
                            break;
                        }
                        case 1: {
                            printmessage("You can't join that instance as you or your follower are carrying items.");
                            break;
                        }
                        default: {
                            printmessage("Unable to log in. Please try using a different world.");
                            break;
                        }
                    };
                    break;
                }
                default: {
                    printmessage("Unable to log in. Please try back later.");
                    break;
                }
            };
            break;
        }
        case 46: {
            printmessage("This instance is marked for deletion/rebuild. Please try again in a few minutes.");
            break;
        }
        case 47:
        case 51: {
            printmessage("You need to validate your email address to log in.");
            break;
        }
        case 50: {
            printmessage("The Jagex Account Guardian is protecting this account.<br><br>This device is not recognised.<br><br>No new devices can be added for up to 24 hours as too many failed attempts to answer the security questions have been made.<br><br>During this time access will still be granted to any devices already trusted.");
            break;
        }
        case 52: {
            printmessage("You need to validate this device to use with your account. Please follow the instructions in the window that will open shortly.");
            break;
        }
        case 58: {
            break;
        }
        case 59: {
            break;
        }
        case 55: {
            printmessage("Sorry, but your account is not eligible to play.");
            break;
        }
        case 60: {
            printmessage("Connection timed out. Please try again.");
            break;
        }
        case 61: {
            break;
        }
        case 1401: {
            printmessage("Single Sign on failed because your token has expired. Please try re-entering your login details.");
            break;
        }
        case 1402: {
            printmessage("Single Sign on failed because you exited without signing in.");
            break;
        }
        case 1403: {
            printmessage("Could not connect. Please check your internet connection or try again later.");
            break;
        }
        case 1404: {
            printmessage("Single Sign on failed because your access is unauthorized. Please try re-entering your login details.");
            break;
        }
        case 1405: {
            printmessage("Revoking token action unsuccessful.");
            break;
        }
        case 1406: {
            printmessage("Single Sign on failed because your account creation was unsuccessful. Please ensure you have entered a valid date of birth.");
            break;
        }
        case 1407: {
            printmessage("Single Sign on failed because you have a pending transaction.");
            break;
        }
    };
    return;
}