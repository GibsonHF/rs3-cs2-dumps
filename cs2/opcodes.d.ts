// Need to be defined for the typescript compiler
interface Boolean { }
interface Function { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }
interface IArguments { }
interface BigInt { }
interface Symbol { }
interface Array<T> { [Symbol.iterator](): any; }
declare var Symbol: { readonly iterator: unique symbol };

// Language constructs
declare class BoundFunction { }
declare function operator(op: string, ...values:any[]): any;
declare function callback(): BoundFunction;
declare function callback<T extends (...args: any[]) => any>(fn: T, ...args: T extends (...args: (infer ARGS)[]) => any ? ARGS : never): BoundFunction;
declare function comp(interf: number, element: number): component;
declare function comprel(interf: number, elementrel: number): component;
declare function pos(level: number, chunkx:number, chunkz:number, subx:number, subz:number): coordgrid;
declare function stack(...args: any[]): any;

// Compiler intrinsics
declare function varbittable(): string;
declare function opnametoid(string0: string): number;
declare function call0(int0: number): void;
declare function call1(int0: number): void;
declare function getvar0(int0: number): void;
declare function getvar1(int0: number): void;
declare function getvar2(int0: number): void;
declare function getvarother0(int0: number): void;
declare function getvarother1(int0: number): void;
declare function getvarother2(int0: number): void;
declare function setvar0(int0: number): void;
declare function setvar1(int0: number): void;
declare function setvar2(int0: number): void;
declare function op(int0: number): void;

// Clientscript types
type int = number
type type_2 = number
type quest = number
type questhelp = number
type cursor = number
type seq = number
type colour = number
type loc_shape = number
type component = number
type idkit = number
type midi = number
type npc_mode = number
type namedobj = number
type synth = number
type type_15 = number
type area = number
type stat = number
type npc_stat = number
type writeinv = number
type mesh = number
type maparea = number
type coordgrid = number
type graphic = number
type chatphrase = number
type fontmetrics = number
type cs2enum = number
type type_27 = number
type jingle = number
type chatcat = number
type loc = number
type model = number
type npc = number
type obj = number
type player_uid = number
type type_35 = BigInt
type spotanim = number
type npc_uid = number
type inv = number
type texture = number
type category = number
type char = number
type laser = number
type bas = number
type type_45 = number
type collision_geometry = number
type physics_model = number
type physics_control_modifier = number
type clanhash = BigInt
type coordfine = string
type cutscene = number
type itemcode = number
type type_54 = number
type mapsceneicon = number
type clanforumqfc = BigInt
type vorbis = number
type verify_object = number
type mapelement = number
type categorytype = number
type social_network = number
type hitmark = number
type package = number
type particle_effector = number
type type_65 = number
type particle_emitter = number
type plogtype = number
type unsigned_int = number
type skybox = number
type skydecor = number
type hash64 = BigInt
type inputtype = number
type struct = number
type dbrow = number
type type_75 = number
type type_76 = number
type type_77 = number
type type_78 = number
type type_79 = number
type type_80 = number
type type_81 = number
type type_83 = number
type type_84 = number
type type_85 = number
type type_86 = number
type type_87 = number
type type_88 = number
type gwc_platform = number
type type_90 = number
type type_91 = number
type type_92 = number
type type_93 = number
type bug_template = number
type billing_auth_flag = number
type account_feature_flag = number
type interface = number
type toplevelinterface = number
type overlayinterface = number
type clientinterface = number
type movespeed = number
type material = number
type seqgroup = number
type temp_hiscore = number
type temp_hiscore_length_type = number
type temp_hiscore_display_type = number
type temp_hiscore_contribute_result = number
type audiogroup = number
type audiomixbuss = number
type long = BigInt
type crm_channel = number
type http_image = number
type pop_up_display_behaviour = number
type poll = number
type type_115 = BigInt
type type_116 = BigInt
type pointlight = number
type player_group = number
type player_group_status = number
type player_group_invite_result = number
type player_group_modify_result = number
type player_group_join_or_create_result = number
type player_group_affinity_modify_result = number
type player_group_delta_type = number
type client_type = number
type telemetry_interval = number
type type_127 = number
type type_128 = number
type type_129 = number
type type_130 = number
type achievement = number
type stylesheet = number
type type_138 = number
type type_200 = number
type type_201 = number
type type_202 = number
type type_203 = number
type type_204 = number
type type_205 = number
type type_206 = number
type type_207 = number
type type_208 = number
type var_reference = number
type unknown_int = number
type unknown_long = BigInt
type unknown_string = string
type scriptref = number
type scriptsubref = number

