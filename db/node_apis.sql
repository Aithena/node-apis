-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-06-17 07:42:50
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `node_apis`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL COMMENT '编号',
  `userName` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(32) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `nickName` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '头像',
  `createDate` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建日期',
  `roles` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='管理员';

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `userName`, `password`, `nickName`, `avatar`, `createDate`, `roles`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '超级管理员', 'https://vole.oss-cn-shenzhen.aliyuncs.com/vue-admin-lite/img/1001.jpg', '1970-01-01 00:00:00', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL COMMENT '系统编号',
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `content` text COLLATE utf8_unicode_ci NOT NULL COMMENT '内容',
  `createDate` date NOT NULL DEFAULT '1970-01-01' COMMENT '创建日期'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='文章';

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `createDate`) VALUES
(1, '习近平在银川考察调研', '习近平总书记9日在银川考察调研。他先后来到贺兰县稻渔空间乡村生态观光园、贺兰山东麓葡萄种植园，了解当地发展特色农业产业、加强贺兰山生态保护等情况。（文字记者：张晓松、朱基钗 摄影记者：鞠鹏、谢环驰、王晔、燕雁）', '2020-06-05'),
(2, '朝鲜宣布彻底切断一切朝韩通讯联络线', '2020年6月9日，外交部发言人华春莹主持例行记者会，以下为部分实录。韩联社记者：据报道，朝鲜宣布彻底切断一切朝韩通讯联络线。中方对此有何评论？朝韩是同一民族。作为近邻，中方一贯希望半岛保持和平稳定。', '2020-06-08'),
(3, '总书记这句话为何如此暖心', '“脱贫、全面小康、现代化，一个民族也不能少。”习近平总书记在宁夏考察时的这句话，朴实而坚定，彰显了人民至上的深厚情怀，让人闻之心头一热。\r\n\r\n从兴安盟到大凉山，从独龙族到毛南族，总书记始终心系民族地区发展，深情牵挂少数民族贫困群众。“一个民族也不能少”，意味着各族人民共同迈入小康才是真小康。这是庄严的承诺，更是扎实的行动。当前，脱贫攻坚正值决战决胜的关键时刻。手挽手齐奋斗，肩并肩奔小康，坚决啃下最后的硬骨头，各族人民的日子一定会越来越红火！', '2020-06-09'),
(4, '韩国瑜回应被罢免：不会提出任何诉讼，接下来会沉淀休息', '台湾高雄市长韩国瑜罢免投票6月6日落幕，结果确定韩国瑜被罢免成功，他将于台“中选会”6月12日正式公告后解职。韩国瑜下一步的动向备受关注。\r\n\r\n今天（9日）下午3时许，韩国瑜在脸书发文透露，等卸下高雄市长职务后他会暂时沉淀休息。针对外界对他未来的各种揣测传言，他强调，这都不在他目前的规划内。\r\n\r\n针对罢免的结果，韩国瑜说，他尊重人民的意志，不会提出任何诉讼。\r\n\r\n韩国瑜还说，只要有任何动向或想法，他一定会向大家报告，而不是借其它渠道放出消息，恳请外界不需多做揣测。', '2020-06-10');

--
-- 转储表的索引
--

--
-- 表的索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号', AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统编号', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
