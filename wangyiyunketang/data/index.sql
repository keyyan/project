SET NAMES UTF8;
DROP DATABASE IF EXISTS wangyiyun;
CREATE DATABASE wangyiyun CHARSET=UTF8;
USE wangyiyun;
               /************************轮播**********************/
CREATE TABLE slider(
                    num INT PRIMARY KEY AUTO_INCREMENT,
                    img VARCHAR(32),
                    bgcolor VARCHAR(32)
);
INSERT INTO slider VALUES
                    (NULL,'images/slider01.jpg','#3A4559'),
                    (NULL,'images/slider02.jpg','#FFDE21'),
                    (NULL,'images/slider03.png','#265378'),
                    (NULL,'images/slider04.png','#020132'),
                    (NULL,'images/slider05.png','#2A3A4A'),
                    (NULL,'images/slider06.jpg','#DE3F21'),
                    (NULL,'images/slider07.jpg','#BAB8AB');
 /*********************************反复循环******************************/
 CREATE TABLE navs(
                     i INT PRIMARY KEY AUTO_INCREMENT,
                     icon VARCHAR(32),
                     duty VARCHAR(32),
                     pro VARCHAR(64)
 );
 INSERT INTO navs VALUES
                     (NULL,'&#xe609;','独立音乐制作人','最易懂的音乐制作课程'),
                     (NULL,'&#xe674;','UI设计师','网易UEDC首期设计师亲授'),
                     (NULL,'&#xe618;','自由职业摄影师','培养一个能赚钱的爱好'),
                     (NULL,'&#xe611;','用户研究员','网易&浙大导师带你"读心"'),
                     (NULL,'&#xf002b','Unity游戏开发工程师','Unity游戏开发必修课'),
                     (NULL,'&#xe607;','手游场景设计师','零基础学会制作游戏场景'),
                     (NULL,'&#xe637;','手游UI设计师','网易游戏UI设计专家亲授'),
                     (NULL,'&#xe743;','VR游戏设计师','4个月掌握VR游戏制作流程');
