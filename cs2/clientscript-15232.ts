//
function script15232(int0: unknown_int, int1: int): void {
    switch (int0) {
        case 0: {
            unk11129("", 0);
            break;
        }
        case 1: {
            script15233(int1);
            break;
        }
        case 2:
        case 3: {
            if ((CLIENTOPTION_GET(34) == 0)) {
                OPENURLRAW("https://legal.jagex.com/docs/terms", 0);
            } else {
                OPENURLRAW(`https://legal.jagex.com/v/${script17756()}/docs/terms`, 0);
            };
            break;
        }
        case 4:
        case 5: {
            if ((CLIENTOPTION_GET(34) == 0)) {
                OPENURLRAW("https://legal.jagex.com/docs/policies", 0);
            } else {
                OPENURLRAW(`https://legal.jagex.com/v/${script17756()}/docs/policies`, 0);
            };
            break;
        }
        case 23: {
            if ((CLIENTOPTION_GET(34) == 0)) {
                OPENURLRAW("https://legal.jagex.com/docs/policies/privacy/exercising-your-rights", 0);
            } else {
                OPENURLRAW(`https://legal.jagex.com/v/${script17756()}/docs/policies/privacy/exercising-your-rights`, 0);
            };
            break;
        }
        case 17: {
            if ((CLIENTOPTION_GET(34) == 0)) {
                OPENURLRAW("https://legal.jagex.com/docs/terms/eula", 0);
            } else {
                OPENURLRAW(`https://legal.jagex.com/v/${script17756()}/docs/terms/eula`, 0);
            };
            break;
        }
        case 6: {
            if (((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 5))) {
                OPENURLRAW("https://rs.runescape.com/membership", 0);
            };
            break;
        }
        case 19: {
            if ((((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 1)) || (PLATFORMTYPE() == 5))) {
                OPENURLRAW("https://rs.runescape.com/membership", 0);
            };
            break;
        }
        case 7: {
            switch (CLIENTTYPE()) {
                case 7: {
                    OPENURLRAW("market://details?id=com.jagex.runescape.android", 0);
                    break;
                }
                case 8: {
                    unk11131();
                    break;
                }
            };
            break;
        }
        case 8: {
            if (((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 5))) {
                OPENURL("www", "welcome-back", 1);
            };
            break;
        }
        case 9: {
            OPENURL("poll", "", 0);
            break;
        }
        case 10: {
            OPENURL("poll", "archive.ws", 0);
            break;
        }
        case 11: {
            unk11129(`graphicsDrivers?vendorID=${inttostring(int1, 10)}`, 0);
            break;
        }
        case 12: {
            OPENURL("bugtracker_v4", "index.html", 0);
            break;
        }
        case 13: {
            OPENURL("temp-hiscores", "", 0);
            break;
        }
        case 14: {
            OPENURLRAW(`https://www.jagex.com/${script15684()}/charitable-giving`, 0);
            break;
        }
        case 15: {
            OPENURL("news", "list.ws", 1);
            break;
        }
        case 16: {
            OPENURL("www", "community/double-xp-weekend", 1);
            break;
        }
        case 18: {
            OPENURL("temp-hiscores", "", 1);
            break;
        }
        case 20: {
            OPENURL("hiscore_seasonal", "", 1);
            break;
        }
        case 21: {
            OPENURL("news", "list.ws", 1);
            break;
        }
        case 22: {
            OPENURLRAW("https://www.jagex.com/launcher", 0);
            break;
        }
        case 24: {
            OPENURLRAW(`https://help.jagex.com/hc/${LOWERCASE(script15684())}/requests/new?ticket_form_id=23548257838353`, 0);
            break;
        }
        case 25: {
            OPENURL("hiscore_ironman", "", 1);
            break;
        }
        case 26: {
            if (((STRING_LENGTH(varclient_8166) == 0) || (varbitplayer_56616 == 1))) {
                OPENURLRAW(`https://rs.runescape.com/${script15684()}/hiscores/group-ironman/${script19610(varbitplayer_56614)}/`, 0);
            } else {
                OPENURLRAW(`https://rs.runescape.com/${script15684()}/hiscores/group-ironman/${script19610(varbitplayer_56614)}?name=${varclient_8166}`, 0);
            };
            break;
        }
        case 27: {
            OPENURLRAW(`https://rs.runescape.com/${script15684()}/hiscores/group-ironman/${script19610(varclient_8256)}?name=${varclient_8255}`, 0);
            break;
        }
        case 28: {
            OPENURL("clan-home", `clan/${varclient_4672}`, 0);
            break;
        }
        case 29: {
            OPENURLRAW(`http://rs.runescape.com/hiscores/leagues/player/${CHAT_PLAYERNAME_UNFILTERED()}`, 0);
            break;
        }
        case 30: {
            OPENURLRAW("https://runescape.com/loyalty", 0);
            break;
        }
        case 500: {
            OPENURL("forum", "forums.ws", 1);
            break;
        }
        case 501: {
            OPENURL("clan-hiscores", "landing.ws", 1);
            break;
        }
        case 502: {
            OPENURL("clan-hiscores", "ranking.ws", 1);
            break;
        }
        case 507: {
            OPENURL("forum", "forums.ws?352,353", 0);
            break;
        }
        case 1500: {
            OPENURL("www", `game-guide/combat${script16296()}`, 1);
            break;
        }
        case 1501: {
            if ((CLIENTOPTION_GET(34) == 0)) {
                OPENURLRAW("https://legal.jagex.com/docs/rules", 0);
            } else {
                OPENURLRAW(`https://legal.jagex.com/v/${script17756()}/docs/rules`, 0);
            };
            break;
        }
        case 2000: {
            OPENURL("www", "runemetrics", 1);
            break;
        }
        case 2001: {
            OPENURL("telemetry", `runemetrics/app/xp-gained${enum_getvalue(0, 36, 10702 as cs2enum, int1)}`, 1);
            break;
        }
        case 2002: {
            OPENURL("telemetry", "runemetrics/app/pvm-kills", 1);
            break;
        }
        case 2003: {
            OPENURL("telemetry", "runemetrics/app/wealth", 1);
            break;
        }
        case 2500: {
            OPENURLRAW(`https://secure.runescape.com/l=${inttostring(CLIENTOPTION_GET(34), 10)}/m=email-register/forgot-login`, 0);
            break;
        }
        case 2501: {
            OPENURL("www", "account_settings.ws?mod=messages", 1);
            break;
        }
        case 2502: {
            switch (PLATFORMTYPE()) {
                case 3:
                case 2: {
                    unk11130();
                    break;
                }
                case 0: {
                    unk11129("create", 0);
                    break;
                }
            };
            break;
        }
        case 2503: {
            OPENURL("email-register", "address_change", 1);
            break;
        }
        case 2504: {
            OPENURL("loyalty-points", "signup.ws", 1);
            break;
        }
        case 2505: {
            OPENURL("friend-referral", "index.ws?org=5", 1);
            break;
        }
        case 2507: {
            OPENURL("www", "account_settings.ws", 1);
            break;
        }
        case 2508: {
            if ((int1 == 1)) {
                unk11129("account_settings.ws?mod=security", 0);
            } else {
                OPENURL("www", "account_settings.ws?mod=security", 1);
            };
            break;
        }
        case 2509: {
            if ((int1 == 1)) {
                unk11129("account_settings.ws?mod=uidPassport", 0);
            } else {
                OPENURL("www", "account_settings.ws?mod=uidPassport", 1);
            };
            break;
        }
        case 2510: {
            OPENURL("www", "account_settings.ws?mod=emailNew", 1);
            break;
        }
        case 2511: {
            OPENURL("www", "account_settings.ws?mod=email", 1);
            break;
        }
        case 2512: {
            unk11129("authenticator.ws", 0);
            break;
        }
        case 2513: {
            OPENURL("totp-authenticator", "landing", 1);
            break;
        }
        case 2514: {
            OPENURLRAW("https://support.runescape.com/hc/en-gb/articles/206154529", 0);
            break;
        }
        case 2506: {
            OPENURL("accountappeal", "lockchoice.ws", 1);
            break;
        }
        case 2515: {
            if ((int1 == 1)) {
                unk11129("account_settings.ws?mod=charname", 0);
            } else {
                OPENURL("www", "account_settings.ws?mod=charname", 1);
            };
            break;
        }
        case 2516: {
            OPENURL("dob", "set_dob.ws", 1);
            break;
        }
        case 2517: {
            OPENURL("dob", "set_members_dob.ws", 1);
            break;
        }
        case 2518: {
            if (((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 5))) {
                OPENURL("billing_core", "userdetails.ws", 1);
            };
            break;
        }
        case 2519: {
            OPENURL("billing_core", "voucherform.ws", 1);
            break;
        }
        case 2520: {
            OPENURL("billing_core", "voucherform.ws?mode=fsw", 1);
            break;
        }
        case 2521: {
            OPENURLRAW(`https://www.jagex.com/${script17350()}/accounts`, 1);
            break;
        }
        default: {
            if (((int0 >= 1000) && (int0 <= 1018))) {
                script15234(int0);
            };
            break;
        }
    };
    return;
}