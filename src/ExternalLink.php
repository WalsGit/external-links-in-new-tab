<?php

namespace Walsgit\ExternalLinksInNewTab;

use Psr\Http\Message\UriInterface;

class ExternalLink
{
    public static function isExternal(?UriInterface $uri, UriInterface $siteUrl): bool
    {
        // If no URL or we have a relative link (no host): internal
        if ($uri === null || $uri->getHost() === '') {
            return false;
        }

        return !self::isSameHost($uri, $siteUrl) || !self::isInsideBasePath($uri, $siteUrl);
    }

    private static function isSameHost(UriInterface $uri, UriInterface $siteUrl): bool
    {
        return strtolower($uri->getHost()) === strtolower($siteUrl->getHost());
    }

    private static function isInsideBasePath(UriInterface $uri, UriInterface $siteUrl): bool
    {
        $basePath = rtrim($siteUrl->getPath(), '/');
        $path = $uri->getPath();

        // An empty base path means the forum is installed at the root
        return $basePath === '' || $path === $basePath || str_starts_with($path, $basePath.'/');
    }
}