/*******************************banner**************************/
CREATE TABLE banner(
                         bid INT PRIMARY KEY AUTO_INCREMENT,
                         bType VARCHAR(32),
                         bPic VARCHAR(32),
                         bPro VARCHAR(64),
                         bClass VARCHAR(32),
                         bPrice VARCHAR(32),
                         bOther VARCHAR(400),
                         bPage VARCHAR(32)
 );
 INSERT INTO banner VALUES
                         (NULL,'good_course','images/part1_01.png','','','','',''),
                         (NULL,'favClass','images/part2_01.png','','','','',''),
                         (NULL,'favClass','images/part2_08.png','','','','',''),
                         (NULL,'famTeacher','images/part3_01.png','侯捷','台湾著名C++技术专家','','',''),
                         (NULL,'famTeacher','images/part3_02.png','侯爵','麻瓜编程创始人','','',''),
                         (NULL,'famTeacher','images/part3_03.png','黄有璨','三节课联合创始人','','',''),
                         (NULL,'famTeacher','images/part3_04.png','秦川','领津科技技术总监','','',''),
                         (NULL,'web','images/part4_01.png','','','','',''),
                         (NULL,'web','images/part4_08.png','','','','',''),
                         (NULL,'design','images/part5_01.png','','','','',''),
                         (NULL,'design','images/part5_08.png','','','','',''),
                         (NULL,'working','images/part6_01.png','','','','',''),
                         (NULL,'working','images/part6_08.png','','','','',''),
                         (NULL,'life','images/part7_01.png','','','','',''),
                         (NULL,'life','images/part7_08.png','','','','',''),
                         (NULL,'language','images/part8_01.png','','','','',''),
                         (NULL,'language','images/part8_08.png','','','','',''),
                         (NULL,'mpSchool','images/part9_01.png','','','','',''),
                         (NULL,'mpSchool','images/part9_08.png','','','','',''),
                         (NULL,'examination','images/part10_01.png','','','','',''),
                         (NULL,'examination','images/part10_08.png','','','','',''),
                         (NULL,'legislation','images/part11_01.png','','','','',''),
                         (NULL,'legislation','images/part11_08.png','','','','',''),
                         (NULL,'good_course','images/part1_02.jpg','10分钟学会使用单反','吴宗恩','199.00','速成请看十分钟看完说明书，具体设置参数点击不同的术语教学。','page'),
                         (NULL,'good_course','images/part1_03.jpg','马甲线养成计划','FitTime即刻运动','159.00','“马甲线养成计划”由FitTime的签约教练，今年刚刚获得比基尼比赛冠军的Lulu教练带你一起完成，为期一个月，直击塑型的两大要点：1. 通过适度的力量训练保持线条；2. 通过有氧训练减掉多余脂肪。适合追求线条美的女生和男生。','page'),
                         (NULL,'good_course','images/part1_04.jpg','三只松鼠创始人聊创业秘诀','淘宝大学','99.00','《名师一刻》是由淘宝大学官方发布的高端电商经营课程，邀请亿级电商和新零售领袖主讲。围绕新零售、新制造展示最具时代性的前沿商业观点。每集都将通过15分钟呈现一个主题。每周三更新一集。','page'),
                         (NULL,'good_course','images/part1_05.jpg','中国品牌第一人李光斗脱口秀','奋斗传媒','149.00','财经的八卦爆料，娱乐的财经解读，历史的财富新知。轻松get√各种冷知识新技能，与众不同的财经脱口秀。课程分为大咖们的营销秘籍、热门时事的财经解读、历史事件的财富新知三个部分。每周三、周五更新。','page'),
                         (NULL,'favClass','images/part2_02.jpg','循序渐进学摄影','钟百迪摄影课堂','99.00','中级班，是初级班的一个延伸，以构图，人像用光，构图，家庭摄影，婚礼跟拍为主要内容，解惑白平衡，夜景人像等拍摄技巧。','page'),
                         (NULL,'favClass','images/part2_03.jpg','Python数据分析实战','小蚊子数据分析','129.00','跟小蚊子学数据分析--Python数据分析实战，简单、实用的Python数据分析视频教程。主要介绍Python在数据处理、数据分析、数据可视化方面常用的实战方法与技巧。本课程目的是帮助学员提升工作效率及效果，增强职场竞争力。','page'),
                         (NULL,'favClass','images/part2_04.jpg','向咨询顾问学习商业','Jeff老师','198.00','面对企业管理中的开放性问题，咨询公司的顾问能够有效分析问题、提出问题解决方案，并利用PPT高效向客户的高层领导汇报。国际知名咨询公司的PPT报告，号称商务领域PPT的标杆，一般信息量都非常大，颜色、文本框的搭配令人赏心悦目。咨询PPT报告所展示出来的分析问题、解决问题的逻辑思路，以及咨询顾问的高效沟通和有效表达方式，让公司中高层管理者称赞钦佩。企业中高层领导经常需要向上级高层领导汇报，他们迫切需要顾问式思维以及顾问式PPT制作技巧，该课程以全球知名顶尖咨询公司的商业报告为例，讲解思维（逻辑思维、结构化思维、咨询思维等等）与商业PPT融合的方法、思路、技巧等。','page'),
                         (NULL,'favClass','images/part2_05.jpg','SQL数据分析实战','小蚊子数据分析','79.00','','page'),
                         (NULL,'favClass','images/part2_06.jpg','零基础项目管理','李先知','499.00','','page'),
                         (NULL,'favClass','images/part2_07.jpg','巧用心理学成就效率人生','十点课堂','99.00','未来一年，刘轩将与你分享，那些可以随心应用的有用心理学，让你有效率，更有魅力地去努力。','page'),
                         (NULL,'web','images/part4_02.jpg','微信小程序与数据开发','小蚊子数据分析','20.00','跟小蚊子学数据分析--微信小程序开发与数据分析，简单、实用的微信小程序开发与数据分析的视频教程。主要介绍微信小程序在开发以及数据分析方面的实战方法技巧。本课程目的是帮助学员提升工作效率及效果，增强职场竞争力。','page'),
                         (NULL,'web','images/part4_03.jpg','有效提升转化率','运营控','149.00','这堂课不仅将帮你掌握很快能够找到导致转化率低的原因，而且还能知道如何将这些原因逐个击破，最终实现转化率的数倍提升。','page'),
                         (NULL,'web','images/part4_04.jpg','Hadoop2.x入门简介及生态圈','麦子学院','99.00','','page'),
                         (NULL,'web','images/part4_05.png','零基础学编程系列之C语言','老九学堂','299.00','','page'),
                         (NULL,'web','images/part4_06.jpg','让转化率提升10倍的标题怎么写','三节课','139.00','','page'),
                         (NULL,'web','images/part4_07.jpg','Python实战|四周实现爬虫系统','麻瓜编程','99.00','','page'),
                         (NULL,'design','images/part5_02.jpg','SketchUp自学教程','设计软件通官方','149.00','本套课程为建筑/室内/景观设计专业的同学，以及对相关专业感兴趣的小白量身打造。','page'),
                         (NULL,'design','images/part5_03.jpg','AI教程超级合辑-illustrator教程','设计软件通官方','149.00','橘子老师的《PS教程超级合辑》自上线以来，受到了许多同学的好评与肯定，是云课堂口碑最好的PS教程！本教程是《PS教程超级合辑》的姊妹篇，秉承了我们教程“简单、粗暴、好用”的一贯风格！教程共分50章，整体更新完成后，共计约为600-700集。','page'),
                         (NULL,'design','images/part5_04.jpg','淘宝店铺装修天猫范【全集】...','顾领中','199.00','适用人群：淘宝美工、天猫美工、淘宝卖家、想开店者、设计师、淘宝高级设计师','page'),
                         (NULL,'design','images/part5_05.jpg','《和文牛一起学Ps》完整版','文牛','119.00','','page'),
                         (NULL,'design','images/part5_06.png','Principle微交互设计','原型库','499.00','','page'),
                         (NULL,'design','images/part5_07.jpg','艺术二维码制作全攻略','小红花研究院','139.00','','page'),
                         (NULL,'working','images/part6_02.jpg','Excel学习的最佳方式','谷小城','99.00','','page'),
                         (NULL,'working','images/part6_03.png','和秋叶一起学职场职能','幻方秋叶PPT','119.00','','page'),
                         (NULL,'working','images/part6_04.jpg','职场加速器','八运会','99.00','','page'),
                         (NULL,'working','images/part6_05.jpg','零数据图表高效制作','PPT研究院','99.00','','page'),
                         (NULL,'working','images/part6_06.jpg','Excel企业级十大组合函数','上海领津网络科技有限公司','199.00','','page'),
                         (NULL,'working','images/part6_07.jpg','轻松手绘：用简笔画提升你的竞争力','幻方秋叶PPT','99.00','','page'),
                         (NULL,'life','images/part7_02.jpg','我最喜欢的一本书','单读视频','99.00','','page'),
                         (NULL,'life','images/part7_03.jpg','榕哥烙科：每天一点小科学','榕哥烙科','99.00','','page'),
                         (NULL,'life','images/part7_04.jpg','一分钟学拍照','摄影之友','129.00','','page'),
                         (NULL,'life','images/part7_05.jpg','超有趣的手机拍照教学','吴宗恩','129.00','','page'),
                         (NULL,'life','images/part7_06.png','巴西柔术（单挑无敌）','玩转特长','149.00','','page'),
                         (NULL,'life','images/part7_07.png','尤克里里小丸子课堂','原笔UKULELE','99.00','','page'),
                         (NULL,'language','images/part8_02.png','七天学会日语五十音图','早道日语','169.00','','page'),
                         (NULL,'language','images/part8_03.png','和外教意大利语发音','幻方秋叶PPT','169.00','','page'),
                         (NULL,'language','images/part8_04.jpg','看奥斯卡最佳动画趣味学地道口语','ACE英语网校','149.00','','page'),
                         (NULL,'language','images/part8_05.jpg','John uuH教英语之美语发音','johnhuu老师','149.00','','page'),
                         (NULL,'language','images/part8_06.jpeg','钟平带你突破英语四六级','钟平老师','179.00','','page'),
                         (NULL,'language','images/part8_07.jpg','从零开始学英语','ACE英语网校','169.00','','page'),
                         (NULL,'mpSchool','images/part9_02.png','跟超级飞侠ABC学自然拼读','超级飞侠ABC','139.00','','page'),
                         (NULL,'mpSchool','images/part9_03.png','奇卡奇卡一起演英语','奇卡奇卡一起演英语','139.00','','page'),
                         (NULL,'mpSchool','images/part9_04.jpg','高二物理同步提高','中国好课堂','139.00','','page'),
                         (NULL,'mpSchool','images/part9_05.jpg','高二数学理科专项强化提升','中国好课堂','599.00','','page'),
                         (NULL,'mpSchool','images/part9_06.jpg','学霸实战训练营','雷子|复制卓越','599.00','','page'),
                         (NULL,'mpSchool','images/part9_07.jpg','【七年级】同步课程学地理','学科网','399.00','','page'),
                         (NULL,'examination','images/part10_02.jpg','2017会计从业-会计基础','对啊网','299.00','','page'),
                         (NULL,'examination','images/part10_03.jpg','21天记忆训练（双学位学霸主讲）','图大师思维导图学院','299.00','','page'),
                         (NULL,'examination','images/part10_04.jpg','2017银行考试内部精品课','江苏学信学院','399.00','','page'),
                         (NULL,'examination','images/part10_05.png','专业硕士逻辑：从入门到精通','王诚','299.00','','page'),
                         (NULL,'examination','images/part10_06.jpg','学什么数学','鸭梨大学','149.00','','page'),
                         (NULL,'examination','images/part10_07.jpg','会计是一门商业语言','汤靖平','139.00','','page'),
                         (NULL,'legislation','images/part11_02.jpg','18招教你运营好微信公众号账号','萧秋水','129.00','','page'),
                         (NULL,'legislation','images/part11_03.jpg','财报从入门到精通','汤靖平','129.00','','page'),
                         (NULL,'legislation','images/part11_04.jpg','电商总监教你：SEO入门必修课','勾俊伟','159.00','','page'),
                         (NULL,'legislation','images/part11_05.jpg','老会计手把手教你做出纳','乐上财税','159.00','','page'),
                         (NULL,'legislation','images/part11_06.png','创业必须知道的心理学','俞炳呈','99.00','','page'),
                         (NULL,'legislation','images/part11_07.jpg','诉讼可视化','无讼学院云课堂','99.00','','page');
CREATE TABLE user(
                          uid INT PRIMARY KEY AUTO_INCREMENT,
                          account VARCHAR(32),
                          password INT
);
INSERT INTO user VALUES( 100,'15972166642','66666666');
CREATE TABLE cart(
                          cid INT PRIMARY KEY AUTO_INCREMENT,
                          userId INT
);
INSERT INTO cart VALUES(1,100);
CREATE TABLE cart_detail(
                          did INT PRIMARY KEY AUTO_INCREMENT,
                          cartId INT,
                          productId INT
);
INSERT INTO cart_detail VALUES(NULL,1,24);