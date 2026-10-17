<?php

namespace Walsgit\ExternalLinksInNewTab;

use Psr\Http\Message\UriInterface;

class ExternalLink
{
    public static function isExternal(?UriInterface $uri, UriInterface $siteUrl): bool
    {
        if ($uri === null || $uri->getHost() === '') {
            return false;
        }

        return strtolower($uri->getHost()) !== strtolower($siteUrl->getHost());
    }
}
