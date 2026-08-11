//
function script13316(int0: number): void {
    IF_SETGRAPHIC(18100 as graphic, comp(1850, 13));  // achievements:summary_bg
    IF_SETGRAPHIC(18100 as graphic, comp(1850, 18));  // achievements:achievements_bg
    IF_SETGRAPHIC(18100 as graphic, comp(1850, 30));  // achievements:area_task_bg
    IF_SETGRAPHIC(18100 as graphic, comp(1850, 35));  // achievements:combat_mastery_bg
    IF_SETGRAPHIC(18100 as graphic, comp(1850, 25));  // achievements:tracker_bg
    IF_SETGRAPHIC(18102 as graphic, int0);
    if ((int0 != comp(1850, 18))) {  // achievements:achievements_bg
        script7944();
    };
    return;
}