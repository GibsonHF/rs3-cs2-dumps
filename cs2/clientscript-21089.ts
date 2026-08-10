//
function script21089(): void {
    switch (varbitplayer_61493) {
        case 1: {
            stack(int0);
            script20943();
            if (BRANCH_EQUALS(1)) {
                switch (int1) {
                    case 0: {
                        stack(36466);
                        return;
                    }
                    case 1: {
                        stack(36434);
                        return;
                    }
                    case 2: {
                        stack(36450);
                        return;
                    }
                };
                unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
                stack(36434);
                return;
            };
            switch (int1) {
                case 0: {
                    stack(36458);
                    return;
                }
                case 1: {
                    stack(36426);
                    return;
                }
                case 2: {
                    stack(36442);
                    return;
                }
            };
            unk11016(`Unexpected $relic_pos. Expected 0-2 but received : ${inttostring(int1, 10)}`);
            stack(36426);
            return;
        }
        case 0: {
            stack(36418);
            return;
        }
    };
    stack(-1);
    return;
}