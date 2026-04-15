//
function script9462(int0: component, int1: unknown_int, int2: int, int3: int): void {
    var string0 = "No opinion.";
    var int4 = -1;
    switch (int2) {
        case 2: {
            if ((int3 == 1)) {
                string0 = "Longer expeditions, faster gatherers.";
                int4 = 19016;
            } else if ((int3 == 2)) {
                string0 = "Shorter expeditions.";
                int4 = 19013;
            };
            break;
        }
        case 0: {
            if ((int3 == 1)) {
                string0 = "Longer expeditions, construct buildings faster.";
                int4 = 19017;
            } else if ((int3 == 2)) {
                string0 = "Shorter expeditions.";
                int4 = 19013;
            };
            break;
        }
        case 1: {
            if ((int3 == 1)) {
                string0 = "Larger caravans that can hold more divine energy.";
                int4 = 19012;
            } else if ((int3 == 2)) {
                string0 = "Tougher bodyguards, to defend the caravans better.";
                int4 = 19014;
            };
            break;
        }
        case 3: {
            if ((int3 == 1)) {
                string0 = "More convoys, attracting more opponent attention.";
                int4 = 19011;
            } else if ((int3 == 2)) {
                string0 = "Standard convoy frequency, with lower chance of ambush.";
                int4 = 19015;
            };
            break;
        }
    };
    IF_SETTEXT(string0, int0);
    stack(int4);
    stack(int1);
    IF_SETGRAPHIC();
    return;
}