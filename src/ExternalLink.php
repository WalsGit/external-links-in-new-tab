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

        if (strtolower($uri->getHost()) !== strtolower($siteUrl->getHost())) {
            return true;
        }

        // Same host: internal only if the path is inside the forum base path
        $basePath = rtrim($siteUrl->getPath(), '/');

        if ($basePath === '') {
            return false;
        }

        $path = $uri->getPath();

        return $path !== $basePath && strpos($path, $basePath.'/') !== 0;
    }
}
