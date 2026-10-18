import app from 'flarum/forum/app';

app.initializers.add('walsgit/external-links', () => {
  document.addEventListener('click', (event: MouseEvent) => {
    // Ignoring modified clicks (ctrl/cmd/shift/alt) and non-primary buttons
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');

    // Ignoring links with an explicit target and editor links
    if (!link || link.target || link.closest('.ProseMirror, .Composer')) return;

    let url: URL;

    try {
      url = new URL(link.href);
    } catch (e) {
      return;
    }

    // Only http(s): ignoring mailto:, tel:, etc.
    if (!['http:', 'https:'].includes(url.protocol)) return;

    const forumUrl = new URL(app.forum.attribute('baseUrl'));

    let basePath = forumUrl.pathname;

    while (basePath.endsWith('/')) {
      basePath = basePath.slice(0, -1);
    }

    const isInternal =
      url.hostname.toLowerCase() === forumUrl.hostname.toLowerCase() &&
      (basePath === '' || url.pathname === basePath || url.pathname.startsWith(basePath + '/'));

    if (isInternal) return;

    event.preventDefault();
    window.open(url.href, '_blank', 'noopener,noreferrer');
  });
});
