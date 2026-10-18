<?php

namespace Walsgit\ExternalLinksInNewTab\Tests\unit;

use Laminas\Diactoros\Uri;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Walsgit\ExternalLinksInNewTab\ExternalLink;

class ExternalLinkTest extends TestCase
{
    public static function linkProvider(): array
    {
        return [
            // Forum in a subfolder
            'null uri'                 => ['https://example.com/monflarum', null, false],
            'relative link'            => ['https://example.com/monflarum', '/monflarum/d/1', false],
            'absolute internal link'   => ['https://example.com/monflarum', 'https://example.com/monflarum/d/1', false],
            'exact base path'          => ['https://example.com/monflarum', 'https://example.com/monflarum', false],
            'host case-insensitive'    => ['https://example.com/monflarum', 'https://EXAMPLE.com/monflarum/x', false],
            'other app, same host'     => ['https://example.com/monflarum', 'https://example.com/blog', true],
            'similar base path prefix' => ['https://example.com/monflarum', 'https://example.com/monflarum-autre', true],
            'other host'               => ['https://example.com/monflarum', 'https://other.com/x', true],

            // Forum at the root
            'root: any same-host path' => ['https://example.com', 'https://example.com/anything', false],
            'root: other host'         => ['https://example.com', 'https://other.com', true],
        ];
    }

    #[Test]
    #[DataProvider('linkProvider')]
    public function it_detects_external_links(string $siteUrl, ?string $link, bool $expected): void
    {
        $uri = $link === null ? null : new Uri($link);

        $this->assertSame($expected, ExternalLink::isExternal($uri, new Uri($siteUrl)));
    }
}
