//
function script9509(int0: number): void {
    IF_SETTRANS(0, comp(749, 43));  // 6awe2_hud:player_score_flash
    IF_SETTEXT(`+${inttostring(int0, 10)}`, comp(749, 43));  // 6awe2_hud:player_score_flash
    IF_SETONTIMER(callback(script9510, 49086507), comp(749, 43));  // 6awe2_hud:player_score_flash
    return;
}