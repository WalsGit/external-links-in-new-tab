<?php

/*
 * This file is part of walsgit/external-links-in-new-tab.
 *
 * Copyright (c) 2024 Wa!id.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Walsgit\ExternalLinksInNewTab;

use Flarum\Extend;
use Psr\Http\Message\UriInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Link())
        ->setTarget(fn (?UriInterface $uri, UriInterface $siteUrl) => ExternalLink::isExternal($uri, $siteUrl) ? '_blank' : null)
        ->setRel(fn (?UriInterface $uri, UriInterface $siteUrl) => ExternalLink::isExternal($uri, $siteUrl) ? 'noopener noreferrer' : null),
];