// VM opcodes (scrambled_id -> canonical_id -> name)
declare function BRANCH(...args: any[]): any; // 643 -> 6
declare function BRANCH_NOT(...args: any[]): any; // 495 -> 7
declare function BRANCH_EQUALS(...args: any[]): any; // 929 -> 8
declare function BRANCH_LESS_THAN(...args: any[]): any; // 2103 -> 9
declare function BRANCH_GREATER_THAN(...args: any[]): any; // 1762 -> 10
declare function RETURN(...args: any[]): any; // 2134 -> 21
declare function BRANCH_LESS_THAN_OR_EQUALS(...args: any[]): any; // 1844 -> 31
declare function BRANCH_GREATER_THAN_OR_EQUALS(...args: any[]): any; // 2012 -> 32
declare function PUSH_INT_LOCAL(): type_501; // 1565 -> 33
declare function POP_INT_LOCAL(int0: type_501): any; // 1692 -> 34
declare function PUSH_STRING_LOCAL(): string; // 1198 -> 35
declare function POP_STRING_LOCAL(string0: string): any; // 1372 -> 36
declare function JOIN_STRING(...args: any[]): any; // 2255 -> 37
declare function GOSUB_WITH_PARAMS(...args: any[]): any; // 2109 -> 40
declare function PUSH_VAR(...args: any[]): any; // 1814 -> 42
declare function POP_VAR(...args: any[]): any; // 1460 -> 43
declare function push_array(int0: int): type_501; // 1468 -> 45
declare function pop_array(int0: int, int1: type_501): any; // 645 -> 46
declare function SWITCH(int0: type_501): any; // 2226 -> 51
declare function CC_CREATE(int0: component, int1: type_501, int2: int): any; // 1367 -> 150
declare function CC_DELETEALL(int0: component): any; // 2075 -> 152
declare function BASECOLOUR(int0: type_501, int1: int): any; // 1042 -> 404
declare function CC_SETPOSITION(int0: int, int1: int, int2: int, int3: int): any; // 276 -> 1000
declare function CC_SETSIZE(int0: int, int1: int, int2: type_501, int3: type_501): any; // 1612 -> 1001
declare function CC_SETHIDE(int0: boolean): any; // 309 -> 1003
declare function CC_SETCOLOUR(int0: int): any; // 945 -> 1101
declare function CC_SETFILL(int0: type_501): any; // 1581 -> 1102
declare function CC_SETTRANS(int0: int): any; // 1950 -> 1103
declare function CC_SETGRAPHIC(int0: graphic): any; // 640 -> 1105
declare function CC_SET2DANGLE(int0: int): any; // 1113 -> 1106
declare function CC_SETTILING(int0: boolean): any; // 1258 -> 1107
declare function CC_SETMODEL(int0: model): any; // 1394 -> 1108
declare function CC_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): any; // 335 -> 1109
declare function CC_SETMODELANIM(int0: seq): any; // 985 -> 1110
declare function CC_SETTEXT(string0: string): any; // 1371 -> 1112
declare function CC_SETTEXTFONT(int0: fontmetrics): any; // 339 -> 1113
declare function CC_SETTEXTALIGN(int0: int, int1: int, int2: int): any; // 12 -> 1114
declare function CC_SETTEXTSHADOW(int0: boolean): any; // 925 -> 1115
declare function CC_SETVFLIP(int0: boolean): any; // 1870 -> 1118
declare function CC_SETHFLIP(int0: boolean): any; // 1931 -> 1119
declare function CC_SETPLAYERMODEL_SELF(...args: any[]): any; // 560 -> 1211
declare function CC_SETOP(int0: int, string0: string): any; // 901 -> 1300
declare function CC_SETDRAGGABLE(int0: component, int1: int): any; // 419 -> 1301
declare function CC_SETDRAGRENDERBEHAVIOUR(int0: type_501): any; // 1924 -> 1302
declare function CC_SETDRAGDEADZONE(int0: int): any; // 449 -> 1303
declare function CC_SETDRAGDEADTIME(int0: type_501): any; // 698 -> 1304
declare function CC_SETOPBASE(string0: string): any; // 1786 -> 1305
declare function CC_SETONCLICK(int0: type_501, unknown: any): any; // 134 -> 1400
declare function CC_SETONHOLD(int0: type_501, unknown: any): any; // 519 -> 1401
declare function CC_SETONRELEASE(int0: type_501, unknown: any): any; // 552 -> 1402
declare function CC_SETONMOUSEOVER(int0: type_501, unknown: any): any; // 428 -> 1403
declare function CC_SETONMOUSELEAVE(int0: type_501, unknown: any): any; // 1332 -> 1404
declare function CC_SETONDRAG(int0: type_501, unknown: any): any; // 1424 -> 1405
declare function CC_SETONTIMER(int0: type_501, unknown: any): any; // 67 -> 1408
declare function CC_SETONOP(int0: type_501, unknown: any): any; // 602 -> 1409
declare function CC_SETONDRAGCOMPLETE(int0: type_501, unknown: any): any; // 13 -> 1410
declare function CC_SETONVARCTRANSMIT(int0: type_501, unknown: any): any; // 2194 -> 1428
declare function CC_GETX(): int; // 2198 -> 1500
declare function CC_GETY(): int; // 1301 -> 1501
declare function CC_GETLAYER(): component; // 1214 -> 1505
declare function CC_GETID(): int; // 1477 -> 1702
declare function IF_SETPOSITION(int0: int, int1: int, int2: int, int3: int, int4: component): any; // 1500 -> 2000
declare function IF_SETSIZE(int0: int, int1: int, int2: int, int3: int, int4: component): any; // 104 -> 2001
declare function IF_SETHIDE(int0: boolean, int1: component): any; // 141 -> 2003
declare function IF_SETNOCLICKTHROUGH(int0: type_501, int1: component): any; // 1355 -> 2005
declare function IF_SETSCROLLPOS(int0: int, int1: int, int2: component): any; // 458 -> 2100
declare function IF_SETCOLOUR(int0: int, int1: component): any; // 1224 -> 2101
declare function IF_SETFILL(int0: type_501, int1: type_501): any; // 382 -> 2102
declare function IF_SETTRANS(int0: int, int1: component): any; // 739 -> 2103
declare function IF_SETGRAPHIC(int0: graphic, int1: component): any; // 607 -> 2105
declare function IF_SETMODEL(int0: model, int1: component): any; // 1431 -> 2108
declare function IF_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): any; // 1030 -> 2109
declare function IF_SETMODELANIM(int0: seq, int1: component): any; // 2289 -> 2110
declare function IF_SETTEXT(string0: string, int0: number): any; // 1578 -> 2112
declare function IF_SETTEXTFONT(int0: fontmetrics, int1: component): any; // 1969 -> 2113
declare function IF_SETOUTLINE(int0: type_501, int1: component): any; // 190 -> 2116
declare function IF_SETGRAPHICSHADOW(int0: type_501, int1: component): any; // 2174 -> 2117
declare function IF_SETSCROLLSIZE(int0: int, int1: int, int2: component): any; // 110 -> 2120
declare function IF_SETMODELZOOM(int0: int, int1: component): any; // 253 -> 2123
declare function IF_SETPARAM_INT(int0: type_501, int1: int, int2: component): any; // 1316 -> 2127
declare function IF_SETOBJECT(int0: obj, int1: int, int2: component): any; // 660 -> 2200
declare function IF_SETNPCHEAD(int0: npc, int1: component): any; // 2220 -> 2201
declare function IF_SETOBJECT_NONUM(int0: obj, int1: int, int2: component): any; // 1378 -> 2205
declare function IF_SETOP(int0: int, string0: string, int1: number): any; // 1926 -> 2300
declare function IF_SETOPBASE(string0: string, int0: number): any; // 522 -> 2305
declare function IF_CLEAROPS(int0: component): any; // 106 -> 2307
declare function IF_SETOPCURSOR(int0: type_501, int1: type_501, int2: component): any; // 1284 -> 2309
declare function IF_SETONCLICK(int0: type_501, unknown: any, int1: number): any; // 2125 -> 2400
declare function IF_SETONMOUSELEAVE(int0: type_501, unknown: any, int1: number): any; // 2163 -> 2404
declare function IF_SETONTARGETLEAVE(int0: type_501, unknown: any, int1: number): any; // 656 -> 2406
declare function IF_SETONVARTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 1414 -> 2407
declare function IF_SETONTIMER(int0: type_501, unknown: any, int1: number): any; // 144 -> 2408
declare function IF_SETONOP(int0: type_501, unknown: any, int1: number): any; // 1587 -> 2409
declare function IF_SETONDRAGCOMPLETE(int0: type_501, unknown: any, int1: number): any; // 2003 -> 2410
declare function IF_SETONMOUSEREPEAT(int0: type_501, unknown: any, int1: number): any; // 840 -> 2412
declare function IF_SETONINVTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 630 -> 2414
declare function IF_SETONSTATTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 1707 -> 2415
declare function IF_SETONTARGETENTER(...args: any[]): any; // 1781 -> 2416
declare function IF_SETONSCROLLWHEEL(int0: type_501, unknown: any, int1: number): any; // 43 -> 2417
declare function IF_SETONMISCTRANSMIT(...args: any[]): any; // 22 -> 2422
declare function IF_SETONSUBCHANGE(...args: any[]): any; // 1867 -> 2424
declare function IF_SETONCAMFINISHED(int0: type_501, unknown: any, int1: number): any; // 1963 -> 2426
declare function IF_SETONVARCTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 2037 -> 2428
declare function IF_SETONVARCSTRTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 1259 -> 2429
declare function IF_SETONCLANSETTINGSTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 203 -> 2431
declare function IF_SETONVARCLANTRANSMIT(...args: any[]): any; // 846 -> 2433
declare function IF_GETX(int0: component): int; // 2290 -> 2500
declare function IF_GETY(int0: component): int; // 2239 -> 2501
declare function IF_GETWIDTH(int0: component): int; // 353 -> 2502
declare function IF_GETHEIGHT(int0: component): int; // 1041 -> 2503
declare function IF_GETLAYER(int0: component): component; // 604 -> 2505
declare function IF_GETSCROLLX(int0: component): int; // 1484 -> 2600
declare function IF_GETSCROLLY(int0: component): int; // 2291 -> 2601
declare function IF_GETTEXT(int0: component): string; // 1438 -> 2602
declare function IF_GETSCROLLWIDTH(int0: component): int; // 1939 -> 2603
declare function IF_GETSCROLLHEIGHT(int0: component): int; // 992 -> 2604
declare function IF_GETMODELZOOM(int0: component): int; // 2042 -> 2605
declare function IF_GETMODELANGLE_X(int0: component): int; // 1026 -> 2606
declare function IF_GETMODELANGLE_Z(int0: component): int; // 740 -> 2607
declare function IF_GETMODELANGLE_Y(int0: component): int; // 1667 -> 2608
declare function IF_GETTRANS(int0: component): int; // 191 -> 2609
declare function IF_GETMODELXOF(int0: number): number; // 1418 -> 2610
declare function IF_GETMODELYOF(int0: number): number; // 1671 -> 2611
declare function IF_GETGRAPHIC(int0: component): graphic; // 1881 -> 2612
declare function IF_GETNEXTSUBID(int0: component): int; // 2135 -> 2703
declare function IF_GETTARGETMASK(int0: component): int; // 114 -> 2800
declare function printmessage(string0: string): any; // 1501 -> 3100
declare function RESUME_OBJDIALOG(int0: obj): any; // 226 -> 3110
declare function MES_TYPED(int0: type_501, int1: type_501, string0: string): any; // 2168 -> 3114
declare function RESUME_HSLDIALOG(int0: int): any; // 1068 -> 3116
declare function SOUND_SYNTH(int0: type_501, int1: type_501, int2: int): any; // 1134 -> 3200
declare function SOUND_VORBIS_VOLUME(int0: vorbis, int1: type_501, int2: int, int3: type_501): any; // 188 -> 3206
declare function SOUND_VORBIS_RATE(int0: vorbis, int1: type_501, int2: type_501, int3: type_501, int4: int): any; // 2154 -> 3209
declare function CLIENTCLOCK(): int; // 1552 -> 3300
declare function INV_GETOBJ(int0: inv, int1: int): obj; // 2227 -> 3301
declare function INV_GETNUM(int0: inv, int1: int): int; // 1286 -> 3302
declare function INV_TOTAL(int0: inv, int1: obj): int; // 684 -> 3303
declare function INV_SIZE(int0: inv): int; // 115 -> 3304
declare function STAT_BASE(int0: stat): int; // 1946 -> 3306
declare function STAT_VISIBLE_XP(int0: stat): int; // 505 -> 3307
declare function COORD(): coordgrid; // 71 -> 3308
declare function COORDX(int0: coordgrid): int; // 1504 -> 3309
declare function COORDY(int0: coordgrid): int; // 2276 -> 3310
declare function COORDZ(int0: coordgrid): int; // 2045 -> 3311
declare function INVOTHER_GETOBJ(int0: inv, int1: int): obj; // 1586 -> 3313
declare function RUNENERGY_VISIBLE(): int; // 1699 -> 3321
declare function MAP_LANG(): int; // 2321 -> 3335
declare function MOVECOORD(int0: coordgrid, int1: int, int2: int, int3: int): coordgrid; // 920 -> 3336
declare function GET_MOUSEX(): int; // 1554 -> 3342
declare function GET_MOUSEY(): int; // 768 -> 3343
declare function enum_getvalue(...args: any[]): any; // 1138 -> 3408
declare function ENUM_GETOUTPUTCOUNT(int0: cs2enum): int; // 1825 -> 3411
declare function CLAN_GETCHATCOUNT(): int; // 584 -> 3612
declare function CLAN_GETCHATMINKICK(int0: int): [type_501, type_501]; // 826 -> 3616
declare function CLAN_GETCHATRANK(): int; // 2140 -> 3618
declare function CLAN_LEAVECHAT(...args: any[]): any; // 481 -> 3620
declare function ACTIVECLANCHANNEL_GETRANKKICK(): int; // 1622 -> 3753
declare function ACTIVECLANCHANNEL_GETUSERRANK(int0: int): int; // 1402 -> 3757
declare function ACTIVECLANCHANNEL_GETUSERSLOT(string0: string): int; // 2204 -> 3760
declare function ADD(int0: int, int1: int): int; // 1067 -> 4000
declare function SUB(int0: int, int1: int): int; // 2269 -> 4001
declare function MULTIPLY(int0: int, int1: int): int; // 1050 -> 4002
declare function DIVIDE(int0: int, int1: int): int; // 2328 -> 4003
declare function RANDOM(int0: int): int; // 1916 -> 4004
declare function RANDOMINC(int0: int): int; // 113 -> 4005
declare function TESTBIT(int0: int, int1: int): int; // 1454 -> 4010
declare function MODULO(int0: int, int1: int): int; // 369 -> 4011
declare function POW(int0: int, int1: int): int; // 44 -> 4012
declare function AND(int0: int, int1: int): int; // 968 -> 4014
declare function MIN(int0: int, int1: int): int; // 197 -> 4016
declare function MAX(int0: int, int1: int): int; // 1099 -> 4017
declare function SCALE(int0: int, int1: int, int2: int): int; // 1088 -> 4018
declare function RANDOM_SOUND_PITCH(int0: vorbis, int1: type_501, int2: type_501, int3: int, int4: type_501, int5: type_501): [vorbis, type_501, type_501, type_501, int]; // 150 -> 4019
declare function HSVTORGB(int0: int): int; // 1913 -> 4020
declare function strconcat(string0: string, string1: string): string; // 467 -> 4101
declare function LOWERCASE(string0: string): string; // 1166 -> 4103
declare function strcmp(string0: string, string1: string): int; // 2029 -> 4107
declare function PARAHEIGHT(string0: string, int0: fontmetrics, int1: number): int; // 2330 -> 4108
declare function STRING_LENGTH(string0: string): int; // 1949 -> 4117
declare function SUBSTRING(string0: string, int0: int, int1: number): string; // 695 -> 4118
declare function REMOVETAGS(string0: string): string; // 2211 -> 4119
declare function STRING_INDEXOF_STRING(string0: string, string1: string, int0: number): int; // 653 -> 4121
declare function TOSTRING_LOCALISED(int0: int, int1: type_501): string; // 662 -> 4124
declare function STRINGWIDTH(string0: string, int0: number): int; // 2034 -> 4125
declare function OC_NAME(int0: obj): string; // 1405 -> 4200
declare function item_getparam(...args: any[]): any; // 405 -> 4208
declare function struct_getparam(...args: any[]): any; // 198 -> 4500
declare function BAS_GETANIM_READY(int0: bas): seq; // 1426 -> 4600
declare function CHAT_GETFILTER_PUBLIC(...args: any[]): any; // 1328 -> 5000
declare function CHAT_SETFILTER(...args: any[]): any; // 385 -> 5001
declare function CHAT_GETFILTER_PRIVATE(): int; // 1541 -> 5005
declare function CHAT_GETFILTER_TRADE(int0: number, int1: number): any; // 2157 -> 5016
declare function CHAT_PLAYERNAME_UNFILTERED(): string; // 38 -> 5020
declare function WORLDMAP_GETMAPNAME(int0: maparea): string; // 1488 -> 5207
declare function WORLDMAP_JUMPTOSOURCECOORD(int0: coordgrid): any; // 996 -> 5214
declare function GETWINDOWMODE(): int; // 2193 -> 5306
declare function SPLINE_NEW(int0: type_501, int1: int): any; // 1409 -> 5405
declare function SPLINE_ADDPOINT(int0: type_501, int1: int, int2: coordgrid, int3: int, int4: coordgrid, int5: int, int6: type_501): any; // 1798 -> 5406
declare function SPLINE_LENGTH(int0: type_501): int; // 1493 -> 5407
declare function CAM_MOVETO(int0: number, int1: number, int2: number, int3: number): any; // 1403 -> 5500
declare function CAM_LOOKAT(int0: number, int1: number, int2: number, int3: number): any; // 1010 -> 5501
declare function CAM_MOVEALONG(int0: type_501, int1: int, int2: int, int3: int, int4: type_501, int5: int): any; // 2097 -> 5502
declare function CAM_RESET(...args: any[]): any; // 1037 -> 5503
declare function CAM_FORCEANGLE(int0: int, int1: int): any; // 1892 -> 5504
declare function CAM_FOLLOWCOORD(int0: coordgrid): any; // 966 -> 5511
declare function CAM_SMOOTHRESET(...args: any[]): any; // 346 -> 5512
declare function LOBBY_LEAVELOBBY(...args: any[]): any; // 242 -> 5616
declare function USERFLOWFLAGS(): [int, int]; // 1602 -> 5624
declare function LOGIN_CANCEL(...args: any[]): any; // 228 -> 5630
declare function DATE_MINUTES(): int; // 99 -> 6300
declare function DATE_MINUTES_FROMRUNEDAY(int0: int): int; // 2274 -> 6306
declare function WORLDLIST_PINGWORLDS(int0: type_501): any; // 676 -> 6509
declare function PUSH_CONSTANT_STRING(...args: any[]): any; // 641 -> 9001
declare function CAM2_REMOVEALLEFFECTS(...args: any[]): any; // 127 -> 10000
declare function NOTIFICATIONS_OPENSETTINGS(...args: any[]): any; // 1354 -> 10001
declare function AUTOSETUP_SETMIN(...args: any[]): any; // 325 -> 10002
declare function CANCEL_INTERFACE_DRAG(...args: any[]): any; // 878 -> 10003
declare function POP_INT_DISCARD(int0: type_501): any; // 1066 -> 10004
declare function STEAM_STORESTATS(): type_501; // 1730 -> 10005
declare function RESUME_COUNTDIALOG(string0: string): any; // 336 -> 10006
declare function FRIEND_DEL(string0: string): any; // 1513 -> 10007
declare function INTERFACE_SETPICKINGRADIUS(int0: type_501): any; // 631 -> 10008
declare function OBJSTACK_TYPE(int0: type_501): any; // 937 -> 10009
declare function IF_SENDTOFRONT(int0: component): any; // 812 -> 10010
declare function IF_SENDTOBACK(int0: component): any; // 1369 -> 10011
declare function MAP_PRELOAD(int0: coordgrid): any; // 1058 -> 10012
declare function IF_SETONVARTRANSMIT(int0: boolean): any; // 2308 -> 10013
declare function MINIMENU_CLOSE(...args: any[]): any; // 1644 -> 10014
declare function CAM2_REMOVEEFFECT(int0: type_501): any; // 451 -> 10015
declare function DEEPLINK_CLEAR_INDEX(int0: type_501): any; // 234 -> 10016
declare function CC_SETONDRAG(int0: type_501): any; // 1542 -> 10017
declare function CC_PAGEDCAROUSEL_SETDYNAMICPAGECOUNT(int0: type_501): any; // 1359 -> 10018
declare function CC_RADIALPROGRESSOVERLAY_SETVALUE(int0: type_501): any; // 867 -> 10019
declare function IF_CLOSESUBCLIENT(int0: component): any; // 37 -> 10020
declare function CUTSCENE2D_STOP(int0: type_501): any; // 220 -> 10021
declare function PUSH_VARBIT(): int; // 57 -> 10022
declare function POP_VARBIT(int0: int): any; // 1764 -> 10023
declare function PUSH_LONG_LOCAL(): BigInt; // 1103 -> 10024
declare function CC_SETPAUSETEXT(string0: string): any; // 1527 -> 10025
declare function CC_CLEAROPS(...args: any[]): any; // 741 -> 10026
declare function CAM2_ADDEFFECT_ZTILT(int0: type_501): type_501; // 767 -> 10027
declare function MAP_MEMBERS(): type_501; // 475 -> 10028
declare function CHAT_PLAYERNAME(): string; // 1709 -> 10029
declare function CAM2_SETCOLLISIONMODE(int0: type_501, int1: type_501): any; // 770 -> 10030
declare function ABORT_DIALOG(...args: any[]): any; // 2066 -> 10031
declare function CLIENTOPTION_SET(int0: int, int1: int): any; // 1046 -> 10032
declare function INT_TO_LONG(int0: int): BigInt; // 1059 -> 10033
declare function IF_SETMODELORTHOG(int0: type_501, int1: type_501): any; // 981 -> 10034
declare function CAM2_UPDATEEFFECT_ZTILT(int0: type_501, int1: int): any; // 1376 -> 10035
declare function CAM2_SETFIELDOFVIEW(int0: int, int1: int): any; // 1833 -> 10036
declare function IF_SETOBJECT_HIGHRES(int0: obj, int1: type_501): any; // 539 -> 10037
declare function IF_RADIALPROGRESSOVERLAY_SETVALUE(int0: type_501, int1: type_501): any; // 712 -> 10038
declare function CC_SETSUBTRACTINSETS(...args: any[]): any; // 785 -> 10039
declare function OPENURLRAW(string0: string, int0: number): any; // 2322 -> 10040
declare function IF_SETMOUSEOVERCURSOR(int0: type_501, int1: component): any; // 1842 -> 10041
declare function VIEWPORT_SETFOV(int0: type_501, int1: type_501): any; // 1547 -> 10042
declare function CC_SETOPCURSOR(int0: int, int1: type_501): any; // 333 -> 10043
declare function SHOP_OPENCATEGORIES(int0: type_501, int1: type_501): any; // 440 -> 10044
declare function CC_CHECK_SETBUTTONSIZE(...args: any[]): any; // 1089 -> 10045
declare function CC_CHECK_SETALIGNMENT(int0: number): any; // 2124 -> 10046
declare function enum_getstring(int0: type_501, int1: type_501): string; // 1642 -> 10047
declare function IF_HASSUB(int0: component): type_501; // 233 -> 10048
declare function cc_getparam(...args: any[]): any; // 1680 -> 10049
declare function BITCOUNT(int0: int): int; // 170 -> 10050
declare function IF_SETONCAMERAUPDATETRANSMIT(...args: any[]): any; // 2040 -> 10051
declare function IF_SETONDIALOGABORT(int0: type_501, unknown: any, int1: number): any; // 979 -> 10052
declare function SETDEFAULTCURSORS(...args: any[]): any; // 322 -> 10053
declare function OPENURL(string0: string, string1: string, int0: number): any; // 1123 -> 10054
declare function CC_RADIALPROGRESSOVERLAY_SET(int0: type_501, int1: type_501, int2: type_501): any; // 1560 -> 10055
declare function CC_RADIOGROUP_CLEAROPTIONS(...args: any[]): any; // 2061 -> 10056
declare function IF_TRIGGEROP(int0: component, int1: int, int2: int): any; // 1180 -> 10057
declare function IF_CALLONRESIZE(int0: component): any; // 2217 -> 10059
declare function IF_SET2DANGLE(int0: int, int1: component): any; // 435 -> 10060
declare function GET_COL_TAG(int0: int): string; // 542 -> 10061
declare function OC_MINIMENU_COLOUR(int0: obj): int; // 2072 -> 10062
declare function CHAT_LASTUID(): int; // 549 -> 10063
declare function inttostring(int0: int, int1: type_501): string; // 1021 -> 10064
declare function DATE_RUNEDAY_FROMDATE(int0: int, int1: int, int2: int): int; // 565 -> 10065
declare function CC_SETHELD(...args: any[]): any; // 1954 -> 10066
declare function LOBBY_ENTERLOBBYREPLY(): type_501; // 270 -> 10067
declare function IF_HASSUBMODAL(int0: component, int1: type_501): type_501; // 1696 -> 10068
declare function IF_HASSUBOVERLAY(int0: component, int1: overlayinterface): type_501; // 1968 -> 10069
declare function OC_COST(int0: obj): BigInt; // 105 -> 10070
declare function CC_CAROUSEL_SETSELECTED(...args: any[]): any; // 2278 -> 10071
declare function CC_CAROUSEL_SETTEXTENTRIES(int0: number): any; // 326 -> 10072
declare function CC_CAROUSEL_SETICONENTRIES(int0: number): any; // 295 -> 10073
declare function CC_RADIALPROGRESSOVERLAY_START(int0: type_501, int1: int): any; // 2013 -> 10074
declare function OR(int0: int, int1: int): int; // 1353 -> 10075
declare function npc_getparam(...args: any[]): any; // 406 -> 10076
declare function IF_GETHIDE(int0: component): boolean; // 1832 -> 10077
declare function DB_GETFIELDCOUNT(int0: dbrow, int1: type_501): int; // 1872 -> 10078
declare function IF_RADIALPROGRESSOVERLAY_SET(int0: type_501, int1: type_501, int2: type_501, int3: type_501): any; // 174 -> 10079
declare function ACTIVECLANSETTINGS_FIND_LISTENED(): type_501; // 1873 -> 10080
declare function PLAYER_GROUP_FIND(): type_501; // 615 -> 10082
declare function IF_SETNPCMODEL(int0: npc, int1: component): any; // 46 -> 10083
declare function OPENURL_SHIM(string0: string, string1: string, string2: string, int0: number): any; // 267 -> 10084
declare function CC_CHECK_SET(int0: boolean): any; // 613 -> 10085
declare function CC_SETFEEDBACKMODE(int0: type_501): any; // 2331 -> 10086
declare function CC_SETENABLED(int0: boolean): any; // 1601 -> 10087
declare function STAT_VISIBLE_XP_ACTUAL(int0: stat): int; // 1990 -> 10088
declare function IGNORE_DEL(string0: string): any; // 1865 -> 10089
declare function CC_INPUT_SETUP(int0: type_501, int1: type_501, int2: type_501): any; // 1694 -> 10090
declare function SHOP_APPLYPENDINGTRANSACTIONS(...args: any[]): any; // 657 -> 10091
declare function IF_GETTOP(): type_501; // 1684 -> 10092
declare function STAT(int0: stat): int; // 755 -> 10093
declare function dbrow_getfield(...args: any[]): any; // 1805 -> 10094
declare function IF_LIST_ADDENTRY(int0: type_501, string0: string, int1: number): type_501; // 1909 -> 10095
declare function IF_RADIALPROGRESSOVERLAY_START(int0: type_501, int1: int, int2: type_501): any; // 1648 -> 10096
declare function IF_SETONRESIZE(int0: type_501, unknown: any, int1: number): any; // 1406 -> 10097
declare function cc_setparam(int0: type_501, int1: type_501): any; // 877 -> 10098
declare function db_find_with_count(int0: type_501, int1: type_501, int2: type_501): int; // 142 -> 10100
declare function IF_SETONMOUSEOVER(int0: type_501, unknown: any, int1: number): any; // 646 -> 10101
declare function IF_FIND(int0: component): type_501; // 2251 -> 10102
declare function FEDERATED_LOGIN(int0: type_501, int1: type_501): any; // 268 -> 10103
declare function IF_GETMODELYOF(int0: type_501): any; // 29 -> 10104
declare function CC_SETNOCLICKTHROUGH(int0: boolean): any; // 196 -> 10105
declare function ACTIVECLANCHANNEL_FIND_AFFINED(int0: type_501): any; // 1078 -> 10106
declare function CC_SETONMOUSEREPEAT(int0: type_501, unknown: any): any; // 1339 -> 10107
declare function DATE_RUNEDAY(): int; // 211 -> 10108
declare function GETDEFAULTWINDOWMODE(int0: int, int1: int, int2: int, int3: int): type_501; // 1979 -> 10109
declare function MAP_LOADINGSCREEN_SETTRIGGERPERCENT(int0: type_501, int1: type_501): any; // 773 -> 10110
declare function IF_SETPAUSETEXT(string0: string, int0: number): any; // 390 -> 10111
declare function dbrow_findnext(...args: any[]): any; // 1433 -> 10112
declare function DB_FIND(int0: number): any; // 402 -> 10113
declare function IF_SETPARAM_STRING(int0: type_501, string0: string, int1: number): any; // 1938 -> 10114
declare function CC_DELETE(...args: any[]): any; // 1592 -> 10115
declare function CC_FIND(int0: component, int1: int): type_501; // 1338 -> 10116
declare function CC_RESUME_PAUSEBUTTON(...args: any[]): any; // 939 -> 10117
declare function CC_SETOUTLINE(int0: type_501): any; // 1345 -> 10118
declare function RESUME_STRINGDIALOG(string0: string): any; // 293 -> 10119
declare function CLIENTTYPE(): type_501; // 738 -> 10120
declare function IF_GETPARENTLAYER(int0: component): component; // 897 -> 10121
declare function SETDEFAULTCURSORS(int0: type_501, int1: type_501): any; // 2317 -> 10122
declare function CAM2_GETCONTROLMODE(): type_501; // 180 -> 10123
declare function URLENCODE(string0: string): string; // 1357 -> 10124
declare function CHAT_SENDPUBLIC(string0: string): any; // 2041 -> 10125
declare function CHAT_SETMODE(int0: int): any; // 1580 -> 10126
declare function CLANFORUMQFC_TOSTRING(string0: string, long0: BigInt): [string, string]; // 50 -> 10127
declare function CC_BUTTON_SETTOGGLED(int0: boolean): any; // 1526 -> 10128
declare function CC_BUTTON_SETCANTOGGLE(int0: type_501): any; // 1849 -> 10129
declare function PLAYERCOUNTRY(): type_501; // 2325 -> 10130
declare function WORLDMAP_GETCONFIGORIGIN(int0: maparea): coordgrid; // 2091 -> 10131
declare function CC_PAGEDLAYER_SETPAGELABELS(int0: type_501): any; // 862 -> 10132
declare function CC_PAGEDLAYER_SETDYNAMICPAGECOUNT(int0: type_501): any; // 1878 -> 10133
declare function CC_PAGEDLAYER_SETPAGEICONS(int0: type_501): any; // 182 -> 10134
declare function IF_CRMVIEW_INIT(): boolean; // 1399 -> 10135
declare function CLANPROFILE_FIND(): type_501; // 486 -> 10136
declare function CC_SCROLLBAR_SETUP(int0: type_501, int1: type_501, int2: type_501): any; // 1291 -> 10137
declare function CC_SCROLLBAR_SETVISIBLE(int0: type_501): any; // 1822 -> 10138
declare function CLIENTOPTION_GET(int0: int): int; // 1788 -> 10139
declare function KEYHELD_ALT(): boolean; // 2261 -> 10140
declare function IF_OPENSUBCLIENT(int0: component, int1: type_501): any; // 809 -> 10141
declare function HIGHLIGHT_SET_CATEGORY_COLOUR(...args: any[]): any; // 1185 -> 10142
declare function HIGHLIGHT_SET_CATEGORY_MODE(int0: number, int1: number): any; // 221 -> 10143
declare function OS_PHYSICALMEMORYSIZE(int0: type_501, int1: type_501, string0: string): [type_501, type_501, string, number]; // 89 -> 10144
declare function CC_SETONVARTRANSMIT(int0: type_501, unknown: any): any; // 1741 -> 10145
declare function PLAYERMEMBER(): boolean; // 849 -> 10146
declare function INV_TOTALCAT(int0: inv, int1: type_501): int; // 1244 -> 10147
declare function WORLDMAP_ISLOADED(): type_501; // 33 -> 10149
declare function CC_FINDBYCATEGORY(int0: component, int1: int, int2: int): type_501; // 1973 -> 10150
declare function IF_CLOSE(...args: any[]): any; // 1920 -> 10151
declare function IF_SETENABLED(int0: boolean, int1: component): any; // 1782 -> 10152
declare function LONG_BRANCH_EQUALS(...args: any[]): any; // 663 -> 10153
declare function enum_getreverseindex(int0: type_501, int1: type_501, int2: cs2enum, int3: type_501, int4: int): type_501; // 2246 -> 10154
declare function INV_GETVAR(int0: inv, int1: int, int2: type_501): int; // 1757 -> 10155
declare function DETAIL_LOGINVOL(...args: any[]): any; // 1568 -> 10156
declare function DETAIL_SPEECHVOL(...args: any[]): any; // 964 -> 10157
declare function DETAIL_BGSOUNDVOL(...args: any[]): any; // 460 -> 10158
declare function DETAIL_MUSICVOL(...args: any[]): any; // 2166 -> 10159
declare function DETAIL_SOUNDVOL(int0: number): any; // 1209 -> 10160
declare function CC_DRAGPICKUP(int0: int, int1: int): any; // 989 -> 10161
declare function CC_GETHEIGHT(): int; // 2065 -> 10162
declare function WORLDLIST_FETCH(): type_501; // 314 -> 10163
declare function TOGGLEBIT(): type_501; // 492 -> 10164
declare function CAM2_SETPOSITIONANGULARINTERPOLATION(int0: type_501): any; // 1704 -> 10165
declare function CAM2_SETLINEARMOVEMENTMODE(int0: type_501): any; // 2130 -> 10166
declare function IF_GET2DANGLE(int0: component): int; // 444 -> 10167
declare function CREATE_SUGGEST_NAME_REQUEST(...args: any[]): any; // 1407 -> 10168
declare function GET_OBJ_BOUNDING_BOX(): [type_501, int, int, int, int]; // 302 -> 10169
declare function GET_OBJ_SCREEN_POSITION(int0: int): [int, int, int]; // 1625 -> 10170
declare function GET_OBJ_OVERLAY_HEIGHT(): int; // 685 -> 10171
declare function GET_ENTITY_BOUNDING_BOX(): [type_501, int, int, int, int]; // 1434 -> 10172
declare function GET_ENTITY_SCREEN_POSITION(int0: int): [int, int, int]; // 1929 -> 10173
declare function GET_ENTITY_OVERLAY_HEIGHT(): int; // 2030 -> 10174
declare function GET_LOC_BOUNDING_BOX(): [type_501, int, int, int, int]; // 2018 -> 10175
declare function GET_LOC_SCREEN_POSITION(int0: int): [int, int, int]; // 601 -> 10176
declare function GET_LOC_OVERLAY_HEIGHT(): int; // 88 -> 10177
declare function OC_ALLOWSPLACEHOLDER(int0: obj): type_501; // 1734 -> 10178
declare function STAFFMODLEVEL(): type_501; // 987 -> 10180
declare function NOTIFICATIONS_INIT(...args: any[]): any; // 796 -> 10181
declare function CC_PAGEDCAROUSEL_SETSELECTED(int0: type_501, int1: type_501): any; // 2184 -> 10182
declare function CC_PAGEDLAYER_SETACTIVEPAGE(int0: type_501, int1: type_501): any; // 484 -> 10183
declare function SOUND_GROUP_STOP(int0: type_501): any; // 1421 -> 10184
declare function IF_BUTTON_SETTOGGLED(int0: type_501, int1: component): any; // 21 -> 10185
declare function LOBBY_ENTERGAMEREPLY(): int; // 2303 -> 10186
declare function IF_SETRETEX(int0: int, int1: material, int2: material, int3: component): any; // 730 -> 10187
declare function ACTIVECLANCHANNEL_FIND_LISTENED(): type_501; // 1120 -> 10188
declare function IF_SET2DANGLE(): type_501; // 1362 -> 10189
declare function LOGIN_REPLY(): int; // 393 -> 10190
declare function CC_CREATECHILD(int0: type_501, int1: int, int2: int): any; // 1959 -> 10191
declare function mec_getparam(...args: any[]): any; // 70 -> 10192
declare function IF_SETOPKEYIGNOREHELD(int0: type_501, int1: component): any; // 774 -> 10193
declare function IF_SETOPKEY(int0: int, int1: type_501, int2: type_501, int3: component): any; // 891 -> 10194
declare function ACHIEVEMENT_FINDGRACED(): int; // 514 -> 10195
declare function IF_SETASPECT(int0: type_501, int1: type_501, int2: component): any; // 512 -> 10196
declare function IF_SETONBUTTONCLICK(int0: number, unknown: any, int1: number): any; // 1107 -> 10197
declare function CAM2_SETDEPTHPLANES(int0: type_501, int1: type_501): any; // 344 -> 10198
declare function INV_FREESPACE(int0: inv): int; // 1783 -> 10199
declare function CC_SETPARAM_INT(int0: type_501, int1: int): any; // 2267 -> 10200
declare function CC_GETTEXT(): string; // 1090 -> 10201
declare function CC_GETWIDTH(): int; // 308 -> 10202
declare function CC_SETNPCHEAD(int0: npc): any; // 1158 -> 10205
declare function TARGETMODE_CANCEL(...args: any[]): any; // 722 -> 10206
declare function TARGETMODE_ACTIVE(): type_501; // 1991 -> 10207
declare function WORLDLIST_SPECIFIC_THISWORLD(): int; // 1390 -> 10208
declare function PLATFORMTYPE(): type_501; // 1662 -> 10209
declare function MAP_WORLD(): int; // 714 -> 10210
declare function HAS_NXT(): type_501; // 1637 -> 10211
declare function FRIEND_GETWORLD(int0: int): int; // 1124 -> 10212
declare function CLAN_GETCHATUSERWORLD(int0: int): int; // 997 -> 10213
declare function IF_SETONTARGETENTER(int0: type_501, string0: string, int1: number): any; // 1392 -> 10214
declare function OS_DRIVER_VENDOR(): int; // 1149 -> 10215
declare function SHOP_PURCHASEITEM(string0: string): any; // 889 -> 10216
declare function CC_CLEARSCRIPTHOOKS(...args: any[]): any; // 1751 -> 10217
declare function INV_TOTALPARAM(int0: inv, int1: type_501): int; // 1799 -> 10218
declare function WORLDMAP_DISABLEELEMENTCATEGORY(int0: type_501, int1: type_501): any; // 1212 -> 10219
declare function IF_CHECK_SET(int0: boolean, int1: type_501): any; // 30 -> 10220
declare function VIEWPORT_CLAMPFOV(int0: type_501, int1: type_501, int2: type_501, int3: type_501): any; // 1650 -> 10221
declare function VIEWPORT_SETZOOM(int0: int, int1: int): any; // 547 -> 10222
declare function IF_SETONFRIENDTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 1036 -> 10223
declare function CC_RADIOGROUP_SETOPTIONS(int0: type_501): any; // 488 -> 10224
declare function CC_RADIOGROUP_SETSELECTIONLIMITS(int0: type_501, int1: type_501): any; // 1266 -> 10225
declare function RUNWEIGHT_VISIBLE(): int; // 1427 -> 10226
declare function STEAM_SETACHIVEMENT(string0: string, int0: type_501, int1: number): type_501; // 5 -> 10227
declare function IF_SETONCLANCHANNELTRANSMIT(int0: number, unknown: any, int1: number): any; // 1459 -> 10228
declare function IF_SETONCLANTRANSMIT(int0: number, unknown: any, int1: number): any; // 1054 -> 10229
declare function WORLDMAP_3DVIEW_ACTIVE(int0: type_501): any; // 1393 -> 10230
declare function CC_SETONMOUSEOVER(): type_501; // 2326 -> 10231
declare function SETBIT(int0: int, int1: int): int; // 468 -> 10232
declare function CLEARBIT(int0: int, int1: int): int; // 764 -> 10233
declare function IF_DELETEALLNESTED(int0: type_501, int1: type_501, int2: type_501): type_501; // 63 -> 10234
declare function GENDER(): int; // 1282 -> 10235
declare function ACHIEVEMENT_FINDCATEGORY(int0: category): int; // 1440 -> 10236
declare function POP_LONG_LOCAL(long0: BigInt): any; // 667 -> 10237
declare function ADD_LONG(long0: BigInt, long1: BigInt): BigInt; // 1594 -> 10238
declare function BASEIDKIT(int0: type_501, int1: idkit): any; // 574 -> 10239
declare function enum_getreversecount(int0: type_501, int1: cs2enum, int2: type_501): int; // 187 -> 10240
declare function QUEST_GETDIFFICULTY(int0: quest): int; // 856 -> 10241
declare function IF_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material, int10: component): any; // 618 -> 10242
declare function OC_IOP(int0: obj, int1: type_501): string; // 330 -> 10243
declare function enum_hasoutput(int0: type_501, int1: cs2enum, int2: type_501): type_501; // 378 -> 10244
declare function QUEST_GETNAME(int0: quest): string; // 1628 -> 10245
declare function ACHIEVEMENT_FINDSUBCAT(int0: category, int1: category): int; // 1189 -> 10246
declare function IF_SET_GAMESCREEN_ENABLED(int0: type_501): any; // 350 -> 10247
declare function CC_GETINVCOUNT(): int; // 1241 -> 10248
declare function OC_UNCERT(int0: obj): obj; // 20 -> 10249
declare function SEQLENGTH(int0: seq): int; // 2176 -> 10250
declare function PARAWIDTH(string0: string, int0: fontmetrics, int1: number): int; // 1247 -> 10251
declare function CC_SETSCROLLPOS(int0: int, int1: int): any; // 2313 -> 10252
declare function OC_WEARPOS(int0: obj): int; // 157 -> 10253
declare function NOTIFICATIONS_SENDLOCAL(string0: string, string1: string, int0: number, int1: number): type_501; // 2300 -> 10254
declare function IF_SETONRELEASE(...args: any[]): any; // 2299 -> 10255
declare function RESUME_CLANFORUMQFCDIALOG(string0: string): any; // 2142 -> 10256
declare function WORLDMAP_LISTELEMENT_START(int0: type_501, int1: int, int2: type_501, int3: type_501): type_501; // 688 -> 10257
declare function IF_SETMAXLINES(int0: type_501, int1: component): any; // 367 -> 10258
declare function IF_CREATENESTED(int0: type_501, int1: int, int2: int, int3: int, int4: int, int5: component): type_501; // 1758 -> 10260
declare function IF_SETTEXTALIGN(int0: int, int1: int, int2: int, int3: component): any; // 464 -> 10261
declare function quest_getparam(...args: any[]): any; // 2293 -> 10262
declare function TEXT_SWITCH(int0: boolean, string0: string, string1: string): string; // 504 -> 10263
declare function CREATE_NAME_AVAILABLEREQUEST(string0: string): any; // 1227 -> 10264
declare function IF_SETONKEY(int0: type_501, unknown: any, int1: number): any; // 1520 -> 10265
declare function LOGIN_RESETREPLY(...args: any[]): any; // 1690 -> 10266
declare function LOGIN_INPROGRESS(): number; // 895 -> 10267
declare function CC_SLIDER_SETUPENUM(int0: type_501): any; // 372 -> 10268
declare function CC_SLIDER_SETUP(int0: type_501, int1: type_501, int2: type_501, int3: type_501, int4: type_501): any; // 1858 -> 10269
declare function IGNORE_TEST(string0: string): type_501; // 2025 -> 10270
declare function ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0: achievement): int; // 1119 -> 10271
declare function ACHIEVEMENT_IS_CHECKLIST(int0: achievement): type_501; // 526 -> 10272
declare function CAM2_GETPOSITIONENTITY_ANGLEOFFSETS(): [int, int]; // 2156 -> 10273
declare function CAM2_GETPOSITIONMODE(): type_501; // 1087 -> 10274
declare function DATE_RUNEDAY_TODATE(int0: int): [int, int, int]; // 16 -> 10275
declare function REBOOTTIMER(): int; // 1038 -> 10276
declare function CC_SETMAXLINES(int0: int): any; // 845 -> 10277
declare function CC_MODELGROUP_GETCAMERAYAWPITCHROLL(int0: fontmetrics): [int, type_501, type_501, type_501, type_501]; // 2059 -> 10278
declare function WORLDMAP_DISABLETEXTSIZE(int0: type_501, int1: type_501): any; // 373 -> 10279
declare function WORLDMAP_DISABLETYPE(int0: type_501, int1: type_501): any; // 311 -> 10280
declare function IGNORE_GETNAME_UNFILTERED(...args: any[]): any; // 1322 -> 10281
declare function SETWALKMARKER(int0: type_501, int1: type_501): any; // 176 -> 10282
declare function IF_RESUME_PAUSEBUTTON(int0: type_501): any; // 575 -> 10283
declare function CAM2_SETPOSITIONENTITY_NPC(...args: any[]): any; // 1062 -> 10284
declare function CAM2_SETLOOKATENTITY_NPC(int0: number, int1: number, int2: number, int3: number): any; // 1364 -> 10285
declare function CLAN_GETCHATDISPLAYNAME(): string; // 735 -> 10286
declare function FRIEND_PLATFORM(int0: int): type_501; // 794 -> 10287
declare function CC_SETONCLICKREPEAT(int0: number, unknown: any): any; // 1196 -> 10288
declare function CC_GETGRAPHIC(): graphic; // 1323 -> 10289
declare function IF_SETDRAGGABLE(int0: component, int1: type_501, int2: component): any; // 2175 -> 10290
declare function CC_SETPARAM_STRING(int0: type_501, string0: string): any; // 1217 -> 10291
declare function IF_SETPLAYERMODEL_SELF(int0: type_501): any; // 2004 -> 10292
declare function FEDERATED_LOGIN_STATUS(): int; // 1877 -> 10293
declare function SSO_AVAILABLE(): type_501; // 395 -> 10294
declare function CAM2_ADDEFFECT_SHAKE(int0: type_501, int1: type_501, int2: type_501): type_501; // 781 -> 10295
declare function STAT_BASE_ACTUAL(int0: stat): int; // 321 -> 10296
declare function CC_GETCOLOUR(): int; // 263 -> 10297
declare function IF_CREATECHILD(int0: type_501, int1: int, int2: int, int3: component): any; // 1738 -> 10298
declare function AUTOSETUP_DOSETUP(): type_501; // 2074 -> 10299
declare function STOCKMARKET_ISOFFEREMPTY(int0: int, int1: type_501): type_501; // 1794 -> 10300
declare function CC_SETMOUSEOVERCURSOR(int0: type_501): any; // 166 -> 10301
declare function PLAYER_GROUP_MEMBER_GET_STATUS(int0: int): type_501; // 737 -> 10302
declare function IF_SETRECOL(int0: type_501, int1: type_501, int2: int, int3: component): any; // 1118 -> 10303
declare function USERDETAIL_QUICKCHAT(): type_501; // 2312 -> 10305
declare function DETAILGET_LOGINVOL(): type_501; // 1532 -> 10306
declare function DETAILGET_SPEECHVOL(...args: any[]): any; // 943 -> 10307
declare function DETAILGET_BGSOUNDVOL(...args: any[]): any; // 1886 -> 10308
declare function DETAILGET_MUSICVOL(...args: any[]): any; // 928 -> 10309
declare function DETAILGET_SOUNDVOL(...args: any[]): any; // 2200 -> 10310
declare function LOBBY_ENTERGAME(string0: string, int0: number): any; // 1370 -> 10311
declare function ACTIVECLANSETTINGS_GETAFFINEDCOUNT(): int; // 1678 -> 10312
declare function CC_GETINVOBJECT(): obj; // 609 -> 10313
declare function OC_MEMBERS(int0: obj): int; // 680 -> 10314
declare function CC_SETOBJECT_HIGHRES(int0: obj): any; // 1908 -> 10315
declare function SHOP_REQUESTDATA(...args: any[]): any; // 585 -> 10316
declare function IF_GETFONTMETRICS(int0: component): fontmetrics; // 876 -> 10317
declare function CC_RADIOGROUP_SETOPTIONSELECTED(int0: int, int1: type_501, int2: type_501): type_501; // 1073 -> 10318
declare function AUTOSETUP_GETLEVEL(): type_501; // 2123 -> 10319
declare function CC_GETHIDE(): boolean; // 592 -> 10320
declare function LONG_BRANCH_GREATER_THAN(...args: any[]): any; // 412 -> 10321
declare function SUB_LONG(long0: BigInt, long1: BigInt): BigInt; // 1947 -> 10322
declare function IF_GETNEXTCATEGORYSUBID(int0: int, int1: component): int; // 356 -> 10323
declare function WORLDMAP_GETDISPLAYCOORD(int0: var_reference): int; // 324 -> 10324
declare function RESEND_UID_PASSPORT_REQUEST(...args: any[]): any; // 2 -> 10325
declare function CC_GETMODELZOOM(): int; // 2309 -> 10326
declare function CC_GETMODELANGLE_Z(): number; // 1795 -> 10327
declare function CC_GETMODELANGLE_Y(): int; // 745 -> 10328
declare function CC_GETMODELANGLE_X(...args: any[]): any; // 580 -> 10329
declare function CC_GETMODELYOF(): int; // 1930 -> 10330
declare function CC_GETMODELXOF(): number; // 2280 -> 10331
declare function MINIMENUOPEN(int0: component, int1: type_501): type_501; // 261 -> 10332
declare function IF_SETDRAGDEADTIME(...args: any[]): any; // 842 -> 10333
declare function IF_SETDRAGDEADZONE(int0: number, int1: number): any; // 502 -> 10334
declare function ACTIVECLANCHANNEL_GETUSERWORLD(int0: int): int; // 72 -> 10335
declare function CC_GETDYNAMICLAYER(): type_501; // 399 -> 10336
declare function CC_DELETEALLNESTED(...args: any[]): any; // 1313 -> 10337
declare function CC_GETOPBASE(): string; // 2084 -> 10338
declare function MARKETING_INITATTRIBUTION(...args: any[]): any; // 518 -> 10339
declare function MARKETING_INITANALYTICS(...args: any[]): any; // 924 -> 10340
declare function OC_HASVAROBJ(int0: obj): type_501; // 2147 -> 10341
declare function CLAN_JOINCHAT(string0: string): any; // 2207 -> 10342
declare function SHOP_PURCHASEITEMSTATUS(): type_501; // 343 -> 10343
declare function IF_SETONHORIZONTALSWIPE(int0: type_501, unknown: any, int1: number): any; // 2113 -> 10344
declare function IF_LIST_SETDROPDOWNNUMENTRIES(int0: number, int1: number): any; // 1528 -> 10345
declare function STYLESHEET_GET_VALUE(int0: stylesheet, string0: string, int1: number): int; // 235 -> 10346
declare function IF_GETSTYLESHEET(int0: component): type_501; // 271 -> 10347
declare function IF_LIST_SETSELECTIONLIMIT(...args: any[]): any; // 1234 -> 10348
declare function LONG_BRANCH_GREATER_THAN_OR_EQUALS(...args: any[]): any; // 886 -> 10349
declare function INV_STOCKBASE(int0: type_501, int1: type_501): type_501; // 1192 -> 10350
declare function ACHIEVEMENT_SUBCAT(int0: achievement): category; // 1993 -> 10351
declare function ACHIEVEMENT_CATEGORY(int0: achievement): category; // 535 -> 10352
declare function CC_SETCHILDSPACING(...args: any[]): any; // 1147 -> 10353
declare function CC_PANEL_SETISVERTICAL(int0: number): any; // 1040 -> 10354
declare function FULLSCREEN_GETMODE(int0: int): [int, int]; // 1404 -> 10355
declare function OC_CATEGORY(int0: obj): category; // 1646 -> 10356
declare function CC_SETOPTKEYIGNOREHELD(...args: any[]): any; // 1039 -> 10357
declare function CC_SETOPTKEY(int0: int, int1: int): any; // 371 -> 10358
declare function IF_SETONVERTICALSWIPE(int0: type_501, unknown: any, int1: number): any; // 2301 -> 10359
declare function POP_STRING_DISCARD(string0: string): any; // 1075 -> 10360
declare function IF_SETONPLAYERGROUPTRANSMIT(...args: any[]): any; // 2173 -> 10361
declare function QUIT(...args: any[]): any; // 2132 -> 10362
declare function DB_GETROWTABLE(int0: dbrow): type_501; // 2197 -> 10363
declare function IF_SETPLAYERHEAD_SELF(int0: type_501, int1: type_501): type_501; // 2096 -> 10364
declare function VIDEO_ADVERT_FORCE_REMOVE(...args: any[]): any; // 1739 -> 10365
declare function CC_SETOBJECT_ALWAYSNUM(int0: obj, int1: int): any; // 1898 -> 10366
declare function CC_SETOBJECT_NONUM(int0: obj, int1: int): any; // 1561 -> 10367
declare function CC_SETOBJECT(int0: obj, int1: int): any; // 1745 -> 10368
declare function APPLET_HASFOCUS(): type_501; // 158 -> 10369
declare function CAM2_SETPOSITIONPOINTCOLLISION(int0: type_501): any; // 628 -> 10370
declare function MULTIPLY_LONG(long0: BigInt, long1: BigInt): BigInt; // 717 -> 10371
declare function CC_LIST_CLEARSELECTION(...args: any[]): any; // 1335 -> 10372
declare function IF_SETVFLIP(int0: type_501, int1: component): any; // 835 -> 10373
declare function IF_GETMODEL(int0: type_501): model; // 2133 -> 10374
declare function LOBBY_ENTERLOBBY_SSO(string0: string, int0: number): any; // 1100 -> 10375
declare function IF_SETONHOOK46(...args: any[]): any; // 459 -> 10376
declare function CC_GETTRANS(): int; // 413 -> 10378
declare function CC_GRID_SETLAYOUTPARAMS(int0: number, int1: number, int2: number): any; // 1274 -> 10379
declare function IF_SETFEEDBACKMODE(...args: any[]): any; // 922 -> 10380
declare function POP_INT_DISCARD(...args: any[]): any; // 1013 -> 10381
declare function ACTIVECLANSETTINGS_GETAFFINEDMUTED(int0: number): any; // 1183 -> 10382
declare function CC_SETOPTKEYRATE(int0: type_501, int1: type_501): any; // 403 -> 10383
declare function CC_COMBO_CLEARENTRIES(...args: any[]): any; // 752 -> 10384
declare function IF_SETONDROPDOWNSELECT(int0: type_501, string0: string, int1: number): type_501; // 1654 -> 10385
declare function WORLDMAP_CLOSEMAP(...args: any[]): any; // 941 -> 10386
declare function IF_CLEARSCRIPTHOOKS(int0: component): any; // 183 -> 10387
declare function IF_SETONDRAG(int0: type_501, unknown: any, int1: number): any; // 1636 -> 10388
declare function MAX_LONG(long0: BigInt, long1: BigInt): BigInt; // 1150 -> 10389
declare function FORMATMINIMENU(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): any; // 1102 -> 10390
declare function IF_LIST_SETENTRIES(int0: type_501, int1: component): any; // 1750 -> 10391
declare function CC_SETONDROPDOWNSELECT(int0: number, unknown: any): any; // 280 -> 10392
declare function SCALE_LONG(long0: BigInt, long1: BigInt, long2: BigInt): BigInt; // 703 -> 10393
declare function COS_DEG(int0: number): [number, number, number]; // 2068 -> 10395
declare function SIN_DEG(int0: number, int1: number, int2: number): any; // 1096 -> 10396
declare function UI_GETDYNID(int0: int): int; // 1992 -> 10397
declare function UI_GETCATEGORY(int0: int): int; // 2077 -> 10398
declare function COORDZ_FINE(): number; // 673 -> 10399
declare function COORDX_FINE(string0: string): any; // 2032 -> 10400
declare function MOVECOORD_FINE(string0: string, int0: number, int1: number, int2: number, int3: number): any; // 1982 -> 10401
declare function COORDY_FINE(string0: string, int0: number, int1: number, int2: number, string1: string): any; // 123 -> 10402
declare function COORD_GRIDTOFINE(int0: coordgrid, int1: type_501): string; // 1700 -> 10403
declare function IF_SETPLAYERHEAD_SELF(int0: type_501): type_501; // 247 -> 10404
declare function DETAIL_WATERDETAIL_HIGH(int0: type_501, int1: type_501, int2: type_501): type_501; // 723 -> 10405
declare function IF_SETTEXTANTIMACRO(int0: type_501, int1: component): any; // 2195 -> 10406
declare function CC_GETTARGETMASK(): int; // 2294 -> 10407
declare function PLAYER_GROUP_GET_OWNER_SLOT(int0: int): [type_501, type_501]; // 154 -> 10408
declare function CC_NPC_SETCUSTOMRETEX(int0: type_501, int1: type_501): any; // 976 -> 10409
declare function SETBIT_RANGE_TOINT(int0: int, int1: int, int2: type_501, int3: type_501): int; // 1051 -> 10410
declare function LONG_BRANCH_LESS_THAN(...args: any[]): any; // 224 -> 10411
declare function DIVIDE_LONG(long0: BigInt, long1: BigInt): BigInt; // 1330 -> 10412
declare function IGNORE_ADD_TEMP(string0: string): any; // 341 -> 10413
declare function FRIEND_TEST(string0: string): type_501; // 1308 -> 10414
declare function COMLEVEL_ACTIVE(): int; // 1305 -> 10415
declare function VIEWPORT_GETBOUNDS(): [int, int, int, int]; // 1693 -> 10416
declare function TTV_LIVESTREAMS_UPDATE(): type_501; // 483 -> 10417
declare function IF_ADDGRAPHIC(int0: type_501, int1: graphic, int2: type_501): any; // 162 -> 10418
declare function FRIEND_ADD(string0: string): any; // 1854 -> 10419
declare function SSO_LOGOUT(...args: any[]): any; // 181 -> 10420
declare function DATE_YEAR(): int; // 163 -> 10421
declare function OC_CERT(int0: obj): obj; // 1496 -> 10422
declare function IF_SETSUBTRACTINSETS(int0: number, int1: number): any; // 1773 -> 10423
declare function WORLDMAP_GETZOOM(): number; // 1653 -> 10424
declare function WORLDMAP_SETZOOM(int0: number): any; // 1233 -> 10425
declare function PLAYER_GROUP_MEMBER_GET_RANK(int0: int): type_501; // 256 -> 10426
declare function PLAYER_GROUP_MEMBER_IS_OWNER(int0: int): type_501; // 1722 -> 10427
declare function DEEPLINK_GET(int0: int): type_501; // 214 -> 10428
declare function DEEPLINK_COUNT(): int; // 259 -> 10429
declare function QUEST_FINISHED(int0: quest): boolean; // 313 -> 10430
declare function IF_GETENABLED(int0: type_501): type_501; // 1204 -> 10431
declare function CC_TRIGGEROP(int0: type_501): any; // 686 -> 10432
declare function UNPACK_LONG(long0: BigInt): [type_501, int]; // 896 -> 10433
declare function SSO_DISPLAYNAME(): string; // 415 -> 10434
declare function CC_GETPARENTLAYER(): component; // 1203 -> 10435
declare function IGNORE_ADD(string0: string): any; // 999 -> 10436
declare function CC_GETFONTMETRICS(): fontmetrics; // 73 -> 10437
declare function CC_SETSCROLLSIZE(int0: int, int1: int): any; // 639 -> 10438
declare function CAM2_SETPOSITIONPOINT_POINT(string0: string): any; // 2287 -> 10439
declare function CAM2_SETLOOKATPOINT_POINT(...args: any[]): any; // 744 -> 10440
declare function ESCAPE(string0: string): string; // 2021 -> 10441
declare function CAM2_SETLOOKATENTITY_PLAYER(int0: int, int1: int, int2: int, int3: type_501): any; // 576 -> 10442
declare function CAM2_SETPOSITIONMODE(int0: type_501): any; // 1271 -> 10443
declare function CAM2_SETLOOKATMODE(int0: type_501): any; // 940 -> 10444
declare function CC_SETONBUTTONCLICK(int0: type_501, unknown: any): any; // 1112 -> 10445
declare function WINDOW_GETINSETS(): [int, int, int, int]; // 1109 -> 10446
declare function NOTIFICATIONS_CANCELLOCAL(int0: int): any; // 474 -> 10447
declare function ACTIVECLANSETTINGS_GETCLANNAME(): string; // 139 -> 10448
declare function LONG_BRANCH_NOT(...args: any[]): any; // 606 -> 10449
declare function CC_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material): any; // 749 -> 10450
declare function CC_SETSTYLESHEET(int0: number): any; // 1756 -> 10451
declare function DB_LISTALL(int0: type_501): int; // 186 -> 10452
declare function CAM_GETANGLE_YA(): int; // 1702 -> 10453
declare function CAM_GETANGLE_XA(): int; // 1154 -> 10454
declare function PLAYERMODLEVEL(): type_501; // 384 -> 10455
declare function PLAYERMOD(): type_501; // 0 -> 10456
declare function CC_SETASPECT(int0: int, int1: int): any; // 1347 -> 10457
declare function CC_GETGRAPHICDIMENSIONS(): [int, int]; // 1225 -> 10458
declare function CC_GETSCROLLWIDTH(): int; // 1922 -> 10459
declare function CC_GETSCROLLX(): int; // 1962 -> 10460
declare function VIEWPORT_GETZOOM(): [int, int]; // 1987 -> 10461
declare function IF_SETONPLAYERGROUPVARPTRANSMIT(...args: any[]): any; // 1000 -> 10462
declare function IF_NPC_SETCUSTOMRETEX(int0: type_501, int1: material, int2: type_501): any; // 1492 -> 10463
declare function IF_NPC_SETCUSTOMHEADMODEL(int0: type_501, int1: type_501, int2: type_501): any; // 1771 -> 10464
declare function IF_SETONHORIZONTALPINCH(...args: any[]): any; // 2323 -> 10465
declare function IF_SETONVERTICALPINCH(...args: any[]): any; // 762 -> 10466
declare function IF_SETPINCHFLAGS(...args: any[]): any; // 471 -> 10467
declare function IF_SETPINCHDEADZONE(int0: number, int1: number): any; // 86 -> 10468
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: chatphrase): int; // 1317 -> 10469
declare function IF_SETONSTOCKTRANSMIT(...args: any[]): any; // 905 -> 10470
declare function IGNORE_SETNOTES(string0: string, string1: string): any; // 503 -> 10471
declare function IGNORE_GETNAME(int0: int): [string, string]; // 532 -> 10472
declare function FRIEND_SETNOTES(string0: string, string1: string): any; // 62 -> 10473
declare function FRIEND_GETNAME(int0: int): [string, string]; // 1445 -> 10474
declare function CC_GETOP(int0: type_501): string; // 793 -> 10480
declare function FRIEND_SETRANK(...args: any[]): any; // 1828 -> 10481
declare function STRING_INDEXOF_CHAR(string0: string, int0: int, int1: number): int; // 1325 -> 10482
declare function STYLESHEET_GET_PARENT_ID(int0: stylesheet): stylesheet; // 1871 -> 10483
declare function STYLESHEET_HAS_VALUE(int0: stylesheet, string0: string): type_501; // 1246 -> 10484
declare function WORLDLIST_SPECIFIC(int0: int): [int, string, int, string, number, number, string]; // 1307 -> 10485
declare function IF_SETONCHATTRANSMIT(int0: type_501, unknown: any, int1: number): any; // 2090 -> 10486
declare function OC_WEARPOS2(int0: obj): type_501; // 1101 -> 10487
declare function WORLDMAP_JUMPTODISPLAYCOORD(int0: coordgrid): any; // 2263 -> 10488
declare function HAS_HTML5(): type_501; // 2138 -> 10489
declare function STOCKMARKET_ISOFFERFINISHED(int0: int, int1: type_501): type_501; // 1595 -> 10490
declare function LONG_BRANCH_LESS_THAN_OR_EQUALS(...args: any[]): any; // 1497 -> 10491
declare function CC_CALLONRESIZE(...args: any[]): any; // 1479 -> 10492
declare function FRIEND_GETSLOTFROMNAME(string0: string): int; // 1216 -> 10493
declare function GETBIT_RANGE(int0: int, int1: int, int2: int): int; // 1948 -> 10494
declare function CC_SETOPKEYIGNOREHELD(int0: int): any; // 125 -> 10495
declare function CC_SETOPKEY(int0: int, int1: int, int2: int, int3: type_501, int4: type_501, int5: type_501, int6: type_501, int7: type_501, int8: type_501, int9: type_501, int10: type_501): any; // 1085 -> 10496
declare function AUTOSETUP_BEGIN(...args: any[]): any; // 1223 -> 10497
declare function IF_SETOBJECT_ALWAYSNUM(int0: obj, int1: int, int2: component): any; // 782 -> 10498
declare function CC_GET2DANGLE(): int; // 231 -> 10499
declare function OC_STACKABLE(int0: obj): type_501; // 1222 -> 10500
declare function ACHIEVEMENT_REQSTATE(int0: achievement): int; // 1615 -> 10501
declare function CC_SENDTOFRONT(...args: any[]): any; // 1190 -> 10502
declare function TTV_LIBRARY_REQUEST(): int; // 2148 -> 10503
declare function CAM2_GETPOSITIONPOINT_POINT(...args: any[]): any; // 39 -> 10504
declare function INVPOW(int0: int, int1: type_501): int; // 1744 -> 10506
declare function GETCLIPBOARD(): string; // 1302 -> 10507
declare function QUEST_STATREQ_LEVEL(): [number, number]; // 1607 -> 10508
declare function QUEST_STATREQ_STAT(int0: number, int1: number): any; // 507 -> 10509
declare function QUEST_STATREQ_COUNT(int0: quest): int; // 456 -> 10510
declare function CC_SETOPKEYRATE(int0: int, int1: type_501, int2: type_501): any; // 1658 -> 10511
declare function IF_SETTEXTSHADOW(int0: type_501, int1: component): any; // 2017 -> 10512
declare function IF_LIST_SETISSELECTED(int0: int, int1: type_501, int2: type_501, int3: component): any; // 1830 -> 10513
declare function MARKETING_SENDATTRIBUTIONEVENT(string0: string): any; // 2225 -> 10514
declare function MARKETING_SENDANALYTICSEVENT(string0: string): any; // 1495 -> 10515
declare function QUEST_POINTSREQ(int0: quest): int; // 647 -> 10516
declare function CC_SETONVARCSTRTRANSMIT(int0: type_501, unknown: any): any; // 2292 -> 10517
declare function CC_SETONINVTRANSMIT(int0: type_501, unknown: any): any; // 2302 -> 10518
declare function TOSTRING_LOCALISED_LONG(long0: BigInt, int0: number): string; // 316 -> 10519
declare function ACHIEVEMENT_ALLPREREQMET(int0: achievement): type_501; // 232 -> 10520
declare function QUEST_STARTED(int0: quest): type_501; // 193 -> 10521
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(int0: int, int1: int): [int, string, number]; // 851 -> 10522
declare function IF_SETONGAMEPADBUTTONHELD(...args: any[]): any; // 831 -> 10523
declare function IF_SETONGAMEPADTRIGGER(...args: any[]): any; // 1556 -> 10524
declare function IF_SETONGAMEPADAXIS(...args: any[]): any; // 603 -> 10525
declare function IF_SETONGAMEPADBUTTON(...args: any[]): any; // 1016 -> 10526
declare function ABS(int0: int): int; // 1044 -> 10527
declare function KEYHELD_SHIFT(): boolean; // 2027 -> 10528
declare function KEYHELD_CTRL(): boolean; // 2053 -> 10529
declare function CC_LIST_SETENTRYICON(int0: int, int1: graphic): any; // 1297 -> 10530
declare function CC_LIST_ADDENTRY(int0: int, string0: string, int1: number): type_501; // 1311 -> 10531
declare function ACHIEVEMENT_FINDNEXT(): achievement; // 376 -> 10532
declare function CHATPHRASE_GETAUTORESPONSECOUNT(int0: chatphrase): int; // 2099 -> 10533
declare function TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(string0: string): [int, string, string]; // 811 -> 10534
declare function MAP_LOADEDPERCENT(): int; // 1072 -> 10535
declare function CAM2_ISENABLED(): type_501; // 185 -> 10536
declare function VIEWPORT_GETEFFECTIVESIZE(): [int, int]; // 1742 -> 10538
declare function SETHARDCODEDOPCURSORS(int0: type_501, int1: type_501): any; // 559 -> 10539
declare function QUEST_GETSORTNAME(int0: number): any; // 260 -> 10540
declare function CC_SENDTOBACK(...args: any[]): any; // 546 -> 10541
declare function INVOTHER_TOTAL(int0: type_501, int1: type_501): int; // 1639 -> 10542
declare function IF_GET_GAMESCREEN(): component; // 1215 -> 10543
declare function CC_SETNPCMODEL(int0: npc): any; // 1998 -> 10544
declare function CREATE_SUGGEST_NAME_REPLY(): [number, string]; // 1681 -> 10545
declare function ACTIVECLANSETTINGS_GETAFFINEDRANK(int0: type_501): int; // 420 -> 10546
declare function ACTIVECLANSETTINGS_GETAFFINEDSLOT(string0: string): type_501; // 1380 -> 10547
declare function WORLDMAP_3DVIEW_SETLODDISTANCE(int0: type_501, int1: int): any; // 172 -> 10548
declare function PLAYER_GROUP_MEMBER_GET_DISPLAYNAME(int0: int): string; // 447 -> 10549
declare function PLAYER_GROUP_MEMBER_COUNT(): int; // 288 -> 10550
declare function IF_SETTARGETVERB(string0: string, int0: number): any; // 1019 -> 10551
declare function IF_SETOPKEYRATE(int0: type_501, int1: type_501, int2: type_501, int3: type_501): any; // 1811 -> 10552
declare function DETAILGET_INTERFACESCALE(): number; // 1826 -> 10553
declare function ACTIVECHATPHRASE_PREPARE(): [number, number]; // 1960 -> 10554
declare function TTV_STREAM_GETVIEWERS(): int; // 783 -> 10555
declare function TTV_STREAM_GETSTATE(): type_501; // 476 -> 10556
declare function IF_SETMODELTINT(int0: int, int1: type_501, int2: type_501, int3: int, int4: component): any; // 84 -> 10557
declare function MAP_LOADINGSCREEN_ISOPEN(): type_501; // 347 -> 10558
declare function SOUND_SPEECH_VOLUME(int0: vorbis, int1: type_501, int2: type_501, int3: type_501): any; // 1633 -> 10559
declare function OC_ICURSOR(int0: number, int1: number): any; // 658 -> 10560
declare function ACHIEVEMENT_GETNAME(int0: achievement): string; // 1465 -> 10561
declare function OPENSTORE(int0: type_501, string0: string): any; // 400 -> 10562
declare function CREATE_REPLY(): type_501; // 1613 -> 10563
declare function TELEMETRY_GET_GRID_VALUE(int0: int, int1: int, int2: int): int; // 1128 -> 10564
declare function TELEMETRY_GET_COLUMN_INDEX(int0: int, int1: int): int; // 2000 -> 10565
declare function TELEMETRY_GET_ROW_INDEX(int0: int, int1: int): int; // 126 -> 10566
declare function TELEMETRY_GET_GROUP_INDEX(int0: int): int; // 1200 -> 10567
declare function define_array(int0: int): any; // 1790 -> 10569
declare function STOCKMARKET_GETOFFERITEM(int0: int, int1: type_501): obj; // 1896 -> 10570
declare function CHAT_CLEAR(...args: any[]): any; // 1060 -> 10571
declare function CREATE_NAME_VALIDATE_REPLY(): type_501; // 368 -> 10572
declare function OC_DESC(int0: obj): string; // 1178 -> 10573
declare function PUSH_CONSTANT_INT(string0: string, int0: number): [string, type_501, number]; // 358 -> 10574
declare function IF_GETCOLOUR(int0: component): int; // 398 -> 10575
declare function FORMAT_DATETIME_FROM_MINUTES(int0: int): string; // 1079 -> 10576
declare function CAM2_SETPOSITIONENTITY_PLAYER(int0: int, int1: int, int2: int, int3: int, int4: int, int5: type_501, int6: type_501, int7: type_501): any; // 1589 -> 10577
declare function TTV_LOGIN(string0: string, string1: string): type_501; // 151 -> 10578
declare function RESUME_COUNTDIALOG_LONG(string0: string): any; // 1363 -> 10579
declare function CC_RADIALPROGRESSOVERLAY_GETPROGRESS(): int; // 1065 -> 10580
declare function TTV_WEBCAM_STOP(int0: int): type_501; // 1829 -> 10581
declare function IF_GETINVCOUNT(int0: component): type_501; // 1632 -> 10583
declare function IF_GETINVOBJECT(int0: component): obj; // 1737 -> 10584
declare function INVOTHER_GETVAR(int0: inv, int1: int, int2: type_501): int; // 775 -> 10585
declare function FORCE_INTERFACE_DRAG(...args: any[]): any; // 1106 -> 10586
declare function CC_SETMODELZOOM(int0: int): any; // 642 -> 10587
declare function WORLDMAP_GETCONFIGZOOM(int0: maparea): int; // 1966 -> 10588
declare function WORLDMAP_SETMAP(int0: maparea): any; // 902 -> 10589
declare function WORLDMAP_GETCURRENTMAP(): maparea; // 1508 -> 10590
declare function CC_SETONSCROLLWHEEL(int0: type_501, unknown: any): any; // 2039 -> 10591
declare function TTV_WEBCAM_START(int0: int, int1: int): type_501; // 496 -> 10592
declare function ACHIEVEMENT_TOTAL_RUNESCORE(): int; // 1017 -> 10593
declare function QUEST_QUESTREQ(int0: quest, int1: int): quest; // 207 -> 10594
declare function QUEST_QUESTREQ_COUNT(int0: quest): int; // 307 -> 10595
declare function CHAT_SENDABUSEREPORT(...args: any[]): any; // 2229 -> 10596
declare function RESUME_NAMEDIALOG(string0: string): any; // 2058 -> 10597
declare function USERDETAIL_LOBBY_PLAYAGE(): type_501; // 1171 -> 10598
declare function STOCKMARKET_GETOFFERPRICE(int0: int, int1: type_501): BigInt; // 2275 -> 10599
declare function STOCKMARKET_GETOFFERCOUNT(int0: int, int1: type_501): int; // 1318 -> 10600
declare function NOTIFICATIONS_ISLOCALSCHEDULED(): number; // 2131 -> 10601
declare function CC_LIST_GETENABLED(int0: number): any; // 24 -> 10602
declare function IF_GETOP(int0: type_501, int1: component): string; // 2062 -> 10603
declare function AUTOSETUP_SETCUSTOM(...args: any[]): any; // 1240 -> 10604
declare function AUTOSETUP_SETLOW(...args: any[]): any; // 521 -> 10608
declare function SHOP_REQUESTDATASTATUS(): type_501; // 1777 -> 10609
declare function FPS_STATS(): [type_501, type_501, type_501]; // 2146 -> 10610
declare function APPEND_NUM(string0: string, int0: number): string; // 2259 -> 10611
declare function WORLDMAP_SETMAP_COORD_OVERRIDE(int0: maparea, int1: coordgrid): any; // 455 -> 10612
declare function WORLDMAP_GETMAP(int0: coordgrid): maparea; // 1028 -> 10613
declare function MAP_ISOWNER(string0: string): type_501; // 1656 -> 10614
declare function TTV_LOGOUT(): type_501; // 1273 -> 10615
declare function ACTIVECHATPHRASE_SETDYNAMICINT(int0: type_501, int1: int): any; // 1093 -> 10616
declare function ACTIVECHATPHRASE_SETDYNAMICOBJ(int0: type_501, int1: obj): any; // 1724 -> 10617
declare function IF_SETONCLICKREPEAT(int0: number, unknown: any, int1: number): any; // 1400 -> 10618
declare function IF_GETGRAPHICDIMENSIONS(int0: component): [int, int]; // 2320 -> 10621
declare function MIN_LONG(long0: BigInt, long1: BigInt): BigInt; // 2277 -> 10622
declare function DATE_ISLEAPYEAR(int0: int): type_501; // 448 -> 10623
declare function CC_ANIM_PLAY(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): any; // 1978 -> 10624
declare function CC_ANIM_KILL(int0: number, int1: number): any; // 1928 -> 10625
declare function CLAN_GETCHATUSERRANK(int0: int): int; // 822 -> 10626
declare function CLAN_ISSELF(int0: int): type_501; // 857 -> 10627
declare function CC_GETSCROLLY(int0: int): [int, int]; // 1531 -> 10628
declare function CC_SETLINKPLAYERGROUP(int0: int, int1: type_501): any; // 2098 -> 10629
declare function CC_SETLINKACTIVECLANCHANNEL(int0: int): any; // 1451 -> 10630
declare function CC_SETLINKFRIEND(int0: int): any; // 2116 -> 10631
declare function TTV_STREAM_GETQUALITY(): type_501; // 494 -> 10633
declare function APPEND_CHAR(string0: string, int0: number): string; // 436 -> 10634
declare function CHAR_ISPRINTABLE(int0: type_501): type_501; // 1695 -> 10635
declare function ACHIEVEMENT_SPRITE(int0: achievement): graphic; // 1910 -> 10636
declare function CAM2_GETLOOKATMODE(): type_501; // 269 -> 10637
declare function IF_GETCHARINDEXATPOS(int0: int, int1: int, int2: component): int; // 279 -> 10638
declare function MAP_QUICKCHAT(): type_501; // 469 -> 10639
declare function CC_SETONHORIZONTALPINCH(int0: type_501, int1: type_501, int2: int, int3: int, int4: type_501): [type_501, int]; // 381 -> 10644
declare function IF_GRID_GETCELLHEIGHT(int0: component): int; // 2206 -> 10645
declare function IF_GETCHILDSPACING(int0: component): int; // 2281 -> 10646
declare function IF_GRID_GETNUMCOLUMNS(int0: number): number; // 605 -> 10647
declare function IF_GRID_GETNUMROWS(int0: number): number; // 315 -> 10648
declare function CC_SETPARAM_STRING(int0: type_501, int1: type_501, int2: type_501, int3: type_501, int4: type_501): int; // 1064 -> 10649
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(string0: string, string1: string, int0: int, int1: number, string2: string, int2: number): int; // 1719 -> 10650
declare function TTV_LIVESTREAMS_GETSTREAM_NEXT(): [int, string, string, string, string]; // 1210 -> 10651
declare function TTV_LIVESTREAMS_GETSTREAM_START(): [number, string, string, string, string]; // 2315 -> 10652
declare function SHOP_GETPRODUCTDETAILS(int0: type_501, int1: int): [string, string, string, string, string, string, number, string]; // 454 -> 10653
declare function SHOP_GETPRODUCTCOUNT(): number; // 2297 -> 10654
declare function SHOP_GETINDEXFORCATEGORYID(int0: number): any; // 76 -> 10655
declare function CAM2_SETSPRINGPROPERTIES(int0: int, int1: int, int2: int, int3: int): any; // 1048 -> 10656
declare function AUTOSETUP_DOSETUPSTATUS(): [type_501, int]; // 2244 -> 10657
declare function CC_GRID_GETNUMCOLUMNS(): number; // 1953 -> 10658
declare function CC_GRID_GETNUMROWS(): number; // 2060 -> 10659
declare function USERDETAIL_LOBBY_MEMBERSHIP(): [int, int, type_501]; // 2046 -> 10660
declare function BATTERY_ISCHARGING(): number; // 841 -> 10661
declare function BATTERY_GETLEVELPERCENT(...args: any[]): any; // 2203 -> 10662
declare function USERDETAIL_LOBBY_RECOVERYDAY(): type_501; // 1320 -> 10663
declare function CHATPHRASE_GETDYNAMICCOMMAND(int0: chatphrase, int1: int): type_501; // 1452 -> 10664
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: type_501, int1: type_501): any; // 508 -> 10665
declare function GET_MOUSEBUTTONS(): [type_501, type_501, type_501]; // 766 -> 10667
declare function FULLSCREEN_ENTER(int0: int, int1: int): type_501; // 1382 -> 10668
declare function FULLSCREEN_MODECOUNT(): int; // 1278 -> 10669
declare function SETDEFAULTWINDOWMODE(...args: any[]): any; // 2119 -> 10670
declare function SETWINDOWMODE(int0: number): any; // 133 -> 10671
declare function CC_COMBO_SELECT(int0: int, int1: type_501): type_501; // 1670 -> 10672
declare function CC_COMBO_ADDENTRY(int0: int, string0: string): type_501; // 1715 -> 10673
declare function CC_COMBO_SETENTRIES(int0: cs2enum): any; // 35 -> 10674
declare function CC_LIST_SETISSELECTED(int0: int, int1: type_501, int2: type_501): any; // 612 -> 10675
declare function CC_LIST_SETENTRIES(int0: cs2enum): any; // 1685 -> 10676
declare function WORLDMAP_GETDISPLAYPOSITION(): [int, int]; // 173 -> 10677
declare function IF_SLIDER_GETMINMAX(int0: int, int1: int): type_501; // 1473 -> 10678
declare function WORLDMAP_GETDISPLAYCOORD(int0: coordgrid): [int, int]; // 294 -> 10679
declare function ADDPERCENT(int0: int, int1: type_501): int; // 1083 -> 10680
declare function ARRAY_SORT(int0: int, int1: type_501, int2: type_501): any; // 116 -> 10681
declare function ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int0: number): string; // 948 -> 10682
declare function ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT(): number; // 893 -> 10683
declare function MODULO_LONG(long0: BigInt, long1: BigInt): BigInt; // 2188 -> 10687
declare function ACTIVECLANCHANNEL_GETCLANNAME(): string; // 238 -> 10688
declare function CC_SETTARGETVERB(string0: string): any; // 743 -> 10689
declare function USERDETAIL_LOBBY_UNREADMESSAGES(...args: any[]): any; // 408 -> 10690
declare function SET_MENU_SCREENRECT(int0: int, int1: int, int2: int, int3: int): any; // 349 -> 10695
declare function IF_SETDRAGRENDERBEHAVIOUR(int0: type_501, int1: type_501): any; // 1760 -> 10697
declare function GETDEFAULTWINDOWMODE(...args: any[]): any; // 551 -> 10698
declare function CHAT_GETNEXTUID(int0: int): int; // 2104 -> 10699
declare function IGNORE_GETNOTES(int0: int): string; // 1530 -> 10700
declare function FRIEND_GETNOTES(int0: int): string; // 1442 -> 10701
declare function IF_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model, int2: type_501): any; // 2143 -> 10702
declare function USERDETAIL_LOBBY_EMAILSTATUS(): number; // 1596 -> 10703
declare function PARALINE(string0: string, int0: fontmetrics, int1: int, int2: number): string; // 251 -> 10704
declare function CAM2_SETLOOKATORIENTATION_XROTATION(int0: int): any; // 153 -> 10705
declare function CAM2_SETLOOKATORIENTATION_YROTATION(int0: int): any; // 100 -> 10706
declare function CAM2_SETLOOKATORIENTATION_ZMOVEMENT(int0: int): any; // 2083 -> 10707
declare function CAM2_SETLOOKATORIENTATION_XMOVEMENT(int0: int): any; // 1155 -> 10708
declare function DB_FIND_REFINE(int0: type_501, int1: int, int2: type_501): int; // 258 -> 10709
declare function LOBBY_ENTERLOBBY(string0: string, string1: string, string2: string, int0: number): any; // 1292 -> 10710
declare function INTERPOLATE(int0: int, int1: int, int2: int, int3: int, int4: int): int; // 2248 -> 10711
declare function PRELOAD_PERCENT(): int; // 1927 -> 10712
declare function CC_GETSCROLLHEIGHT(): int; // 138 -> 10713
declare function CC_TEXT_SETTRANS(...args: any[]): any; // 866 -> 10714
declare function TTV_STREAM_STOP(...args: any[]): any; // 282 -> 10715
declare function QUEST_GETMEMBERS(int0: quest): boolean; // 832 -> 10716
declare function CAM_DEC_X(...args: any[]): any; // 1294 -> 10717
declare function CAM_INC_X(...args: any[]): any; // 1012 -> 10718
declare function CAM_INC_Y(...args: any[]): any; // 753 -> 10719
declare function CAM_DEC_Y(...args: any[]): any; // 742 -> 10720
declare function TTV_STREAM_SETTITLE(string0: string): int; // 1627 -> 10721
declare function TTV_STREAM_START(int0: int, int1: int, int2: int, int3: type_501): int; // 2241 -> 10722
declare function CC_SETONSTATTRANSMIT(int0: type_501, unknown: any): any; // 701 -> 10723
declare function SHOP_ISPRODUCTAVAILABLE(int0: type_501, int1: int): type_501; // 2136 -> 10725
declare function INVOTHER_GETNUM(int0: inv, int1: int): int; // 633 -> 10726
declare function QUEST_POINTS(int0: quest): int; // 595 -> 10727
declare function ACHIEVEMENT_GETSUBCATCOUNT(int0: category, int1: type_501): type_501; // 2306 -> 10728
declare function FRIEND_COUNT(): int; // 2050 -> 10729
declare function CC_SETALPHA(int0: type_501): any; // 1616 -> 10730
declare function LOGIN_ACCOUNTAPPEAL(string0: string): type_501; // 708 -> 10732
declare function CC_SETONTARGETLEAVE(...args: any[]): any; // 1430 -> 10733
declare function CC_SETONTARGETENTER(int0: number, unknown: any): any; // 1720 -> 10734
declare function CLIENTOPTION_CANMOD(int0: int): type_501; // 363 -> 10736
declare function CLIENTOPTION_EXISTS(int0: int): type_501; // 312 -> 10737
declare function IF_GRID_GETLAYOUTPARAMS(int0: component): [type_501, int, int]; // 58 -> 10738
declare function ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int0: int): string; // 1888 -> 10739
declare function ACTIVECLANCHANNEL_GETUSERCOUNT(): int; // 1573 -> 10740
declare function ACHIEVEMENT_GETMEMBERS(int0: achievement): boolean; // 1368 -> 10741
declare function NOT(int0: int, int1: int): [int, int]; // 517 -> 10742
declare function TTV_WEBCAM_GETCAP_BYINDEX(int0: int, int1: int): [int, int, int, int, int]; // 1791 -> 10743
declare function TTV_WEBCAM_GETCAP_BYUNIQUEID(int0: int, int1: int): [int, int, int, int, int]; // 2054 -> 10744
declare function TTV_WEBCAM_GETCAP_COUNT(int0: int): int; // 2044 -> 10745
declare function DB_FIND_GET(int0: int): dbrow; // 2150 -> 10746
declare function WORLDLIST_SORT(int0: int, int1: boolean, int2: int, int3: boolean): any; // 1197 -> 10747
declare function CC_SETRETEX(int0: type_501, int1: type_501, int2: material): any; // 578 -> 10749
declare function IF_SETOBJECT_LONG(int0: type_501, long0: BigInt, int1: number): any; // 472 -> 10750
declare function TTV_WEBCAM_GETDEVICE_BYINDEX(int0: int): [int, string, string]; // 2186 -> 10751
declare function TTV_WEBCAM_GETDEVICE_COUNT(): int; // 855 -> 10752
declare function TTV_WEBCAM_SUPPORTED(...args: any[]): any; // 1004 -> 10753
declare function CC_SETCLICKMASK(int0: type_501): any; // 2191 -> 10754
declare function IF_SETTARGETCURSORS(int0: cursor, int1: cursor, int2: type_501): any; // 1537 -> 10759
declare function SOUND_SYNTH_VOLUME(int0: type_501, int1: type_501, int2: type_501, int3: type_501): any; // 616 -> 10760
declare function TTV_WEBCAM_FLIP(int0: type_501, int1: type_501): any; // 1011 -> 10763
declare function IF_GETCHARPOSATINDEX(int0: int, int1: component): [int, int]; // 763 -> 10765
declare function CC_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model): any; // 1348 -> 10766
declare function PRELOAD_DOWNLOAD_RATE(): [string, string, string, string, string, string, string, number]; // 1687 -> 10767
declare function PRELOAD_DOWNLOAD_TOTALSIZE(...args: any[]): any; // 366 -> 10768
declare function PRELOAD_DOWNLOAD_DOWNLOADEDSIZE(string0: string, string1: string, string2: string): any; // 683 -> 10769
declare function PRELOAD_PROGRESS(): int; // 716 -> 10770
declare function PRELOAD_DOWNLOAD_COMPLETE(): type_501; // 2076 -> 10771
declare function FROMDATE(int0: number): any; // 2210 -> 10772
declare function PLAYER_GROUP_GET_MAX_SIZE(string0: string, string1: string): [string, string, number]; // 1285 -> 10773
declare function VIDEO_ADVERT_PLAY(int0: type_501): type_501; // 828 -> 10774
declare function VIDEO_ADVERT_HAS_FINISHED(): type_501; // 14 -> 10775
declare function IGNORE_COUNT(): int; // 1464 -> 10776
declare function WORLDMAP_GETSIZE(): [int, int]; // 632 -> 10777
declare function IF_SETONSTORETRANSMIT(int0: int): [int, string]; // 1649 -> 10779
declare function IGNORE_GETNAME_UNFILTERED(int0: number, int1: number, int2: number): any; // 516 -> 10780
declare function IF_RESETMODELLIGHTING(int0: component): any; // 1466 -> 10781
declare function WORLDMAP_FLASHELEMENTCATEGORY(int0: type_501): any; // 1603 -> 10782
declare function IF_SETTILING(int0: type_501, int1: component): any; // 1576 -> 10783
declare function STOCKMARKET_GETOFFERTYPE(int0: int, int1: type_501): int; // 1129 -> 10784
declare function CREATE_CONNECT_REPLY(): type_501; // 2047 -> 10786
declare function CC_GETABSOLUTEY(): int; // 2170 -> 10787
declare function CC_SETTARGETCURSORS(int0: cursor, int1: cursor): any; // 1904 -> 10788
declare function CC_SETTARGETOPCURSOR(int0: cursor): any; // 135 -> 10789
declare function OC_TRADEABLE(int0: obj): type_501; // 1802 -> 10790
declare function CHAT_SENDPRIVATE(string0: string, string1: string): any; // 1710 -> 10791
declare function WORLDMAP_GETCONFIGBOUNDS(int0: maparea): [int, int, int, int]; // 803 -> 10794
declare function WORLDMAP_3DVIEW_GETCOORDFINE(int0: number, int1: number, int2: number): any; // 1441 -> 10795
declare function PLAYER_GROUP_BANNED_GET_DISPLAYNAME(int0: int): string; // 1884 -> 10796
declare function PLAYER_GROUP_BANNED_COUNT(...args: any[]): any; // 1673 -> 10797
declare function lc_getparam(int0: loc, int1: type_501): type_501; // 1941 -> 10798
declare function CC_SETOBJECT_LONG(int0: obj, long0: BigInt): any; // 617 -> 10799
declare function CC_SETMODELORIGIN(int0: type_501, int1: type_501): any; // 489 -> 10800
declare function STOCKMARKET_ISOFFERADDING(int0: int, int1: type_501): type_501; // 1356 -> 10801
declare function STOCKMARKET_GETOFFERCOMPLETEDGOLD(): BigInt; // 1267 -> 10802
declare function STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int0: int, int1: type_501): int; // 1018 -> 10803
declare function SETOBJ(int0: type_501, int1: type_501): any; // 1331 -> 10804
declare function IF_NPC_SETCUSTOMRECOL(int0: number, int1: number, int2: number): any; // 2219 -> 10805
declare function OS_ISMAC(): type_501; // 1859 -> 10806
declare function IF_SETONHOLD(...args: any[]): any; // 1145 -> 10807
declare function CC_SETLINKFRIENDCHAT(int0: int): any; // 2155 -> 10808
declare function PLAYER_GROUP_GET_DISPLAYNAME(): string; // 1718 -> 10809
declare function CHATPHRASE_GETTEXT(int0: chatphrase): string; // 1566 -> 10810
declare function OC_FINDNEXT(): obj; // 1228 -> 10811
declare function OC_FIND(string0: string, int0: number): int; // 815 -> 10812
declare function WORLDMAP_LISTELEMENT_NEXT(): [type_501, coordgrid]; // 1785 -> 10815
declare function MEC_TEXT(int0: type_501): string; // 108 -> 10816
declare function WORLDMAP_LISTELEMENT_START(): [number, number]; // 581 -> 10817
declare function FRIEND_GETRANK(int0: number): any; // 1287 -> 10818
declare function CHATPHRASE_FINDNEXT(): chatphrase; // 1213 -> 10819
declare function CHATPHRASE_FIND(string0: string, int0: number): int; // 1804 -> 10820
declare function TEXT_GENDER(string0: string, string1: string, string2: string): [string, string]; // 1655 -> 10821
declare function TTV_LOGIN_GETSTATE(): type_501; // 908 -> 10822
declare function OS_ISLINUX(): type_501; // 2052 -> 10823
declare function OS_ISWINDOWS(): type_501; // 2288 -> 10824
declare function TTV_HASPREREQUISITES(): type_501; // 112 -> 10825
declare function TTV_LIBRARY_GETSTATE(): type_501; // 1869 -> 10826
declare function USERDETAIL_LOBBY_LASTLOGINDAY(): int; // 664 -> 10834
declare function ATAN2_DEG(int0: int, int1: int): int; // 429 -> 10835
declare function CC_GETABSOLUTEX(): int; // 1478 -> 10842
declare function WORLDMAP_COORDINMAP(int0: coordgrid, int1: maparea): type_501; // 523 -> 10844
declare function CLAN_KICKUSER(string0: string): any; // 789 -> 10845
declare function CC_RADIOGROUP_ADDOPTION(...args: any[]): any; // 278 -> 10849
declare function CC_SETLINEWID(int0: int): any; // 1254 -> 10851
declare function CC_SETLINEDIRECTION(int0: type_501): any; // 678 -> 10852
declare function CLEARBIT_RANGE(int0: int, int1: type_501, int2: type_501): int; // 1951 -> 10853
declare function LOGIN_LAST_TRANSFER_REPLY(): [type_501, type_501, type_501]; // 1911 -> 10854
declare function USERDETAIL_LOBBY_GRACEEXPIRY(): number; // 1806 -> 10855
declare function USERDETAIL_LOBBY_CCEXPIRY(...args: any[]): any; // 32 -> 10856
declare function CONSOLE_ENABLESNOW(...args: any[]): any; // 563 -> 10860
declare function SETUP_MESSAGEBOX(int0: type_501, int1: type_501, int2: type_501, int3: type_501, int4: type_501, int5: type_501, int6: type_501, int7: type_501, int8: type_501, int9: type_501, int10: type_501): any; // 1740 -> 10861
declare function PLAYER_GROUP_GET_OVERALL_STATUS(): type_501; // 291 -> 10862
declare function IF_SETLINEDIRECTION(int0: type_501, int1: component): any; // 208 -> 10864
declare function ACHIEVEMENT_FINDPARENTS(int0: achievement): type_501; // 970 -> 10865
declare function CHAR_TOLOWERCASE(string0: string, int0: number): [string, number]; // 1117 -> 10866
declare function CHAR_ISALPHANUMERIC(int0: type_501): type_501; // 582 -> 10867
declare function ACTIVECLANCHANNEL_GETSORTEDUSERSLOT(int0: int): int; // 147 -> 10868
declare function CHATPHRASE_GETAUTORESPONSE(int0: chatphrase, int1: int): chatphrase; // 2262 -> 10869
declare function FRIEND_GETWORLDNAME(int0: int): string; // 205 -> 10875
declare function CC_SETRECOL(int0: int, int1: int, int2: int): any; // 810 -> 10880
declare function FRIEND_IS_REFERRED(int0: int): type_501; // 1116 -> 10882
declare function FRIEND_IS_REFERRER(int0: int): type_501; // 18 -> 10883
declare function CHATCAT_GETPHRASE(int0: chatcat, int1: int): chatphrase; // 1281 -> 10884
declare function CHAR_ISNUMERIC(int0: type_501): type_501; // 816 -> 10885
declare function CHATCAT_GETSUBCAT(int0: chatcat, int1: int): chatcat; // 594 -> 10886
declare function CHAR_TOUPPERCASE(int0: type_501): type_501; // 2232 -> 10887
declare function CHATCAT_GETSUBCATSHORTCUT(int0: chatcat, int1: int): type_501; // 1937 -> 10888
declare function CHATCAT_GETPHRASECOUNT(): number; // 1035 -> 10889
declare function CHATCAT_GETSUBCATCOUNT(int0: number): any; // 2108 -> 10890
declare function PLAYER_GROUP_MEMBER_GET_LAST_SEEN_NODE_ID(int0: int): int; // 1507 -> 10936
declare function PLAYER_GROUP_MEMBER_GET_TEAM(int0: int): int; // 2215 -> 10937
declare function PLAYER_GROUP_MEMBER_GET_SAME_WORLD_VAR(int0: int, int1: type_501, int2: type_501): int; // 342 -> 10938
declare function PLAYER_GROUP_MEMBER_IS_ONLINE(int0: int): type_501; // 847 -> 10939
declare function CLAN_GETCHATOWNERNAME(): string; // 1661 -> 10940
declare function CLAN_GETCHATUSERNAME_UNFILTERED(int0: number): string; // 2258 -> 10941
declare function CLAN_GETCHATUSERNAME(int0: number): string; // 478 -> 10942
declare function TELEMETRY_GET_COLUMN_COUNT(int0: int): int; // 836 -> 10957
declare function TELEMETRY_IS_ROW_PINNED(int0: int, int1: int): type_501; // 470 -> 10958
declare function TELEMETRY_GET_ROW_ID(int0: int, int1: int): int; // 329 -> 10959
declare function TELEMETRY_GET_COLUMN_ID(int0: int, int1: int): int; // 146 -> 10960
declare function TELEMETRY_GET_ROW_COUNT(int0: int): int; // 1391 -> 10961
declare function TELEMETRY_GET_GROUP_ID(int0: int): int; // 1208 -> 10962
declare function TELEMETRY_GET_GROUP_COUNT(): int; // 1843 -> 10963
declare function WORLDMAP_GETDISABLEELEMENTS(): type_501; // 1519 -> 10964
declare function WORLDMAP_3DVIEW_DISABLE(...args: any[]): any; // 1188 -> 10966
declare function WORLDMAP_3DVIEW_ACTIVE(): number; // 17 -> 10967
declare function CAM2_SETLOOKATMAXSPEED_AXIS(...args: any[]): any; // 1 -> 10968
declare function CAM2_SETLOOKATACCELERATION_AXIS(...args: any[]): any; // 529 -> 10969
declare function CAM2_SETPOSITIONMAXSPEED_AXIS(...args: any[]): any; // 2202 -> 10970
declare function CAM2_SETPOSITIONACCELERATION_AXIS(...args: any[]): any; // 2305 -> 10971
declare function CAM2_SETSNAPDISTANCES(...args: any[]): any; // 2190 -> 10972
declare function CAM2_ENABLE(...args: any[]): any; // 201 -> 10973
declare function WORLDMAP_3DVIEW_ENABLE(int0: number): any; // 2329 -> 10974
declare function CREATE_EMAIL_VALIDATE_REPLY(): type_501; // 995 -> 10975
declare function CAM2_RESETSNAPDISTANCES(...args: any[]): any; // 1708 -> 10977
declare function unk10978(int0: number): any; // 2295 -> 10978
declare function unk10981(int0: number): number; // 1550 -> 10981
declare function unk10982(long0: BigInt, int0: number): number; // 2112 -> 10982
declare function unk10983(int0: number): string; // 668 -> 10983
declare function unk10984(int0: number): number; // 859 -> 10984
declare function unk10985(int0: number, int1: number, int2: number): number; // 1377 -> 10985
declare function unk10986(int0: number): number; // 2279 -> 10986
declare function unk10987(...args: any[]): any; // 923 -> 10987
declare function unk10988(int0: number, int1: number): number; // 1385 -> 10988
declare function unk10989(): number; // 493 -> 10989
declare function unk10990(...args: any[]): any; // 980 -> 10990
declare function unk10992(string0: string, int0: number, int1: number, int2: number): any; // 509 -> 10992
declare function unk10993(int0: number): number; // 2183 -> 10993
declare function unk10994(int0: number, int1: number, int2: number): any; // 1482 -> 10994
declare function unk10995(int0: number): any; // 1510 -> 10995
declare function unk10996(): number; // 254 -> 10996
declare function unk10997(int0: number): any; // 351 -> 10997
declare function unk10998(...args: any[]): any; // 1182 -> 10998
declare function unk10999(int0: number, int1: number): number; // 2304 -> 10999
declare function unk11000(string0: string): any; // 1272 -> 11000
declare function unk11001(): number; // 1800 -> 11001
declare function unk11002(): number; // 1389 -> 11002
declare function unk11003(): number; // 934 -> 11003
declare function unk11004(...args: any[]): any; // 564 -> 11004
declare function unk11005(int0: number): any; // 2205 -> 11005
declare function unk11006(int0: number): any; // 544 -> 11006
declare function unk11007(int0: number): any; // 1728 -> 11007
declare function unk11008(int0: number): any; // 808 -> 11008
declare function unk11009(...args: any[]): any; // 1735 -> 11009
declare function unk11010(int0: number, int1: number, unknown: any, int2: number): any; // 131 -> 11010
declare function unk11011(int0: number, int1: number, int2: number): number; // 1906 -> 11011
declare function unk11012(string0: string, int0: number, int1: number): any; // 319 -> 11012
declare function unk11013(int0: number, int1: number, int2: number, int3: number): any; // 2088 -> 11013
declare function unk11014(int0: number): any; // 1860 -> 11014
declare function unk11015(): number; // 1703 -> 11015
declare function unk11016(string0: string): any; // 490 -> 11016
declare function unk11017(int0: number): number; // 414 -> 11017
declare function unk11018(int0: number, int1: number): number; // 1136 -> 11018
declare function unk11019(int0: number, int1: number): any; // 1945 -> 11019
declare function unk11020(int0: number): string; // 195 -> 11020
declare function unk11021(string0: string): string; // 1483 -> 11021
declare function unk11022(string0: string): number; // 531 -> 11022
declare function unk11023(int0: number, int1: number, int2: number): any; // 192 -> 11023
declare function unk11025(int0: number): number; // 2137 -> 11025
declare function unk11026(int0: number): number; // 1919 -> 11026
declare function unk11027(int0: number, string0: string): number; // 1114 -> 11027
declare function unk11028(long0: BigInt, int0: number): BigInt; // 956 -> 11028
declare function unk11029(long0: BigInt, int0: number): BigInt; // 791 -> 11029
declare function unk11030(int0: number, unknown: any): any; // 950 -> 11030
declare function unk11031(string0: string): number; // 1810 -> 11031
declare function unk11032(int0: number, int1: number): number; // 1181 -> 11032
declare function unk11033(string0: string, int0: number): [number, number, number, BigInt, BigInt, number, BigInt, number, number, number, number, number, number]; // 540 -> 11033
declare function unk11034(int0: number, int1: number, int2: number): number; // 297 -> 11034
declare function unk11035(int0: number, int1: number, int2: number): number; // 1027 -> 11035
declare function unk11036(int0: number, int1: number): number; // 227 -> 11036
declare function unk11037(int0: number): number; // 1864 -> 11037
declare function unk11038(...args: any[]): any; // 2208 -> 11038
declare function unk11039(int0: number): any; // 380 -> 11039
declare function unk11040(int0: number, unknown: any): any; // 975 -> 11040
declare function unk11041(int0: number): any; // 387 -> 11041
declare function unk11042(int0: number, int1: number): any; // 907 -> 11042
declare function unk11043(int0: number): any; // 48 -> 11043
declare function unk11044(...args: any[]): any; // 1480 -> 11044
declare function unk11045(): number; // 243 -> 11045
declare function unk11046(int0: number): any; // 286 -> 11046
declare function unk11047(...args: any[]): any; // 1289 -> 11047
declare function unk11048(int0: number): any; // 963 -> 11048
declare function unk11049(string0: string, string1: string, string2: string, int0: number): number; // 1686 -> 11049
declare function unk11050(int0: number, int1: number, int2: number, int3: number): number; // 1593 -> 11050
declare function unk11051(): [number, number]; // 1449 -> 11051
declare function unk11052(int0: number): number; // 1626 -> 11052
declare function unk11053(): number; // 1775 -> 11053
declare function unk11054(long0: BigInt, int0: number): string; // 620 -> 11054
declare function unk11055(...args: any[]): any; // 1091 -> 11055
declare function unk11056(int0: number): any; // 2214 -> 11056
declare function unk11057(int0: number): any; // 1160 -> 11057
declare function unk11058(...args: any[]): any; // 2106 -> 11058
declare function unk11059(int0: number): [number, string, number, string, string, string, string, number, string, number, number]; // 301 -> 11059
declare function unk11060(...args: any[]): any; // 487 -> 11060
declare function unk11061(int0: number): number; // 1759 -> 11061
declare function unk11062(...args: any[]): any; // 786 -> 11062
declare function unk11063(...args: any[]): any; // 955 -> 11063
declare function unk11064(...args: any[]): any; // 1053 -> 11064
declare function unk11065(int0: number, int1: number): number; // 479 -> 11065
declare function unk11066(int0: number): number; // 2073 -> 11066
declare function unk11067(int0: number): number; // 1176 -> 11067
declare function unk11068(int0: number): number; // 1611 -> 11068
declare function unk11069(int0: number): number; // 935 -> 11069
declare function unk11070(int0: number, int1: number): number; // 1428 -> 11070
declare function unk11071(int0: number): any; // 538 -> 11071
declare function unk11072(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): any; // 711 -> 11072
declare function unk11073(int0: number, int1: number, int2: number): number; // 79 -> 11073
declare function unk11074(int0: number): number; // 1981 -> 11074
declare function unk11075(int0: number): number; // 974 -> 11075
declare function unk11076(): number; // 499 -> 11076
declare function unk11077(): number; // 1232 -> 11077
declare function unk11078(int0: number): [number, number]; // 1172 -> 11078
declare function unk11079(): number; // 239 -> 11079
declare function unk11080(int0: number): [number, number]; // 1645 -> 11080
declare function unk11081(int0: number, int1: number): string; // 780 -> 11081
declare function unk11082(string0: string, string1: string, string2: string, int0: number): any; // 548 -> 11082
declare function unk11083(int0: number, int1: number, int2: number, int3: number, int4: number): any; // 2181 -> 11083
declare function unk11084(int0: number, string0: string, string1: string): any; // 1852 -> 11084
declare function unk11085(string0: string, string1: string): number; // 765 -> 11085
declare function unk11086(int0: number): any; // 1553 -> 11086
declare function unk11087(int0: number, int1: number, int2: number): any; // 1502 -> 11087
declare function unk11088(int0: number, string0: string, int1: number, int2: number): any; // 1558 -> 11088
declare function unk11089(int0: number, int1: number): number; // 1024 -> 11089
declare function unk11090(int0: number, int1: number): number; // 1557 -> 11090
declare function unk11091(int0: number, int1: number): number; // 1797 -> 11091
declare function unk11092(int0: number, int1: number): number; // 2257 -> 11092
declare function unk11093(int0: number, int1: number): number; // 1827 -> 11093
declare function unk11094(int0: number, int1: number): number; // 95 -> 11094
declare function unk11095(int0: number, int1: number): number; // 671 -> 11095
declare function unk11096(int0: number): number; // 2252 -> 11096
declare function unk11097(int0: number): number; // 1711 -> 11097
declare function unk11098(int0: number, int1: number): any; // 438 -> 11098
declare function unk11099(...args: any[]): any; // 61 -> 11099
declare function unk11100(int0: number, string0: string): any; // 1487 -> 11100
declare function unk11101(): [number, number, string, number, string, number, number, string]; // 2120 -> 11101
declare function unk11102(): [number, number, string, number, string, number, number, string]; // 1659 -> 11102
declare function unk11103(): number; // 1144 -> 11103
declare function unk11104(): number; // 171 -> 11104
declare function unk11105(): [number, string, string]; // 1665 -> 11105
declare function unk11106(): [number, string, string, string]; // 1490 -> 11106
declare function unk11107(int0: number): any; // 587 -> 11107
declare function unk11108(...args: any[]): any; // 1577 -> 11108
declare function unk11109(int0: number, int1: number, int2: number): any; // 411 -> 11109
declare function unk11110(...args: any[]): any; // 2177 -> 11110
declare function unk11111(string0: string, string1: string): any; // 515 -> 11111
declare function unk11112(): number; // 2128 -> 11112
declare function unk11113(int0: number): number; // 2051 -> 11113
declare function unk11114(int0: number, int1: number): any; // 2121 -> 11114
declare function unk11115(): number; // 1137 -> 11115
declare function unk11116(): number; // 1251 -> 11116
declare function unk11117(): number; // 930 -> 11117
declare function unk11118(): number; // 1638 -> 11118
declare function unk11119(int0: number, unknown: any): any; // 589 -> 11119
declare function unk11120(int0: number): number; // 250 -> 11120
declare function unk11121(string0: string): number; // 986 -> 11121
declare function unk11122(int0: number): number; // 1961 -> 11122
declare function unk11123(int0: number): number; // 1643 -> 11123
declare function unk11124(...args: any[]): any; // 1840 -> 11124
declare function unk11125(int0: number): any; // 2296 -> 11125
declare function unk11126(): number; // 1679 -> 11126
declare function unk11127(int0: number): number; // 2086 -> 11127
declare function unk11128(string0: string): any; // 2048 -> 11128
declare function unk11129(string0: string, int0: number): any; // 1971 -> 11129
declare function unk11130(...args: any[]): any; // 1262 -> 11130
declare function unk11131(...args: any[]): any; // 597 -> 11131
declare function unk11132(int0: number): number; // 799 -> 11132
declare function unk11133(int0: number): [number, number]; // 880 -> 11133
declare function unk11134(int0: number, int1: number, int2: number): number; // 649 -> 11134
declare function unk11135(int0: number, int1: number, int2: number): number; // 795 -> 11135
declare function unk11136(int0: number, int1: number, int2: number): any; // 1069 -> 11136
declare function unk11137(int0: number, int1: number): number; // 1352 -> 11137
declare function unk11138(int0: number, int1: number, int2: number): number; // 136 -> 11138
declare function unk11139(int0: number, int1: number, int2: number): any; // 1509 -> 11139
declare function unk11140(int0: number, int1: number): number; // 1544 -> 11140
declare function unk11141(int0: number, int1: number, int2: number): number; // 699 -> 11141
declare function unk11142(int0: number, int1: number, int2: number): any; // 417 -> 11142
declare function unk11143(int0: number, int1: number): number; // 1839 -> 11143
declare function unk11144(int0: number, int1: number, int2: number): number; // 1470 -> 11144
declare function unk11145(int0: number, int1: number, int2: number): any; // 2057 -> 11145
declare function unk11146(int0: number, int1: number): number; // 829 -> 11146
declare function unk11147(int0: number, int1: number, int2: number): number; // 833 -> 11147
declare function unk11148(int0: number, int1: number, int2: number): any; // 2316 -> 11148
declare function unk11149(): number; // 431 -> 11149
declare function unk11150(int0: number, int1: number): any; // 1280 -> 11150
declare function unk11151(...args: any[]): any; // 2008 -> 11151
declare function unk11152(int0: number): number; // 513 -> 11152
declare function unk11153(int0: number, int1: number): any; // 682 -> 11153
declare function unk11154(int0: number, int1: number): any; // 1713 -> 11154
declare function unk11155(int0: number, int1: number): any; // 1900 -> 11155
declare function unk11156(int0: number, int1: number): any; // 1850 -> 11156
declare function unk11157(int0: number, int1: number): any; // 1706 -> 11157
declare function unk11158(): number; // 2266 -> 11158
declare function unk11159(): number; // 933 -> 11159
declare function unk11160(): number; // 1304 -> 11160
declare function unk11161(...args: any[]): any; // 2327 -> 11161
declare function unk11162(): number; // 2199 -> 11162
declare function unk11163(...args: any[]): any; // 2253 -> 11163
declare function unk11164(...args: any[]): any; // 654 -> 11164
declare function unk11165(int0: number): any; // 814 -> 11165
declare function unk11166(...args: any[]): any; // 1851 -> 11166
declare function unk11167(...args: any[]): any; // 91 -> 11167
declare function unk11168(int0: number, int1: number, int2: number): any; // 1334 -> 11168
declare function unk11169(int0: number): number; // 1749 -> 11169
declare function unk11170(int0: number): [number, number]; // 1514 -> 11170
declare function unk11171(int0: number): number; // 348 -> 11171
declare function unk11172(int0: number, int1: number, int2: number): number; // 1752 -> 11172
declare function unk11174(...args: any[]): any; // 1880 -> 11174
declare function unk11175(...args: any[]): any; // 281 -> 11175
declare function unk11176(...args: any[]): any; // 1660 -> 11176
declare function unk11177(...args: any[]): any; // 1543 -> 11177
declare function unk11178(...args: any[]): any; // 1461 -> 11178
declare function unk11179(...args: any[]): any; // 446 -> 11179
declare function unk11180(...args: any[]): any; // 1863 -> 11180
declare function unk11181(...args: any[]): any; // 340 -> 11181
declare function unk11182(...args: any[]): any; // 1469 -> 11182
declare function unk11183(...args: any[]): any; // 2064 -> 11183
declare function unk11184(...args: any[]): any; // 2249 -> 11184
declare function unk11185(...args: any[]): any; // 41 -> 11185
declare function unk11186(...args: any[]): any; // 1248 -> 11186
declare function unk11187(...args: any[]): any; // 1350 -> 11187
declare function unk11188(...args: any[]): any; // 2070 -> 11188
declare function unk11189(...args: any[]): any; // 1682 -> 11189
