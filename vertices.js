const verticesKanan = [
    //Bohlam Atas
    0.5819007534833, 0.1926267779086, 0.60, 0.64, 0.69, //Kurva 0
    0.6326752816401, 0.2075919019969, 0.60, 0.64, 0.69, //Kurva 1
    0.6797492078651, 0.211324584787, 0.60, 0.64, 0.69, //Kurva 2
    0.7281766797513, 0.2050608564675, 0.60, 0.64, 0.69, //Kurva 3
    0.7681709914942, 0.1907388704784, 0.60, 0.64, 0.69, //Kurva 4
    0.7967842558937, 0.1758442944897, 0.60, 0.64, 0.69, //Kurva 5
    0.8272776373679, 0.1539833830668, 0.60, 0.64, 0.69, //Kurva 6
    0.8460343779667, 0.1321005190349, 0.60, 0.64, 0.69, //Kurva 7
    0.8641658938789, 0.1008392847035, 0.60, 0.64, 0.69, //Kurva 8
    0.8768646917453, 0.0764957446506, 0.60, 0.64, 0.69, //Kurva 9
    0.8842948369857, 0.0520824102895, 0.60, 0.64, 0.69, //Kurva 10
    0.8885406342659, 0.0273152594883, 0.60, 0.64, 0.69, //Kurva 11
    0.8898001060306, 0, 0.60, 0.64, 0.69, //Kurva 12
    
    // //Bohlam Bawah
    0.8898001060306, 0, 0.60, 0.64, 0.69, //Kurva Reverse 12
    0.8885406342659, -0.0273152594883, 0.60, 0.64, 0.69, //Kurva Reverse 11
    0.8842948369857, -0.0520824102895, 0.60, 0.64, 0.69, //Kurva Reverse 10
    0.8768646917453, -0.0764957446506, 0.60, 0.64, 0.69, //Kurva Reverse 9
    0.8641658938789, -0.1008392847035, 0.60, 0.64, 0.69, //Kurva Reverse 8
    0.8460343779667, -0.1321005190349, 0.60, 0.64, 0.69, //Kurva Reverse 7
    0.8272776373679, -0.1539833830668, 0.60, 0.64, 0.69, //Kurva Reverse 6
    0.7967842558937, -0.1758442944897, 0.60, 0.64, 0.69, //Kurva Reverse 5
    0.7681709914942, -0.1907388704784, 0.60, 0.64, 0.69, //Kurva Reverse 4
    0.7281766797513, -0.2050608564675, 0.60, 0.64, 0.69, //Kurva Reverse 3
    0.6797492078651, -0.211324584787, 0.60, 0.64, 0.69, //Kurva Reverse 2
    0.6326752816401, -0.2075919019969, 0.60, 0.64, 0.69, //Kurva Reverse 1
    0.5819007534833, -0.1926267779086, 0.60, 0.64, 0.69, //Kurva Reverse 0
    
    // BodyLED Atas
    0.2725327966223, 0, 1.0, 1.0, 1.0, //B
    0.2716369486575, 0.0280969771427, 1.0, 1.0, 1.0, //B1
    0.2721103922666, 0.0432471726335, 1.0, 1.0, 1.0, //B2
    0.2740041667029, 0.0588708117333, 1.0, 1.0, 1.0, //B3
    0.2758979411393, 0.0723639545922, 1.0, 1.0, 1.0, //B4
    0.2780284373802, 0.0837266012103, 1.0, 1.0, 1.0, //B5
    0.2806323772301, 0.093195473392, 1.0, 1.0, 1.0, //B6
    0.2909724209397, 0.0960343901115, 1.0, 1.0, 1.0, //B7
    0.3024581489253, 0.1025868689681, 1.0, 1.0, 1.0, //B8
    0.3136767978198, 0.1097680627943, 1.0, 1.0, 1.0, //B9
    0.3251186449228, 0.1160498612038, 1.0, 1.0, 1.0, //B10
    0.3403744410601, 0.1160498612038, 1.0, 1.0, 1.0, //B11
    0.3577377158293, 0.1155704008166, 1.0, 1.0, 1.0, //B12
    0.3778136715209, 0.1155704008166, 1.0, 1.0, 1.0, //B13
    0.396505078544, 0.1179933609863, 1.0, 1.0, 1.0, //B14
    0.4158887599014, 0.1214547326572, 1.0, 1.0, 1.0, //B15
    0.4359647155929, 0.1263006529966, 1.0, 1.0, 1.0, //B16
    0.454656122616, 0.1318388476701, 1.0, 1.0, 1.0, //B17
    0.4728060388756, 0.1394060613621, 1.0, 1.0, 1.0, //B18
    0.4932012603869, 0.1484334544901, 1.0, 1.0, 1.0, //B19
    0.5129390759488, 0.1582519627218, 1.0, 1.0, 1.0, //B20
    0.5325259352085, 0.1673699834117, 1.0, 1.0, 1.0, //B21
    0.5487357497683, 0.1751371862216, 1.0, 1.0, 1.0, //B22
    0.5635947464481, 0.1829043890314, 1.0, 1.0, 1.0, //B23
    0.5819007534833, 0.1926267779086, 1.0, 1.0, 1.0, //B24

    // BodyLED Bawah
    0.5819007534833, -0.1926267779086, 1.0, 1.0, 1.0, //B24 Reverse
    0.5635947464481, -0.1829043890314, 1.0, 1.0, 1.0, //B23 Reverse
    0.5487357497683, -0.1751371862216, 1.0, 1.0, 1.0, //B22 Reverse
    0.5325259352085, -0.1673699834117, 1.0, 1.0, 1.0, //B21 Reverse
    0.5129390759488, -0.1582519627218, 1.0, 1.0, 1.0, //B20 Reverse
    0.4932012603869, -0.1484334544901, 1.0, 1.0, 1.0, //B19 Reverse
    0.4728060388756, -0.1394060613621, 1.0, 1.0, 1.0, //B18 Reverse
    0.454656122616, -0.1318388476701, 1.0, 1.0, 1.0, //B17 Reverse
    0.4359647155929, -0.1263006529966, 1.0, 1.0, 1.0, //B16 Reverse
    0.4158887599014, -0.1214547326572, 1.0, 1.0, 1.0, //B15 Reverse
    0.396505078544, -0.1179933609863, 1.0, 1.0, 1.0, //B14 Reverse
    0.3778136715209, -0.1155704008166, 1.0, 1.0, 1.0, //B13 Reverse
    0.3577377158293, -0.1155704008166, 1.0, 1.0, 1.0, //B12 Reverse
    0.3403744410601, -0.1160498612038, 1.0, 1.0, 1.0, //B11 Reverse
    0.3251186449228, -0.1160498612038, 1.0, 1.0, 1.0, //B10 Reverse
    0.3136767978198, -0.1097680627943, 1.0, 1.0, 1.0, //B9 Reverse
    0.3024581489253, -0.1025868689681, 1.0, 1.0, 1.0, //B8 Reverse
    0.2909724209397, -0.0960343901115, 1.0, 1.0, 1.0, //B7 Reverse
    0.2806323772301, -0.093195473392, 1.0, 1.0, 1.0, //B6 Reverse
    0.2780284373802, -0.0837266012103, 1.0, 1.0, 1.0, //B5 Reverse
    0.2758979411393, -0.0723639545922, 1.0, 1.0, 1.0, //B4 Reverse
    0.2740041667029, -0.0588708117333, 1.0, 1.0, 1.0, //B3 Reverse
    0.2721103922666, -0.0432471726335, 1.0, 1.0, 1.0, //B2 Reverse
    0.2716369486575, -0.0280969771427, 1.0, 1.0, 1.0, //B1 Reverse
    0.2725327966223, -0, 1.0, 1.0, 1.0, //B Reverse

    //Ulir
    0.14, 0, 0.721, 0.745, 0.776, //U1
    0.14, 0.02, 0.721, 0.745, 0.776, //U2
    0.14, 0.04, 0.721, 0.745, 0.776,//U3
    0.143055914183, 0.0551478149653, 0.721, 0.745, 0.776, //U4
    0.1504422470644, 0.066444559372, 0.721, 0.745, 0.776,//U5
    0.1582630701152, 0.0751343627618, 0.721, 0.745, 0.776,//U6
    0.1624811553537, 0.0829193280964, 0.721, 0.745, 0.776,//U7
    0.1690760712605, 0.0881952608218, 0.721, 0.745, 0.776,//U7
    0.173472681865, 0.0857038481459, 0.721, 0.745, 0.776,//U8
    0.1786020609036, 0.0829193280964, 0.721, 0.745, 0.776,//U10
    0.1851969768103, 0.0870228313273, 0.721, 0.745, 0.776,//U11
    0.19, 0.09, 0.721, 0.745, 0.776,//U12
    0.1963350570084, 0.0868762776404, 0.721, 0.745, 0.776,//U13
    0.2036627413493, 0.0823331133491, 0.721, 0.745, 0.776,//U14
    0.2108438720033, 0.0865831702668, 0.721, 0.745, 0.776,//U15
    0.2180250026573, 0.090393566124, 0.721, 0.745, 0.776,//U16
    0.2241802575036, 0.0867297239536, 0.721, 0.745, 0.776,//U17
    0.2303355123499, 0.0829193280964, 0.721, 0.745, 0.776,//U18
    0.2354648913885, 0.0867297239536, 0.721, 0.745, 0.776,//U19
    0.241473592548, 0.0908332271845, 0.721, 0.745, 0.776,//U20
    0.2473357400207, 0.0874624923877, 0.721, 0.745, 0.776,//U21
    0.2521720116856, 0.0843848649646, 0.721, 0.745, 0.776,//U22
    0.2600501186359, 0.0876317184514, 0.721, 0.745, 0.776,//U23
    0.27, 0.09, 0.721, 0.745, 0.776,//U24
    0.2909724209397, 0.0960343901115, 0.721, 0.745, 0.776, //U25
    0.2806323772301, 0.093195473392, 0.721, 0.745, 0.776, //U26
    0.2780284373802, 0.0837266012103, 0.721, 0.745, 0.776, //U27
    0.2758979411393, 0.0723639545922, 0.721, 0.745, 0.776, //U28
    0.2740041667029, 0.0588708117333, 0.721, 0.745, 0.776, //U29
    0.2721103922666, 0.0432471726335, 0.721, 0.745, 0.776, //U30
    0.2716369486575, 0.0280969771427, 0.721, 0.745, 0.776, //U31
    0.2725327966223, 0, 0.721, 0.745, 0.776, //U32

    //Ulir Reverse
    0.2725327966223, 0, 0.721, 0.745, 0.776, //U32 Reverse
    0.2716369486575, -0.0280969771427, 0.721, 0.745, 0.776, //U31 Reverse
    0.2721103922666, -0.0432471726335, 0.721, 0.745, 0.776, //U30 Reverse
    0.2740041667029, -0.0588708117333, 0.721, 0.745, 0.776, //U29 Reverse
    0.2758979411393, -0.0723639545922, 0.721, 0.745, 0.776, //U28 Reverse
    0.2780284373802, -0.0837266012103, 0.721, 0.745, 0.776, //U27 Reverse
    0.2806323772301, -0.093195473392, 0.721, 0.745, 0.776, //U26 Reverse
    0.2909724209397, -0.0960343901115, 0.721, 0.745, 0.776, //U25 Reverse
    0.27, -0.09, 0.721, 0.745, 0.776,//U24 Reverse
    0.2600501186359, -0.0876317184514, 0.721, 0.745, 0.776,//U23 Reverse
    0.2521720116856, -0.0843848649646, 0.721, 0.745, 0.776,//U22 Reverse
    0.2473357400207, -0.0874624923877, 0.721, 0.745, 0.776,//U21 Reverse
    0.241473592548, -0.0908332271845, 0.721, 0.745, 0.776,//U20 Reverse
    0.2354648913885, -0.0867297239536, 0.721, 0.745, 0.776,//U19 Reverse
    0.2303355123499, -0.0829193280964, 0.721, 0.745, 0.776,//U18 Reverse
    0.2241802575036, -0.0867297239536, 0.721, 0.745, 0.776,//U17 Reverse
    0.2180250026573, -0.090393566124, 0.721, 0.745, 0.776,//U16 Reverse
    0.2108438720033, -0.0865831702668, 0.721, 0.745, 0.776,//U15 Reverse
    0.2036627413493, -0.0823331133491, 0.721, 0.745, 0.776,//U14 Reverse
    0.1963350570084, -0.0868762776404, 0.721, 0.745, 0.776,//U13 Reverse
    0.19, -0.09, 0.721, 0.745, 0.776,//U12 Reverse
    0.1851969768103, -0.0870228313273, 0.721, 0.745, 0.776,//U11 Reverse
    0.1786020609036, -0.0829193280964, 0.721, 0.745, 0.776,//U10 Reverse
    0.173472681865, -0.0857038481459, 0.721, 0.745, 0.776,//U8 Reverse
    0.1690760712605, -0.0881952608218, 0.721, 0.745, 0.776,//U7 Reverse
    0.1624811553537, -0.0829193280964, 0.721, 0.745, 0.776,//U7 Reverse
    0.1582630701152, -0.0751343627618, 0.721, 0.745, 0.776,//U6 Reverse
    0.1504422470644, -0.066444559372, 0.721, 0.745, 0.776,//U5 Reverse
    0.143055914183, -0.0551478149653, 0.721, 0.745, 0.776, //U4 Reverse
    0.14, -0.04, 0.721, 0.745, 0.776,//U3 Reverse
    0.14, -0.02, 0.721, 0.745, 0.776, //U2 Reverse
    0.14, 0, 0.721, 0.745, 0.776, //U1 Reverse

    //Pucuk
    0.1111253885793, 0, 0.0, 0.0, 0.0, //F
    0.112226805745, 0.0103523962443, 0.0, 0.0, 0.0, //F1
    0.1134089149983, 0.0202821139723, 0.0, 0.0, 0.0, //F2
    0.116482399057, 0.0287933005964, 0.0, 0.0, 0.0, //F3
    0.1228657890251, 0.0351766905645, 0.0, 0.0, 0.0, //F4
    0.1304312882465, 0.0410872368312, 0.0, 0.0, 0.0, //F5
    0.1363418345132, 0.0453428301432, 0.0, 0.0, 0.0, //F6
    0.1429616463319, 0.0498348453059, 0.0, 0.0, 0.0, //F7
    0.14, 0, 0.0, 0.0, 0.0, //F8
    0.14, 0.02, 0.0, 0.0, 0.0, //F9

    // Pucuk Reverse
    0.14, -0.02, 0.0, 0.0, 0.0, //F9
    0.14, 0, 0.0, 0.0, 0.0, //F8
    0.1429616463319, -0.0498348453059, 0.0, 0.0, 0.0, //F7
    0.1363418345132, -0.0453428301432, 0.0, 0.0, 0.0, //F6
    0.1304312882465, -0.0410872368312, 0.0, 0.0, 0.0, //F5
    0.1228657890251, -0.0351766905645, 0.0, 0.0, 0.0, //F4
    0.116482399057, -0.0287933005964, 0.0, 0.0, 0.0, //F3
    0.1134089149983, -0.0202821139723, 0.0, 0.0, 0.0, //F2
    0.112226805745, -0.0103523962443, 0.0, 0.0, 0.0, //F1
    0.1111253885793, 0, 0.0, 0.0, 0.0, //F

  ];

  const verticesKiri = [
    
    //Ulir Besi
    -0.5424744083643, -0.1834130803293, 0.0, 0.0, 0.0, //U
    -0.5139687575529, -0.1811281432281, 0.0, 0.0, 0.0, //U1
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.5139687575529, -0.1811281432281, 0.0, 0.0, 0.0, //U1
    -0.4812389955158, -0.1684585579234, 0.0, 0.0, 0.0, //U2
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4812389955158, -0.1684585579234, 0.0, 0.0, 0.0, //U2
    -0.4585393218449, -0.1473425824156, 0.0, 0.0, 0.0, //U3
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4585393218449, -0.1473425824156, 0.0, 0.0, 0.0, //U3
    -0.4432302396017, -0.1272824056831, 0.7215, 0.702, 0.678, //U4
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4432302396017, -0.1272824056831, 0.7215, 0.702, 0.678, //U4
    -0.435839648174, -0.1093338265015, 0.7215, 0.702, 0.678, //U5
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.435839648174, -0.1093338265015, 0.7215, 0.702, 0.678, //U5
    -0.4326722518478, -0.0850504546675, 0.7215, 0.702, 0.678, //U6
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4326722518478, -0.0850504546675, 0.7215, 0.702, 0.678, //U6
    -0.4332001512355, -0.0649902779351, 0.7215, 0.702, 0.678, //U7
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4332001512355, -0.0649902779351, 0.7215, 0.702, 0.678, //U7
    -0.4324718719941, -0.0446676913863, 0.7215, 0.702, 0.678, //U8
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4324718719941, -0.0446676913863, 0.7215, 0.702, 0.678, //U8
    -0.4316164530724, -0.0222304275317, 0.7215, 0.702, 0.678, //U9
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4316164530724, -0.0222304275317, 0.7215, 0.702, 0.678, //U9
    -0.4311704147425, -0.0057841644365, 0.7215, 0.702, 0.678, //U10
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4311704147425, -0.0057841644365, 0.7215, 0.702, 0.678, //U10
    -0.4396601466043, 0.0110414368426, 0.7215, 0.702, 0.678, //U11
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4396601466043, 0.0110414368426, 0.7215, 0.702, 0.678, //U11
    -0.4509579160278, 0.0290909934708, 0.7215, 0.702, 0.678, //U12
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4509579160278, 0.0290909934708, 0.7215, 0.702, 0.678, //U12
    -0.473545541608, 0.0480851331632, 0.7215, 0.702, 0.678, //U13
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.473545541608, 0.0480851331632, 0.7215, 0.702, 0.678, //U13
    -0.4979794622199, 0.0625877138715, 0.7215, 0.702, 0.678, //U14
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.4979794622199, 0.0625877138715, 0.7215, 0.702, 0.678, //U14
    -0.5317342489502, 0.069236383985, 0.7215, 0.702, 0.678, //U15
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.5317342489502, 0.069236383985, 0.7215, 0.702, 0.678, //U15
    -0.5685576526559, 0.0641220223592, 0.7215, 0.702, 0.678, //U16
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.5685576526559, 0.0641220223592, 0.7215, 0.702, 0.678, //U16
    -0.5905494076468, 0.0533818629451, 0.7215, 0.702, 0.678, //U17
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.5905494076468, 0.0533818629451, 0.7215, 0.702, 0.678, //U17
    -0.6115182903126, 0.0380387780677, 0.7215, 0.702, 0.678, //U18
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6115182903126, 0.0380387780677, 0.7215, 0.702, 0.678, //U18
    -0.6283956836777, 0.0129784061013, 0.7215, 0.702, 0.678, //U19
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6283956836777, 0.0129784061013, 0.7215, 0.702, 0.678, //U19
    -0.6381129707667, -0.0125934020277, 0.7215, 0.702, 0.678, //U20
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6381129707667, -0.0125934020277, 0.7215, 0.702, 0.678, //U20
    -0.6401587154171, -0.0315165400432, 0.0, 0.0, 0.0, //U21
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6401587154171, -0.0315165400432, 0.0, 0.0, 0.0, //U21
    -0.6437387685551, -0.0586226566599, 0.0, 0.0, 0.0, //U22
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6437387685551, -0.0586226566599, 0.0, 0.0, 0.0, //U22
    -0.6442502047177, -0.0872630817644, 0.0, 0.0, 0.0, //U23
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6442502047177, -0.0872630817644, 0.0, 0.0, 0.0, //U23
    -0.6381129707667, -0.1123234537308, 0.0, 0.0, 0.0, //U24
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6381129707667, -0.1123234537308, 0.0, 0.0, 0.0, //U24
    -0.6319757368158, -0.1322694640714, 0.0, 0.0, 0.0, //U25
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6319757368158, -0.1322694640714, 0.0, 0.0, 0.0, //U25
    -0.6217470135642, -0.1465896766236, 0.0, 0.0, 0.0, //U26
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6217470135642, -0.1465896766236, 0.0, 0.0, 0.0, //U26
    -0.6053810563616, -0.1614213253384, 0.0, 0.0, 0.0, //U27
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.6053810563616, -0.1614213253384, 0.0, 0.0, 0.0, //U27
    -0.5859464821836, -0.1736957932403, 0.0, 0.0, 0.0, //U28
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.5859464821836, -0.1736957932403, 0.0, 0.0, 0.0, //U28
    -0.5654890356804, -0.1818787718416, 0.0, 0.0, 0.0, //U29
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat
    -0.5654890356804, -0.1818787718416, 0.0, 0.0, 0.0, //U29
    -0.5424744083643, -0.1834130803293, 0.0, 0.0, 0.0, //U
    -0.538322521112, -0.0491696426697, .7215, 0.702, 0.678, //Pusat

    //Ujung
    -0.5486602404762, -0.0737684335068, 0.13, 0.13, 0.13, //H
    -0.5323329974509, -0.078729576403, 0.13, 0.13, 0.13, //H1
    -0.5136995741502, -0.0938137762179, 0.13, 0.13, 0.13, //H2
    -0.5092630447929, -0.1213202582332, 0.13, 0.13, 0.13, //H3
    -0.5216853269934, -0.1408409874053, 0.13, 0.13, 0.13, //H4
    -0.5429806679085, -0.1497140461199, 0.13, 0.13, 0.13, //H5
    -0.5633887029521, -0.1443902108912, 0.13, 0.13, 0.13, //H6
    -0.5820221262528, -0.1275313993334, 0.13, 0.13, 0.13, //H7
    -0.5864586556101, -0.1044614466754, 0.13, 0.13, 0.13, //H8
    -0.5775855968955, -0.0849407175032, 0.13, 0.13, 0.13,
    -0.5636746337163, -0.0758747083329,  0.13, 0.13, 0.13,

    //Ujung Putih
    -0.5310343811517, -0.0331621312619, 0.9, 0.9, 0.9, //I1
    -0.5185862740355, -0.0368965633968, 0.9, 0.9, 0.9, //I2
    -0.5028186716884, -0.0456102383781, 0.9, 0.9, 0.9, //I3
    -0.49120043838, -0.055568724071, 0.9, 0.9, 0.9, //I4 dari sini
    -0.4829017003025, -0.0671869573794, 0.9, 0.9, 0.9, //I5
    -0.4766776467444, -0.0808798752072, 0.9, 0.9, 0.9, //I6
    -0.4733581515135, -0.097892288266, 0.9, 0.9, 0.9, //I7
    -0.4754328360328, -0.1136598906131, 0.9, 0.9, 0.9, //I8
    -0.4816568895909, -0.1306723036719, 0.9, 0.9, 0.9, //I9
    -0.4920303121877, -0.1447801584035, 0.9, 0.9, 0.9, //I10
    -0.5102875359581, -0.1580581393274, 0.9, 0.9, 0.9, //I11
    -0.5360136239981, -0.1676016881165, 0.9, 0.9, 0.9, //I12
    -0.5609098382305, -0.1651120666932, 0.9, 0.9, 0.9, //I13
    -0.578752125097, -0.1563983917119, 0.9, 0.9, 0.9, //I14
    -0.594934664348, -0.146439906019, 0.9, 0.9, 0.9, //I15
    -0.6073827714641, -0.130257366768, 0.9, 0.9, 0.9, //I16
    -0.6144366988299, -0.1144897644209, 0.9, 0.9, 0.9, //I17
    -0.6169263202532, -0.0983072251698, 0.9, 0.9, 0.9, //I18
    -0.6123620143106, -0.0808798752072, 0.9, 0.9, 0.9, //I19
    -0.6073827714641, -0.065527209764, 0.9, 0.9, 0.9, //I20
    -0.5941047905402, -0.0489297336091, 0.9, 0.9, 0.9, //I21
    -0.58, -0.04, 0.9, 0.9, 0.9, //I22
    -0.5642293334614, -0.0331621312619, 0.9, 0.9, 0.9, //I23
    -0.5459721096911, -0.0310874467426, 0.9, 0.9, 0.9, //I24

    //Body LED
    -0.4227333598663, -0.0701471029041, 1.0, 1.0, 1.0,//l1
    -0.4079004705853, -0.0624534465327, 1.0, 1.0, 1.0,//l2
    -0.3934973182688, -0.0501435963385, 1.0, 1.0, 1.0,//l3
    -0.3814945725918, -0.0355758698235, 1.0, 1.0, 1.0,//l4
    -0.37, -0.02, 1.0, 1.0, 1.0,//l5
    -0.3618368970867, -0.0029514913705, 1.0, 1.0, 1.0,//l6
    -0.3530634778065, 0.0207459582996, 1.0, 1.0, 1.0,//l7
    -0.347116934378, 0.0440620870114, 1.0, 1.0, 1.0,//l8
    -0.3438733652352, 0.0724195408501, 1.0, 1.0, 1.0,//9
    -0.3449545549494, 0.102352408791, 1.0, 1.0, 1.0,//l10
    -0.3505103857082, 0.1286206476854, 1.0, 1.0, 1.0,//l11
    -0.3634718472479, 0.155454960947, 1.0, 1.0, 1.0,//l12
    -0.3793195763131, 0.1756875055348, 1.0, 1.0, 1.0,//l13
    -0.397605791945, 0.1950770274314, 1.0, 1.0, 1.0,//l14
    -0.4213859032103, 0.2106729472178, 1.0, 1.0, 1.0,//l15
    -0.4429737626959, 0.2208478084775, 1.0, 1.0, 1.0,//l16
    -0.4644579156141, 0.2293069413287, 1.0, 1.0, 1.0,//l17
    -0.4879826913614, 0.2359516870567, 1.0, 1.0, 1.0,//l18
    -0.5127168076096, 0.2383011792801, 1.0, 1.0, 1.0,//l19
    -0.5473538337611, 0.2362873288029, 1.0, 1.0, 1.0,//l20
    -0.5749594084427, 0.2285675686402, 1.0, 1.0, 1.0,//l21
    -0.6010044325264, 0.2170210504235, 1.0, 1.0, 1.0,//l22
    -0.6249498747879, 0.2010310160292, 1.0, 1.0, 1.0,//l23
    -0.6444441735711, 0.1834380907521, 1.0, 1.0, 1.0,//l24
    -0.6616946151851, 0.1623128594846, 1.0, 1.0, 1.0,//l25
    -0.6752779081968, 0.1408789253489, 1.0, 1.0, 1.0,//l26
    -0.6861719220407, 0.1140050067717, 1.0, 1.0, 1.0,//l27
    -0.6904532939365, 0.0856972147867, 1.0, 1.0, 1.0,//l28
    -0.6890509574372, 0.0616722363919, 1.0, 1.0, 1.0,//l29
    -0.6840967128191, 0.0366515473076, 1.0, 1.0, 1.0,//l30
    -0.67736094657, 0.0152522737487, 1.0, 1.0, 1.0,//l31
    -0.6718891840635, 0.0010505663742, 1.0, 1.0, 1.0,//l32
    -0.6660625484191, -0.0105698246421, 1.0, 1.0, 1.0,//l33
    -0.66, -0.02, 1.0, 1.0, 1.0,//l34
    -0.6530268925695, -0.031744759383, 1.0, 1.0, 1.0,//l35
    -0.6491043064023, -0.0430068736271, 1.0, 1.0, 1.0,//l36
    

    //Body - Ulir
    -0.6401587154171, -0.0315165400432, 1.0, 1.0, 1.0, //U21
    -0.6381129707667, -0.0125934020277, 1.0, 1.0, 1.0, //U20
    -0.6283956836777, 0.0129784061013, 1.0, 1.0, 1.0, //U19
    -0.6115182903126, 0.0380387780677, 1.0, 1.0, 1.0, //U18
    -0.5905494076468, 0.0533818629451, 1.0, 1.0, 1.0, //U17
    -0.5685576526559, 0.0641220223592, 1.0, 1.0, 1.0, //U16
    -0.5317342489502, 0.069236383985, 1.0, 1.0, 1.0, //U15
    -0.4979794622199, 0.0625877138715, 1.0, 1.0, 1.0, //U14
    -0.473545541608, 0.0480851331632, 1.0, 1.0, 1.0, //U13
    -0.4509579160278, 0.0290909934708, 1.0, 1.0, 1.0, //U12
    -0.4396601466043, 0.0110414368426, 1.0, 1.0, 1.0, //U11
    -0.4311704147425, -0.0057841644365, 1.0, 1.0, 1.0, //U10
    -0.4316164530724, -0.0222304275317, 1.0, 1.0, 1.0, //U9
    -0.4324718719941, -0.0446676913863, 1.0, 1.0, 1.0, //U8
    -0.4332001512355, -0.0649902779351, 1.0, 1.0, 1.0, //U7
    -0.4326722518478, -0.0850504546675, 1.0, 1.0, 1.0, //U6

    //Bohlam
    -0.6526033420814, -0.0376592460271, 0.741, 0.745, 0.753, //J
    -0.6641116542665, -0.0236141380588, 0.741, 0.745, 0.753, //J1
    -0.672648533425, -0.0078133915944, 0.741, 0.745, 0.753, //J2
    -0.6819842840067, 0.0093918656668, 0.741, 0.745, 0.753, //J3
    -0.6879618676917, 0.0280016337249, 0.741, 0.745, 0.753, //J4
    -0.6924088590144, 0.050122678775, 0.741, 0.745, 0.753, //J5
    -0.6946353357321, 0.0738853782858, 0.741, 0.745, 0.753, //J6
    -0.6941349662024, 0.0994572702846, 0.741, 0.745, 0.753, //J7
    -0.6906493117818, 0.1249294763965, 0.741, 0.745, 0.753, //J8
    -0.682427647103, 0.1491280722027, 0.741, 0.745, 0.753, //J9
    -0.6699329050005, 0.1761448949647, 0.741, 0.745, 0.753, //J10
    -0.6596260065889, 0.1922710601962, 0.741, 0.745, 0.753, //J11
    -0.6505474839498, 0.2046714248751, 0.741, 0.745, 0.753, //J12
    -0.6362596862107, 0.2190387759818, 0.741, 0.745, 0.753, //J13
    -0.6181520389655, 0.2356339932644, 0.741, 0.745, 0.753, //J14
    -0.5926845237491, 0.2497045813662, 0.741, 0.745, 0.753, //J15
    -0.5716949396067, 0.2575748865637, 0.741, 0.745, 0.753, //J16
    -0.5454298429505, 0.2647388881861, 0.741, 0.745, 0.753, //J17
    -0.5163626331446, 0.2659552927625, 0.741, 0.745, 0.753, //J18
    -0.48, 0.26, 0.741, 0.745, 0.753, //J19
    -0.4502329603124, 0.251358437846, 0.741, 0.745, 0.753, //J20
    -0.4227796812897, 0.2371670511217, 0.741, 0.745, 0.753, //J21
    -0.3931328546486, 0.2177045778997, 0.741, 0.745, 0.753, //J22
    -0.3696391729103, 0.1889163362589, 0.741, 0.745, 0.753, //J23
    -0.3522113706972, 0.1552624763125, 0.741, 0.745, 0.753, //J24
    -0.3433108152642, 0.1248523619032, 0.741, 0.745, 0.753, //J25
    -0.3380784604302, 0.094847715686, 0.741, 0.745, 0.753, //J26
    -0.338315754929, 0.0628157285082, 0.741, 0.745, 0.753, //J27
    -0.3440735601228, 0.0380821687886, 0.741, 0.745, 0.753, //J28
    -0.3532284360928, 0.0105103317241, 0.741, 0.745, 0.753, //J29
    -0.3607723144738, -0.0050024752822, 0.741, 0.745, 0.753,
    -0.37, -0.02, 0.741, 0.745, 0.753,
    -0.3784247208687, -0.0326780569775, 0.741, 0.745, 0.753,

    //Ulir
    -0.433346378698, -0.0850412401818, 0.305, 0.274, 0.274,
    -0.4450285260962, -0.0629384821094, 0.305, 0.274, 0.274,
    -0.4562433875984, -0.044199187222, 0.305, 0.274, 0.274,
    -0.4712224067675, -0.0273818712973, 0.305, 0.274, 0.274,
    -0.4917487514162, -0.0105645553727, 0.305, 0.274, 0.274,
    -0.515793174428, 0.0019283078856, 0.305, 0.274, 0.274,
    -0.5507070317838, 0.0067332552926, 0.305, 0.274, 0.274,
    -0.58, 0, 0.305, 0.274, 0.274,
    -0.6057513436643, -0.0134475238169, 0.305, 0.274, 0.274,
    -0.6215458312651, -0.0296712258904, 0.305, 0.274, 0.274,
    -0.6318082633606, -0.0421490675381, 0.305, 0.274, 0.274,
    -0.6402105101335, -0.0553075187301, 0.305, 0.274, 0.274,

    -0.44, -0.05, 0.305, 0.274, 0.274,
    -0.4535320690647, -0.0298854939635, 0.305, 0.274, 0.274,
    -0.4681486019199, -0.0133482855322, 0.305, 0.274, 0.274,
    -0.4913630952782, 0.0041911779555, 0.305, 0.274, 0.274,
    -0.5171569767874, 0.0177216212174, 0.305, 0.274, 0.274,
    -0.5476797365733, 0.021229513915, 0.305, 0.274, 0.274,
    -0.5829146223966, 0.0122394698168, 0.305, 0.274, 0.274,
    -0.6064500722413, -0.0004228480598, 0.305, 0.274, 0.274,
    -0.625459474039, -0.0183611317184, 0.305, 0.274, 0.274,
    -0.6339080970602, -0.0327821048557, 0.305, 0.274, 0.274,
    -0.6435636662273, -0.0461478848366, 0.305, 0.274, 0.274,

    -0.4324759907532, -0.0443272267096, 0.305, 0.274, 0.274,
    -0.437555603451, -0.0301331022996, 0.305, 0.274, 0.274,
    -0.4486005177288, -0.0143509197468, 0.305, 0.274, 0.274,
    -0.4635645951375, 0.0030925451801, 0.305, 0.274, 0.274,
    -0.4838729859063, 0.0197053689199, 0.305, 0.274, 0.274,
    -0.5044258320527, 0.0319834862054, 0.305, 0.274, 0.274,
    -0.5312223052837, 0.0384019167813, 0.305, 0.274, 0.274,
    -0.5598541533936, 0.0358345445509, 0.305, 0.274, 0.274,
    -0.5833469518427, 0.029416113975, 0.305, 0.274, 0.274,
    -0.6057233305196, 0.013890880611, 0.305, 0.274, 0.274,
    -0.6227684511609, -0.0025986887078, 0.305, 0.274, 0.274,
    -0.6345803473498, -0.0187184947634, 0.305, 0.274, 0.274,

    //Shadow Gajai :(
    // -0.6522130821009, -0.0305630802611, 0.258, 0.250, 0.254, //J
    // -0.6531515306672, -0.0122247138459, 0.247, 0.247, 0.258, //J1
    // -0.6518284280935, 0.0081582155825, 0.403, 0.415, 0.443, //J2
    // -0.6457424114338, 0.0273873942885, 0.529, 0.533, 0.552, //J3
    // -0.6335101464419, 0.0520007430322, 0.729, 0.733, 0.752,
    // -0.6627164749011, 0.0773832589242, 0.882, 0.886, 0.898,
    // -0.6845639551791, 0.1077653612797, 0.713, 0.717, 0.737,
    // -0.6875111663205, 0.0846903468325, 0.662, 0.666, 0.686,
    // -0.6870922135396, 0.0619999159593, 0.537, 0.541, 0.560,
    // -0.6834452741078, 0.0350790657709, 0.4, 0.407, 0.427,
    // -0.6761226635278, 0.0139269691943, 0.341, 0.352, 0.372,
    // -0.669584155875, -0.0033792916411, 0.286, 0.290, 0.313,
    // -0.6630841221092, -0.0150443715006, 0.258, 0.250, 0.254,
  ];