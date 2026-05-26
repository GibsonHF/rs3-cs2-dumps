//
function script19106(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(34149);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(34150);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(34151);
            stack(75169890);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(34152);
            stack(75169890);
            IF_SETGRAPHIC();
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