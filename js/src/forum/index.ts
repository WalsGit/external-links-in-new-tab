import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import PostStream from 'flarum/forum/components/PostStream';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Post from 'flarum/forum/components/Post';

app.initializers.add('walsgit/external-links', () => {
    const openExternalLinksInNewTab = () => {
            document.querySelectorAll('a[href^="http"]').forEach((element: Element) => {
                const href = element.getAttribute('href');
                if (href) {
                    const url = new URL(href);
                    if (url.host !== window.location.host) {
                        element.setAttribute('target', '_blank');
                        element.setAttribute('rel', 'noopener noreferrer');
                    }
                }
            });
    };

    // Target nav and menu links
    extend(IndexPage.prototype, 'oncreate', openExternalLinksInNewTab);
    extend(DiscussionPage.prototype, 'oncreate', openExternalLinksInNewTab);

    // Target post links
    extend(PostStream.prototype, 'oncreate', function () {
        openExternalLinksInNewTab();
    });

    // Target all other extarnal links in the page
    openExternalLinksInNewTab();

    // Listen to post creation event
    extend(Post.prototype, 'oncreate', function () {
        openExternalLinksInNewTab();
    });

    // Listen to post update event
    extend(Post.prototype, 'onupdate', function () {
        openExternalLinksInNewTab();
    });
});


