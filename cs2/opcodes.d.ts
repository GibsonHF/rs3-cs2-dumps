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
declare function pushlocalint(): unknown_int; // 862 -> 33
declare function plus(int0: int, int1: int): int; // 29 -> 4000
declare function pushconst(...args: any[]): any; // 1297 -> 9001
declare function intdiv(int0: int, int1: int): int; // 1413 -> 4003
declare function poplocalint(int0: unknown_int): void; // 1426 -> 34
declare function push_array(int0: int): unknown_int; // 86 -> 45
declare function pop_array(int0: int, int1: unknown_int): void; // 150 -> 46
declare function branch_lt(...args: any[]): any; // 1010 -> 9
declare function jump(): void; // 1811 -> 6
declare function IF_GETTEXT(int0: component): string; // 2233 -> 2602
declare function LOWERCASE(string0: string): string; // 1553 -> 4103
declare function strcmp(string0: string, string1: string): int; // 63 -> 4107
declare function AND(int0: int, int1: int): int; // 98 -> 4014
declare function minus(int0: int, int1: int): int; // 1840 -> 4001
declare function gosub(...args: any[]): any; // 2197 -> 40
declare function OC_MEMBERS(int0: obj): int; // 509 -> 10314
declare function branch_eq(...args: any[]): any; // 1607 -> 8
declare function MAP_MEMBERS(): unknown_int; // 847 -> 10028
declare function INV_TOTAL(int0: inv, int1: obj): int; // 1730 -> 3303
declare function pushvar(...args: any[]): any; // 458 -> 42
declare function CC_DELETEALL(int0: component): void; // 5 -> 152
declare function IF_SETHIDE(int0: boolean, int1: component): void; // 228 -> 2003
declare function ENUM_GETOUTPUTCOUNT(int0: cs2enum): int; // 2220 -> 3411
declare function enum_getvalue(int0: number, int1: number, int2: number, int3: number): any; // 1660 -> 3408
declare function IF_FIND(int0: component): unknown_int; // 1442 -> 10102
declare function intmul(int0: int, int1: int): int; // 1310 -> 4002
declare function CC_GETWIDTH(): int; // 1756 -> 10202
declare function IF_GETHEIGHT(int0: component): int; // 1358 -> 2503
declare function branch_gt(...args: any[]): any; // 171 -> 10
declare function IF_SETSCROLLSIZE(int0: int, int1: int, int2: component): void; // 160 -> 2120
declare function IF_SETSCROLLPOS(int0: int, int1: int, int2: component): void; // 418 -> 2100
declare function pushvarbit(): int; // 48 -> 10022
declare function IF_GETY(int0: component): int; // 358 -> 2501
declare function IF_GETHIDE(int0: component): boolean; // 776 -> 10077
declare function branch_gteq(...args: any[]): any; // 1108 -> 32
declare function IF_SETSIZE(int0: int, int1: int, int2: int, int3: int, int4: component): void; // 85 -> 2001
declare function IF_GETWIDTH(int0: component): int; // 2170 -> 2502
declare function MIN(int0: int, int1: int): int; // 1235 -> 4016
declare function MAX(int0: int, int1: int): int; // 505 -> 4017
declare function IF_HASSUBOVERLAY(int0: component, int1: overlayinterface): unknown_int; // 416 -> 10069
declare function IF_SETPOSITION(int0: int, int1: int, int2: int, int3: int, int4: component): void; // 1989 -> 2000
declare function branch_not(...args: any[]): any; // 1042 -> 7
declare function GET_ENTITY_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 1749 -> 10172
declare function GET_ENTITY_SCREEN_POSITION(int0: int): [int, int, int]; // 2023 -> 10173
declare function GET_ENTITY_OVERLAY_HEIGHT(): int; // 1729 -> 10174
declare function npc_getparam(...args: any[]): any; // 1996 -> 10076
declare function CC_FIND(int0: component, int1: int): unknown_int; // 265 -> 10116
declare function CC_SETHIDE(int0: boolean): void; // 1193 -> 1003
declare function CC_SETPOSITION(int0: int, int1: int, int2: int, int3: int): void; // 2088 -> 1000
declare function CC_SETSIZE(int0: int, int1: int, int2: unknown_int, int3: unknown_int): void; // 2243 -> 1001
declare function IF_GETNEXTSUBID(int0: component): int; // 1970 -> 2703
declare function popvar(...args: any[]): any; // 405 -> 43
declare function CC_CREATE(int0: component, int1: unknown_int, int2: int): void; // 1681 -> 150
declare function CC_SETTRANS(int0: int): void; // 1814 -> 1103
declare function IF_SETFILL(int0: unknown_int, int1: unknown_int): void; // 1537 -> 2102
declare function pushlocalstring(): unknown_string; // 602 -> 35
declare function MODULO(int0: int, int1: int): int; // 194 -> 4011
declare function struct_getparam(...args: any[]): any; // 1344 -> 4500
declare function branch_lteq(...args: any[]): any; // 1853 -> 31
declare function IF_SETONMOUSEREPEAT(vararg: BoundFunction, int0: unknown_int): void; // 1355 -> 2412
declare function IF_SETOP(int0: int, string0: string, int1: component): void; // 275 -> 2300
declare function IF_SETONCLICK(vararg: BoundFunction, int0: unknown_int): void; // 1124 -> 2400
declare function CC_SETONOP(vararg: BoundFunction): void; // 106 -> 1409
declare function CC_SETOP(int0: int, string0: string): void; // 2108 -> 1300
declare function CC_SETFILL(int0: unknown_int): void; // 421 -> 1102
declare function CC_SETNOCLICKTHROUGH(int0: boolean): void; // 1119 -> 10105
declare function IF_SETOUTLINE(int0: unknown_int, int1: component): void; // 340 -> 2116
declare function IF_GETTARGETMASK(int0: component): int; // 830 -> 2800
declare function inttostring(int0: int, int1: unknown_int): string; // 693 -> 10064
declare function strconcat(string0: string, string1: string): string; // 297 -> 4101
declare function IF_SETTEXT(string0: string, int0: component): void; // 968 -> 2112
declare function INV_SIZE(int0: inv): int; // 1557 -> 3304
declare function INV_GETOBJ(int0: inv, int1: int): obj; // 100 -> 3301
declare function INV_GETNUM(int0: inv, int1: int): int; // 805 -> 3302
declare function CC_SETOBJECT(int0: obj, int1: int): void; // 1360 -> 10368
declare function OC_NAME(int0: obj): string; // 2155 -> 4200
declare function joinstring(...args: any[]): any; // 615 -> 37
declare function CC_SETOPBASE(string0: string): void; // 1763 -> 1305
declare function CC_SETOUTLINE(int0: unknown_int): void; // 1059 -> 10118
declare function IF_GETSCROLLHEIGHT(int0: component): int; // 1062 -> 2604
declare function SCALE(int0: int, int1: int, int2: int): int; // 1437 -> 4018
declare function IF_GETSCROLLY(int0: component): int; // 209 -> 2601
declare function CC_SETGRAPHIC(int0: graphic): void; // 2100 -> 1105
declare function CC_SETTILING(int0: boolean): void; // 823 -> 1107
declare function CC_SETDRAGGABLE(int0: component, int1: int): void; // 148 -> 1301
declare function CC_SETDRAGRENDERBEHAVIOUR(int0: unknown_int): void; // 218 -> 1302
declare function CC_SETONDRAG(vararg: BoundFunction): void; // 1455 -> 1405
declare function CC_SETONDRAGCOMPLETE(vararg: BoundFunction): void; // 1050 -> 1410
declare function CC_SENDTOBACK(): void; // 55 -> 10541
declare function CC_SETONHOLD(vararg: BoundFunction): void; // 2013 -> 1401
declare function CC_SETONCLICK(vararg: BoundFunction): void; // 426 -> 1400
declare function IF_SETONSCROLLWHEEL(vararg: BoundFunction, int0: unknown_int): void; // 471 -> 2417
declare function CC_SETHFLIP(int0: boolean): void; // 1918 -> 1119
declare function CC_SETVFLIP(int0: boolean): void; // 83 -> 1118
declare function cc_setparam(int0: unknown_int, int1: unknown_int): void; // 966 -> 10098
declare function CC_SETONVARTRANSMIT(vararg: BoundFunction): void; // 346 -> 10145
declare function CC_GETHEIGHT(): int; // 1541 -> 10162
declare function CC_DRAGPICKUP(int0: int, int1: int): void; // 1201 -> 10161
declare function poplocalstring(string0: unknown_string): void; // 1815 -> 36
declare function CC_SETONMOUSEREPEAT(vararg: BoundFunction): void; // 801 -> 10107
declare function CC_SETONMOUSELEAVE(vararg: BoundFunction): void; // 107 -> 1404
declare function IF_SETCOLOUR(int0: int, int1: component): void; // 71 -> 2101
declare function TOSTRING_LOCALISED(int0: int, int1: unknown_int): string; // 1700 -> 4124
declare function STRING_LENGTH(string0: string): int; // 607 -> 4117
declare function CLAN_JOINCHAT(string0: string): void; // 1993 -> 10342
declare function FORMATMINIMENU(...args: any[]): any; // 1488 -> 10390
declare function ACTIVECLANSETTINGS_GETAFFINEDMUTED(...args: any[]): any; // 1056 -> 10382
declare function popdiscardint(int0: unknown_int): void; // 1994 -> 10004
declare function NOTIFICATIONS_INIT(): void; // 1539 -> 10181
declare function COORD(): coordgrid; // 147 -> 3308
declare function COORDZ(int0: coordgrid): int; // 2049 -> 3311
declare function IF_SETONTIMER(vararg: BoundFunction, int0: unknown_int): void; // 1387 -> 2408
declare function CAM2_ADDEFFECT_ZTILT(int0: unknown_int): unknown_int; // 735 -> 10027
declare function define_array(int0: int): void; // 1593 -> 10569
declare function ARRAY_SORT(int0: int, int1: unknown_int, int2: unknown_int): void; // 1045 -> 10681
declare function IF_SETGRAPHIC(int0: unknown_int, int1: unknown_int): void; // 827 -> 2105
declare function IF_GETMODELANGLE_X(int0: component): int; // 1841 -> 2606
declare function IF_GETMODELANGLE_Y(int0: component): int; // 1656 -> 2608
declare function IF_GETMODELANGLE_Z(int0: component): int; // 1718 -> 2607
declare function IF_GETMODELZOOM(int0: component): int; // 543 -> 2605
declare function IF_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): void; // 682 -> 2109
declare function IF_SETMODEL(int0: model, int1: component): void; // 1670 -> 2108
declare function IF_SETONVARTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1308 -> 2407
declare function REMOVETAGS(string0: string): string; // 732 -> 4119
declare function STRING_INDEXOF_CHAR(string0: string, int0: unknown_int, int1: int): int; // 1461 -> 10482
declare function SUBSTRING(string0: string, int0: int, int1: int): string; // 296 -> 4118
declare function COMLEVEL_ACTIVE(): int; // 217 -> 10415
declare function IF_SETPARAM_STRING(int0: unknown_int, string0: string, int1: component): void; // 175 -> 10114
declare function IF_SETPARAM_INT(int0: unknown_int, int1: int, int2: component): void; // 621 -> 2127
declare function IF_GETTOP(): unknown_int; // 6 -> 10092
declare function IF_SETTEXTANTIMACRO(int0: unknown_int, int1: component): void; // 1491 -> 10406
declare function SEQLENGTH(int0: seq): int; // 149 -> 10250
declare function IF_SETONMOUSEOVER(vararg: BoundFunction, int0: unknown_int): void; // 483 -> 10101
declare function IF_SETONMOUSELEAVE(vararg: BoundFunction, int0: unknown_int): void; // 922 -> 2404
declare function IF_SETMODELANIM(int0: seq, int1: component): void; // 2154 -> 2110
declare function IF_SETOBJECT(int0: obj, int1: int, int2: component): void; // 960 -> 2200
declare function IF_SETTEXTFONT(int0: fontmetrics, int1: component): void; // 344 -> 2113
declare function IF_SETONSUBCHANGE(...args: any[]): any; // 1699 -> 2424
declare function CC_GETHIDE(): boolean; // 1215 -> 10320
declare function SOUND_VORBIS_VOLUME(int0: vorbis, int1: unknown_int, int2: int, int3: unknown_int): void; // 1351 -> 3206
declare function printmessage(string0: string): void; // 1580 -> 3100
declare function CC_SETTEXT(string0: string): void; // 497 -> 1112
declare function CHAT_PLAYERNAME(): string; // 1830 -> 10029
declare function RESUME_STRINGDIALOG(string0: string): void; // 1915 -> 10119
declare function IGNORE_COUNT(): int; // 803 -> 10776
declare function IGNORE_ADD(string0: string): void; // 1692 -> 10436
declare function IGNORE_TEST(string0: string): unknown_int; // 611 -> 10270
declare function IGNORE_DEL(string0: string): void; // 759 -> 10089
declare function FRIEND_COUNT(): int; // 583 -> 10729
declare function FRIEND_ADD(string0: string): void; // 465 -> 10419
declare function FRIEND_TEST(string0: string): unknown_int; // 1848 -> 10414
declare function CHAT_GETFILTER_PRIVATE(): int; // 929 -> 5005
declare function CHAT_GETFILTER_PUBLIC(...args: any[]): any; // 159 -> 5000
declare function CHAT_GETFILTER_TRADE(...args: any[]): any; // 493 -> 5016
declare function CHAT_SETFILTER(...args: any[]): any; // 467 -> 5001
declare function CHAT_SENDPRIVATE(string0: string, string1: string): void; // 1366 -> 10791
declare function KEYHELD_SHIFT(): boolean; // 1929 -> 10528
declare function RESUME_COUNTDIALOG(string0: string): void; // 2060 -> 10006
declare function RESUME_COUNTDIALOG_LONG(string0: string): void; // 1516 -> 10579
declare function ESCAPE(string0: string): string; // 1040 -> 10441
declare function RESUME_NAMEDIALOG(string0: string): void; // 1667 -> 10597
declare function RANDOM(int0: int): int; // 632 -> 4004
declare function IF_SETMODELTINT(int0: int, int1: unknown_int, int2: unknown_int, int3: int, int4: component): void; // 94 -> 10557
declare function CLIENTCLOCK(): int; // 905 -> 3300
declare function cc_getparam(...args: any[]): any; // 1823 -> 10049
declare function IF_TRIGGEROP(int0: component, int1: int, int2: int): void; // 725 -> 10057
declare function RANDOMINC(int0: int): int; // 1325 -> 4005
declare function PLAYERMEMBER(): boolean; // 826 -> 10146
declare function CC_SETONTIMER(vararg: BoundFunction): void; // 15 -> 1408
declare function IF_CLOSESUBCLIENT(int0: component): void; // 895 -> 10020
declare function COORDX(int0: coordgrid): int; // 2028 -> 3309
declare function COORDY(int0: coordgrid): int; // 104 -> 3310
declare function CHAT_SENDABUSEREPORT(...args: any[]): any; // 1163 -> 10596
declare function CC_GETX(): int; // 288 -> 1500
declare function CC_GETY(): int; // 482 -> 1501
declare function IF_GETSCROLLWIDTH(int0: component): int; // 751 -> 2603
declare function CC_DELETE(): void; // 1290 -> 10115
declare function IF_SETONINVTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 496 -> 2414
declare function CC_SETTEXTFONT(int0: fontmetrics): void; // 1858 -> 1113
declare function CC_SETTEXTSHADOW(int0: boolean): void; // 899 -> 1115
declare function CC_SETCOLOUR(int0: int): void; // 143 -> 1101
declare function CC_SETOBJECT_LONG(int0: obj, long0: long): void; // 1950 -> 10799
declare function CC_SETDRAGDEADZONE(int0: int): void; // 665 -> 1303
declare function CC_SETDRAGDEADTIME(int0: unknown_int): void; // 1359 -> 1304
declare function CC_SETOBJECT_NONUM(int0: obj, int1: int): void; // 2000 -> 10367
declare function CC_CLEAROPS(): void; // 843 -> 10026
declare function INVOTHER_GETOBJ(int0: inv, int1: int): obj; // 167 -> 3313
declare function INVOTHER_GETNUM(int0: inv, int1: int): int; // 457 -> 10726
declare function item_getparam(...args: any[]): any; // 852 -> 4208
declare function popvarbit(int0: int): void; // 162 -> 10023
declare function CC_GETFONTMETRICS(): fontmetrics; // 70 -> 10437
declare function PARAHEIGHT(string0: string, int0: int, int1: fontmetrics): int; // 806 -> 4108
declare function IF_SETONKEY(vararg: BoundFunction, int0: unknown_int): void; // 885 -> 10265
declare function CAM2_GETCONTROLMODE(): unknown_int; // 513 -> 10123
declare function CAM2_GETLOOKATMODE(): unknown_int; // 207 -> 10637
declare function CAM2_SETLOOKATMODE(int0: unknown_int): void; // 1445 -> 10444
declare function CAM2_GETPOSITIONMODE(): unknown_int; // 1665 -> 10274
declare function CAM2_SETPOSITIONMODE(int0: unknown_int): void; // 2062 -> 10443
declare function CAM2_GETPOSITIONENTITY_ANGLEOFFSETS(): [int, int]; // 1633 -> 10273
declare function CAM2_SETPOSITIONENTITY_PLAYER(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int): void; // 2033 -> 10577
declare function CAM2_SETLINEARMOVEMENTMODE(int0: unknown_int): void; // 1346 -> 10166
declare function CAM2_SETPOSITIONANGULARINTERPOLATION(int0: unknown_int): void; // 82 -> 10165
declare function CLAN_GETCHATCOUNT(): int; // 1862 -> 3612
declare function CLAN_LEAVECHAT(): void; // 839 -> 3620
declare function IF_SETONCLANTRANSMIT(...args: any[]): any; // 1538 -> 10229
declare function IF_SETONFRIENDTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 572 -> 10223
declare function WORLDLIST_FETCH(): unknown_int; // 1581 -> 10163
declare function CC_SETTEXTALIGN(int0: int, int1: int, int2: int): void; // 1889 -> 1114
declare function CC_SETLINKFRIENDCHAT(int0: int): void; // 1246 -> 10808
declare function CC_SETMAXLINES(int0: int): void; // 1526 -> 10277
declare function OC_WEARPOS(int0: obj): int; // 610 -> 10253
declare function OC_CATEGORY(int0: obj): category; // 1131 -> 10356
declare function enum_getreverseindex(int0: unknown_int, int1: unknown_int, int2: cs2enum, int3: unknown_int, int4: int): unknown_int; // 898 -> 10154
declare function FRIEND_GETNAME(int0: int): [string, string]; // 918 -> 10474
declare function FRIEND_SETRANK(...args: any[]): any; // 2091 -> 10481
declare function DB_GETROWTABLE(int0: dbrow): unknown_int; // 1946 -> 10363
declare function dbrow_getfield(int0: number, int1: number, int2: number): any; // 1955 -> 10094
declare function DB_GETFIELDCOUNT(int0: dbrow, int1: unknown_int): int; // 1834 -> 10078
declare function STAT(int0: stat): int; // 1240 -> 10093
declare function MINIMENUOPEN(int0: component, int1: unknown_int): unknown_int; // 1002 -> 10332
declare function MAP_WORLD(): int; // 1316 -> 10210
declare function WORLDLIST_SPECIFIC(int0: int): [int, string, int, string, int, int, string]; // 1887 -> 10485
declare function TESTBIT(int0: int, int1: int): int; // 546 -> 4010
declare function POW(int0: int, int1: int): int; // 1409 -> 4012
declare function IF_SETTRANS(int0: int, int1: component): void; // 1982 -> 2103
declare function IF_GETLAYER(int0: component): component; // 2210 -> 2505
declare function MES_TYPED(int0: unknown_int, int1: unknown_int, string0: string): void; // 527 -> 3114
declare function IGNORE_ADD_TEMP(string0: string): void; // 492 -> 10413
declare function DB_FIND(...args: any[]): any; // 555 -> 10113
declare function dbrow_findnext(...args: any[]): any; // 1837 -> 10112
declare function CC_GETOPBASE(): string; // 811 -> 10338
declare function DATE_RUNEDAY(): int; // 1832 -> 10108
declare function IF_SETONVARCTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 199 -> 2428
declare function IF_SETOBJECT_NONUM(int0: obj, int1: int, int2: component): void; // 733 -> 2205
declare function CC_GETTEXT(): string; // 1118 -> 10201
declare function SPLINE_NEW(int0: unknown_int, int1: int): void; // 1121 -> 5405
declare function MOVECOORD(int0: coordgrid, int1: int, int2: int, int3: int): coordgrid; // 252 -> 3336
declare function SPLINE_ADDPOINT(int0: unknown_int, int1: int, int2: coordgrid, int3: int, int4: coordgrid, int5: int, int6: unknown_int): void; // 1266 -> 5406
declare function CAM_MOVEALONG(int0: unknown_int, int1: int, int2: int, int3: int, int4: unknown_int, int5: int): void; // 41 -> 5502
declare function IF_SETONCAMFINISHED(vararg: BoundFunction, int0: unknown_int): void; // 1666 -> 2426
declare function SPLINE_LENGTH(int0: unknown_int): int; // 1846 -> 5407
declare function CAM_SMOOTHRESET(): void; // 1225 -> 5512
declare function IF_SETVFLIP(int0: unknown_int, int1: unknown_int): void; // 2231 -> 10373
declare function WORLDMAP_DISABLEELEMENTCATEGORY(int0: unknown_int, int1: unknown_int): void; // 1312 -> 10219
declare function SOUND_SYNTH(int0: unknown_int, int1: unknown_int, int2: int): void; // 343 -> 3200
declare function WORLDMAP_DISABLETYPE(int0: unknown_int, int1: unknown_int): void; // 67 -> 10280
declare function WORLDMAP_DISABLETEXTSIZE(int0: unknown_int, int1: unknown_int): void; // 1721 -> 10279
declare function WORLDMAP_GETCURRENTMAP(): maparea; // 2176 -> 10590
declare function WORLDMAP_GETMAPNAME(int0: maparea): string; // 3 -> 5207
declare function CC_SETONMOUSEOVER(vararg: BoundFunction): void; // 1072 -> 1403
declare function WORLDMAP_SETMAP(int0: maparea): void; // 783 -> 10589
declare function HAS_HTML5(): unknown_int; // 1287 -> 10489
declare function WORLDMAP_GETCONFIGZOOM(int0: maparea): int; // 1127 -> 10588
declare function WORLDMAP_GETDISABLEELEMENTS(): unknown_int; // 69 -> 10964
declare function WORLDMAP_GETDISPLAYCOORD(int0: coordgrid): [int, int]; // 14 -> 10679
declare function CC_SETLINEDIRECTION(int0: unknown_int): void; // 1638 -> 10852
declare function CC_SETLINEWID(int0: int): void; // 919 -> 10851
declare function PARAWIDTH(string0: string, int0: int, int1: fontmetrics): int; // 113 -> 10251
declare function WORLDMAP_JUMPTOSOURCECOORD(int0: coordgrid): void; // 448 -> 5214
declare function WORLDMAP_JUMPTODISPLAYCOORD(int0: coordgrid): void; // 864 -> 10488
declare function WORLDMAP_GETMAP(int0: coordgrid): maparea; // 560 -> 10613
declare function WORLDMAP_SETMAP_COORD_OVERRIDE(int0: maparea, int1: coordgrid): void; // 1690 -> 10612
declare function IF_SETTEXTALIGN(int0: int, int1: int, int2: int, int3: component): void; // 822 -> 10261
declare function MARKETING_INITANALYTICS(...args: any[]): any; // 2159 -> 10340
declare function MARKETING_INITATTRIBUTION(...args: any[]): any; // 16 -> 10339
declare function OC_UNCERT(int0: obj): obj; // 804 -> 10249
declare function OC_CERT(int0: obj): obj; // 675 -> 10422
declare function STAT_BASE(int0: stat): int; // 20 -> 3306
declare function enum_getreversecount(int0: unknown_int, int1: cs2enum, int2: unknown_int): int; // 1568 -> 10240
declare function DATE_MINUTES(): int; // 896 -> 6300
declare function IF_SET2DANGLE(int0: int, int1: component): void; // 1978 -> 10060
declare function MAP_LANG(): int; // 328 -> 3335
declare function CC_SETMODEL(int0: model): void; // 152 -> 1108
declare function CC_SETMODELANIM(int0: seq): void; // 1663 -> 1110
declare function CC_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): void; // 274 -> 1109
declare function IF_GETPARENTLAYER(int0: component): component; // 136 -> 10121
declare function IF_SETNOCLICKTHROUGH(int0: unknown_int, int1: component): void; // 2238 -> 2005
declare function WORLDMAP_COORDINMAP(int0: coordgrid, int1: maparea): unknown_int; // 825 -> 10844
declare function IF_SETONRESIZE(vararg: BoundFunction, int0: unknown_int): void; // 887 -> 10097
declare function IF_SETONOP(vararg: BoundFunction, int0: unknown_int): void; // 2034 -> 2409
declare function FRIEND_DEL(string0: string): void; // 1102 -> 10007
declare function OC_HASVAROBJ(int0: obj): unknown_int; // 1174 -> 10341
declare function INV_GETVAR(int0: inv, int1: int, int2: unknown_int): int; // 1157 -> 10155
declare function IF_CLEAROPS(int0: component): void; // 261 -> 2307
declare function IF_SETNPCMODEL(int0: npc, int1: component): void; // 702 -> 10083
declare function BAS_GETANIM_READY(int0: bas): seq; // 2204 -> 4600
declare function IF_SETMODELZOOM(int0: int, int1: component): void; // 563 -> 2123
declare function ABS(int0: int): int; // 738 -> 10527
declare function STRINGWIDTH(string0: string, int0: fontmetrics): int; // 570 -> 4125
declare function GETBIT_RANGE(int0: int, int1: int, int2: int): int; // 1345 -> 10494
declare function IF_SETONVERTICALSWIPE(vararg: BoundFunction, int0: unknown_int): void; // 824 -> 10359
declare function IF_SETONHORIZONTALSWIPE(vararg: BoundFunction, int0: unknown_int): void; // 2058 -> 10344
declare function MARKETING_SENDANALYTICSEVENT(string0: string): void; // 221 -> 10515
declare function MARKETING_SENDATTRIBUTIONEVENT(string0: string): void; // 1086 -> 10514
declare function CHAT_PLAYERNAME_UNFILTERED(): string; // 984 -> 5020
declare function ACTIVECLANSETTINGS_GETAFFINEDSLOT(string0: string): int; // 1968 -> 10547
declare function ACTIVECLANSETTINGS_GETAFFINEDRANK(int0: int): int; // 1734 -> 10546
declare function IF_GETTRANS(int0: component): int; // 645 -> 2609
declare function INT_TO_LONG(int0: int): long; // 1320 -> 10033
declare function branch_lt_long(...args: any[]): any; // 1936 -> 10411
declare function IF_GETX(int0: component): int; // 208 -> 2500
declare function STRING_INDEXOF_STRING(string0: string, string1: string, int0: int): int; // 2146 -> 4121
declare function CAM_FOLLOWCOORD(int0: coordgrid): void; // 2095 -> 5511
declare function CAM_GETANGLE_XA(): int; // 379 -> 10454
declare function CAM_GETANGLE_YA(): int; // 278 -> 10453
declare function CAM_FORCEANGLE(int0: int, int1: int): void; // 1521 -> 5504
declare function IF_SETTARGETCURSORS(int0: cursor, int1: cursor, int2: unknown_int): void; // 1227 -> 10759
declare function IF_HASSUBMODAL(int0: component, int1: unknown_int): unknown_int; // 1092 -> 10068
declare function IF_SETOPBASE(string0: string, int0: component): void; // 1591 -> 2305
declare function IF_SETOPCURSOR(int0: unknown_int, int1: cursor, int2: component): void; // 688 -> 2309
declare function CC_GETID(): int; // 2179 -> 1702
declare function CC_SETLINKACTIVECLANCHANNEL(int0: int): void; // 2010 -> 10630
declare function CC_SETONRELEASE(vararg: BoundFunction): void; // 1898 -> 1402
declare function SETBIT(int0: int, int1: int): int; // 1925 -> 10232
declare function CLEARBIT(int0: int, int1: int): int; // 528 -> 10233
declare function GETWINDOWMODE(): int; // 1941 -> 5306
declare function STAT_VISIBLE_XP(int0: stat): int; // 291 -> 3307
declare function STAT_BASE_ACTUAL(int0: stat): int; // 504 -> 10296
declare function STAT_VISIBLE_XP_ACTUAL(int0: stat): int; // 1303 -> 10088
declare function IF_SETONDIALOGABORT(vararg: BoundFunction, int0: unknown_int): void; // 2203 -> 10052
declare function IF_CLOSE(): void; // 1924 -> 10151
declare function OC_FIND(string0: string, int0: boolean): int; // 2110 -> 10812
declare function OC_FINDNEXT(): obj; // 224 -> 10811
declare function RESUME_OBJDIALOG(int0: obj): void; // 1465 -> 3110
declare function IF_SETONSTOCKTRANSMIT(...args: any[]): any; // 287 -> 10470
declare function STOCKMARKET_GETOFFERTYPE(int0: int, int1: unknown_int): int; // 110 -> 10784
declare function STOCKMARKET_GETOFFERCOUNT(int0: int, int1: unknown_int): int; // 205 -> 10600
declare function STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int0: int, int1: unknown_int): int; // 1481 -> 10803
declare function STOCKMARKET_GETOFFERCOMPLETEDGOLD(...args: any[]): any; // 2128 -> 10802
declare function poplocallong(long0: unknown_long): void; // 1095 -> 10237
declare function STOCKMARKET_GETOFFERITEM(int0: int, int1: unknown_int): obj; // 1824 -> 10570
declare function pushlocallong(): unknown_long; // 1232 -> 10024
declare function SUB_LONG(long0: long, long1: long): long; // 1530 -> 10322
declare function TOSTRING_LOCALISED_LONG(long0: long, int0: unknown_int): string; // 1847 -> 10519
declare function STOCKMARKET_ISOFFERADDING(int0: int, int1: unknown_int): unknown_int; // 341 -> 10801
declare function STOCKMARKET_ISOFFERFINISHED(int0: int, int1: unknown_int): unknown_int; // 1606 -> 10490
declare function MAX_LONG(long0: unknown_long, long1: long): long; // 1449 -> 10389
declare function IF_SETTARGETVERB(string0: unknown_string, int0: component): void; // 1155 -> 10551
declare function CC_SETTARGETVERB(string0: string): void; // 1081 -> 10689
declare function STOCKMARKET_ISOFFEREMPTY(int0: int, int1: unknown_int): unknown_int; // 763 -> 10300
declare function STOCKMARKET_GETOFFERPRICE(int0: int, int1: unknown_int): long; // 2139 -> 10599
declare function CC_CLEARSCRIPTHOOKS(): void; // 1727 -> 10217
declare function IF_SETONTARGETENTER(...args: any[]): any; // 42 -> 2416
declare function IF_SETONTARGETLEAVE(vararg: BoundFunction, int0: unknown_int): void; // 1496 -> 2406
declare function IF_SETONSTATTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 2153 -> 2415
declare function CC_SETONTARGETENTER(...args: any[]): any; // 450 -> 10734
declare function CC_SETONTARGETLEAVE(...args: any[]): any; // 1637 -> 10733
declare function CC_GETTRANS(): int; // 2242 -> 10378
declare function CC_SETNPCHEAD(int0: npc): void; // 1382 -> 10205
declare function CC_GETMODELANGLE_X(...args: any[]): any; // 2102 -> 10329
declare function CC_GETMODELANGLE_Z(...args: any[]): any; // 1851 -> 10327
declare function CC_GETMODELZOOM(): int; // 1318 -> 10326
declare function OR(int0: int, int1: int): int; // 2096 -> 10075
declare function CC_GETTARGETMASK(): int; // 1031 -> 10407
declare function MAP_LOADEDPERCENT(): int; // 362 -> 10535
declare function IF_SETGRAPHICSHADOW(int0: unknown_int, int1: component): void; // 578 -> 2117
declare function CAM2_SETCOLLISIONMODE(int0: unknown_int, int1: unknown_int): void; // 332 -> 10030
declare function HAS_NXT(): unknown_int; // 1180 -> 10211
declare function CAM2_SETDEPTHPLANES(int0: unknown_int, int1: unknown_int): void; // 715 -> 10198
declare function IF_GETGRAPHIC(int0: component): graphic; // 1217 -> 2612
declare function MAP_LOADINGSCREEN_SETTRIGGERPERCENT(int0: unknown_int, int1: unknown_int): void; // 111 -> 10110
declare function IF_SENDTOBACK(int0: component): void; // 906 -> 10011
declare function IF_SENDTOFRONT(int0: component): void; // 139 -> 10010
declare function IF_RESETMODELLIGHTING(int0: component): void; // 39 -> 10781
declare function IF_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material, int10: component): void; // 0 -> 10242
declare function IF_GETFONTMETRICS(int0: component): fontmetrics; // 2083 -> 10317
declare function CC_SET2DANGLE(int0: int): void; // 276 -> 1106
declare function IF_SETONMISCTRANSMIT(...args: any[]): any; // 1100 -> 2422
declare function CC_GET2DANGLE(): int; // 433 -> 10499
declare function IF_CALLONRESIZE(int0: component): void; // 2016 -> 10059
declare function TARGETMODE_ACTIVE(): unknown_int; // 2122 -> 10207
declare function TARGETMODE_CANCEL(): void; // 2218 -> 10206
declare function RUNENERGY_VISIBLE(): int; // 731 -> 3321
declare function IF_GETGRAPHICDIMENSIONS(int0: component): [int, int]; // 115 -> 10621
declare function IF_SETONHOLD(...args: any[]): any; // 1196 -> 10807
declare function IF_SETONRELEASE(...args: any[]): any; // 1755 -> 10255
declare function IF_SETNPCHEAD(int0: npc, int1: component): void; // 1653 -> 2201
declare function OPENURL(string0: unknown_string, string1: string, int0: unknown_int): void; // 10 -> 10054
declare function IF_SETMAXLINES(int0: int, int1: component): void; // 279 -> 10258
declare function enum_getstring(int0: unknown_int, int1: unknown_int): string; // 946 -> 10047
declare function CC_SETPARAM_INT(int0: unknown_int, int1: int): void; // 1939 -> 10200
declare function CC_SETPARAM_STRING(int0: unknown_int, string0: string): void; // 1175 -> 10291
declare function popdiscardstring(string0: string): void; // 419 -> 10360
declare function IF_SETOBJECT_ALWAYSNUM(int0: obj, int1: int, int2: component): void; // 958 -> 10498
declare function OC_IOP(int0: obj, int1: unknown_int): string; // 761 -> 10243
declare function SOUND_VORBIS_RATE(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int): void; // 1513 -> 3209
declare function INV_TOTALCAT(int0: inv, int1: unknown_int): int; // 12 -> 10147
declare function IF_GETCHARPOSATINDEX(int0: int, int1: component): [int, int]; // 2207 -> 10765
declare function APPLET_HASFOCUS(): unknown_int; // 2182 -> 10369
declare function OC_ICURSOR(...args: any[]): any; // 1648 -> 10560
declare function INVOTHER_GETVAR(int0: inv, int1: int, int2: unknown_int): int; // 664 -> 10585
declare function CLIENTOPTION_SET(int0: int, int1: int): void; // 1790 -> 10032
declare function CHATPHRASE_GETAUTORESPONSECOUNT(int0: chatphrase): int; // 1582 -> 10533
declare function IF_GETSCROLLX(int0: component): int; // 943 -> 2600
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: chatphrase): int; // 1822 -> 10469
declare function CHATPHRASE_GETDYNAMICCOMMAND(int0: chatphrase, int1: int): unknown_int; // 545 -> 10664
declare function ACTIVECHATPHRASE_SETDYNAMICINT(int0: unknown_int, int1: int): void; // 1416 -> 10616
declare function ACTIVECHATPHRASE_SETDYNAMICOBJ(int0: unknown_int, int1: obj): void; // 158 -> 10617
declare function FRIEND_GETSLOTFROMNAME(string0: string): int; // 1605 -> 10493
declare function FRIEND_GETWORLD(int0: int): int; // 695 -> 10212
declare function FRIEND_PLATFORM(int0: int): unknown_int; // 157 -> 10287
declare function SETDEFAULTCURSORS(int0: unknown_int, int1: unknown_int): void; // 64 -> 10122
declare function SETHARDCODEDOPCURSORS(int0: unknown_int, int1: unknown_int): void; // 831 -> 10539
declare function PLATFORMTYPE(): unknown_int; // 786 -> 10209
declare function IF_GETMODELXOF(int0: component): int; // 1319 -> 2610
declare function IF_GETMODELYOF(int0: component): int; // 1484 -> 2611
declare function CC_GETMODELXOF(...args: any[]): any; // 1891 -> 10331
declare function CC_GETMODELYOF(): int; // 605 -> 10330
declare function CC_GETMODELANGLE_Y(): int; // 2052 -> 10328
declare function IF_CRMVIEW_INIT(): boolean; // 908 -> 10135
declare function CAM2_REMOVEEFFECT(int0: boolean): void; // 244 -> 10015
declare function SETUP_MESSAGEBOX(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void; // 1961 -> 10861
declare function VIDEO_ADVERT_FORCE_REMOVE(): void; // 817 -> 10365
declare function DATE_RUNEDAY_TODATE(int0: int): [int, int, int]; // 1621 -> 10275
declare function CONSOLE_ENABLESNOW(): void; // 54 -> 10860
declare function CLIENTOPTION_GET(int0: int): int; // 949 -> 10139
declare function INV_FREESPACE(int0: inv): int; // 378 -> 10199
declare function branch_gt_long(...args: any[]): any; // 395 -> 10321
declare function IF_SETDRAGGABLE(int0: component, int1: unknown_int, int2: component): void; // 851 -> 10290
declare function SHOP_REQUESTDATASTATUS(): unknown_int; // 183 -> 10609
declare function GENDER(): int; // 1353 -> 10235
declare function IF_HASSUB(int0: component): unknown_int; // 1780 -> 10048
declare function INV_TOTALPARAM(int0: inv, int1: unknown_int): int; // 314 -> 10218
declare function IF_SETENABLED(int0: boolean, int1: component): void; // 1049 -> 10152
declare function IF_GETMODEL(int0: unknown_int): model; // 2140 -> 10374
declare function IF_SETOPKEY(int0: int, int1: unknown_int, int2: unknown_int, int3: component): void; // 2225 -> 10194
declare function IF_SETOPKEYIGNOREHELD(int0: unknown_int, int1: component): void; // 172 -> 10193
declare function SHOP_PURCHASEITEM(string0: unknown_string): void; // 2229 -> 10216
declare function IF_SETSUBTRACTINSETS(...args: any[]): any; // 1514 -> 10423
declare function KEYHELD_CTRL(): boolean; // 1134 -> 10529
declare function SHOP_PURCHASEITEMSTATUS(): unknown_int; // 2178 -> 10343
declare function WORLDMAP_SETZOOM(...args: any[]): any; // 2127 -> 10425
declare function WORLDMAP_GETZOOM(...args: any[]): any; // 683 -> 10424
declare function CAM2_ISENABLED(): unknown_int; // 352 -> 10536
declare function CC_SETONCLICKREPEAT(...args: any[]): any; // 897 -> 10288
declare function CC_SETONBUTTONCLICK(vararg: BoundFunction): void; // 1855 -> 10445
declare function VIEWPORT_SETFOV(int0: unknown_int, int1: unknown_int): void; // 1770 -> 10042
declare function IF_SETPAUSETEXT(string0: string, int0: component): void; // 1930 -> 10111
declare function HSVTORGB(int0: int): int; // 230 -> 4020
declare function RANDOM_SOUND_PITCH(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: int, int4: unknown_int, int5: unknown_int): [vorbis, unknown_int, unknown_int, unknown_int, int]; // 657 -> 4019
declare function enum_hasoutput(int0: unknown_int, int1: cs2enum, int2: unknown_int): unknown_int; // 519 -> 10244
declare function CC_GETINVCOUNT(): int; // 1341 -> 10248
declare function BASEIDKIT(int0: unknown_int, int1: idkit): void; // 992 -> 10239
declare function BASECOLOUR(int0: unknown_int, int1: int): void; // 886 -> 404
declare function CC_SETPLAYERMODEL_SELF(): void; // 1947 -> 1211
declare function CC_SETONVARCTRANSMIT(vararg: BoundFunction): void; // 2041 -> 1428
declare function CHAT_LASTUID(): int; // 1393 -> 10063
declare function IF_SETONTARGETENTER(int0: unknown_int, string0: string, int1: int): void; // 2059 -> 10214
declare function CC_SETSUBTRACTINSETS(): void; // 1068 -> 10039
declare function CLAN_ISSELF(int0: int): unknown_int; // 1883 -> 10627
declare function PLAYER_GROUP_FIND(): unknown_int; // 1171 -> 10082
declare function CLAN_GETCHATRANK(): int; // 550 -> 3618
declare function CLAN_GETCHATMINKICK(int0: int): [unknown_int, unknown_int]; // 2172 -> 3616
declare function CLAN_GETCHATUSERRANK(int0: int): int; // 1289 -> 10626
declare function WORLDMAP_ISLOADED(): unknown_int; // 1317 -> 10149
declare function WORLDMAP_GETDISPLAYPOSITION(): [int, int]; // 247 -> 10677
declare function IF_SETPLAYERMODEL_SELF(int0: unknown_int): void; // 1897 -> 10292
declare function CLAN_KICKUSER(string0: string): void; // 238 -> 10845
declare function CHAT_SETMODE(int0: unknown_int): void; // 319 -> 10126
declare function CHAT_SENDPUBLIC(string0: string): void; // 764 -> 10125
declare function CC_FINDBYCATEGORY(int0: component, int1: int, int2: int): unknown_int; // 962 -> 10150
declare function CC_SETOBJECT_ALWAYSNUM(int0: obj, int1: int): void; // 913 -> 10366
declare function CAM_RESET(): void; // 846 -> 5503
declare function CC_SETOPCURSOR(int0: int, int1: unknown_int): void; // 1471 -> 10043
declare function BITCOUNT(int0: int): int; // 1762 -> 10050
declare function CC_GETLAYER(): component; // 1115 -> 1505
declare function ABORT_DIALOG(): void; // 655 -> 10031
declare function CLAN_GETCHATDISPLAYNAME(): string; // 1457 -> 10286
declare function IF_SETTILING(int0: unknown_int, int1: component): void; // 1728 -> 10783
declare function IF_SETONVARCSTRTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 716 -> 2429
declare function IF_SETONCHATTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1871 -> 10486
declare function CC_GETGRAPHIC(): graphic; // 861 -> 10289
declare function CHAR_ISPRINTABLE(int0: unknown_int): unknown_int; // 1214 -> 10635
declare function WORLDMAP_LISTELEMENT_START(...args: any[]): any; // 1286 -> 10817
declare function MEC_TEXT(int0: unknown_int): string; // 870 -> 10816
declare function WORLDMAP_LISTELEMENT_NEXT(): [unknown_int, coordgrid]; // 506 -> 10815
declare function REBOOTTIMER(): int; // 371 -> 10276
declare function USERDETAIL_QUICKCHAT(): unknown_int; // 1433 -> 10305
declare function FRIEND_GETRANK(...args: any[]): any; // 874 -> 10818
declare function IF_CLEARSCRIPTHOOKS(int0: component): void; // 1300 -> 10387
declare function WORLDMAP_CLOSEMAP(...args: any[]): any; // 503 -> 10386
declare function CHATPHRASE_FIND(string0: string, int0: unknown_int): int; // 178 -> 10820
declare function CHATPHRASE_FINDNEXT(): chatphrase; // 1304 -> 10819
declare function CHATPHRASE_GETTEXT(int0: chatphrase): string; // 1720 -> 10810
declare function APPEND_NUM(string0: string, int0: int): string; // 1584 -> 10611
declare function IF_SETTEXTSHADOW(int0: unknown_int, int1: component): void; // 375 -> 10512
declare function VIDEO_ADVERT_HAS_FINISHED(): unknown_int; // 630 -> 10775
declare function DETAIL_SOUNDVOL(...args: any[]): any; // 108 -> 10160
declare function DETAIL_BGSOUNDVOL(...args: any[]): any; // 1711 -> 10158
declare function DETAIL_SPEECHVOL(...args: any[]): any; // 226 -> 10157
declare function DETAIL_LOGINVOL(...args: any[]): any; // 368 -> 10156
declare function VIDEO_ADVERT_PLAY(int0: unknown_int): unknown_int; // 2141 -> 10774
declare function INV_STOCKBASE(int0: unknown_int, int1: unknown_int): unknown_int; // 1490 -> 10350
declare function CC_GETCOLOUR(): int; // 2157 -> 10297
declare function IF_OPENSUBCLIENT(int0: component, int1: unknown_int): void; // 882 -> 10141
declare function CC_SETALPHA(int0: unknown_int): void; // 1571 -> 10730
declare function QUEST_GETNAME(int0: quest): string; // 52 -> 10245
declare function QUEST_GETSORTNAME(...args: any[]): any; // 2169 -> 10540
declare function quest_getparam(...args: any[]): any; // 1226 -> 10262
declare function QUEST_GETDIFFICULTY(int0: quest): int; // 1230 -> 10241
declare function SIN_DEG(...args: any[]): any; // 65 -> 10396
declare function COS_DEG(...args: any[]): any; // 724 -> 10395
declare function QUEST_QUESTREQ_COUNT(int0: quest): int; // 2068 -> 10595
declare function QUEST_QUESTREQ(int0: quest, int1: int): quest; // 289 -> 10594
declare function QUEST_STATREQ_COUNT(int0: quest): int; // 800 -> 10510
declare function QUEST_STATREQ_STAT(...args: any[]): any; // 530 -> 10509
declare function QUEST_STATREQ_LEVEL(...args: any[]): any; // 2191 -> 10508
declare function VIEWPORT_SETZOOM(int0: int, int1: int): void; // 1760 -> 10222
declare function VIEWPORT_CLAMPFOV(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1402 -> 10221
declare function CAM2_SETFIELDOFVIEW(int0: int, int1: int): void; // 1326 -> 10036
declare function QUEST_GETMEMBERS(int0: quest): boolean; // 359 -> 10716
declare function QUEST_POINTSREQ(int0: quest): int; // 1821 -> 10516
declare function QUEST_POINTS(int0: quest): int; // 1089 -> 10727
declare function DIVIDE_LONG(long0: long, long1: long): long; // 432 -> 10412
declare function MULTIPLY_LONG(long0: long, long1: long): long; // 1260 -> 10371
declare function QUEST_FINISHED(int0: quest): boolean; // 1864 -> 10430
declare function QUEST_STARTED(int0: quest): unknown_int; // 428 -> 10521
declare function CHAR_ISALPHANUMERIC(int0: unknown_int): unknown_int; // 2025 -> 10867
declare function CHAR_TOLOWERCASE(string0: string, int0: unknown_int): [string, unknown_int]; // 1473 -> 10866
declare function ADDPERCENT(int0: int, int1: unknown_int): int; // 687 -> 10680
declare function APPEND_CHAR(string0: string, int0: unknown_int): string; // 76 -> 10634
declare function IF_GET2DANGLE(int0: component): int; // 1535 -> 10167
declare function CC_SETTARGETOPCURSOR(int0: cursor): void; // 1034 -> 10789
declare function CC_SETTARGETCURSORS(int0: cursor, int1: cursor): void; // 1184 -> 10788
declare function WORLDLIST_PINGWORLDS(int0: unknown_int): void; // 1678 -> 6509
declare function LOBBY_LEAVELOBBY(): void; // 1625 -> 5616
declare function CHATCAT_GETSUBCATCOUNT(...args: any[]): any; // 614 -> 10890
declare function CHATCAT_GETPHRASECOUNT(...args: any[]): any; // 441 -> 10889
declare function CHATCAT_GETSUBCAT(int0: chatcat, int1: int): chatcat; // 264 -> 10886
declare function CHATCAT_GETPHRASE(int0: chatcat, int1: int): chatphrase; // 2224 -> 10884
declare function CHATPHRASE_GETAUTORESPONSE(int0: chatphrase, int1: int): chatphrase; // 954 -> 10869
declare function CHAR_TOUPPERCASE(int0: unknown_int): unknown_int; // 748 -> 10887
declare function CHATCAT_GETSUBCATSHORTCUT(int0: chatcat, int1: int): unknown_int; // 495 -> 10888
declare function CHAR_ISNUMERIC(int0: unknown_int): unknown_int; // 266 -> 10885
declare function IF_SETLINEDIRECTION(int0: unknown_int, int1: component): void; // 1798 -> 10864
declare function GET_COL_TAG(int0: int): string; // 642 -> 10061
declare function CLIENTOPTION_EXISTS(int0: int): unknown_int; // 577 -> 10737
declare function CLIENTOPTION_CANMOD(int0: int): unknown_int; // 1562 -> 10736
declare function AUTOSETUP_GETLEVEL(): unknown_int; // 650 -> 10319
declare function USERDETAIL_LOBBY_MEMBERSHIP(): [int, int, unknown_int]; // 1293 -> 10660
declare function FORMAT_DATETIME_FROM_MINUTES(int0: int): string; // 105 -> 10576
declare function IF_SETONBUTTONCLICK(...args: any[]): any; // 99 -> 10197
declare function IF_NPC_SETCUSTOMHEADMODEL(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 2092 -> 10464
declare function IF_NPC_SETCUSTOMRETEX(int0: unknown_int, int1: material, int2: unknown_int): void; // 771 -> 10463
declare function CLEARBIT_RANGE(int0: int, int1: unknown_int, int2: unknown_int): int; // 1563 -> 10853
declare function USERDETAIL_LOBBY_UNREADMESSAGES(...args: any[]): any; // 850 -> 10690
declare function USERDETAIL_LOBBY_EMAILSTATUS(...args: any[]): any; // 1450 -> 10703
declare function FULLSCREEN_GETMODE(int0: int): [int, int]; // 57 -> 10355
declare function AUTOSETUP_SETCUSTOM(): void; // 1650 -> 10604
declare function SETWINDOWMODE(...args: any[]): any; // 1015 -> 10671
declare function SETDEFAULTWINDOWMODE(...args: any[]): any; // 1600 -> 10670
declare function FULLSCREEN_MODECOUNT(): int; // 721 -> 10669
declare function FULLSCREEN_ENTER(int0: int, int1: int): unknown_int; // 789 -> 10668
declare function CREATE_CONNECT_REPLY(): unknown_int; // 1816 -> 10786
declare function CREATE_REPLY(): unknown_int; // 134 -> 10563
declare function CREATE_EMAIL_VALIDATE_REPLY(): unknown_int; // 1942 -> 10975
declare function WORLDLIST_SPECIFIC_THISWORLD(): int; // 947 -> 10208
declare function CC_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model): void; // 1186 -> 10766
declare function CC_NPC_SETCUSTOMRETEX(int0: unknown_int, int1: unknown_int): void; // 1283 -> 10409
declare function IF_SETONDRAG(vararg: BoundFunction, int0: unknown_int): void; // 2069 -> 10388
declare function IF_SETONDRAGCOMPLETE(vararg: BoundFunction, int0: unknown_int): void; // 1842 -> 2410
declare function IF_SETDRAGRENDERBEHAVIOUR(int0: unknown_int, int1: unknown_int): void; // 464 -> 10697
declare function CAM_DEC_Y(): void; // 2117 -> 10720
declare function CAM_INC_Y(): void; // 1390 -> 10719
declare function CAM_INC_X(): void; // 425 -> 10718
declare function CAM_DEC_X(): void; // 2142 -> 10717
declare function CC_GETINVOBJECT(): obj; // 879 -> 10313
declare function USERDETAIL_LOBBY_CCEXPIRY(...args: any[]): any; // 1810 -> 10856
declare function USERDETAIL_LOBBY_GRACEEXPIRY(...args: any[]): any; // 727 -> 10855
declare function AUTOSETUP_SETLOW(): void; // 523 -> 10608
declare function OPENURLRAW(string0: string, int0: unknown_int): void; // 1977 -> 10040
declare function branch_gteq_long(...args: any[]): any; // 1675 -> 10349
declare function WORLDLIST_SORT(int0: int, int1: boolean, int2: int, int3: boolean): void; // 2007 -> 10747
declare function LOGIN_RESETREPLY(): void; // 1944 -> 10266
declare function SSO_AVAILABLE(): unknown_int; // 1585 -> 10294
declare function LOBBY_ENTERLOBBY_SSO(string0: string, int0: boolean): void; // 336 -> 10375
declare function LOBBY_ENTERLOBBY(string0: string, string1: string, string2: string, int0: boolean): void; // 608 -> 10710
declare function LOBBY_ENTERLOBBYREPLY(): unknown_int; // 1948 -> 10067
declare function WINDOW_GETINSETS(): [int, int, int, int]; // 144 -> 10446
declare function IF_SLIDER_GETMINMAX(int0: int, int1: int): unknown_int; // 1592 -> 10678
declare function USERDETAIL_LOBBY_LASTLOGINDAY(): int; // 1976 -> 10834
declare function CAM2_GETPOSITIONPOINT_POINT(...args: any[]): any; // 1159 -> 10504
declare function MOVECOORD_FINE(...args: any[]): any; // 2223 -> 10401
declare function CAM2_SETPOSITIONPOINT_POINT(...args: any[]): any; // 211 -> 10439
declare function LOGIN_CANCEL(): void; // 538 -> 5630
declare function IGNORE_GETNAME(int0: int): [string, string]; // 2113 -> 10472
declare function STAFFMODLEVEL(): unknown_int; // 129 -> 10180
declare function PLAYERMOD(): unknown_int; // 2001 -> 10456
declare function IF_BUTTON_SETTOGGLED(int0: unknown_int, int1: unknown_int): void; // 1827 -> 10185
declare function LOBBY_ENTERGAMEREPLY(): int; // 1965 -> 10186
declare function GET_MOUSEX(): int; // 1405 -> 3342
declare function GET_MOUSEY(): int; // 747 -> 3343
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(int0: int, int1: int): [int, string, unknown_int]; // 1850 -> 10522
declare function TTV_LOGOUT(): unknown_int; // 1101 -> 10615
declare function TTV_LIBRARY_REQUEST(): int; // 925 -> 10503
declare function TTV_STREAM_START(int0: int, int1: int, int2: int, int3: unknown_int): int; // 869 -> 10722
declare function TTV_STREAM_SETTITLE(string0: string): int; // 998 -> 10721
declare function IF_SET2DANGLE(): unknown_int; // 2029 -> 10189
declare function QUIT(): void; // 916 -> 10362
declare function SHOP_GETINDEXFORCATEGORYID(...args: any[]): any; // 169 -> 10655
declare function SHOP_GETPRODUCTCOUNT(...args: any[]): any; // 1775 -> 10654
declare function SHOP_GETPRODUCTDETAILS(int0: unknown_int, int1: int): [string, string, unknown_string, string, unknown_string, unknown_string, unknown_int, unknown_string]; // 1044 -> 10653
declare function CHAT_SETMODE(...args: any[]): any; // 60 -> 10126
declare function ACTIVECLANCHANNEL_GETUSERCOUNT(): int; // 836 -> 10740
declare function ACTIVECLANCHANNEL_GETUSERSLOT(string0: string): int; // 769 -> 3760
declare function ACTIVECLANCHANNEL_GETUSERRANK(int0: int): int; // 1179 -> 3757
declare function ACTIVECLANCHANNEL_GETCLANNAME(): string; // 568 -> 10688
declare function ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int0: int): string; // 564 -> 10739
declare function ACTIVECLANCHANNEL_GETUSERWORLD(int0: int): int; // 2087 -> 10335
declare function IF_SETONCLANCHANNELTRANSMIT(...args: any[]): any; // 2 -> 10228
declare function IF_SETONCLANSETTINGSTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1661 -> 2431
declare function PLAYERMODLEVEL(): unknown_int; // 1447 -> 10455
declare function UNKNOWN_COMMAND_126(): [int, int, int, int]; // 366 -> 10416
declare function CANCEL_INTERFACE_DRAG(): void; // 673 -> 10003
declare function UNKNOWN_COMMAND_455(): void; // 2175 -> 10497
declare function DATE_MINUTES_FROMRUNEDAY(int0: int): int; // 308 -> 6306
declare function IF_LIST_SETENTRIES(int0: unknown_int, int1: component): void; // 2116 -> 10391
declare function IF_LIST_SETDROPDOWNNUMENTRIES(...args: any[]): any; // 571 -> 10345
declare function IF_LIST_SETSELECTIONLIMIT(...args: any[]): any; // 1016 -> 10348
declare function IF_GETSTYLESHEET(int0: component): unknown_int; // 393 -> 10347
declare function STYLESHEET_GET_VALUE(int0: stylesheet, string0: string, int1: unknown_int): int; // 1361 -> 10346
declare function HIGHLIGHT_SET_CATEGORY_MODE(...args: any[]): any; // 938 -> 10143
declare function HIGHLIGHT_SET_CATEGORY_COLOUR(...args: any[]): any; // 1935 -> 10142
declare function INTERFACE_SETPICKINGRADIUS(int0: unknown_int): void; // 1212 -> 10008
declare function CAM_LOOKAT(...args: any[]): any; // 146 -> 5501
declare function CAM_MOVETO(...args: any[]): any; // 1251 -> 5500
declare function USERFLOWFLAGS(): [int, int]; // 980 -> 5624
declare function CC_CALLONRESIZE(): void; // 59 -> 10492
declare function NOTIFICATIONS_CANCELLOCAL(int0: int): void; // 1425 -> 10447
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(string0: string, string1: string, int0: int, int1: int, string2: string, int2: int): int; // 1080 -> 10650
declare function OBJSTACK_TYPE(int0: unknown_int): void; // 1414 -> 10009
declare function ACHIEVEMENT_REQSTATE(int0: achievement): int; // 1177 -> 10501
declare function CC_SETSCROLLSIZE(int0: int, int1: int): void; // 1096 -> 10438
declare function CC_GETSCROLLWIDTH(): int; // 1522 -> 10459
declare function CC_SETSCROLLPOS(int0: int, int1: int): void; // 1504 -> 10252
declare function CC_SENDTOFRONT(): void; // 334 -> 10502
declare function CC_GETSCROLLX(): int; // 249 -> 10460
declare function IF_SETMOUSEOVERCURSOR(int0: unknown_int, int1: component): void; // 1043 -> 10041
declare function DB_LISTALL(int0: unknown_int): int; // 1314 -> 10452
declare function CC_GETPARENTLAYER(): component; // 1261 -> 10435
declare function ATAN2_DEG(int0: int, int1: int): int; // 977 -> 10835
declare function OC_STACKABLE(int0: obj): unknown_int; // 1689 -> 10500
declare function IF_SETRETEX(int0: int, int1: material, int2: material, int3: component): void; // 561 -> 10187
declare function IF_SETRECOL(int0: unknown_int, int1: unknown_int, int2: int, int3: component): void; // 1399 -> 10303
declare function IF_RESUME_PAUSEBUTTON(int0: unknown_int): void; // 1731 -> 10283
declare function CC_SETOPKEY(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void; // 2119 -> 10496
declare function CC_SETOPKEYRATE(int0: int, int1: unknown_int, int2: unknown_int): void; // 834 -> 10511
declare function CC_SETOPTKEY(int0: int, int1: int): void; // 1307 -> 10358
declare function CC_SETOPTKEYRATE(int0: unknown_int, int1: unknown_int): void; // 2184 -> 10383
declare function AUTOSETUP_DOSETUPSTATUS(): [unknown_int, int]; // 2131 -> 10657
declare function CREATE_NAME_AVAILABLEREQUEST(string0: string): void; // 1669 -> 10264
declare function WORLDMAP_3DVIEW_ACTIVE(int0: unknown_int): void; // 269 -> 10230
declare function OC_MINIMENU_COLOUR(int0: obj): int; // 1258 -> 10062
declare function SSO_LOGOUT(): void; // 18 -> 10420
declare function SETWALKMARKER(int0: unknown_int, int1: unknown_int): void; // 507 -> 10282
declare function CC_SETNPCMODEL(int0: npc): void; // 508 -> 10544
declare function CC_SETMODELZOOM(int0: int): void; // 1036 -> 10587
declare function WORLDMAP_GETDISPLAYCOORD(int0: var_reference): int; // 2193 -> 10324
declare function CC_LIST_SETENTRYICON(int0: int, int1: graphic): void; // 1178 -> 10530
declare function IF_GETNEXTCATEGORYSUBID(int0: int, int1: component): int; // 1167 -> 10323
declare function CC_CREATECHILD(int0: unknown_int, int1: int, int2: int): void; // 1446 -> 10191
declare function CC_DELETEALLNESTED(): void; // 1610 -> 10337
declare function ACTIVECLANSETTINGS_FIND_LISTENED(): unknown_int; // 855 -> 10080
declare function ACTIVECLANSETTINGS_GETCLANNAME(...args: any[]): any; // 617 -> 10448
declare function ACTIVECLANSETTINGS_GETAFFINEDCOUNT(): int; // 26 -> 10312
declare function TEXT_SWITCH(int0: boolean, string0: unknown_string, string1: unknown_string): string; // 1861 -> 10263
declare function branch_not_long(...args: any[]): any; // 589 -> 10449
declare function CLANFORUMQFC_TOSTRING(string0: unknown_string, long0: clanforumqfc): [string, string]; // 1137 -> 10127
declare function GETCLIPBOARD(): string; // 551 -> 10507
declare function RESUME_CLANFORUMQFCDIALOG(string0: string): void; // 742 -> 10256
declare function ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT(): int; // 225 -> 10683
declare function ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int0: int): string; // 254 -> 10682
declare function ACTIVECLANCHANNEL_GETSORTEDUSERSLOT(int0: int): int; // 981 -> 10868
declare function UNKNOWN_COMMAND_127(int0: int, int1: int, int2: int, int3: int): void; // 166 -> 10695
declare function ACTIVECLANCHANNEL_FIND_LISTENED(): unknown_int; // 1165 -> 10188
declare function IF_SETONPLAYERGROUPTRANSMIT(...args: any[]): any; // 413 -> 10361
declare function ACTIVECLANCHANNEL_GETRANKKICK(): int; // 2171 -> 3753
declare function DATE_RUNEDAY_FROMDATE(int0: int, int1: int, int2: int): int; // 1917 -> 10065
declare function DATE_ISLEAPYEAR(int0: int): unknown_int; // 184 -> 10623
declare function CLAN_GETCHATOWNERNAME(): string; // 2005 -> 10940
declare function CLAN_GETCHATUSERNAME_UNFILTERED(...args: any[]): any; // 305 -> 10941
declare function CLAN_GETCHATUSERNAME(...args: any[]): any; // 1745 -> 10942
declare function CLAN_GETCHATUSERWORLD(int0: int): int; // 1295 -> 10213
declare function LOBBY_ENTERLOBBY_SOCIAL_NETWORK(...args: any[]): any; // 231 -> 10785
declare function IF_GETOP(int0: unknown_int, int1: component): string; // 809 -> 10603
declare function CLANPROFILE_FIND(): unknown_int; // 1680 -> 10136
declare function CC_SETASPECT(int0: int, int1: int): void; // 903 -> 10457
declare function IF_SETONVARCLANTRANSMIT(...args: any[]): any; // 382 -> 2433
declare function IF_GETCOLOUR(int0: component): int; // 1298 -> 10575
declare function RESUME_HSLDIALOG(int0: int): void; // 1322 -> 3116
declare function OC_ALLOWSPLACEHOLDER(int0: obj): unknown_int; // 976 -> 10178
declare function IF_SETGRAPHIC(...args: any[]): any; // 1643 -> 2105
declare function CC_SETONINVTRANSMIT(vararg: BoundFunction): void; // 1480 -> 10518
declare function CC_SETONVARCSTRTRANSMIT(vararg: BoundFunction): void; // 860 -> 10517
declare function GETDEFAULTWINDOWMODE(int0: int, int1: int, int2: int, int3: int): unknown_int; // 2213 -> 10109
declare function MINIMENU_CLOSE(): void; // 1051 -> 10014
declare function branch_eq_long(...args: any[]): any; // 246 -> 10153
declare function ADD_LONG(long0: long, long1: long): long; // 1219 -> 10238
declare function CLIENTTYPE(): unknown_int; // 262 -> 10120
declare function CC_SETMOUSEOVERCURSOR(int0: unknown_int): void; // 408 -> 10301
declare function IF_SETMODELORTHOG(int0: unknown_int, int1: unknown_int): void; // 766 -> 10034
declare function IF_GRID_GETNUMROWS(int0: component): unknown_int; // 1435 -> 10648
declare function IF_GRID_GETNUMCOLUMNS(int0: component): int; // 1911 -> 10647
declare function IF_GETCHILDSPACING(int0: component): int; // 32 -> 10646
declare function IF_GRID_GETCELLHEIGHT(int0: component): int; // 1789 -> 10645
declare function CC_SETONHORIZONTALPINCH(int0: int, int1: unknown_int, int2: int, int3: int, int4: int): [unknown_int, int]; // 1494 -> 10644
declare function DETAIL_MUSICVOL(...args: any[]): any; // 1456 -> 10159
declare function CC_SETPAUSETEXT(string0: string): void; // 1910 -> 10025
declare function CC_SETRETEX(int0: unknown_int, int1: unknown_int, int2: material): void; // 1613 -> 10749
declare function USERDETAIL_LOBBY_PLAYAGE(): unknown_int; // 1647 -> 10598
declare function SOUND_SPEECH_VOLUME(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1028 -> 10559
declare function ACHIEVEMENT_SPRITE(int0: achievement): graphic; // 1583 -> 10636
declare function ACHIEVEMENT_FINDPARENTS(int0: achievement): unknown_int; // 472 -> 10865
declare function ACHIEVEMENT_FINDNEXT(): achievement; // 2143 -> 10532
declare function ACHIEVEMENT_GETNAME(int0: achievement): string; // 840 -> 10561
declare function IF_SETOBJECT_HIGHRES(int0: obj, int1: component): void; // 331 -> 10037
declare function IF_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model, int2: unknown_int): void; // 1705 -> 10702
declare function OC_WEARPOS2(int0: obj): unknown_int; // 1027 -> 10487
declare function RESEND_UID_PASSPORT_REQUEST(): void; // 1945 -> 10325
declare function CC_SETRECOL(int0: int, int1: int, int2: int): void; // 1375 -> 10880
declare function db_find_with_count(int0: unknown_int, int1: unknown_int, int2: unknown_int): int; // 489 -> 10100
declare function CAM2_REMOVEALLEFFECTS(): void; // 737 -> 10000
declare function CAM2_SETLOOKATENTITY_PLAYER(int0: int, int1: int, int2: int, int3: unknown_int): void; // 1265 -> 10442
declare function GET_MOUSEBUTTONS(): [unknown_int, unknown_int, unknown_int]; // 2189 -> 10667
declare function IF_SETONCLICKREPEAT(...args: any[]): any; // 662 -> 10618
declare function CC_SETONSTATTRANSMIT(vararg: BoundFunction): void; // 77 -> 10723
declare function mec_getparam(...args: any[]): any; // 1791 -> 10192
declare function OPENURL_SHIM(string0: string, string1: string, string2: string, int0: unknown_int): void; // 1740 -> 10084
declare function IF_GETCHARINDEXATPOS(int0: int, int1: int, int2: component): int; // 2009 -> 10638
declare function LOGIN_ACCOUNTAPPEAL(string0: string): unknown_int; // 294 -> 10732
declare function MAP_ISOWNER(string0: unknown_string): unknown_int; // 1684 -> 10614
declare function CREATE_SUGGEST_NAME_REQUEST(...args: any[]): any; // 1802 -> 10168
declare function URLENCODE(string0: string): string; // 1627 -> 10124
declare function CREATE_SUGGEST_NAME_REPLY(...args: any[]): any; // 921 -> 10545
declare function CREATE_NAME_VALIDATE_REPLY(): unknown_int; // 985 -> 10572
declare function IF_CREATECHILD(int0: unknown_int, int1: int, int2: int, int3: component): void; // 691 -> 10298
declare function SETOBJ(int0: unknown_int, int1: unknown_int): void; // 1151 -> 10804
declare function IF_CREATENESTED(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: component): unknown_int; // 526 -> 10260
declare function CC_SETENABLED(int0: boolean): void; // 260 -> 10087
declare function CC_SETFEEDBACKMODE(int0: unknown_int): void; // 1766 -> 10086
declare function CC_BUTTON_SETCANTOGGLE(int0: boolean): void; // 1739 -> 10129
declare function CC_BUTTON_SETTOGGLED(int0: boolean): void; // 1441 -> 10128
declare function SOUND_GROUP_STOP(int0: unknown_int): void; // 1381 -> 10184
declare function CC_CHECK_SET(int0: boolean): void; // 43 -> 10085
declare function CC_CHECK_SETALIGNMENT(...args: any[]): any; // 1508 -> 10046
declare function CC_CHECK_SETBUTTONSIZE(...args: any[]): any; // 387 -> 10045
declare function CC_SCROLLBAR_SETVISIBLE(int0: unknown_int): void; // 1890 -> 10138
declare function CC_LIST_SETENTRIES(int0: cs2enum): void; // 280 -> 10676
declare function CC_LIST_SETISSELECTED(int0: int, int1: unknown_int, int2: unknown_int): void; // 1552 -> 10675
declare function CC_LIST_ADDENTRY(int0: int, string0: string, int1: unknown_int): unknown_int; // 2008 -> 10531
declare function CC_LIST_CLEARSELECTION(): void; // 2081 -> 10372
declare function CC_GRID_SETLAYOUTPARAMS(...args: any[]): any; // 2056 -> 10379
declare function CC_SETCHILDSPACING(...args: any[]): any; // 236 -> 10353
declare function PRELOAD_PERCENT(): int; // 501 -> 10712
declare function MAP_PRELOAD(int0: coordgrid): void; // 1439 -> 10012
declare function CAM2_SETPOSITIONPOINTCOLLISION(int0: unknown_int): void; // 814 -> 10370
declare function IF_SETOPKEYRATE(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 173 -> 10552
declare function WORLDMAP_3DVIEW_ACTIVE(...args: any[]): any; // 200 -> 10967
declare function WORLDMAP_3DVIEW_DISABLE(...args: any[]): any; // 993 -> 10966
declare function CAM2_RESETSNAPDISTANCES(...args: any[]): any; // 616 -> 10977
declare function COORD_GRIDTOFINE(int0: coordgrid, int1: unknown_int): unknown_string; // 1916 -> 10403
declare function WORLDMAP_GETCONFIGORIGIN(int0: maparea): coordgrid; // 623 -> 10131
declare function WORLDMAP_3DVIEW_ENABLE(...args: any[]): any; // 950 -> 10974
declare function CAM2_ENABLE(...args: any[]): any; // 1116 -> 10973
declare function CAM2_SETSNAPDISTANCES(...args: any[]): any; // 258 -> 10972
declare function COORDY_FINE(...args: any[]): any; // 2035 -> 10402
declare function COORDX_FINE(...args: any[]): any; // 559 -> 10400
declare function COORDZ_FINE(...args: any[]): any; // 877 -> 10399
declare function CAM2_SETPOSITIONACCELERATION_AXIS(...args: any[]): any; // 779 -> 10971
declare function CAM2_SETPOSITIONMAXSPEED_AXIS(...args: any[]): any; // 283 -> 10970
declare function CAM2_SETLOOKATACCELERATION_AXIS(...args: any[]): any; // 2126 -> 10969
declare function CAM2_SETLOOKATMAXSPEED_AXIS(...args: any[]): any; // 373 -> 10968
declare function WORLDMAP_3DVIEW_GETCOORDFINE(...args: any[]): any; // 25 -> 10795
declare function WORLDMAP_GETCONFIGBOUNDS(int0: maparea): [int, int, int, int]; // 599 -> 10794
declare function CAM2_SETLOOKATPOINT_POINT(...args: any[]): any; // 121 -> 10440
declare function FPS_STATS(): [unknown_int, unknown_int, unknown_int]; // 1076 -> 10610
declare function IF_GET_GAMESCREEN(): component; // 842 -> 10543
declare function PUSH_CONSTANT_INT(string0: unknown_string, int0: int): [string, int, unknown_int]; // 1723 -> 10574
declare function CAM2_ADDEFFECT_SHAKE(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 575 -> 10295
declare function VIEWPORT_GETEFFECTIVESIZE(): [int, int]; // 1463 -> 10538
declare function WORLDMAP_3DVIEW_SETLODDISTANCE(int0: unknown_int, int1: int): void; // 1620 -> 10548
declare function FORCE_INTERFACE_DRAG(): void; // 1599 -> 10586
declare function MAP_LOADINGSCREEN_ISOPEN(): unknown_int; // 755 -> 10558
declare function INVPOW(int0: int, int1: unknown_int): int; // 629 -> 10506
declare function CC_GETDYNAMICLAYER(): unknown_int; // 1615 -> 10336
declare function CC_GETSCROLLY(int0: int): [int, int]; // 1561 -> 10628
declare function RUNWEIGHT_VISIBLE(): int; // 354 -> 10226
declare function MAP_QUICKCHAT(): unknown_int; // 322 -> 10639
declare function INTERPOLATE(int0: int, int1: int, int2: int, int3: int, int4: int): int; // 1082 -> 10711
declare function IF_SETONCAMERAUPDATETRANSMIT(...args: any[]): any; // 1221 -> 10051
declare function CAM2_SETSPRINGPROPERTIES(int0: int, int1: int, int2: int, int3: int): void; // 1644 -> 10656
declare function KEYHELD_ALT(): boolean; // 1103 -> 10140
declare function CC_SETOPKEYIGNOREHELD(int0: int): void; // 1899 -> 10495
declare function CC_SETOPTKEYIGNOREHELD(): void; // 1411 -> 10357
declare function ACTIVECLANCHANNEL_FIND_AFFINED(int0: unknown_int): void; // 1997 -> 10106
declare function ACHIEVEMENT_GETMEMBERS(int0: achievement): boolean; // 326 -> 10741
declare function CAM2_UPDATEEFFECT_ZTILT(int0: unknown_int, int1: int): void; // 1208 -> 10035
declare function CC_INPUT_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 401 -> 10090
declare function FRIEND_GETNOTES(int0: int): string; // 133 -> 10701
declare function IGNORE_GETNOTES(int0: int): string; // 838 -> 10700
declare function FRIEND_SETNOTES(string0: string, string1: string): void; // 2187 -> 10473
declare function IGNORE_SETNOTES(string0: string, string1: string): void; // 2120 -> 10471
declare function CC_GETOP(int0: unknown_int): string; // 2112 -> 10480
declare function IF_SETOBJECT_LONG(int0: unknown_int, long0: long, int1: component): void; // 957 -> 10750
declare function IF_GETINVOBJECT(int0: component): obj; // 1436 -> 10584
declare function branch_lteq_long(...args: any[]): any; // 1035 -> 10491
declare function VIEWPORT_GETZOOM(): [int, int]; // 1229 -> 10461
declare function OC_TRADEABLE(int0: obj): unknown_int; // 1075 -> 10790
declare function CC_SETCLICKMASK(int0: unknown_int): void; // 1706 -> 10754
declare function FROMDATE(...args: any[]): any; // 53 -> 10772
declare function IF_GETINVCOUNT(int0: component): unknown_int; // 466 -> 10583
declare function WORLDMAP_FLASHELEMENTCATEGORY(int0: unknown_int): void; // 1943 -> 10782
declare function WORLDMAP_GETSIZE(): [int, int]; // 349 -> 10777
declare function CC_SETOBJECT_HIGHRES(int0: obj): void; // 1336 -> 10315
declare function CC_PANEL_SETISVERTICAL(...args: any[]): any; // 1686 -> 10354
declare function IF_SETONVARTRANSMIT(int0: boolean): void; // 1046 -> 10013
declare function TTV_LIVESTREAMS_GETSTREAM_START(...args: any[]): any; // 56 -> 10652
declare function TTV_LIVESTREAMS_GETSTREAM_NEXT(): [int, unknown_string, unknown_string, string, string]; // 1743 -> 10651
declare function TTV_LIVESTREAMS_UPDATE(): unknown_int; // 1577 -> 10417
declare function TTV_LOGIN(string0: string, string1: string): unknown_int; // 1364 -> 10578
declare function TTV_LIBRARY_GETSTATE(): unknown_int; // 837 -> 10826
declare function TTV_HASPREREQUISITES(): unknown_int; // 1608 -> 10825
declare function OS_ISWINDOWS(): unknown_int; // 756 -> 10824
declare function OS_ISMAC(): unknown_int; // 933 -> 10806
declare function OS_ISLINUX(): unknown_int; // 1566 -> 10823
declare function TTV_LOGIN_GETSTATE(): unknown_int; // 243 -> 10822
declare function TTV_STREAM_GETSTATE(): unknown_int; // 889 -> 10556
declare function TTV_STREAM_GETVIEWERS(): int; // 1682 -> 10555
declare function TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(string0: string): [int, string, string]; // 1931 -> 10534
declare function TTV_WEBCAM_GETCAP_BYUNIQUEID(int0: int, int1: int): [int, int, int, int, int]; // 782 -> 10744
declare function TTV_WEBCAM_GETDEVICE_COUNT(): int; // 1181 -> 10752
declare function TTV_WEBCAM_FLIP(int0: unknown_int, int1: unknown_int): void; // 1715 -> 10763
declare function TTV_WEBCAM_SUPPORTED(...args: any[]): any; // 2003 -> 10753
declare function TTV_WEBCAM_GETDEVICE_BYINDEX(int0: int): [int, string, string]; // 1365 -> 10751
declare function TTV_WEBCAM_GETCAP_BYINDEX(int0: int, int1: int): [int, int, int, int, int]; // 1576 -> 10743
declare function TTV_WEBCAM_GETCAP_COUNT(int0: int): int; // 302 -> 10745
declare function TTV_WEBCAM_START(int0: int, int1: int): unknown_int; // 1088 -> 10592
declare function TTV_WEBCAM_STOP(int0: int): unknown_int; // 456 -> 10581
declare function TTV_STREAM_STOP(...args: any[]): any; // 474 -> 10715
declare function TTV_STREAM_GETQUALITY(): unknown_int; // 1060 -> 10633
declare function OS_PHYSICALMEMORYSIZE(int0: unknown_int, int1: unknown_int, string0: unknown_string): [unknown_int, unknown_int, string, int]; // 1500 -> 10144
declare function CC_GETGRAPHICDIMENSIONS(): [int, int]; // 191 -> 10458
declare function LOGIN_REPLY(): int; // 1672 -> 10190
declare function GET_OBJ_OVERLAY_HEIGHT(): int; // 1746 -> 10171
declare function GET_OBJ_SCREEN_POSITION(int0: int): [int, int, int]; // 622 -> 10170
declare function GET_OBJ_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 1555 -> 10169
declare function GET_LOC_OVERLAY_HEIGHT(): int; // 659 -> 10177
declare function GET_LOC_SCREEN_POSITION(int0: int): [int, int, int]; // 581 -> 10176
declare function GET_LOC_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 2192 -> 10175
declare function CAM2_SETLOOKATENTITY_NPC(...args: any[]): any; // 1804 -> 10285
declare function CAM2_SETPOSITIONENTITY_NPC(...args: any[]): any; // 1527 -> 10284
declare function PLAYER_GROUP_MEMBER_COUNT(): int; // 754 -> 10550
declare function PLAYER_GROUP_MEMBER_GET_DISPLAYNAME(int0: int): string; // 131 -> 10549
declare function PLAYER_GROUP_MEMBER_IS_OWNER(int0: int): unknown_int; // 2147 -> 10427
declare function PLAYER_GROUP_MEMBER_GET_RANK(int0: int): unknown_int; // 463 -> 10426
declare function IF_SETONPLAYERGROUPVARPTRANSMIT(...args: any[]): any; // 406 -> 10462
declare function PLAYER_GROUP_GET_MAX_SIZE(string0: string, string1: unknown_string): [string, string, int]; // 729 -> 10773
declare function PLAYER_GROUP_BANNED_COUNT(...args: any[]): any; // 1417 -> 10797
declare function PLAYER_GROUP_BANNED_GET_DISPLAYNAME(int0: int): string; // 1130 -> 10796
declare function CC_SETLINKPLAYERGROUP(int0: int, int1: unknown_int): void; // 510 -> 10629
declare function PLAYER_GROUP_GET_DISPLAYNAME(): string; // 942 -> 10809
declare function PLAYER_GROUP_MEMBER_GET_STATUS(int0: int): unknown_int; // 1395 -> 10302
declare function PLAYER_GROUP_MEMBER_IS_ONLINE(int0: int): unknown_int; // 2109 -> 10939
declare function PLAYER_GROUP_MEMBER_GET_LAST_SEEN_NODE_ID(int0: int): int; // 2077 -> 10936
declare function PLAYER_GROUP_MEMBER_GET_SAME_WORLD_VAR(int0: int, int1: unknown_int, int2: unknown_int): int; // 223 -> 10938
declare function PLAYER_GROUP_MEMBER_GET_TEAM(int0: int): int; // 556 -> 10937
declare function PLAYER_GROUP_GET_OWNER_SLOT(int0: int): [unknown_int, unknown_int]; // 956 -> 10408
declare function PLAYER_GROUP_GET_OVERALL_STATUS(): unknown_int; // 757 -> 10862
declare function NOTIFICATIONS_OPENSETTINGS(): void; // 671 -> 10001
declare function CC_SETSTYLESHEET(...args: any[]): any; // 1710 -> 10451
declare function CC_RESUME_PAUSEBUTTON(): void; // 1778 -> 10117
declare function DATE_YEAR(): int; // 179 -> 10421
declare function lc_getparam(int0: loc, int1: unknown_int): unknown_int; // 1866 -> 10798
declare function CC_MODELGROUP_GETCAMERAYAWPITCHROLL(int0: fontmetrics): [int, unknown_int, unknown_int, unknown_int, unknown_int]; // 799 -> 10278
declare function SCALE_LONG(long0: long, long1: unknown_long, long2: unknown_long): long; // 698 -> 10393
declare function TELEMETRY_GET_GROUP_INDEX(int0: int): int; // 638 -> 10567
declare function TELEMETRY_GET_ROW_INDEX(int0: int, int1: int): int; // 1254 -> 10566
declare function TELEMETRY_GET_GROUP_COUNT(): int; // 1007 -> 10963
declare function TELEMETRY_GET_GROUP_ID(int0: int): int; // 1838 -> 10962
declare function TELEMETRY_GET_COLUMN_COUNT(int0: int): int; // 1694 -> 10957
declare function TELEMETRY_GET_ROW_COUNT(int0: int): int; // 2195 -> 10961
declare function TELEMETRY_GET_ROW_ID(int0: int, int1: int): int; // 1438 -> 10959
declare function TELEMETRY_GET_COLUMN_ID(int0: int, int1: int): int; // 945 -> 10960
declare function TELEMETRY_GET_GRID_VALUE(int0: int, int1: int, int2: int): int; // 1067 -> 10564
declare function TELEMETRY_IS_ROW_PINNED(int0: int, int1: int): unknown_int; // 1786 -> 10958
declare function TELEMETRY_GET_COLUMN_INDEX(int0: int, int1: int): int; // 329 -> 10565
declare function ACHIEVEMENT_FINDSUBCAT(int0: category, int1: category): int; // 498 -> 10246
declare function CC_LIST_GETENABLED(...args: any[]): any; // 1264 -> 10602
declare function NOTIFICATIONS_ISLOCALSCHEDULED(...args: any[]): any; // 1337 -> 10601
declare function AUTOSETUP_SETMIN(): void; // 1334 -> 10002
declare function IGNORE_GETNAME_UNFILTERED(): void; // 865 -> 10281
declare function IGNORE_GETNAME_UNFILTERED(...args: any[]): any; // 1014 -> 10780
declare function CC_SETONSCROLLWHEEL(vararg: BoundFunction): void; // 1655 -> 10591
declare function UNKNOWN_COMMAND_120(int0: unknown_int, int1: graphic, int2: unknown_int): void; // 524 -> 10418
declare function OS_DRIVER_VENDOR(): int; // 2064 -> 10215
declare function CHAT_CLEAR(): void; // 552 -> 10571
declare function CAM2_SETLOOKATORIENTATION_ZMOVEMENT(int0: int): void; // 444 -> 10707
declare function CAM2_SETLOOKATORIENTATION_XMOVEMENT(int0: int): void; // 2057 -> 10708
declare function CAM2_SETLOOKATORIENTATION_XROTATION(int0: int): void; // 1860 -> 10705
declare function CAM2_SETLOOKATORIENTATION_YROTATION(int0: int): void; // 1984 -> 10706
declare function IF_SETONGAMEPADBUTTON(...args: any[]): any; // 709 -> 10526
declare function IF_SETONGAMEPADAXIS(...args: any[]): any; // 324 -> 10525
declare function IF_SETONGAMEPADTRIGGER(...args: any[]): any; // 268 -> 10524
declare function IF_SETONGAMEPADBUTTONHELD(...args: any[]): any; // 1697 -> 10523
declare function IF_LIST_SETISSELECTED(int0: int, int1: unknown_int, int2: unknown_int, int3: component): void; // 2136 -> 10513
declare function CC_GETSCROLLHEIGHT(): int; // 1084 -> 10713
declare function CC_SETPARAM_STRING(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): int; // 553 -> 10649
declare function NOT(int0: int, int1: int): [int, int]; // 1906 -> 10742
declare function CC_TRIGGEROP(int0: unknown_int): void; // 1000 -> 10432
declare function ACHIEVEMENT_CATEGORY(int0: achievement): category; // 1987 -> 10352
declare function IF_SETONSTORETRANSMIT(int0: int): [int, string]; // 434 -> 10779
declare function PARALINE(string0: string, int0: int, int1: fontmetrics, int2: int): string; // 1953 -> 10704
declare function ACHIEVEMENT_TOTAL_RUNESCORE(): int; // 1892 -> 10593
declare function ACHIEVEMENT_FINDCATEGORY(int0: category): int; // 206 -> 10236
declare function GETDEFAULTWINDOWMODE(...args: any[]): any; // 2235 -> 10698
declare function IF_NPC_SETCUSTOMRECOL(...args: any[]): any; // 647 -> 10805
declare function SOUND_SYNTH_VOLUME(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 80 -> 10760
declare function AUTOSETUP_DOSETUP(): unknown_int; // 726 -> 10299
declare function POP_INT_DISCARD(...args: any[]): any; // 233 -> 10381
declare function IF_SETFEEDBACKMODE(...args: any[]): any; // 1090 -> 10380
declare function CC_SETHELD(...args: any[]): any; // 21 -> 10066
declare function SETDEFAULTCURSORS(): void; // 2099 -> 10053
declare function IF_SETONHOOK46(...args: any[]): any; // 257 -> 10376
declare function IF_SETPINCHDEADZONE(...args: any[]): any; // 1517 -> 10468
declare function IF_SETPINCHFLAGS(...args: any[]): any; // 1927 -> 10467
declare function IF_SETONVERTICALPINCH(...args: any[]): any; // 476 -> 10466
declare function IF_SETONHORIZONTALPINCH(...args: any[]): any; // 1294 -> 10465
declare function DB_FIND_REFINE(int0: unknown_int, int1: int, int2: unknown_int): int; // 911 -> 10709
declare function CHAT_GETNEXTUID(int0: int): int; // 1233 -> 10699
declare function IF_SET_GAMESCREEN_ENABLED(int0: unknown_int): void; // 2200 -> 10247
declare function USERDETAIL_LOBBY_RECOVERYDAY(): unknown_int; // 1479 -> 10663
declare function BATTERY_GETLEVELPERCENT(...args: any[]): any; // 180 -> 10662
declare function BATTERY_ISCHARGING(...args: any[]): any; // 1590 -> 10661
declare function OC_DESC(int0: obj): string; // 1735 -> 10573
declare function PLAYERCOUNTRY(): int; // 2188 -> 10130
declare function FEDERATED_LOGIN(int0: unknown_int, int1: unknown_int): void; // 1753 -> 10103
declare function FEDERATED_LOGIN_STATUS(): int; // 141 -> 10293
declare function OPENSTORE(int0: unknown_int, string0: unknown_string): void; // 263 -> 10562
declare function LOGIN_INPROGRESS(...args: any[]): any; // 1920 -> 10267
declare function SSO_DISPLAYNAME(): string; // 2070 -> 10434
declare function STEAM_SETACHIVEMENT(string0: string, int0: unknown_int, int1: unknown_int): unknown_int; // 203 -> 10227
declare function STEAM_STORESTATS(): unknown_int; // 1372 -> 10005
declare function IF_SETDRAGDEADZONE(...args: any[]): any; // 588 -> 10334
declare function IF_SETDRAGDEADTIME(...args: any[]): any; // 1641 -> 10333
declare function ACHIEVEMENT_IS_CHECKLIST(int0: achievement): unknown_int; // 910 -> 10272
declare function ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0: achievement): int; // 1256 -> 10271
declare function ACHIEVEMENT_GETSUBCATCOUNT(int0: category, int1: unknown_int): unknown_int; // 1714 -> 10728
declare function ACHIEVEMENT_SUBCAT(int0: achievement): category; // 1736 -> 10351
declare function ACHIEVEMENT_FINDGRACED(): int; // 2161 -> 10195
declare function CC_SETONMOUSEOVER(): unknown_int; // 749 -> 10231
declare function CC_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material): void; // 654 -> 10450
declare function SHOP_OPENCATEGORIES(int0: unknown_int, int1: unknown_int): void; // 309 -> 10044
declare function LOBBY_ENTERGAME(...args: any[]): any; // 633 -> 10311
declare function DETAILGET_SOUNDVOL(...args: any[]): any; // 936 -> 10310
declare function DETAILGET_MUSICVOL(...args: any[]): any; // 1833 -> 10309
declare function DETAILGET_BGSOUNDVOL(...args: any[]): any; // 2002 -> 10308
declare function DETAILGET_SPEECHVOL(...args: any[]): any; // 477 -> 10307
declare function DETAILGET_LOGINVOL(): unknown_int; // 1268 -> 10306
declare function SHOP_APPLYPENDINGTRANSACTIONS(...args: any[]): any; // 293 -> 10091
declare function TOGGLEBIT(): unknown_int; // 245 -> 10164
declare function PRELOAD_DOWNLOAD_COMPLETE(): unknown_int; // 915 -> 10771
declare function PRELOAD_PROGRESS(): int; // 323 -> 10770
declare function PRELOAD_DOWNLOAD_DOWNLOADEDSIZE(...args: any[]): any; // 820 -> 10769
declare function PRELOAD_DOWNLOAD_TOTALSIZE(...args: any[]): any; // 999 -> 10768
declare function PRELOAD_DOWNLOAD_RATE(...args: any[]): any; // 2019 -> 10767
declare function IF_GETMODELYOF(int0: unknown_int): void; // 1315 -> 10104
declare function NOTIFICATIONS_SENDLOCAL(string0: unknown_string, string1: unknown_string, int0: unknown_int, int1: int): unknown_int; // 970 -> 10254
declare function SHOP_REQUESTDATA(...args: any[]): any; // 484 -> 10316
declare function WORLDMAP_LISTELEMENT_START(int0: unknown_int, int1: int, int2: unknown_int, int3: unknown_int): unknown_int; // 1498 -> 10257
declare function IF_SETPLAYERHEAD_SELF(int0: unknown_int, int1: unknown_int): unknown_int; // 1972 -> 10364
declare function CC_SCROLLBAR_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1928 -> 10137
declare function IF_LIST_ADDENTRY(int0: unknown_int, string0: string, int1: unknown_int): unknown_int; // 1032 -> 10095
declare function STYLESHEET_HAS_VALUE(int0: stylesheet, string0: string): unknown_int; // 1406 -> 10484
declare function STYLESHEET_GET_PARENT_ID(int0: stylesheet): stylesheet; // 1515 -> 10483
declare function SETBIT_RANGE_TOINT(int0: int, int1: int, int2: unknown_int, int3: unknown_int): int; // 1400 -> 10410
declare function SHOP_ISPRODUCTAVAILABLE(int0: unknown_int, int1: int): unknown_int; // 797 -> 10725
declare function IF_GETENABLED(int0: unknown_int): unknown_int; // 62 -> 10431
declare function UI_GETCATEGORY(int0: int): int; // 1510 -> 10398
declare function CC_SETMODELORIGIN(int0: unknown_int, int1: unknown_int): void; // 177 -> 10800
declare function CC_GRID_GETNUMROWS(): unknown_int; // 1509 -> 10659
declare function CC_GRID_GETNUMCOLUMNS(): int; // 1033 -> 10658
declare function IF_GRID_GETLAYOUTPARAMS(int0: component): [unknown_int, int, int]; // 1572 -> 10738
declare function CC_TEXT_SETTRANS(...args: any[]): any; // 2163 -> 10714
declare function IF_DELETEALLNESTED(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 595 -> 10234
declare function LOGIN_HOPTIME(): int; // 1187 -> 10948
declare function LOGIN_CONTINUE(...args: any[]): any; // 2177 -> 10950
declare function LOGIN_DISALLOWRESULT(): unknown_int; // 2165 -> 10945
declare function LOGIN_DISALLOWTRIGGER(): unknown_int; // 1828 -> 10944
declare function LOGIN_BAN_DURATION(...args: any[]): any; // 1126 -> 10949
declare function IF_SETASPECT(int0: unknown_int, int1: unknown_int, int2: component): void; // 1793 -> 10196
declare function UI_GETDYNID(int0: int): int; // 403 -> 10397
declare function UNPACK_LONG(long0: long): [unknown_int, int]; // 516 -> 10433
declare function IF_CHECK_SET(int0: boolean, int1: unknown_int): void; // 972 -> 10220
declare function ACHIEVEMENT_ALLPREREQMET(int0: achievement): unknown_int; // 126 -> 10520
declare function DEEPLINK_COUNT(): int; // 1301 -> 10429
declare function DEEPLINK_GET(int0: int): unknown_int; // 267 -> 10428
declare function DEEPLINK_CLEAR_INDEX(int0: unknown_int): void; // 696 -> 10016
declare function ACTIVECHATPHRASE_PREPARE(): [int, int]; // 1671 -> 10554
declare function DETAILGET_INTERFACESCALE(): int; // 593 -> 10553
declare function OC_COST(int0: obj): long; // 2227 -> 10070
declare function MODULO_LONG(long0: long, long1: unknown_long): long; // 1150 -> 10687
declare function MIN_LONG(long0: long, long1: long): long; // 1009 -> 10622
declare function INVOTHER_TOTAL(int0: unknown_int, int1: unknown_int): int; // 1041 -> 10542
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: unknown_int, int1: unknown_int): void; // 1269 -> 10665
declare function CUTSCENE2D_STOP(int0: unknown_int): void; // 1222 -> 10021
declare function CC_SETONDRAG(int0: unknown_int): void; // 1404 -> 10017
declare function CC_CAROUSEL_SETTEXTENTRIES(...args: any[]): any; // 1255 -> 10072
declare function CC_CAROUSEL_SETSELECTED(...args: any[]): any; // 1432 -> 10071
declare function CC_CAROUSEL_SETICONENTRIES(...args: any[]): any; // 372 -> 10073
declare function CC_PAGEDCAROUSEL_SETDYNAMICPAGECOUNT(int0: unknown_int): void; // 1703 -> 10018
declare function CC_PAGEDCAROUSEL_SETSELECTED(int0: unknown_int, int1: unknown_int): void; // 1829 -> 10182
declare function CC_COMBO_SETENTRIES(int0: cs2enum): void; // 967 -> 10674
declare function CC_COMBO_SELECT(int0: int, int1: unknown_int): unknown_int; // 1371 -> 10672
declare function CC_COMBO_ADDENTRY(int0: int, string0: string): unknown_int; // 1401 -> 10673
declare function CC_COMBO_CLEARENTRIES(): void; // 1249 -> 10384
declare function CC_PAGEDLAYER_SETDYNAMICPAGECOUNT(int0: unknown_int): void; // 1991 -> 10133
declare function CC_PAGEDLAYER_SETPAGELABELS(int0: unknown_int): void; // 2129 -> 10132
declare function CC_PAGEDLAYER_SETPAGEICONS(int0: unknown_int): void; // 948 -> 10134
declare function CC_PAGEDLAYER_SETACTIVEPAGE(int0: unknown_int, int1: unknown_int): void; // 1796 -> 10183
declare function IF_RADIALPROGRESSOVERLAY_START(int0: unknown_int, int1: int, int2: unknown_int): void; // 932 -> 10096
declare function CC_RADIALPROGRESSOVERLAY_START(int0: unknown_int, int1: int): void; // 1176 -> 10074
declare function IF_RADIALPROGRESSOVERLAY_SET(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1243 -> 10079
declare function CC_RADIALPROGRESSOVERLAY_SET(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 299 -> 10055
declare function IF_RADIALPROGRESSOVERLAY_SETVALUE(int0: unknown_int, int1: unknown_int): void; // 1865 -> 10038
declare function CC_RADIALPROGRESSOVERLAY_SETVALUE(int0: unknown_int): void; // 1969 -> 10019
declare function CC_RADIOGROUP_SETSELECTIONLIMITS(int0: unknown_int, int1: unknown_int): void; // 440 -> 10225
declare function CC_RADIOGROUP_SETOPTIONS(int0: unknown_int): void; // 872 -> 10224
declare function CC_RADIOGROUP_CLEAROPTIONS(): void; // 1285 -> 10056
declare function CC_RADIOGROUP_SETOPTIONSELECTED(int0: int, int1: unknown_int, int2: unknown_int): unknown_int; // 2134 -> 10318
declare function CC_SLIDER_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): void; // 1428 -> 10269
declare function CC_SLIDER_SETUPENUM(int0: unknown_int): void; // 1933 -> 10268
declare function CC_RADIALPROGRESSOVERLAY_GETPROGRESS(): int; // 1275 -> 10580
declare function CC_SETONDROPDOWNSELECT(vararg: BoundFunction): void; // 2216 -> 10392
declare function CC_RADIOGROUP_ADDOPTION(...args: any[]): any; // 2205 -> 10849
declare function TEXT_GENDER(string0: unknown_string, string1: unknown_string, string2: unknown_string): [string, string]; // 1469 -> 10821
declare function CC_ANIM_PLAY(...args: any[]): any; // 1722 -> 10624
declare function CC_ANIM_KILL(...args: any[]): any; // 176 -> 10625
declare function CC_UNKNOWN1(): int; // 290 -> 10842
declare function CC_UNKNOWN2(): int; // 394 -> 10787
declare function IF_SETPLAYERHEAD_SELF(int0: unknown_int): unknown_int; // 1005 -> 10404
declare function DETAIL_WATERDETAIL_HIGH(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 1464 -> 10405
declare function IF_SETONDROPDOWNSELECT(int0: unknown_int, string0: string, int1: unknown_int): unknown_int; // 313 -> 10385
declare function DB_FIND_GET(int0: int): dbrow; // 1333 -> 10746
declare function unk10978(int0: unknown_int): void; // 399 -> 10978
declare function unk10979(int0: unknown_int): void; // 119 -> 10979
declare function unk10980(int0: unknown_int): void; // 2082 -> 10980
declare function unk10981(int0: achievement): int; // 1776 -> 10981
declare function unk10982(long0: long, int0: int): int; // 1136 -> 10982
declare function unk10983(int0: achievement): string; // 821 -> 10983
declare function unk10984(int0: unknown_int): boolean; // 641 -> 10984
declare function unk10985(int0: int, int1: unknown_int, int2: unknown_int): int; // 1309 -> 10985
declare function unk10986(int0: int): unknown_int; // 1091 -> 10986
declare function unk10987(...args: any[]): any; // 787 -> 10987
declare function unk10988(int0: unknown_int, int1: unknown_int): unknown_int; // 125 -> 10988
declare function unk10989(): int; // 407 -> 10989
declare function unk10990(): void; // 1228 -> 10990
declare function unk10991(...args: any[]): any; // 859 -> 10991
declare function unk10992(string0: unknown_string, int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1398 -> 10992
declare function unk10993(int0: unknown_int): unknown_int; // 1156 -> 10993
declare function unk10994(int0: int, int1: int, int2: unknown_int): void; // 537 -> 10994
declare function unk10995(int0: int): void; // 2039 -> 10995
declare function unk10996(): unknown_int; // 1077 -> 10996
declare function unk10997(int0: component): void; // 7 -> 10997
declare function unk10998(): void; // 2018 -> 10998
declare function unk10999(int0: achievement, int1: int): quest; // 1476 -> 10999
declare function unk11000(string0: unknown_string): void; // 741 -> 11000
declare function unk11001(...args: any[]): any; // 1460 -> 11001
declare function unk11002(): unknown_int; // 1800 -> 11002
declare function unk11003(): unknown_int; // 1412 -> 11003
declare function unk11004(...args: any[]): any; // 689 -> 11004
declare function unk11005(...args: any[]): any; // 75 -> 11005
declare function unk11006(int0: unknown_int): void; // 2125 -> 11006
declare function unk11007(int0: unknown_int): void; // 390 -> 11007
declare function unk11008(int0: int): void; // 1900 -> 11008
declare function unk11009(...args: any[]): any; // 1207 -> 11009
declare function unk11010(...args: any[]): any; // 752 -> 11010
declare function unk11011(int0: int, int1: int, int2: component): unknown_int; // 439 -> 11011
declare function unk11012(string0: unknown_string, int0: unknown_int, int1: unknown_int): void; // 1565 -> 11012
declare function unk11013(int0: unknown_int, int1: int, int2: int, int3: component): void; // 1764 -> 11013
declare function unk11014(int0: unknown_int, int1: unknown_int): unknown_int; // 1546 -> 11014
declare function unk11015(int0: unknown_int): void; // 1545 -> 11015
declare function unk11016(): unknown_int; // 1244 -> 11016
declare function unk11017(int0: achievement): unknown_int; // 1203 -> 11017
declare function unk11018(...args: any[]): any; // 1654 -> 11018
declare function unk11019(int0: int): string; // 1408 -> 11019
declare function unk11020(string0: unknown_string): string; // 1048 -> 11020
declare function unk11021(string0: unknown_string): unknown_int; // 1523 -> 11021
declare function unk11022(string0: string): void; // 356 -> 11022
declare function unk11023(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 138 -> 11023
declare function unk11024(): [unknown_int, unknown_int, unknown_int]; // 1949 -> 11024
declare function unk11025(int0: unknown_int): int; // 1787 -> 11025
declare function unk11026(int0: unknown_int): int; // 582 -> 11026
declare function unk11027(int0: int, string0: string): unknown_int; // 1878 -> 11027
declare function unk11028(long0: long, int0: int): long; // 499 -> 11028
declare function unk11029(long0: long, int0: int): long; // 137 -> 11029
declare function unk11030(vararg: BoundFunction): void; // 2043 -> 11030
declare function unk11031(string0: unknown_string): int; // 1083 -> 11031
declare function unk11032(int0: achievement, int1: int): achievement; // 1392 -> 11032
declare function unk11033(string0: string, int0: unknown_int): [unknown_int, unknown_int, unknown_int, unknown_long, unknown_long, int, unknown_long, unknown_int, unknown_int, unknown_int, unknown_int, unknown_int, unknown_int]; // 2079 -> 11033
declare function unk11034(int0: achievement, int1: int, int2: int): unknown_int; // 2217 -> 11034
declare function unk11035(int0: achievement, int1: int, int2: int): achievement; // 844 -> 11035
declare function unk11036(int0: achievement, int1: int): int; // 2196 -> 11036
declare function unk11037(int0: achievement): int; // 557 -> 11037
declare function unk11038(...args: any[]): any; // 95 -> 11038
declare function unk11039(int0: unknown_int): void; // 1956 -> 11039
declare function unk11040(vararg: BoundFunction): void; // 2098 -> 11040
declare function unk11041(int0: unknown_int): void; // 531 -> 11041
declare function unk11042(int0: int, int1: int): void; // 1782 -> 11042
declare function unk11043(int0: unknown_int): void; // 708 -> 11043
declare function unk11044(int0: int): void; // 2168 -> 11044
declare function unk11045(): void; // 1342 -> 11045
declare function unk11046(): unknown_int; // 1368 -> 11046
declare function unk11047(int0: unknown_int): void; // 181 -> 11047
declare function unk11048(...args: any[]): any; // 13 -> 11048
declare function unk11049(...args: any[]): any; // 443 -> 11049
declare function unk11050(string0: unknown_string, string1: unknown_string, string2: string, int0: unknown_int): unknown_int; // 1296 -> 11050
declare function unk11051(): [int, unknown_int]; // 1759 -> 11051
declare function unk11052(int0: int): unknown_int; // 815 -> 11052
declare function unk11053(): int; // 1384 -> 11053
declare function unk11054(long0: long, int0: unknown_int): string; // 2214 -> 11054
declare function unk11055(): void; // 235 -> 11055
declare function unk11056(...args: any[]): any; // 1363 -> 11056
declare function unk11057(...args: any[]): any; // 1533 -> 11057
declare function unk11058(): void; // 935 -> 11058
declare function unk11059(int0: int): [int, string, int, string, string, string, string, chatphrase, string, int, unknown_int]; // 1216 -> 11059
declare function unk11060(): void; // 1380 -> 11060
declare function unk11061(int0: unknown_int): unknown_int; // 1708 -> 11061
declare function unk11062(): void; // 1132 -> 11062
declare function unk11063(): void; // 431 -> 11063
declare function unk11064(int0: int, int1: int): unknown_int; // 974 -> 11064
declare function unk11065(int0: achievement): int; // 1250 -> 11065
declare function unk11066(int0: achievement): int; // 1339 -> 11066
declare function unk11067(int0: achievement): int; // 1026 -> 11067
declare function unk11068(int0: achievement): int; // 2133 -> 11068
declare function unk11069(int0: achievement, int1: int): int; // 547 -> 11069
declare function unk11070(...args: any[]): any; // 880 -> 11070
declare function unk11071(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int, int5: unknown_int): void; // 1712 -> 11071
declare function unk11072(...args: any[]): any; // 186 -> 11072
declare function unk11073(int0: achievement, int1: int, int2: int): quest; // 422 -> 11073
declare function unk11074(int0: achievement): int; // 902 -> 11074
declare function unk11075(int0: category): int; // 310 -> 11075
declare function unk11076(): unknown_int; // 1524 -> 11076
declare function unk11077(): npc; // 533 -> 11077
declare function unk11078(int0: unknown_int): [int, int]; // 1854 -> 11078
declare function unk11079(): unknown_int; // 102 -> 11079
declare function unk11080(int0: int): [int, int]; // 2201 -> 11080
declare function unk11081(int0: achievement, int1: unknown_int): string; // 1029 -> 11081
declare function unk11082(...args: any[]): any; // 1019 -> 11082
declare function unk11083(int0: int, int1: int, int2: unknown_int, int3: unknown_int, int4: int): void; // 1199 -> 11083
declare function unk11084(int0: unknown_int, string0: string, string1: string): void; // 1198 -> 11084
declare function unk11085(string0: string, string1: string): int; // 719 -> 11085
declare function unk11086(...args: any[]): any; // 36 -> 11086
declare function unk11087(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1220 -> 11087
declare function unk11088(int0: achievement, int1: int): boolean; // 22 -> 11088
declare function unk11089(int0: achievement, int1: int): boolean; // 876 -> 11089
declare function unk11090(int0: achievement, int1: int): boolean; // 2215 -> 11090
declare function unk11091(int0: achievement, int1: int): boolean; // 1475 -> 11091
declare function unk11092(int0: achievement, int1: int): boolean; // 1410 -> 11092
declare function unk11093(int0: achievement, int1: int): boolean; // 1234 -> 11093
declare function unk11094(int0: achievement, int1: int): boolean; // 442 -> 11094
declare function unk11095(int0: achievement): int; // 1932 -> 11095
declare function unk11096(int0: unknown_int): unknown_int; // 93 -> 11096
declare function unk11097(...args: any[]): any; // 1560 -> 11097
declare function unk11098(...args: any[]): any; // 2219 -> 11098
declare function unk11099(int0: unknown_int, string0: string): void; // 189 -> 11099
declare function unk11100(): [int, int, string, int, string, int, int, string]; // 596 -> 11100
declare function unk11101(): [int, int, string, int, string, int, int, string]; // 780 -> 11101
declare function unk11102(): unknown_int; // 1213 -> 11102
declare function unk11103(): unknown_int; // 478 -> 11103
declare function unk11104(...args: any[]): any; // 856 -> 11104
declare function unk11105(...args: any[]): any; // 609 -> 11105
declare function unk11106(): void; // 1012 -> 11106
declare function unk11107(int0: int, int1: unknown_int, int2: int): void; // 1458 -> 11107
declare function unk11108(...args: any[]): any; // 562 -> 11108
declare function unk11109(...args: any[]): any; // 1618 -> 11109
declare function unk11110(): unknown_int; // 548 -> 11110
declare function unk11111(int0: achievement): unknown_int; // 339 -> 11111
declare function unk11112(...args: any[]): any; // 1619 -> 11112
declare function unk11113(): int; // 518 -> 11113
declare function unk11114(): [unknown_int, unknown_int, unknown_int]; // 270 -> 11114
declare function unk11115(): unknown_int; // 539 -> 11115
declare function unk11116(): unknown_int; // 1419 -> 11116
declare function unk11117(): int; // 1624 -> 11117
declare function unk11118(vararg: BoundFunction): void; // 1138 -> 11118
declare function unk11119(int0: int): int; // 460 -> 11119
declare function unk11120(int0: int): string; // 628 -> 11120
declare function unk11121(string0: string): unknown_int; // 345 -> 11121
declare function unk11122(int0: unknown_int): void; // 485 -> 11122
declare function unk11123(int0: int): int; // 1376 -> 11123
declare function unk11124(int0: int): int; // 1999 -> 11124
declare function unk11125(...args: any[]): any; // 318 -> 11125
declare function unk11126(): int; // 1923 -> 11126
declare function unk11127(int0: mapelement): category; // 490 -> 11127
declare function unk11128(string0: string): void; // 1995 -> 11128
declare function unk11129(string0: string, int0: unknown_int): void; // 1377 -> 11129
declare function unk11130(): void; // 1170 -> 11130
declare function unk11131(): void; // 1872 -> 11131
declare function unk11132(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): [unknown_int, unknown_int]; // 690 -> 11132
declare function unk11133(int0: int): unknown_int; // 369 -> 11133
declare function unk11134(int0: int): unknown_int; // 802 -> 11134
declare function unk11135(int0: achievement): [int, int]; // 631 -> 11135
declare function unk11136(int0: int): int; // 1017 -> 11136
declare function unk11137(int0: achievement, int1: int, int2: int): unknown_int; // 576 -> 11137
declare function unk11138(int0: achievement, int1: int, int2: int): unknown_int; // 1403 -> 11138
declare function unk11139(...args: any[]): any; // 2150 -> 11139
declare function unk11140(int0: achievement, int1: int): int; // 798 -> 11140
declare function unk11141(int0: achievement, int1: int, int2: int): unknown_int; // 2240 -> 11141
declare function unk11142(...args: any[]): any; // 1742 -> 11142
declare function unk11143(int0: achievement, int1: int): int; // 1634 -> 11143
declare function unk11144(int0: achievement, int1: int, int2: int): unknown_int; // 2072 -> 11144
declare function unk11145(...args: any[]): any; // 707 -> 11145
declare function unk11146(int0: achievement, int1: int): int; // 380 -> 11146
declare function unk11147(int0: achievement, int1: int, int2: int): unknown_int; // 1820 -> 11147
declare function unk11148(...args: any[]): any; // 1161 -> 11148
declare function unk11149(int0: achievement, int1: int): int; // 377 -> 11149
declare function unk11150(int0: achievement, int1: int, int2: int): unknown_int; // 2107 -> 11150
declare function unk11151(...args: any[]): any; // 232 -> 11151
declare function unk11152(...args: any[]): any; // 396 -> 11152
declare function unk11153(...args: any[]): any; // 722 -> 11153
declare function unk11154(...args: any[]): any; // 1152 -> 11154
declare function unk11155(...args: any[]): any; // 1844 -> 11155
declare function unk11156(int0: achievement): int; // 1112 -> 11156
declare function unk11157(...args: any[]): any; // 1209 -> 11157
declare function unk11158(...args: any[]): any; // 1758 -> 11158
declare function unk11159(...args: any[]): any; // 2045 -> 11159
declare function unk11160(...args: any[]): any; // 712 -> 11160
declare function unk11161(...args: any[]): any; // 1149 -> 11161
declare function unk11162(): int; // 1799 -> 11162
declare function unk11163(): void; // 1052 -> 11163
declare function unk11164(...args: any[]): any; // 2065 -> 11164
declare function unk11165(int0: unknown_int, int1: unknown_int, int2: component): void; // 1370 -> 11165
declare function unk11166(...args: any[]): any; // 430 -> 11166
declare function unk11167(...args: any[]): any; // 1570 -> 11167
declare function unk11168(int0: achievement): int; // 282 -> 11168
declare function unk11169(int0: int): [int, int]; // 1744 -> 11169
declare function unk11170(int0: quest): unknown_int; // 33 -> 11170
declare function unk11171(int0: int, int1: unknown_int, int2: unknown_int): int; // 1716 -> 11171
declare function unk11172(...args: any[]): any; // 2030 -> 11172
