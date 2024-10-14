import app from 'flarum/forum/app';

import { extend } from 'flarum/common/extend';
import PostStream from 'flarum/forum/components/PostStream';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Post from 'flarum/forum/components/Post';

app.initializers.add('walsgit/external-links', () => {
    // Fonction pour ouvrir les liens externes dans un nouvel onglet
    const openExternalLinksInNewTab = () => {
        document.querySelectorAll('a[href^="http"]').forEach((element: Element) => {
            if (element instanceof HTMLAnchorElement) {
                const link = element;
                // Vérifier si le lien est externe
                if (!link.href.includes(window.location.hostname)) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            }
        });
    };

    // Exclure la section admin
    if (!window.location.pathname.startsWith('/admin')) {
        // Cibler les liens de navigation et de menu
        extend(IndexPage.prototype, 'oncreate', openExternalLinksInNewTab);
        extend(DiscussionPage.prototype, 'oncreate', openExternalLinksInNewTab);

        // Cibler les liens dans les posts
        extend(PostStream.prototype, 'oncreate', function () {
            openExternalLinksInNewTab();
        });

        // Cibler tout autre lien présent après le rendu de la page
        openExternalLinksInNewTab();

        // Écouter l'événement de création de post
        extend(Post.prototype, 'oncreate', function () {
            openExternalLinksInNewTab(); // Appeler la fonction après la création du post
        });

        // Écouter l'événement de mise à jour de post
        extend(Post.prototype, 'onupdate', function () {
            openExternalLinksInNewTab(); // Appeler la fonction après la mise à jour du post
        });
    }
});


