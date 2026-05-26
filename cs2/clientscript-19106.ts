//
function script19106(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(34149, 75169890);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(34150, 75169890);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(34151, 75169890);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(34152, 75169890);
            break;
        }
    };
    IF_SETNPCMODEL(31139, 75169895);
    IF_SETNPCMODEL(31140, 75169894);
    IF_SETNPCMODEL(31141, 75169893);
    IF_SETMODELANIM(18019, 75169895);
    IF_SETMODELANIM(18019, 75169894);
    IF_SETMODELANIM(18019, 75169893);
    script19104(1);
    return;
}