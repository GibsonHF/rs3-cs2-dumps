//
function script20223(int0: number): void {
    IF_SETTRANS(int0, comp(1401, 36));  // league_onboarding:confirm_link_main
    IF_SETTRANS(int0, comp(1401, 37));  // league_onboarding:confirm_link_alt
    IF_SETTRANS(int0, comp(1401, 35));  // league_onboarding:confirm_link_cancel
    IF_SETTRANS(int0, comp(1401, 42));  // league_onboarding:linking_name
    IF_SETTRANS(int0, comp(1401, 50));  // league_onboarding:linking_result
    IF_SETTRANS(int0, comp(1401, 52));  // league_onboarding:check_name_indicator
    script4161(91815984, int0);
    script4161(91815985, int0);
    script4161(91815970, int0);
    script4161(91815974, int0);
    script4161(91815987, int0);
    if ((CC_FIND(comp(1401, 38), 0) == 1)) {  // league_onboarding:confirm_link_spinner
        cc_setparam(3994, int0);
    };
    if ((CC_FIND(comp(1401, 51), 0) == 1)) {  // league_onboarding:check_name_spinner
        cc_setparam(3994, int0);
    };
    return;
}