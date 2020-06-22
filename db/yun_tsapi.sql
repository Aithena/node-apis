-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-06-23 00:58:57
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
-- 数据库： `yun_tsapi`
--

-- --------------------------------------------------------

--
-- 表的结构 `node_admin`
--

CREATE TABLE `node_admin` (
  `id` int(11) NOT NULL COMMENT '编号',
  `user_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `user_password` varchar(32) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `user_nickname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '昵称',
  `user_avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '头像',
  `create_date` datetime NOT NULL DEFAULT '1970-01-01 00:00:00' COMMENT '创建日期',
  `user_roles` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '权限'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='管理员';

--
-- 转存表中的数据 `node_admin`
--

INSERT INTO `node_admin` (`id`, `user_name`, `user_password`, `user_nickname`, `user_avatar`, `create_date`, `user_roles`) VALUES
(1, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '超级管理员', 'https://vole.oss-cn-shenzhen.aliyuncs.com/vue-admin-lite/img/1001.jpg', '1970-01-01 00:00:00', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `node_article`
--

CREATE TABLE `node_article` (
  `id` int(11) NOT NULL COMMENT '系统编号',
  `article_title` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '标题',
  `article_content` text COLLATE utf8_unicode_ci NOT NULL COMMENT '内容',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建日期'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='文章';

--
-- 转存表中的数据 `node_article`
--

INSERT INTO `node_article` (`id`, `article_title`, `article_content`, `create_date`) VALUES
(1, '习近平在银川考察调研', '习近平总书记9日在银川考察调研。他先后来到贺兰县稻渔空间乡村生态观光园、贺兰山东麓葡萄种植园，了解当地发展特色农业产业、加强贺兰山生态保护等情况。（文字记者：张晓松、朱基钗 摄影记者：鞠鹏、谢环驰、王晔、燕雁）', '2020-06-05 00:00:00'),
(2, '朝鲜宣布彻底切断一切朝韩通讯联络线', '2020年6月9日，外交部发言人华春莹主持例行记者会，以下为部分实录。韩联社记者：据报道，朝鲜宣布彻底切断一切朝韩通讯联络线。中方对此有何评论？朝韩是同一民族。作为近邻，中方一贯希望半岛保持和平稳定。', '2020-06-08 00:00:00'),
(3, '总书记这句话为何如此暖心', '“脱贫、全面小康、现代化，一个民族也不能少。”习近平总书记在宁夏考察时的这句话，朴实而坚定，彰显了人民至上的深厚情怀，让人闻之心头一热。\r\n\r\n从兴安盟到大凉山，从独龙族到毛南族，总书记始终心系民族地区发展，深情牵挂少数民族贫困群众。“一个民族也不能少”，意味着各族人民共同迈入小康才是真小康。这是庄严的承诺，更是扎实的行动。当前，脱贫攻坚正值决战决胜的关键时刻。手挽手齐奋斗，肩并肩奔小康，坚决啃下最后的硬骨头，各族人民的日子一定会越来越红火！', '2020-06-09 00:00:00'),
(4, '韩国瑜回应被罢免：不会提出任何诉讼，接下来会沉淀休息', '台湾高雄市长韩国瑜罢免投票6月6日落幕，结果确定韩国瑜被罢免成功，他将于台“中选会”6月12日正式公告后解职。韩国瑜下一步的动向备受关注。\r\n\r\n今天（9日）下午3时许，韩国瑜在脸书发文透露，等卸下高雄市长职务后他会暂时沉淀休息。针对外界对他未来的各种揣测传言，他强调，这都不在他目前的规划内。\r\n\r\n针对罢免的结果，韩国瑜说，他尊重人民的意志，不会提出任何诉讼。\r\n\r\n韩国瑜还说，只要有任何动向或想法，他一定会向大家报告，而不是借其它渠道放出消息，恳请外界不需多做揣测。', '2020-06-10 00:00:00');

--
-- 转储表的索引
--

--
-- 表的索引 `node_admin`
--
ALTER TABLE `node_admin`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `node_article`
--
ALTER TABLE `node_article`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `node_admin`
--
ALTER TABLE `node_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号', AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `node_article`
--
ALTER TABLE `node_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统编号', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
