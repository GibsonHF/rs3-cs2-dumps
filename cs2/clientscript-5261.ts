//
function script5261(int0: number): void {
    switch (int0) {
        case 74186764: {
            IF_SETHIDE(false, comp(1132, 15));  // myq5_vanescula_combat:shriek_fade
            IF_SETTEXT("4", comp(1132, 16));  // myq5_vanescula_combat:shriek_count
            IF_SETHIDE(false, comp(1132, 16));  // myq5_vanescula_combat:shriek_count
            IF_SETONTIMER(callback(script5262, 4, 0, 74186764), int0);
            break;
        }
        case 74186770: {
            IF_SETHIDE(false, comp(1132, 21));  // myq5_vanescula_combat:melee_fade
            IF_SETTEXT("2", comp(1132, 22));  // myq5_vanescula_combat:melee_count
            IF_SETHIDE(false, comp(1132, 22));  // myq5_vanescula_combat:melee_count
            IF_SETONTIMER(callback(script5262, 2, 0, 74186770), int0);
            break;
        }
    };
    return;
}