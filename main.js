const arr = [
    1568, 178, 378, 1635, 1202, 72, 385, 1459, 1193, 487, 1733, 1805, 1281, 827,
    696, 181, 1721, 1429, 1803, 225, 1061, 543, 1023, 139, 272, 1384, 563, 1988,
    1272, 1839, 1222, 699, 1227, 1974, 1284, 1327, 1757, 1705, 1081, 665, 288,
    200, 896, 560, 1094, 94, 1814, 893, 76, 1772, 1950, 1662, 1374, 1434, 661,
    1122, 886, 45, 159, 810, 1590, 1886, 1001, 1572, 301, 436, 592, 1428, 319,
    384, 964, 1900, 1041, 550, 1657, 948, 1883, 1107, 1992, 435, 30, 174, 1338,
    1447, 659, 150, 313, 1542, 620, 833, 1276, 882, 1541, 1115, 460, 774, 1511,
    1316, 1993, 1261, 645, 289, 1919, 1972, 1235, 1118, 787, 1204, 124, 801, 1523,
    1156, 38, 89, 522, 775, 769, 1031, 1356, 853, 984, 187, 1831, 1355, 1258, 548,
    750, 954, 1809, 623, 528, 1529, 269, 1861, 1534, 29, 1, 1363, 965, 1473, 1203,
    295, 1539, 1311, 18, 1893, 1186, 883, 703, 1038, 258, 1802, 457, 1083, 1339,
    1350, 695, 1574, 1464, 1765, 1790, 710, 718, 1702, 677, 914, 1808, 614, 1902,
    693, 1027, 1565, 1737, 792, 1599, 1432, 1213, 1121, 216, 1238, 383, 681, 778,
    67, 2000, 597, 985, 54, 988, 71, 1116, 1364, 1247, 1072, 960, 759, 766, 20,
    380, 1546, 9, 101, 514, 1155, 1575, 1773, 1595, 1806, 1689, 712, 1205, 1099,
    1918, 1709, 485, 818, 561, 684, 201, 521, 1078, 935, 529, 1922, 230, 405, 367,
    1333, 1423, 1329, 1835, 1795, 719, 395, 1401, 1106, 1321, 903, 1872, 1169,
    1125, 427, 1716, 1226, 1943, 1699, 556, 1928, 1627, 1455, 765, 364, 1141,
    1056, 1365, 1522, 822, 484, 974, 1370, 1935, 1179, 3, 1047, 459, 546, 498,
    657, 1467, 120, 1777, 1964, 565, 1146, 1479, 1622, 1593, 1924, 1192, 430,
    1871, 1675, 845, 458, 223, 437, 1415, 2, 1984, 117, 697, 155, 80, 793, 1270,
    1386, 884, 504, 126, 1812, 337, 86, 1648, 879, 578, 461, 1280, 84, 1956, 1229,
    213, 700, 1728, 1836, 999, 1022, 1240, 1128, 1323, 594, 1671, 1029, 255, 1217,
    746, 525, 804, 1600, 1212, 570, 1551, 1506, 381, 622, 143, 107, 912, 815, 268,
    1829, 156, 411, 1414, 1815, 1930, 993, 1615, 1269, 432, 1947, 157, 510, 1166,
    1557, 1418, 99, 1194, 249, 1714, 566, 897, 419, 1437, 1581, 77, 1717, 445,
    1271, 1255, 1850, 706, 577, 972, 1650, 1556, 199, 828, 47, 619, 841, 844,
    1201, 731, 651, 1510, 1804, 1190, 1346, 907, 1376, 1180, 1105, 1768, 1268,
    1206, 800, 767, 402, 754, 177, 63, 553, 1474, 1413, 837, 1826, 1177, 1996,
    358, 1589, 921, 1277, 919, 1739, 1347, 1299, 1937, 1004, 327, 816, 1011, 1445,
    1744, 1390, 329, 1553, 293, 1399, 1724, 918, 1882, 209, 852, 722, 392, 1569,
    698, 1719, 953, 1308, 1787, 171, 247, 374, 1457, 885, 1606, 1816, 1535, 179,
    189, 1926, 478, 1295, 261, 755, 1852, 234, 936, 1736, 1563, 1654, 779, 1549,
    1550, 100, 151, 1076, 453, 929, 26, 347, 1328, 771, 81, 1064, 649, 1997, 49,
    1236, 1767, 37, 807, 943, 52, 535, 176, 147, 989, 1188, 1025, 48, 1807, 1570,
    1406, 1632, 355, 492, 888, 573,
];

const bubble = require( './algorithms/bubbleSort.js' ).sort
const bubbleRecursive = require( './algorithms/bubbleSortRecursive.js' ).sort
const merge = require('./algorithms/mergeSort.js').sort
const mergeRecursive = require('./algorithms/mergeSortRecursive.js').sort
const quick = require('./algorithms/quickSort.js').sort
const quickRecursive = require('./algorithms/quickSortRecursive.js').sort
const timeTaker = require('./tools/timeMessurement.js');

const getTimeResults = () => {

    const rounds = 100000
    const arrSize = 1500

    let totalTime = {
        bubble:             0,   
        bubbleRecursive:    0,
        merge:              0,
        mergeRecursive:     0,
        quick:              0,
        quickRecursive:     0
    }

    for(let i = 0; i < rounds; i++){
        let arr = [];

        // Generate new array
        for(let j = 0; j < arrSize; j++){
            arr[j] = Math.floor(Math.random()*10000);
        }

        totalTime.bubble += timeTaker.messureTime(bubble, arr)
        totalTime.bubbleRecursive += timeTaker.messureTime(bubbleRecursive, arr)
        totalTime.merge += timeTaker.messureTime(merge, arr)
        totalTime.mergeRecursive += timeTaker.messureTime(mergeRecursive, arr)
        totalTime.quick += timeTaker.messureTime(quick, arr)
        totalTime.quickRecursive += timeTaker.messureTime(quickRecursive, arr)
    }

    totalTime.bubble /= rounds
    totalTime.bubbleRecursive /= rounds
    totalTime.merge /= rounds
    totalTime.mergeRecursive /= rounds
    totalTime.quick /= rounds
    totalTime.quickRecursive /= rounds

    return totalTime
}

console.log(getTimeResults());