import app from 'flarum/forum/app';

app.initializers.add('walsgit/external-links', () => {
    const openExternalLinksInNewTab = () => {
            document.querySelectorAll('a[href^="http"]').forEach((element: Element) => {
                const href = element.getAttribute('href');
                if (href) {
                    const url = new URL(href);
                    if (url.host !== window.location.host) {
                        if(!element.hasAttribute('target') || element.getAttribute('target') !== '_blank') element.setAttribute('target', '_blank');
                        if(!element.hasAttribute('rel')) {
                            element.setAttribute('rel', 'noopener noreferrer');
                        } else {
                            let rel = element.getAttribute('rel') || '';
                            if(!rel.includes('noopener')) rel += " noopener";
                            if(!rel.includes('noreferrer')) rel += " noreferrer";
                            element.setAttribute('rel', rel);
                        }
                    }
                }
            });
    }

    const observer = new MutationObserver(() => {
        openExternalLinksInNewTab();
    });

    // Attach observer to monitor dynamic changes in the document
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial processing for existing links
    openExternalLinksInNewTab();

    // Clean up observer when the page is unloaded
    window.addEventListener('beforeunload', () => observer.disconnect());
});


