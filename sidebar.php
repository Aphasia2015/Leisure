<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
    <div class="sidebar">
        <div class="widget center">
            <i class="logo"></i>
            <span class="name">ferstar</span>
        </div>
        <div class="social">
            <div class="center">
                <a href="https://github.com/ferstar" target="_blank" title="GitHub">&#60081;</a>
                <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=iuzv_NX5-uv4yvv7pOnl5w" target="_blank" title="Mail">&#60038;</a>
                <a href="http://weibo.com/ferstar" target="_blank" title="Weibo">&#58880;</a>
            </div>
        </div>
        <div class="widget">
            <h3 class="widget-title"><?php _e('最新文章'); ?></h3>
            <ul class="widget-list article-list">
                <?php $this->widget('Widget_Contents_Post_Recent')
                ->parse('<li><a href="{permalink}">{title}</a></li>'); ?>
            </ul>
        </div>
        <div class="widget">
            <h3 class="widget-title"><?php _e('最近回复'); ?></h3>
            <ul class="widget-list">
            <?php $this->widget('Widget_Comments_Recent')->to($comments); ?>
            <?php while($comments->next()): ?>
                <li><a href="<?php $comments->permalink(); ?>"><?php $comments->author(false); ?>: <?php $comments->excerpt(30, '...'); ?></a></li>
            <?php endwhile; ?>
            </ul>
        </div>
        <div class="widget">
            <form class="search" method="post" action="/" role="search">
                <input type="search" name="s" value="搜索" autocomplete="off" />
            </form>
        </div>
    </div>

<script src="<?php $this->options->themeUrl('common.js'); ?>"></script>
<?php $this->footer(); ?>
</body>
</html>
