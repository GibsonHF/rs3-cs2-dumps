//
function script20980(): void {
    switch (int0) {
        case 1: {
            stack(WORLDMAP_LISTELEMENT_START(1368080, 1, 3, 0));
            return;
        }
        case 2: {
            stack(WORLDMAP_LISTELEMENT_START(1368096, 1, 3, 0));
            return;
        }
    };
    script12478(`League ${inttostring(int0, 10)} has not been plugged in to filter generation.`);
    stack(-1);
    return;
}