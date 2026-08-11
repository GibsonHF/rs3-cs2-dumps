//
function script16820(int0: number): void {
    if ((int0 == 1)) {
        script8845(16, 8, 68550668, -1);
        script8844(1, 17, 8, 68550673, -1);
        script8844(1, 18, 8, 68550678, -1);
        script8180(1, 98);
        script8772(1);
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1046, 12));  // quest_daughter_moia_gameplay:attack_vault_click
        IF_SETOPKEY(1, 0, 0, comp(1046, 17));  // quest_daughter_moia_gameplay:attack_drain_click
        IF_SETOPKEY(1, 0, 0, comp(1046, 22));  // quest_daughter_moia_gameplay:attack_blast_click
    };
    return;
}